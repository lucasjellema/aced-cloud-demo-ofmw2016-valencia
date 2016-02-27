/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'promise', 'ojs/ojeditablevalue', 'ojs/ojmenu', 'ojs/ojdatacollection-common'], 
      
       function(oj, $, compCore)
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
 * @ojcomponent oj.ojTable
 * @augments oj.baseComponent
 * 
 * @classdesc
 * The ojTable component enhances a HTML table element into one that supports all
 * the features in JET Table. </p>
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
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 *
 * <p>Developers should always either specify the <code class="prettyprint">summary</code> attribute or <code class="prettyprint">caption</code> child tag for the table element to conform to accessibility guidelines.</p>
 *
 * <h3 id="styling-section">
 *   Styling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#styling-section"></a>
 * </h3>
 * 
 * <table class="generic-table styling-table">
 *   <thead>
 *     <tr>
 *       <th>Class(es)</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>oj-table-panel-bottom</td>
 *       <td><p>Used to style a panel that can attach to the bottom of the table 
 *      and match the table colors. An app developer can put a paging control
 *      in a div with this class, for example.
 *
 *           <p>The class is applied as follows:
 * 
 *           <ul>
 *             <li>The class must be applied to the element which is placed immediately below the ojTable element.</li>
 *           </ul>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 *
 *
 * @desc Creates a JET Table.
 *
 * @param {Object=} options a map of option-value pairs to set on the component
 *
 * @example  <caption>Initialize the table via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]}"&gt;
 *      
 * @example  <caption>Initialize the table with column templates via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]},
 *      {headerTemplate: 'oracle_link_hdr', template: 'oracle_link'}]}"&gt;
 * &lt;script type="text/html" id="oracle_link_hdr"&gt;
 *    &lt;th style="padding-left: 5px; padding-right: 5px;"&gt;
 *       Oracle Link
 *    &lt;/th&gt;
 * &lt;/script&gt;
 * &lt;script type="text/html" id="oracle_link"&gt;
 *     &lt;td&gt;
 *         &lt;a href="http://www.oracle.com"&gt;Oracle&lt;/a&gt;
 *     &lt;/td&gt;
 * &lt;/script&gt;
 *
 * @example  <caption>Initialize the table with rowTemplate via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}],
 *      rowTemplate: 'row_tmpl'}"&gt;
 * &lt;script type="text/html" id="row_tmpl"&gt;
 *   &lt;tr&gt;
 *       &lt;td data-bind="text: DepartmentId"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: DepartmentName"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: LocationId"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: ManagerId"&gt;
 *       &lt;/td&gt;
 *   &lt;/tr&gt;
 * &lt;/script&gt;
 */
(function() {
  oj.__registerWidget("oj.ojTable", $['oj']['baseComponent'],
    {
      version: '1.0.0',
      defaultElement: '<table>',
      widgetEventPrefix: 'oj',
      options:
        {
          /** 
           * Accessibility options. 
           * <p>
           * The following options are supported:
           * <ul>
           *   <li>rowHeader: columnId</li>
           * </ul>
           * The td cells in the column specified by the rowHeader
           * attribute will be assigned an id and then referenced by the
           * headers attribute in the rest of the cells in the row.
           * This is required by screenReaders. By default the first column
           * will be taken as the rowHeader.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string>|null}
           * @property {string} rowHeader the column id to be used as the row header by screen readers
           * @default <code class="prettyprint">null</code>
           */
          accessibility: null,
          /** 
           * The current row the user has navigated to. Can be an index and/or key value.
           * When both are specified, the index is used as a hint.
           * Returns the current row or null if there is none.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object}
           * @default <code class="prettyprint">null</code>
           * 
           * @example <caption>Get the current row:</caption>
           * $( ".selector" ).ojTable("option", "currentRow");
           * 
           * @example <caption>Set the current row on the table during initialization:</caption>
           * $(".selector").ojTable({"currentRow", {rowKey: '123'}});
           * 
           * @example <caption>Set the current row on the table during initialization:</caption>
           * $(".selector").ojTable({"currentRow", {rowIndex: 1}});
           *
           * @example <caption>Set the current row on the table after initialization:</caption>
           * $(".selector").ojTable("option", "currentRow", {rowKey: '123'});
           * 
           * @example <caption>Set the current row on the table after initialization:</caption>
           * $(".selector").ojTable("option", "currentRow", {rowIndex: 1});
           */
          currentRow: null,
          /** 
           * The data to bind to the component. 
           * <p>
           * Must be of type oj.TableDataSource {@link oj.TableDataSource}
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {oj.TableDataSource|null}
           * @default <code class="prettyprint">null</code>
           */
          data: null,
          /**
           * The text to display when there are no data in the Table. If it is not defined, 
           * then a default empty text is extracted from the resource bundle.
           * 
           * @expose 
           * @memberof! oj.ojTable
           * @instance
           * @type {string|null}
           * @default <code class="prettyprint">"No data to display."</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">emptyText</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, emptyText: 'No data', columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          emptyText: null,
          /** 
           * Whether the horizontal gridlines are to be drawn.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {string}
           * @default <code class="prettyprint">"enabled"</code>
           */
          horizontalGridVisible: 'enabled',
          /** 
           * The row renderer function to use.
           * <p>
           * The renderer function will be passed in an Object which contains the fields:
           * <ul>
           *   <li>component: Instance of the component</li>
           *   <li>row: Key/value pairs of the row</li>
           *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
           *   <li>parentElement: Empty rendered TR element</li>
           * </ul>
           * The function returns  either a String or 
           * a DOM element of the content inside the row. If the developer chooses 
           * to manipulate the row element directly, the function should return 
           * nothing.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Function|null}
           * @default <code class="prettyprint">null</code>
           */
          rowRenderer: null,
          /**
           * Specifies the mechanism used to scroll the data inside the table. Possible values are: auto and loadMoreOnScroll.
           * When loadMoreOnScroll is specified, additional data are fetched when the user scrolls to the bottom of the table.
           * 
           * @expose 
           * @memberof! oj.ojTable
           * @instance
           * @type {string|null}
           * @default <code class="prettyprint">null</code>
           * 
           * @example <caption>Initialize the table with the <code class="prettyprint">scrollPolicy</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, scrollPolicy: 'loadMoreOnScroll', columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          scrollPolicy: "auto",
          /** 
           * scrollPolicy options. 
           * <p>
           * The following options are supported:
           * <ul>
           *   <li>fetchSize: Fetch size for scroll.</li>
           *   <li>maxCount: Maximum rows which will be displayed before fetching more rows will be stopped.</li>
           * </ul>
           * When scrollPolicy is loadMoreOnScroll, the next block of rows is fetched
           * when the user scrolls to the end of the table. The fetchSize option
           * determines how many rows are fetched in each block.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string>|null}
           * @property {string} fetchSize the number of rows to fetch in each block of rows
           * @property {string} maxCount the number of rows which will be displayed before fetching more rows will be stopped
           * @default <code class="prettyprint">{'fetchSize': 25, 'maxCount': 500}</code>
           */
          scrollPolicyOptions: {'fetchSize': 25, 'maxCount': 500},
          /**
           * Specifies the current selections in the table. Can be either an index or key value.
           * When both are specified, the index is used as a hint.
           * Returns an array of range objects, or an empty array if there's no selection.
           * 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable
           * @type {Array.<Object>}
           * @default <code class="prettyprint">[]</code>
           * 
           * @example <caption>Get the current selection:</caption>
           * $( ".selector" ).ojTable("option", "selection");
           * 
           * @example <caption>Set a row selection on the table during initialization:</caption>
           * $(".selector").ojTable({"selection", [{startIndex: {"row":1}, endIndex:{"row":3}}]});
           * 
           * @example <caption>Set a column selection on the table during initialization:</caption>
           * $(".selector").ojTable({"selection", [{startIndex: {"column":2}, endIndex: {"column":4}}]});
           *
           * @example <caption>Set a row selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startIndex: {"row":1}, endIndex:{"row":3}}]);
           * 
           * @example <caption>Set a column selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startIndex: {"column":1}, endIndex: {"column":3}}]);
           * 
           * @example <caption>Set a row selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startKey: {"row":10}, endKey:{"row":30}}]);
           * 
           * @example <caption>Set a column selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startKey: {"column": column1}, endKey: {"column": column2}}]);
           */
          selection: [],  
          /** 
           * The row and column selection modes. Both can be either single or multiple.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string>|null}
           * @property {string} row single or multiple selection for rows
           * @property {string} column single or multiple selection for columns
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">selectionMode</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, selectionMode: {row: 'multiple', column: 'multiple'}, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          selectionMode: null,
          /** 
           * Whether the vertical gridlines are to be drawn.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {string}
           * @default <code class="prettyprint">"enabled"</code>
           */
          verticalGridVisible: 'enabled',
          /** 
           * An array of column definitions.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Array.<Object>|null}
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">columns</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          columns: [{
              /** 
               * The renderer function that renders the content of the cell. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>data: The cell data</li>
               *   <li>columnIndex: The column index</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>row: Key/value pairs of the row</li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the cell data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable
               * @alias columns[].renderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              renderer: null,
              /** 
               * The CSS class to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable
               * @alias columns[].className
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              className: null,
              /** 
               * The data field this column refers to. 
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].field
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              field: null,
              /** 
               * The CSS class to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].footerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerClassName: null,
              /** 
               * The renderer function that renders the content of the footer. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>columnIndex: The column index</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the footer. If the developer chooses 
               * to manipulate the footer element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the footer data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].footerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              footerRenderer: null,       
              /** 
               * The CSS styling to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].footerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerStyle: null,
              /** 
               * The CSS class to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].headerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerClassName: null,
              /** 
               * The renderer function that renders the content of the header. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>columnIndex: The column index</li>
               *   <li>component: Instance of the component</li>
               *   <li>parentElement: Empty rendered TH element</li>
               *   <li>columnHeaderDefaultRenderer(options, delegateRenderer): If the column 
               *   is not sortable then this function will be included in the context. 
               *   The options parameter specifies the options (future use) for the renderer while the
               *   delegateRenderer parameter specifies the function which the developer would
               *   like to be called during rendering of the column header.</li>
               *   <li>columnHeaderSortableIconRenderer(options, delegateRenderer): If the column 
               *   is sortable then this function will be included in the context. 
               *   The options parameter specifies the options (future use) for the renderer while the
               *   delegateRenderer parameter specifies the function which the developer would
               *   like to be called during rendering of the sortable column header. Calling the
               *   columnHeaderSortableIconRenderer function enables rendering custom header content
               *   while also preserving the sort icons.</li>
               * </ul>
               * The function returns either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the header data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].headerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              headerRenderer: null, 
              /** 
               * The CSS styling to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].headerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerStyle: null,
              /** 
               * Text to display in the header of the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].headerText
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerText: null,
              /** 
               * The identifier for the column
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].id
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              id: null,
              /** 
               * Whether or not the column is sortable. 
               * <p>
               * A sortable column has a clickable header that (when clicked) 
               * sorts the table by that column's property. Note that 
               * in order for a column to be sortable, this attribute 
               * must be set to "enabled" and the underlying model must 
               * support sorting by this column's property. If this attribute
               * is set to "auto" then the column will be sortable if the
               * underlying model supports sorting. A value of "none" will
               * disable sorting on the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].sortable
               * @type {string|null}
               * @default <code class="prettyprint">"auto"</code>
               */
              sortable: 'auto',
              /** 
               * Indicates the row attribute used for sorting when sort is invoked on this
               * column. Useful for concatenated columns, where the sort is done by only a subset 
               * of the concatenated items.  
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].sortProperty
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              sortProperty: null,
              /** 
               * The CSS styling to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns[].style
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              style: null
              /**
               * The knockout template used to render the content of the column header.
               *
               * This attribute is only exposed via the <code class="prettyprint">ojComponent</code> binding, and is not a 
               * component option. The following
               *   variables are also passed into the template
               *     <ul>
               *       <li>$columnIndex: The column index</li>
               *       <li>$data: The header text</li>
               *       <li>$headerContext: The header context</li>
               *     </ul>
               *   </li>
               *
               * @ojbindingonly
               * @name columns[].headerTemplate
               * @memberof! oj.ojTable
               * @instance
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               * 
               * @example <caption>Specify the column header <code class="prettyprint">template</code> when initializing Table:</caption>
               * // set the template
               * &lt;ul id="table" data-bind="ojComponent: {component: 'ojTable', data: dataSource, columns:
               *      [{headerText: 'Department Id', field: 'DepartmentId'},
               *      {headerText: 'Department Name', field: 'DepartmentName'},
               *      {headerText: 'Location Id', field: 'LocationId'},
               *      {headerText: 'Manager Id', field: 'ManagerId'},
               *      {headerTemplate: 'oracle_link_hdr'}]}"&gt;&lt;/ul&gt;
               */
              /**
               * The knockout template used to render the content of the column footer.
               *
               * This attribute is only exposed via the <code class="prettyprint">ojComponent</code> binding, and is not a 
               * component option. The following
               *   variables are also passed into the template
               *     <ul>
               *       <li>$columnIndex: The column index</li>
               *       <li>$footerContext: The header context</li>
               *     </ul>
               *   </li>
               *
               * @ojbindingonly
               * @name columns[].footerTemplate
               * @memberof! oj.ojTable
               * @instance
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               * 
               * @example <caption>Specify the column footer <code class="prettyprint">template</code> when initializing Table:</caption>
               * // set the template
               * &lt;ul id="table" data-bind="ojComponent: {component: 'ojTable', data: dataSource, columnsDefault:
               *      [{headerText: 'Department Id', field: 'DepartmentId'},
               *      {headerText: 'Department Name', field: 'DepartmentName'},
               *      {headerText: 'Location Id', field: 'LocationId'},
               *      {headerText: 'Manager Id', field: 'ManagerId'},
               *      {footerTemplate: 'oracle_link_ftr'}]}"&gt;&lt;/ul&gt;
               */
            }],
          /** 
           * Default values to apply to all columns objects.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string|null>}
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">columnsDefault</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columnsDefault: {headerStyle: 'text-align: left; white-space:nowrap;'}, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          columnsDefault: {
              /** 
               * The renderer function that renders the content of the cell. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>data: The cell data</li>
               *   <li>columnIndex: The column index</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>row: Key/value pairs of the row</li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the cell data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable
               * @alias columnsDefault.renderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              renderer: null,
              /** 
               * The default CSS class for column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.className
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              className: null,
              /** 
               * The default data field for column. 
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.field
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              field: null,
              /** 
               * The CSS class to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.footerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerClassName: null,
              /** 
               * The renderer function that renders the content of the footer. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>columnIndex: The column index</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the footer. If the developer chooses 
               * to manipulate the footer element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the footer data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.footerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              footerRenderer: null, 
              /** 
               * The CSS styling to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.footerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerStyle: null,
              /** 
               * The default CSS class to apply to the column header.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerClassName: null,
              /** 
               * The renderer function that renders the content of the header. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>columnIndex: The column index</li>
               *   <li>component: Instance of the component</li>
               *   <li>parentElement: Empty rendered TH element</li>
               *   <li>columnHeaderDefaultRenderer(options, delegateRenderer): If the column 
               *   is not sortable then this function will be included in the context. 
               *   The options parameter specifies the options (future use) for the renderer while the
               *   delegateRenderer parameter specifies the function which the developer would
               *   like to be called during rendering of the column header.</li>
               *   <li>columnHeaderSortableIconRenderer(options, delegateRenderer): If the column 
               *   is sortable then this function will be included in the context. 
               *   The options parameter specifies the options (future use) for the renderer while the
               *   delegateRenderer parameter specifies the function which the developer would
               *   like to be called during rendering of the sortable column header. Calling the
               *   columnHeaderSortableIconRenderer function enables rendering custom header content
               *   while also preserving the sort icons.</li>
               * </ul>
               * The function returns either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the header data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              headerRenderer: null, 
              /** 
               * The default CSS styling to apply to the column header.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerStyle: null,
              /** 
               * Default text to display in the header of the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerText
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerText: null,
              /** 
               * Whether or not the column is sortable. 
               * <p>
               * A sortable column has a clickable header that (when clicked) 
               * sorts the table by that column's property. Note that 
               * in order for a column to be sortable, this attribute 
               * must be set to "enabled" and the underlying model must 
               * support sorting by this column's property. If this attribute
               * is set to "auto" then the column will be sortable if the
               * underlying model supports sorting. A value of "none" will
               * disable sorting on the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.sortable
               * @type {string|null}
               * @default <code class="prettyprint">"auto"</code>
               */
              sortable: 'auto',
              /** 
               * Indicates the row attribute used for sorting when sort is invoked on this
               * column. Useful for concatenated columns, where the sort is done by only a subset 
               * of the concatenated items.  
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.sortProperty
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              sortProperty: null,
              /** 
               * Default CSS styling to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.style
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              style: null
               /**
                * The default knockout template used to render the content of the column header.
                *
                * This attribute is only exposed via the <code class="prettyprint">ojComponent</code> binding, and is not a 
                * component option. The following
                *   variables are also passed into the template
                *     <ul>
                *       <li>$columnIndex: The column index</li>
                *       <li>$data: The header text</li>
                *       <li>$headerContext: The header context</li>
                *     </ul>
                *   </li>
                *
                * @ojbindingonly
                * @name columnsDefault.headerTemplate
                * @memberof! oj.ojTable
                * @instance
                * @type {string|null}
                * @default <code class="prettyprint">null</code>
                * 
                * @example <caption>Specify the column header <code class="prettyprint">template</code> when initializing Table:</caption>
                * // set the template
                * &lt;ul id="table" data-bind="ojComponent: {component: 'ojTable', data: dataSource, columnsDefault:
                *      [{headerText: 'Department Id', field: 'DepartmentId'},
                *      {headerText: 'Department Name', field: 'DepartmentName'},
                *      {headerText: 'Location Id', field: 'LocationId'},
                *      {headerText: 'Manager Id', field: 'ManagerId'},
                *      {headerTemplate: 'oracle_link_hdr'}]}"&gt;&lt;/ul&gt;
                */
               /**
                * The default knockout template used to render the content of the column footer.
                *
                * This attribute is only exposed via the <code class="prettyprint">ojComponent</code> binding, and is not a 
                * component option. The following
               *   variables are also passed into the template
               *     <ul>
               *       <li>$columnIndex: The column index</li>
               *       <li>$footerContext: The header context</li>
               *     </ul>
               *   </li>
                *
                * @ojbindingonly
                * @name columnsDefault.footerTemplate
                * @memberof! oj.ojTable
                * @instance
                * @type {string|null}
                * @default <code class="prettyprint">null</code>
                * 
                * @example <caption>Specify the column footer <code class="prettyprint">template</code> when initializing Table:</caption>
                * // set the template
                * &lt;ul id="table" data-bind="ojComponent: {component: 'ojTable', data: dataSource, columnsDefault:
                *      [{headerText: 'Department Id', field: 'DepartmentId'},
                *      {headerText: 'Department Name', field: 'DepartmentName'},
                *      {headerText: 'Location Id', field: 'LocationId'},
                *      {headerText: 'Manager Id', field: 'ManagerId'},
                *      {footerTemplate: 'oracle_link_ftr'}]}"&gt;&lt;/ul&gt;
                */
            },
            /**
              * Triggered before the current row is changed via the <code class="prettyprint">currentRow</code> option or via the UI.
              *
              * @expose 
              * @event 
              * @memberof! oj.ojTable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Parameters
              * @property {Object} ui.currentRow the new current row
              * @property {number} ui.currentRow.rowIndex current row index
              * @property {string} ui.currentRow.rowKey current row key
              * @property {number} ui.previousCurrentRow the previous current row
              * @property {number} ui.previousCurrentRow.rowIndex previous current row index
              * @property {string} ui.previousCurrentRow.rowKey previous current row key
              * 
              * @example <caption>Initialize the table with the <code class="prettyprint">beforeCurrentRow</code> callback specified:</caption>
              * $( ".selector" ).ojTable({
              *     "beforeCurrentRow": function( event, ui ) {}
              * });
              *
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecurrentrow</code> event:</caption>
              * $( ".selector" ).on( "ojbeforecurrentrow", function( event, ui ) {} );
              */
            beforeCurrentRow: null,
          /**
            * Triggered when the table has finished rendering
            *
            * @expose 
            * @event 
            * @memberof! oj.ojTable
            * @instance
            * 
            * @example <caption>Initialize the table with the <code class="prettyprint">ready</code> callback specified:</caption>
            * $( ".selector" ).ojTable({
            *     "ready": function() {}
            * });
            *
            * @example <caption>Bind an event listener to the <code class="prettyprint">ojready</code> event:</caption>
            * $( ".selector" ).on( "ojready", function() {} );
            */
          ready: null,
            /**
              * Triggered when a sort is performed on the table
              *
              * @expose 
              * @event 
              * @memberof! oj.ojTable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Parameters
              * @property {Element} ui.header the key of the header which was sorted on				 
              * @property {string} ui.direction the direction of the sort ascending/descending
              * 
              * @example <caption>Initialize the table with the <code class="prettyprint">sort</code> callback specified:</caption>
              * $( ".selector" ).ojTable({
              *     "sort": function( event, ui ) {}
              * });
              *
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojsort</code> event:</caption>
              * $( ".selector" ).on( "ojsort", function( event, ui ) {} );
              */
            sort: null,
            /**
              * Fired whenever a supported component option changes, whether due to user interaction or programmatic
              * intervention.  If the new value is the same as the previous value, no event will be fired.
              *
              * Currently there are 2 supported options, <code class="prettyprint">"selection"</code> and 
              * <code class="prettyprint">"currentRow"</code>.  Additional options may be supported in the future, 
              * so listeners should verify which option is changing before taking any action.
              *
              * @expose
              * @event
              * @memberof! oj.ojTable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Parameters
              * @property {string} ui.option the name of the option that is changing
              * @property {Object} ui.previousValue the previous value of the option
              * @property {Object} ui.value the current value of the option
              * @property {Object} ui.optionMetadata information about the option that is changing
              * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
              *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
              *
              */
            optionChange: null,
            /** 
              * Translations for the component
              * @expose 
              * @public 
              * @instance
              * @memberof! oj.ojTable
              * @type {Object.<string, string>}
              * @property {string} labelSelectRow Select row label
              * @property {string} labelSelectColumn Select column label
              * @property {string} labelSort Context menu label for sort
              * @property {string} labelSortAsc Context menu label for sort ascending
              * @property {string} labelSortDsc Context menu label for sort descending
              * @property {string} msgFetchingData Fetching data message
              * @property {string} msgNoData No data to display message
              */
            translations: {}
             /**
              * The knockout template used to render the content of the row.
              *
              * This attribute is only exposed via the <code class="prettyprint">ojComponent</code> binding, and is not a 
              * component option. The following
              *   variables are also passed into the template
              *     <ul>
              *       <li>$rowContext: The row context</li>
              *     </ul>
              *   </li>
              *
              * @ojbindingonly
              * @name rowTemplate
              * @memberof! oj.ojTable
              * @instance
              * @type {string|null}
              * @default <code class="prettyprint">null</code>
              * 
              * @example <caption>Specify the row <code class="prettyprint">template</code> when initializing Table:</caption>
              * // set the template
              * &lt;ul id="table" data-bind="ojComponent: {component: 'ojTable', data: dataSource, rowTemplate: 'row_tmpl'}"&gt;&lt;/ul&gt;
              */
        },
      /**
       * @const
       * @private
       */
      _BUNDLE_KEY:
        {
          _MSG_FETCHING_DATA:                             'msgFetchingData',
          _MSG_NO_DATA:                                   'msgNoData',
          _LABEL_SELECT_COLUMN:                           'labelSelectColumn',
          _LABEL_SELECT_ROW:                              'labelSelectRow'
        },
      /**
       * @const
       * @private
       */
      _LOGGER_MSG:
        {
          _ERR_PRECURRENTROW_ERROR_SUMMARY:                'Did not change current row due to error.',
          _ERR_PRECURRENTROW_ERROR_DETAIL:                 'Error detail: {error}.',
          _ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY:       'Did not change current row due to unavailable row index.',
          _ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL:        'Unavailable row index: {rowIdx}.',
          _ERR_REFRESHROW_INVALID_INDEX_SUMMARY:          'Invalid row index value.',
          _ERR_REFRESHROW_INVALID_INDEX_DETAIL:           'Row index: {rowIdx}.',
          _ERR_DATA_INVALID_TYPE_SUMMARY:                 'Invalid data type.',
          _ERR_DATA_INVALID_TYPE_DETAIL:                  'Please specify the appropriate data type.',
          _ERR_ELEMENT_INVALID_TYPE_SUMMARY:               'Invalid element type.',
          _ERR_ELEMENT_INVALID_TYPE_DETAIL:                'Only a <table> element can be specified for ojTable.',
          _ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY:             'Exceeded maximum rows for table scrolling.',
          _ERR_DOM_SCROLLER_MAX_COUNT_DETAIL:              'Please reload with smaller data set.'
        },
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ID:                                  '_headerColumn',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_TEXT_ID:                             '_headerColumnText',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ASC_ID:                              '_headerColumnAsc',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_DSC_ID:                              '_headerColumnDsc',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ID_PREFIX:                           '_hdrCol',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_AUTO:                                       'auto',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_ENABLED:                                    'enabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_DISABLED:                                   'disabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_NONE:                                       'none',
      /**
       * @private
       * @const
       */
      _OPTION_SELECTION_MODES:
        {
          _SINGLE:                                        'single',
          _MULTIPLE:                                      'multiple'
        },
      /**
       * @private
       * @const
       */
        _OPTION_SCROLL_POLICY:
        {
          _AUTO:                                          'auto',
          _LOADMORE_ON_SCROLL:                            'loadMoreOnScroll'
        },
      /**
       * @private
       * @const
       */
      _COLUMN_SORT_ORDER:
        {
          _ASCENDING:                                     'ascending',
          _DESCENDING:                                    'descending'
        },
      /**
       * @private
       * @const
       */
      _KEYBOARD_CODES:
        {
          _KEYBOARD_CODE_SPACEBAR:                        32,
          _KEYBOARD_CODE_ENTER:                           13,
          _KEYBOARD_CODE_UP:                              38,
          _KEYBOARD_CODE_DOWN:                            40,
          _KEYBOARD_CODE_LEFT:                            37,
          _KEYBOARD_CODE_RIGHT:                           39,
          _KEYBOARD_CODE_HOME:                            36,
          _KEYBOARD_CODE_END:                             35,
          _KEYBOARD_CODE_TAB:                             9,
          _KEYBOARD_CODE_ESC:                             27,
          _KEYBOARD_MODIFIER_SHIFT:                       'shiftKey'
        },
      /**** start Public APIs ****/
      /**
       * Return the subcomponent node represented by the documented locator attribute values.
       * <p>
       * To lookup a cell the locator object should have the following:
       * <ul>
       * <li><b>subId</b>: 'oj-table-cell'</li>
       * <li><b>rowIndex</b>: the zero based absolute row index</li>
       * <li><b>columnIndex</b>: the zero based absolute column index</li>
       * </ul>          
       *          
       * To lookup a header the locator object should have the following:
       * <ul>
       * <li><b>subId</b>: 'oj-table-header'</li>
       * <li><b>index</b>: the zero based absolute column index.</li>
       * </ul>
       *          
       * To lookup a sort ascending icon the locator object should have the following:
       * <ul>
       * <li><b>subId</b>: 'oj-table-sort-ascending-icon'</li>
       * <li><b>index</b>: the zero based absolute column index</li>
       * </ul>
       * 
       * To lookup a sort descending icon the locator object should have the following:
       * <ul>
       * <li><b>subId</b>: 'oj-table-sort-descending-icon'</li>
       * <li><b>index</b>: the zero based absolute column index</li>
       * </ul>
       * 
       * To lookup a footer the locator object should have the following:
       * <ul>
       * <li><b>subId</b>: 'oj-table-footer'</li>
       * <li><b>index</b>: the zero based absolute column index.</li>
       * </ul>
       * 
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @override
       * @param {Object} locator An Object containing at minimum a subId property 
       *        whose value is a string, documented by the component, that allows 
       *         the component to look up the subcomponent associated with that 
       *        string.  It contains:<p>
       *        component: optional - in the future there may be more than one 
       *        component contained within a page element<p>
       *        subId: the string, documented by the component, that the component 
       *        expects in getNodeBySubId to locate a particular subcomponent
       * @returns {Array.<(Element|null)>|Element|null} the subcomponent located by the subId string passed
       *          in locator, if found.<p>
       */  
      'getNodeBySubId': function(locator)
      {
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        var subId = locator['subId'];

        if (subId === 'oj-table-cell')
        {
          var rowIdx = locator['rowIndex'];
          var columnIdx = locator['columnIndex'];
          return this._getTableDomUtils().getTableBodyCell(rowIdx, columnIdx)[0];
        }
        else if (subId === 'oj-table-header' ||
                 subId === 'oj-table-sort-ascending' ||
                 subId === 'oj-table-sort-descending')
        {
          var columnIdx = locator['index'];
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
          if (tableHeaderColumn != null)
          {
            if (subId === 'oj-table-header')
            {
              return tableHeaderColumn[0];
            }
            else if (subId === 'oj-table-sort-ascending')
            {
              var tableHeaderColumnSortAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
              if (tableHeaderColumnSortAsc.length > 0)
              {
                return tableHeaderColumnSortAsc[0];
              }
            }
            else
            {
              var tableHeaderColumnSortDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
              if (tableHeaderColumnSortDsc.length > 0)
              {
                return tableHeaderColumnSortDsc[0];
              }
            }
          }
        }
        else if (subId === 'oj-table-footer')
        {
          var columnIdx = locator['index'];
          var tableFooterCell = this._getTableDomUtils().getTableFooterCell(columnIdx);
          
          if (tableFooterCell != null)
          {
            return tableFooterCell[0];
          }
        }

        // Non-null locators have to be handled by the component subclasses
        return null;
      },              
      /**
       * Refresh the table.
       * @export
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
       * $( ".selector" ).ojTable( "refresh" );
       */
      'refresh': function()
      {
        this._super();
        this._refresh();
      },
      /**
       * Refresh a row in the table.
       * @param {number} rowIdx  Index of the row to refresh.
       * @return {boolean} true if refreshed, false if not
       * @throws {Error}
       * @export
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @example <caption>Invoke the <code class="prettyprint">refreshRow</code> method:</caption>
       * $( ".selector" ).ojTable( "refreshRow", 1 );
       */
      'refreshRow': function(rowIdx)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return false;
        }
        
        var tableBodyRows = this._getTableDomUtils().getTableBodyRows();

        if (isNaN(rowIdx) || rowIdx < 0 || (tableBodyRows != null && rowIdx >= tableBodyRows.length))
        {
          // validate rowIdx value
          var errSummary = this._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_SUMMARY;
          var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_DETAIL, {'rowIdx': rowIdx.toString()});
          throw new RangeError(errSummary + '\n' + errDetail);
        }

        // get row at rowIdx
        var rowKey = this._getRowKeyForRowIdx(rowIdx);
        var row = data.get(rowKey);
        if (row == null)
        {
          return false;
        }

        var self = this;

        return this._queueTask(function()
        {
          // refresh table row DOM with row
          return row.then(function(row)
          {
            self._refreshTableBodyRow(rowIdx, row);
          }).then(function()
          {
            return true;
          });
        });
      },
      /**
       * Returns a jQuery object containing the root dom element of the table
       * 
       * <p>This method does not accept any arguments.
       * 
       * @expose
       * @override
       * @memberof oj.ojTable
       * @instance
       * @return {jQuery} the root DOM element of table
       */
      'widget' : function ()
      {
        var tableContainer = this._getTableDomUtils().getTableContainer();
        
        if (tableContainer != null)
        {
          return tableContainer;
        }
        return this.element;
      },
      /**** end Public APIs ****/

      /**** start internal widget functions ****/

      /**
       * @override
       * @protected
       * @instance
       * @memberof! oj.ojTable
       */
      _ComponentCreate : function ()
      {
        this._super();
        this._draw();
        this._registerCustomEvents();
        this._on(this._events);
        this._registerDomEventListeners();
        // register event listeners for table on the datasource so that the table
        // component is notified when rows are added, deleted, etc from the datasource.
        this._registerDataSourceEventListeners();
        // cache the options
        this._cachedOptions = $.extend(true, {}, this.options);
      },
      /**
       * Initialize the table after creation
       * @protected
       * @override
       * @memberof! oj.ojTable
       */        
      _AfterCreate: function () 
      {  
        this._super();
        // create the context menu
        this._getTableDomUtils().createContextMenu(this._handleContextMenuSelect.bind(this));
        this._initFetch();
      },
      /**
       * @param {Object} contextMenu The JET Menu to open as a context menu
       * @param {Event} event What triggered the menu launch
       * @param {string} eventType "mouse", "touch", "keyboard"
       * @private	
       */
      _NotifyContextMenuGesture: function(contextMenu, event, eventType)
      {
        var openOptions = {};
        this._contextMenuEvent = event['originalEvent'];
        
        // first check if we are invoking on an editable or clickable element If so bail
        if (this._isNodeEditableOrClickable($(this._contextMenuEvent['target'])))
        {
          return;
        }
        
        var headerColumn = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-column-header-cell');
        headerColumn = headerColumn == null ? this._getTableDomUtils().getTableHeaderColumn(this._activeColumnIndex) : headerColumn;
        var tableBodyCell = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-data-cell');
        
        if (tableBodyCell != null)
        {
          var columnIdx = this._getTableDomUtils().getElementColumnIdx(tableBodyCell);
          headerColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
        }
        
        if (this._contextMenuEvent['type'] === 'keydown')
        {
          var table = this._tableDomUtils.getTable();
          
          if (this._contextMenuEvent['target'] == table[0])
          {
            if (headerColumn != null && headerColumn[0] != null)
            {
              openOptions['position'] = {"my": "start top", "at": "start bottom", "of": headerColumn[0]};
            }
            else
            {
              var focusedRowIdx = this._getFocusedRowIdx();
              if (focusedRowIdx >= 0)
              {
                var tableBodyRow = this._getTableDomUtils().getTableBodyRow(focusedRowIdx);
                openOptions['position'] = {"my": "start top", "at": "start bottom", "of": tableBodyRow[0]};
              }
              else
              {
                openOptions['position'] = {"my": "start top", "at": "start bottom", "of": this._contextMenuEvent['target']};
              }
            }
          }
          else
          {
            openOptions['position'] = {"my": "start top", "at": "start bottom", "of": this._contextMenuEvent['target']};
          }
        }

        if (headerColumn.attr('data-oj-sortable') == this._OPTION_ENABLED)
        {
          $(contextMenu['element']).find('[data-oj-command=oj-table-sortAsc]').removeClass('oj-disabled');
          $(contextMenu['element']).find('[data-oj-command=oj-table-sortDsc]').removeClass('oj-disabled');
        }
        else
        {
          $(contextMenu['element']).find('[data-oj-command=oj-table-sortAsc]').addClass('oj-disabled');
          $(contextMenu['element']).find('[data-oj-command=oj-table-sortDsc]').addClass('oj-disabled');
        }
        this._OpenContextMenu(event, eventType, openOptions);
      },
      /**
       * @override
       * @private
       */
      _destroy: function()
      {
        var data = this._getData();
        // unregister the listeners on the datasource
        this._unregisterDataSourceEventListeners();
        
        this._getTableDomUtils().getTableBody().removeAttr(oj.Components._OJ_CONTAINER_ATTR);

        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_CLASS);
        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_BODY_CLASS);
        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CLASS);
        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_NO_DATA_MESSAGE_CLASS);

        // Bug #19639907 - DomUtils.unwrap() will avoid unwrapping if the node is being destroyed by Knockout
        oj.DomUtils.unwrap(this.element, this._getTableDomUtils().getTableContainer());
        
        this.element.removeClass(oj.TableDomUtils.CSS_CLASSES._TABLE_CLASS);
      },
      /**
       * @override
       * @private
       */
      _draw: function()
      {
        var options = this.options;

        this._setFinalTask(function()
        {
          this._getTableDomUtils().refreshTableDimensions();
          this._setSelection(this.options['selection']);
          // if loadMoreOnScroll then check if we have underflow and do a
          // fetch if we do
          if (this._isLoadMoreOnScroll() && !this._dataFetching)
          {
            this._domScroller.checkViewport().then(this._domScrollerMaxCountFunc, null);
          }
        });
        
        if (!this.element.is('table'))
        {
          var errSummary = this._LOGGER_MSG._ERR_ELEMENT_INVALID_TYPE_SUMMARY;
          var errDetail = this._LOGGER_MSG._ERR_ELEMENT_INVALID_TYPE_DETAIL;
          throw new RangeError(errSummary + '\n' + errDetail);
        }
        
        // add css class to element
        this.element.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_ELEMENT_CLASS);

        // create the initial table structure
        this._getTableDomUtils().createInitialTable(this._isTableHeaderless(), 
                                                    this._isTableFooterless());
        // style the initial table structure
        this._getTableDomUtils().styleInitialTable();
        
        // populate the table header DOM with header content
        this._refreshTableHeader();

        // populate the table footer DOM with footer content
        this._refreshTableFooter();
        
        this._refreshTableBody();
        
        // resize the table dimensions to accomodate the completed tableheader
        this._getTableDomUtils().refreshTableDimensions();
        
        // initialize a DomScroller if loadMoreOnScroll
        if (this._isLoadMoreOnScroll())
        {
          this._registerDomScroller();
        }

        if (this.options.disabled)
        {
          this.disable();
        }
        
        this._registerResizeListener(this._getTableDomUtils().getTableContainer());
      },
      /**
       * @override
       * @private
       */
      _events:
        {
          /**
           * Reset the keyboard state on blur and set the inactive
           * selected rows
           */
          'blur': function(event)
          {
            // make sure the blur isn't for a focus to an element within
            // the table
            var table = this._getTableDomUtils().getTable();
            if (table.has(event.relatedTarget).length > 0)
            {
              return;
            }
            // In FF we check explicitOriginalTarget
            else if (event.originalEvent != null && event.originalEvent.explicitOriginalTarget == table[0])
            {
              return;
            }

            this._clearKeyboardKeys();
            this._clearFocusedHeaderColumn();
            this._clearFocusedRow(false);
            this._setTableNavigationMode(false);
          },
          /**
           * Check the keyboard state on focus
           */
          'focus': function(event)
          {
            this._checkRowOrHeaderColumnFocus(event);
          },
          /**
           * Check the keyboard state on focus
           */
          'focus .oj-table-column-header-acc-asc-link': function(event)
          {
            this._checkRowOrHeaderColumnFocus(event);
          },
          /**
           * Capture acc selected column event
           */
          'click .oj-table-checkbox-acc-select-column': function(event)
          {
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            var selected = $(event.currentTarget).is(':checked');
            // if selected then focus on the column
            if (selected)
            {
              this._setHeaderColumnFocus(columnIdx, true, true, null);
            }
            this._setHeaderColumnSelection(columnIdx, selected, event.currentTarget, event, true);
            event.stopPropagation();
          },
          /**
           * Capture acc selected row event
           */
          'click .oj-table-checkbox-acc-select-row': function(event)
          {
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            var selected = $(event.currentTarget).is(':checked');
            
            var focused = false;
            
            // if selected then focus on the row
            if (selected)
            {
              focused = this._setRowFocus(rowIdx, true, true, null, event, true);
            }
            
            if (focused)
            {
              this._setRowSelection(rowIdx, selected, event.currentTarget, event, true);
            }
            event.stopPropagation();
          },
          /**
           * Capture keyboard down events
           */
          'keydown': function(event)
          {
            // ignore key event on the footer or target is editable
            if (this._isNodeEditableOrClickable($(event.target)) || 
                this._getTableDomUtils().getTableFooter() != null && 
                this._getTableDomUtils().getTableFooter().has(event.target).length > 0)
            {
              return;
            }
            this._addKeyboardKey(event.keyCode);
            // process single or two key events
            if (this._getKeyboardKeys().length == 1 ||
                (this._getKeyboardKeys().length == 2 && event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT]))
            {
              if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_SPACEBAR) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_HOME) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_END))
              {
                // need to do this so that these keys don't act on the page. e.g. pressing Down would cause the
                // page to go down as well as the row to change
                event.preventDefault();
                event.stopPropagation();
              }

              if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
              {
                this._handleKeydownUpDown(event);
              }
              else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_LEFT) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_RIGHT))
              {
                this._handleKeydownLeftRight(event);
              }
              else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_TAB))
              {
                this._handleKeydownTab(event);
              }
            }
          },
          /**
           * Capture keyboard up events
           */
          'keyup': function(event)
          {
            // ignore key event on the footer or target is editable
            if (this._isNodeEditableOrClickable($(event.target)) || 
                this._getTableDomUtils().getTableFooter() != null && 
                this._getTableDomUtils().getTableFooter().has(event.target).length > 0)
            {
              return;
            }
            // process single or 2 key events
            if (this._getKeyboardKeys().length == 1)
            {
              var keyboardCode1 = this._getKeyboardKeys()[0];

              if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_SPACEBAR)
              {
                this._handleKeyupSpacebar(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_ENTER)
              {
                this._handleKeyupEnter(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_HOME)
              {
                this._handleKeyupHome(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_END)
              {
                this._handleKeyupEnd(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_ESC)
              {
                this._handleKeyupEsc(event);
              }
              this._removeKeyboardKey(keyboardCode1);
            }
            // remove the keycode from our internal list of pressed keys.
            this._removeKeyboardKey(event.keyCode);
          },
          /**
           * show the row hover when the mouse enters a table row
           */
          'mouseenter .oj-table-body-row': function(event)
          {
            $(event.currentTarget).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
          },
          /**
           * hide the row hover when the mouse leaves a table row
           */
          'mouseleave .oj-table-body-row': function(event)
          {
            $(event.currentTarget).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
          },
          /**
           * show the ascending/descending links when the mouse 
           * enters a column header
           */
          'mouseenter .oj-table-column-header-cell': function(event)
          {
            $(event.currentTarget).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
            // get the column index of the header element
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            // show the asc/dsc links for the header
            this._showTableHeaderColumnSortLink(columnIdx);
          },
          /**
           * hide the ascending/descending links when the mouse 
           * leaves a column header
           */
          'mouseleave .oj-table-column-header-cell': function(event)
          {
            $(event.currentTarget).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
            // get the column index of the header element
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            // hide the asc/dsc links for the header
            this._hideTableHeaderColumnSortLink(columnIdx, true);
            this._hideTableHeaderColumnSortLink(columnIdx, false);
          },
          /**
           * show the cell hover when the mouse enters a table cell
           */
          'mouseenter .oj-table-data-cell': function(event)
          {
            $(event.currentTarget).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
          },
          /**
           * hide the cell hover when the mouse leaves a table cell
           */
          'mouseleave .oj-table-data-cell': function(event)
          {
            $(event.currentTarget).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
          },
          /**
           * invoke a sort on the column data when the mouse clicks the ascending link
           */
          'click .oj-table-column-header-asc-link': function(event)
          {
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

            if (!tableHeaderColumn)
            {
              return;
            }

            // check if the column is currently sorted
            var sorted = tableHeaderColumn.data('sorted');
            if (sorted == this._COLUMN_SORT_ORDER._ASCENDING)
            {
              this._handleSortTableHeaderColumn(columnIdx, false, event);
            }
            else
            {
              this._handleSortTableHeaderColumn(columnIdx, true, event);
            }
            event.preventDefault();
            event.stopPropagation();
          },
          'click .oj-table-column-header-acc-asc-link': function(event)
          {
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            this._handleSortTableHeaderColumn(columnIdx, true, event);
            event.preventDefault();
            event.stopPropagation();
          },
          /**
           * invoke a sort on the column data when the mouse clicks the descending link
           */
          'click .oj-table-column-header-dsc-link': function(event)
          {
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

            if (!tableHeaderColumn)
            {
              return;
            }

            // check if the column is currently sorted
            var sorted = tableHeaderColumn.data('sorted');
            if (sorted == this._COLUMN_SORT_ORDER._DESCENDING)
            {
              this._handleSortTableHeaderColumn(columnIdx, true, event);
            }
            else
            {
              this._handleSortTableHeaderColumn(columnIdx, false, event);
            }
            event.preventDefault();
            event.stopPropagation();
          },
          'click .oj-table-column-header-acc-dsc-link': function(event)
          {
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            this._handleSortTableHeaderColumn(columnIdx, false, event);
            event.preventDefault();
            event.stopPropagation();
          },
          /**
           * set the row focus or selection when the mouse clicks on a cell.
           * Ctrl + click results in selection and focus. Plain click results in focus.
           * Plain click on a selected row removes the selection.
           */
          'click .oj-table-data-cell': function(event)
          {
            // get the row index of the cell element
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            var focused = false;
            // set the row focus
            focused = this._setRowFocus(rowIdx, true, true, event.currentTarget, event);
            
            if (!focused)
            {
              return;
            }
            
            // check if we are selecting
            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              var lastSelectedRowIdx = this._getLastRowSelection();
              if (lastSelectedRowIdx != null)
              {
                // remove the selection highlight
                window.getSelection().removeAllRanges()

                // shift selection is always from the last selected row
                if (rowIdx < lastSelectedRowIdx)
                {
                  var i;
                  for (i = rowIdx; i <= lastSelectedRowIdx; i++)
                  {
                    this._setRowSelection(i, true, event.currentTarget, event, true);
                  }
                }
                else
                {
                  var i;
                  for (i = lastSelectedRowIdx; i <= rowIdx; i++)
                    this._setRowSelection(i, true, event.currentTarget, event, true);
                }
              }
            }
            else if (oj.DomUtils.isMetaKeyPressed(event))
            {
              this._setRowSelection(rowIdx, !this._getRowSelection(rowIdx), event.currentTarget, event, true);
            }
            else if (this._getKeyboardKeys().length == 0)
            {
              this._clearSelectedRows();
              this._setRowSelection(rowIdx, !this._getRowSelection(rowIdx), event.currentTarget, event, true);
            }
          },
          /**
           * set current row when the mouse right clicks on a cell.
           */
          'contextmenu .oj-table-data-cell': function(event)
          {
            // get the row index of the cell element
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            var rowKey = this._getRowKeyForRowIdx(rowIdx);
            this._setCurrentRow({'rowKey': rowKey}, event);
          },
          /**
           * set the column header selection and focus. Plain click results in
           * focus and selection. If Ctrl is not pressed then we have single column selection.
           */
          'click .oj-table-column-header-cell': function(event)
          {
            // get the column index
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            // set the column focus
            this._setHeaderColumnFocus(columnIdx, true, true, event);
            // check if we are selecting
            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              var lastSelectedColumnIdx = this._getLastHeaderColumnSelection();
              if (lastSelectedColumnIdx != null)
              {
                // shift selection is always from the last selected column
                if (columnIdx < lastSelectedColumnIdx)
                {
                  var i;
                  for (i = columnIdx; i <= lastSelectedColumnIdx; i++)
                  {
                    this._setHeaderColumnSelection(i, true, event.currentTarget, event, true);
                  }
                }
                else
                {
                  var i;
                  for (i = lastSelectedColumnIdx; i <= columnIdx; i++)
                    this._setHeaderColumnSelection(i, true, event.currentTarget, event, true);
                }
              }
            }
            else if (oj.DomUtils.isMetaKeyPressed(event))
            {
              this._setHeaderColumnSelection(columnIdx, !this._getHeaderColumnSelection(columnIdx), event.currentTarget, event, true);
            }
            else if (this._getKeyboardKeys().length == 0)
            {
              this._clearSelectedHeaderColumns();
              this._setHeaderColumnSelection(columnIdx, !this._getHeaderColumnSelection(columnIdx), event.currentTarget, event, true);
            }
          }
        },
      /**
       * @private
       */
      _refresh: function()
      {
        var startIndex = null;
        var initFetch = false;
        
        if (this._data != this.options['data'])
        {
          this._clearCachedDataMetadata();
          
          if (this._data == null)
          {
            // need to do an initial fetch
            initFetch = true
          }
          else
          {
            startIndex = 0;
          }
          
          if (this._isLoadMoreOnScroll())
          {
            if (this._domScroller != null)
            {
              this._domScroller.destroy();
            }
            this._registerDomScroller();
          }
        }
        if (this._contextMenuId != this._getTableDomUtils().getContextMenuId())
        {
          this._getTableDomUtils().createContextMenu(this._handleContextMenuSelect.bind(this));
        }
        this._getTableDomUtils().clearCachedDom();
        this._getTableDomUtils().refreshContextMenu();
        this._refreshTableStatusMessage();
        
        if (initFetch)
        {
          return this._initFetch();
        }
        else
        {
          var self = this;
          this._queueTask(function()
          {
            return self._invokeDataFetchRows(startIndex);
          });
        }
      },
      /**
       * @override
       * @private
       */
      _setOption: function(key, value)
      {
        this._superApply(arguments);
        var shouldRefresh = this._isTableRefreshNeeded(key, value);
        
        
        
        if (shouldRefresh)
        {
          this._refresh();
        }
        else
        {
          if (key == 'selection')
          {
            this._clearSelectedRows();
            this._clearSelectedHeaderColumns();
            this._setSelection(value);
          }
          else if (key == 'currentRow')
          {
            this._setCurrentRow(value, null, true);
          }
        }
      },
      /**** end internal widget functions ****/

      /**** start internal functions ****/

      /**
       * Add a keyCode to internally track pressed keys. keyCodes should be added on 
       * mouse down and then later removed on mouse up.
       * @param {number} keyCode  KeyCode of the keyboard key.
       * @private
       */
      _addKeyboardKey: function(keyCode)
      {
        var foundCode = false;
        for (var prop in this._KEYBOARD_CODES)
        {
          if (this._KEYBOARD_CODES.hasOwnProperty(prop))
          {
            if (this._KEYBOARD_CODES[prop] == keyCode)
            {
              foundCode = true;
            }
          }
        }

        if (!foundCode)
        {
          // only add keys we are interested in
          return;
        }

        var keyboardKeys = this._getKeyboardKeys();
        var found = false;
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            found = true;
            break;
          }
        }
        if (!found)
        {
          keyboardKeys.push(keyCode);
        }
      },
      /**
       * Add a new tr and refresh the DOM at the row index and refresh the table 
       * dimensions to accomodate the new row
       * @param {number} rowIdx  row index relative to the start of the table
       * @param {Object} row row
       * @param {Object} docFrag  document fragment
       * @param {number} docFragStartIdx  document fragment row start index
       * 
       * @private
       */
      _addSingleTableBodyRow: function(rowIdx, row, docFrag, docFragStartIdx)
      {
        var tableBodyRow = this._getTableDomUtils().createTableBodyRow(rowIdx, row['key']);
        this._getTableDomUtils().styleTableBodyRow(tableBodyRow, true);
        // insert the <tr> element in to the table body DOM
        this._getTableDomUtils().insertTableBodyRow(rowIdx, tableBodyRow, row, docFrag);
        this._refreshTableBodyRow(rowIdx, row, tableBodyRow, docFrag, docFragStartIdx, true);
      },
      /**
       * Check and set the row or header column focus
       * @private
       */
      _checkRowOrHeaderColumnFocus: function(event)
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedRowIdx == null && focusedHeaderColumnIdx == null)
        {
          // if no row or column is focused then set the focus on the first column or row
          if (this._isTableHeaderless())
          {
            this._setRowFocus(0, true, true, null, event);
          }
          else
          {
            this._setHeaderColumnFocus(0, true, false, event);  
          }
        }  
      },
      /**
       * Clear any cached metadata
       * @private
       */
      _clearCachedMetadata: function()
      {
        this._columnDefArray = null;
        this._setTableNavigationMode(false);
      },
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
       * Clear waiting state and hide the Fetching Data... status message.
       * @private
       */
      _clearDataWaitingState: function()
      {
        this._hideInlineMessage();
        this._hideStatusMessage();
        this._dataFetching = false;
      },
      /**
       * Clear any keyboard keys
       * @private
       */
      _clearKeyboardKeys: function()
      {
        this._keyboardKeys = [];
      },
      /**
       * Clear the focused column header
       * @private
       */
      _clearFocusedHeaderColumn: function()
      {
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
        if (focusedHeaderColumnIdx != null)
        {
          this._setHeaderColumnFocus(focusedHeaderColumnIdx, false, false, null);
        }
        this._activeColumnIndex = -1;
      },
      /**
       * Clear the focused row
       * @param {boolean} updateCurrentRow  whether to update the currentRow
       * @private
       */
      _clearFocusedRow: function(updateCurrentRow)
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        
        if (focusedRowIdx != null)
        {
          this._setRowFocus(-1, true, updateCurrentRow, null, null);
        }
      },
      /**
       * Clear the selected column headers
       * @private
       */
      _clearSelectedHeaderColumns: function()
      {
        var selectedHeaderColumnIdxs = this._getSelectedHeaderColumnIdxs();

        var i;
        for (i = 0; i < selectedHeaderColumnIdxs.length; i++)
        {
          this._setHeaderColumnSelection(selectedHeaderColumnIdxs[i], false, null, null, false);
        }
      },
      /**
       * Clear the selected rows
       * @private
       */
      _clearSelectedRows: function()
      {
        var selectedRowIdxs = this._getSelectedRowIdxs();

        var i;
        for (i = 0; i < selectedRowIdxs.length; i++)
          this._setRowSelection(selectedRowIdxs[i], false, null, null, false);
      },
      /**
       * Clear the sorted column header indicator. Note this does not affect the order
       * of the data. This is just to clear the UI indication.
       * @param {number} columnIdx  column index
       * @private
       */
      _clearSortedHeaderColumn: function(columnIdx)
      {
        var sortedTableHeaderColumnIdx = this._getSortedTableHeaderColumnIdx();
        if (sortedTableHeaderColumnIdx != null)
        {
          var sortedTableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(sortedTableHeaderColumnIdx);
          var sorted = sortedTableHeaderColumn.data('sorted');
          sortedTableHeaderColumn.data('sorted', null);
          
          if (sortedTableHeaderColumnIdx != columnIdx)
          {
            if (sorted == this._COLUMN_SORT_ORDER._ASCENDING)
            {
              this._hideTableHeaderColumnSortLink(sortedTableHeaderColumnIdx, true);
            }
            else
            {
              this._hideTableHeaderColumnSortLink(sortedTableHeaderColumnIdx, false);
            }
          }
          else
          {
            var sortedTableHeaderColumnAscLink = sortedTableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            sortedTableHeaderColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            var sortedTableHeaderColumnDscLink = sortedTableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
            sortedTableHeaderColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Add all the rows contained in the input array.
       * @param {Array} rows Array of row contexts to add
       * @private
       */
      _executeTableBodyRowsAdd: function(rows)
      {
        var self = this;
        this._queueTask(function()
        {
          // see if we should batch add
          // only batch if we are adding a block of contiguous rows
          var batchAdd = false;
          if (rows.length > 1)
          {
            var i;
            var isContiguous = true;
            for (i = 0; i < rows.length; i++)
            {
              if (i != 0)
              {
                if (rows[i - 1].rowIdx != rows[i].rowIdx - 1)
                {
                  isContiguous = false;
                  break;
                }
              }
            }
            
            if (isContiguous)
            {
              var tableBody = self._getTableDomUtils().getTableBody();
              var tableBodyDocFrag = $(document.createDocumentFragment());
              for (i = 0; i < rows.length; i++)
              {
                self._addSingleTableBodyRow(rows[i].rowIdx, rows[i].row, tableBodyDocFrag, rows[0].rowIdx);
              }
              if (rows[0].rowIdx == 0)
              {
                tableBody.prepend(tableBodyDocFrag); //@HTMLUpdateOK
              }
              else
              {
                var tableBodyRowBefore = self._getTableDomUtils().getTableBodyRow(rows[0].rowIdx);
                if (tableBodyRowBefore != null)
                {
                  tableBody[0].insertBefore(tableBodyDocFrag[0], tableBodyRowBefore[0]);//@HTMLUpdateOK
                }
                else
                {
                  tableBody[0].insertBefore(tableBodyDocFrag[0], null);//@HTMLUpdateOK
                }
              }
              self._getTableDomUtils().clearCachedDomRowData();
              oj.Components.subtreeAttached(tableBody[0]);
              batchAdd = true;
            }
          }

          if (!batchAdd)
          {
            for (i = 0; i < rows.length; i++)
            {
              self._addSingleTableBodyRow(rows[i].rowIdx, rows[i].row);
            }        
          }
          self._getTableDomUtils().clearCachedDomRowData();
          // row values may have changed so refresh the footer
          self._refreshTableFooter();
        });
      },
      /**
       * Change all the rows contained in the input array.
       * @param {Array} rows Array of row contexts to change
       * @param {number} startIndex index of first row in the table in the data source
       * @private
       */
      _executeTableBodyRowsChange: function(rows, startIndex)
      {
        var self = this;
        this._queueTask(function()
        {
          var i;
          for (i = 0; i < rows.length; i++)
          {
            self._refreshTableBodyRow(rows[i].rowIdx, rows[i].row);
          }
          // row values may have changed so refresh the footer
          self._refreshTableFooter();
        });
      },
      /**
       * Change all the rows contained in the input array.
       * @param {Array} rows Array of row contexts to change
       * @private
       */
      _executeTableBodyRowsRemove: function(rows)
      {
        var self = this;
        var currentRow = this._getCurrentRow();
        var currentRowKey = currentRow != null ? currentRow['rowKey'] : null;
        this._queueTask(function()
        {
          var i, rowKey; 
          for (i = 0; i < rows.length; i++)
          {
            self._getTableDomUtils().removeTableBodyRow(rows[i].rowIdx);
          
            // reset the currentRow if needed
            if (currentRowKey !=null)
            {
             rowKey = rows[i].row['id'];
            
              if (oj.Object.compareValues(rowKey, currentRowKey))
              {
                self._setCurrentRow(null, null);
                currentRowKey = null;
              }
            }
          }
          // row values may have changed so refresh the footer
          self._refreshTableFooter();
          var tableBodyRows = self._getTableDomUtils().getTableBodyRows();
          if (tableBodyRows == null || tableBodyRows.length == 0)
          {
            this._showNoDataMessage();
          }
        });
      },
      /**
       * Return the column definitions
       * @return {Array} array of column metadata Objects.
       * @private
       */
      _getColumnDefs: function()
      {
        // cache the columns array in this._columnDefArray
        if (!this._columnDefArray)
        {
          this._columnDefArray = this._getColumnMetadata();
        }
        return this._columnDefArray;
      },
      /**
       * Return the column metadata in sorted oder.
       * @return {Array} array of column metadata Objects.
       * @private
       */
      _getColumnMetadata: function()
      {
        // get the columns metadata
        var columns = this.options['columns'];
        var columnsDefault = this.options['columnsDefault'];

        if ((columns.length == 0 ||
            (columns.length == 1 &&
            columns[0].id == null &&
            columns[0].headerText == null &&
            columns[0].field == null)) &&
            (columnsDefault.headerText == null &&
            columnsDefault.field == null))
        {
          return [];
        }
        
        var defaultedColumns = [];
        var i;
        for (i = 0; i < columns.length; i++)
        {
          defaultedColumns[i] = $.extend({}, columnsDefault, columns[i]);
        }

        var columnsSortedArray = [];
        // add the rest of the columns in the array
        for (i = 0; i < defaultedColumns.length; i++)
        {
          columnsSortedArray.push(defaultedColumns[i]);
        }
        
        var data = this._getData();
        var sortSupportedData = false;
        if (data != null && data.getCapability('sort') == 'full')
        {
          sortSupportedData = true;
        }

        for (i = 0; i < defaultedColumns.length; i++)
        {
          // generate ids for columns which don't have it specified
          if (columnsSortedArray[i]['id'] == null)
          {
            columnsSortedArray[i]['id'] = this._COLUMN_HEADER_ID_PREFIX + i;
          }
          // for the columns which have sortable = 'auto' check the datasource
          // and enable or disable
          if ((columnsSortedArray[i]['sortable'] == null || 
               columnsSortedArray[i]['sortable'] == this._OPTION_AUTO)
               && sortSupportedData)
          {
            columnsSortedArray[i]['sortable'] = this._OPTION_ENABLED;
          }
        }
        return columnsSortedArray;
      },
      /**
       * Return the column index for column key.
       * @param {Object} columnKey column key
       * @return {number|null} column index
       * @private
       */
      _getColumnIdxForColumnKey: function(columnKey)
      {
        var columns = this._getColumnDefs();
      
        if (columns != null)
        {
          var i, column;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            if (oj.Object.compareValues(column.id, columnKey))
            {
              return i;
            }
          }
        }
        return null;
      },
      /**
       * Return all the column indexes for elements with a particular style class
       * @param {string} styleClass  style class
       * @return {Array} Array of column indexes
       * @private
       */
      _getColumnIdxsForElementsWithStyleClass: function(styleClass)
      {
        var elements = this._getTableDomUtils().getTable().find(styleClass);
        var columnIdxs = [];
        if (elements && elements.length > 0)
        {
          var i, j, alreadyAdded, columnIdx;
          for (i = 0; i < elements.length; i++)
          {
            columnIdx = this._getTableDomUtils().getElementColumnIdx($(elements.get(i)));

            alreadyAdded = false;
            for (j = 0; j < columnIdxs.length; j++)
            {
              if (columnIdxs[j] == columnIdx)
              {
                alreadyAdded = true;
              }
            }
            if (!alreadyAdded)
            {
              columnIdxs.push(columnIdx);
            }
          }
        }

        return columnIdxs;
      },
      /**
       * Return the column key for column index.
       * @param {number} columnIdx column index
       * @return {Object} column key
       * @private
       */
      _getColumnKeyForColumnIdx: function(columnIdx)
      {
        var columns = this._getColumnDefs();
      
        if (columns != null && columnIdx < columns.length)
        {
          return columns[columnIdx]['id'];
        }
        return null;
      },
      /**
       * Return the column renderer
       * @param {number} columnIdx  column index
       * @param {String} type  renderer type
       * @return {Object} renderer
       * @private
       */
      _getColumnRenderer: function(columnIdx, type)
      {
        var columns = this._getColumnDefs();
        var column = columns[columnIdx];
        
        if (type == 'cell')
        {
          return column['renderer'];
        }
        else if (type == 'footer')
        {
          return column['footerRenderer'];
        }
        else if (type == 'header')
        {
          return column['headerRenderer'];
        }

        return null;
      },
      /**
       * Get the current row.
       * @return {Object|null} current row object or null if none.
       * @throws {Error}
       * @private
       */
      _getCurrentRow: function()
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return null;
        }
        return this._currentRow;
      },
      /**
       * Return the datasource object defined for this table
       * @return {Object} Datasource object.
       * @throws {Error}
       * @private
       */
      _getData: function()
      {
        if (!this._data && this.options.data != null)
        {
          var data = this.options.data;
          if (data instanceof oj.TableDataSource ||
              data instanceof oj.PagingTableDataSource)
          {
            this._data = data;
          }
          else
          {
            // we only support TableDataSource
            var errSummary = this._LOGGER_MSG._ERR_DATA_INVALID_TYPE_SUMMARY;
            var errDetail = this._LOGGER_MSG._ERR_DATA_INVALID_TYPE_DETAIL;
            throw new Error(errSummary + '\n' + errDetail);
          }
          this._dataMetadata = this.options.data;
          this._registerDataSourceEventListeners();
        }
        return this._data;
      },
      /**
       * Get the focused column header index
       * @return {number|null} the column index
       * @private
       */
      _getFocusedHeaderColumnIdx: function()
      {
        // focused column headers have the focused style class. There should only be one focused header
        return this._getColumnIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS)[0];
      },
      /**
       * Get the focused row index
       * @return {number|null} the row index
       * @private
       */
      _getFocusedRowIdx: function()
      {
        // focused rows have cells with focused style class. There should only be one focused row
        return this._getRowIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS)[0];
      },
      /**
       * Return whether the column header at the index is focused
       * @param {number} columnIdx  column index
       * @return {boolean} whether it's focused
       * @private
       */
      _getHeaderColumnFocus: function(columnIdx)
      {
        return this._getHeaderColumnState(columnIdx).focused;
      },
      /**
       * Return whether the column header at the index is selected
       * @param {number} columnIdx  column index
       * @return {boolean} whether it's selected
       * @private
       */
      _getHeaderColumnSelection: function(columnIdx)
      {
        return this._getHeaderColumnState(columnIdx).selected;
      },
      /**
       * Return the column selection mode
       * @return {string|null} single, multiple, or null
       * @private
       */
      _getColumnSelectionMode: function()
      {
        var columnSelectionMode = this.options.selectionMode == null ? null : this.options.selectionMode['column'];
        return columnSelectionMode;
      },
      /**
       * Return the state of the column header at a partiocular index
       * @param {number} columnIdx  column index
       * @return {Object} Object which contains booleans focused and selected
       * @private
       */
      _getHeaderColumnState: function(columnIdx)
      {
        var headerColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

        return {focused: headerColumn.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS),
          selected: headerColumn.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED)};
      },
      /**
       * Return the currently pressed keyboard keys
       * @return {Array} Array of keyCodes
       * @private
       */
      _getKeyboardKeys: function()
      {
        if (!this._keyboardKeys)
        {
          this._keyboardKeys = [];
        }

        // reverse the array since we want the keybaord keys to be a LIFO stack
        return this._keyboardKeys.reverse();
      },
      /**
       * Return the last column which was selected (chronologically)
       * @return {number|null} last selected column
       * @private
       */
      _getLastHeaderColumnSelection: function()
      {
        if (this._lastSelectedColumnIdxArray != null &&
          this._lastSelectedColumnIdxArray.length > 0)
        {
          return this._lastSelectedColumnIdxArray[0];
        }
        return null;
      },
      /**
       * Return the last row which was selected (chronologically)
       * @return {number|null} last selected row
       * @private
       */
      _getLastRowSelection: function()
      {
        if (this._lastSelectedRowIdxArray != null &&
          this._lastSelectedRowIdxArray.length > 0)
        {
          return this._lastSelectedRowIdxArray[0];
        }
        return null;
      },
      /**
       * Return an array with row and row indices relative to the table row indices
       * @param {Object} resultObject Object containing data array, key array, and index array
       * @param {number} startIndex start index
       * @return {Array} Array of rows and row index
       * @private
       */
      _getRowIdxRowArray: function(resultObject, startIndex)
      {
        var rowIdxRowArray = [];
        if (resultObject != null)
        {
          var i;
          for (i = 0; i < resultObject['indexes'].length; i++)
          {
            rowIdxRowArray.push({row: {'data': resultObject['data'][i], 'key': resultObject['keys'][i], 'index': resultObject['indexes'][i]}, rowIdx: startIndex + i});
          }
        }
        
        return rowIdxRowArray;
      },
      /**
       * Return the row index for row key. Only loop through displayed rows.
       * @param {Object} rowKey row key
       * @return {number|null} row index
       * @private
       */
      _getRowIdxForRowKey: function(rowKey)
      {
        var tableBodyRows = this._getTableDomUtils().getTableBodyRows();

        if (tableBodyRows != null && tableBodyRows.length > 0)
        {
          var i;
          for (i = 0; i < tableBodyRows.length; i++)
          {
            if (oj.Object.compareValues($(tableBodyRows[i]).data('rowKey'), rowKey))
            {
              return i;
            }
          }
        }
        
        return null;
      },
      /**
       * Return the datasource's row index for the row key.
       * @param {Object} rowKey row key
       * @return {number|null} row index
       * @private
       */
      _getDataSourceRowIndexForRowKey: function(rowKey)
      {
        var tableBodyRows = this._getTableDomUtils().getTableBodyRows();

        if (tableBodyRows != null && tableBodyRows.length > 0)
        {
          var i;
          for (i = 0; i < tableBodyRows.length; i++)
          {
            if (oj.Object.compareValues($(tableBodyRows[i]).data('rowKey'), rowKey))
            {
              var data = this._getData();
              var startIndex = 0;
              if (data instanceof oj.PagingTableDataSource)
              {
                startIndex = data.getStartItemIndex();
              }
              return i + startIndex;
            }
          }
        }
        
        return null;
      },
      /**
       * Return all the row indexes for elements with a particular style class
       * @param {string} styleClass  style class
       * @return {Array} Array of row indexes
       * @private
       */
      _getRowIdxsForElementsWithStyleClass: function(styleClass)
      {
        var elements = this._getTableDomUtils().getTable().find(styleClass);
        var rowIdxs = [];
        if (elements && elements.length > 0)
        {
          var i, j, rowIdx, alreadyAdded;
          for (i = 0; i < elements.length; i++)
          {
            rowIdx = this._getTableDomUtils().getElementRowIdx($(elements.get(i)));

            alreadyAdded = false;
            for (j = 0; j < rowIdxs.length; j++)
            {
              if (rowIdxs[j] == rowIdx)
              {
                alreadyAdded = true;
              }
            }
            if (!alreadyAdded)
            {
              rowIdxs.push(rowIdx);
            }
          }
        }

        return rowIdxs;
      },
      /**
       * Return the row key for datasource's row index.
       * @param {number} rowIndex row index
       * @return {*} row key
       * @private
       */
      _getRowKeyForDataSourceRowIndex: function(rowIndex)
      {
        var tableBodyRows = this._getTableDomUtils().getTableBodyRows();

        if (tableBodyRows != null && tableBodyRows.length > 0)
        {
          var data = this._getData();
          var startIndex = 0;
          if (data instanceof oj.PagingTableDataSource)
          {
            startIndex = data.getStartItemIndex();
          }
          var i;
          for (i = 0; i < tableBodyRows.length; i++)
          {
            if (startIndex + i == rowIndex)
            {
              return $(tableBodyRows[i]).data('rowKey');
            }
          }
        }
        
        return null;
      },
      /**
       * Return the row key for row index.
       * @param {number} rowIdx row index
       * @return {Object|null} row key
       * @private
       */
      _getRowKeyForRowIdx: function(rowIdx)
      {
        var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
        
        if (tableBodyRow != null)
        {
          return tableBodyRow.data('rowKey');
        }
        
        return null;
      },
      /**
       * Return the row renderer
       * @return {Object} renderer
       * @private
       */
      _getRowRenderer: function()
      {
        return this.options['rowRenderer'];
      },
      /**
       * Return whether the row is selected
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is selected
       * @private
       */
      _getRowSelection: function(rowIdx)
      {
        return this._getTableDomUtils().getTableBodyRow(rowIdx).hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the row selection mode
       * @return {string|null} single, multiple, or null
       * @private
       */
      _getRowSelectionMode: function()
      {
        var rowSelectionMode = this.options['selectionMode'] == null ? null : this.options['selectionMode']['row'];
        return rowSelectionMode;
      },
      /**
       * Return the selected column header indexes
       * @return {Array} array of column header indexes
       * @private
       */
      _getSelectedHeaderColumnIdxs: function()
      {
        // selected column headers have the selected css class
        return this._getColumnIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the selected row indexes
       * @return {Array} array of row indexes
       * @private
       */
      _getSelectedRowIdxs: function()
      {
        // selected rows have the selected css class
        return this._getRowIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Gets the selection
       * @private	 
       */
      _getSelection: function()
      {
        var selectedRowIdxs = this._getSelectedRowIdxs();
        var selectedColumnIdxs = this._getSelectedHeaderColumnIdxs();
        var selectionIdxs = null;
        var rowSelection = true;
        if (selectedRowIdxs != null && selectedRowIdxs.length > 0)
        {
          selectionIdxs = selectedRowIdxs;
        }
        else if (selectedColumnIdxs != null && selectedColumnIdxs.length > 0)
        {
          selectionIdxs = selectedColumnIdxs;
          rowSelection = false;
        }
        else
        {
          return null;
        }

        var rangeArray = [];

        // first count the number of ranges we have by seeing how many
        // non-continguous selections we have
        var rangeCount = 0;
        var previousIdx = null;
        var rangeObj, selectionIndex, selectionIdx, selectionKey;
        var i;
        for (i = 0; i < selectionIdxs.length; i++)
        {
          selectionIdx = selectionIdxs[i];
          if (i == 0)
          {
            rangeObj = {};
            rangeObj['startIndex'] = {};
            rangeObj['endIndex'] = {};
            rangeObj['startKey'] = {};
            rangeObj['endKey'] = {};
            if (rowSelection)
            {
              selectionKey = this._getRowKeyForRowIdx(selectionIdx);
              selectionIndex = this._getDataSourceRowIndexForRowKey(selectionKey);
              rangeObj['startKey']['row'] = selectionKey;
              rangeObj['endKey']['row'] = selectionKey;
              rangeObj['startIndex']['row'] = selectionIndex;
              rangeObj['endIndex']['row'] = selectionIndex;
            }
            else
            {
              rangeObj['startIndex']['column'] = selectionIdx;
              rangeObj['endIndex']['column'] = selectionIdx;
              selectionKey = this._getColumnKeyForColumnIdx(selectionIdx);
              rangeObj['startKey']['column'] = selectionKey;
              rangeObj['endKey']['column'] = selectionKey;
            }
            rangeArray[0] = rangeObj;
          }
          else
          {
            rangeObj = rangeArray[rangeCount];
            if (rowSelection)
            {
              selectionKey = this._getRowKeyForRowIdx(selectionIdx);
              selectionIndex = this._getDataSourceRowIndexForRowKey(selectionKey);
              rangeObj['endKey']['row'] = selectionKey;
              rangeObj['endIndex']['row'] = selectionIndex;
            }
            else
            {
              rangeObj['endIndex']['column'] = selectionIdx;
              selectionKey = this._getColumnKeyForColumnIdx(selectionIdx);
              rangeObj['endKey']['column'] = selectionKey;
            }
            if (selectionIdx != previousIdx + 1)
            {
              if (rowSelection)
              {
                selectionKey = this._getRowKeyForRowIdx(previousIdx);
                selectionIndex = this._getDataSourceRowIndexForRowKey(selectionKey);
                rangeObj['endKey']['row'] = selectionKey;
                rangeObj['endIndex']['row'] = selectionIndex;
                rangeObj = {};
                rangeObj['startIndex'] = {};
                rangeObj['endIndex'] = {};
                rangeObj['startKey'] = {};
                rangeObj['endKey'] = {};
                selectionKey = this._getRowKeyForRowIdx(selectionIdx);
                selectionIndex = this._getDataSourceRowIndexForRowKey(selectionKey);
                rangeObj['startKey']['row'] = selectionKey;
                rangeObj['endKey']['row'] = selectionKey;
                rangeObj['startIndex']['row'] = selectionIndex;
                rangeObj['endIndex']['row'] = selectionIndex;
              }
              else
              {
                rangeObj['endIndex']['column'] = previousIdx;
                selectionKey = this._getColumnKeyForColumnIdx(previousIdx);
                rangeObj['endKey']['column'] = selectionKey;
                rangeObj = {};
                rangeObj['startIndex'] = {};
                rangeObj['endIndex'] = {};
                rangeObj['startKey'] = {};
                rangeObj['endKey'] = {};
                rangeObj['startIndex']['column'] = selectionIdx;
                rangeObj['endIndex']['column'] = selectionIdx;
                selectionKey = this._getColumnKeyForColumnIdx(selectionIdx);
                rangeObj['startKey']['column'] = selectionKey;
                rangeObj['endKey']['column'] = selectionKey;
              }
              rangeCount++;
              rangeArray[rangeCount] = rangeObj;
            }
          }
          previousIdx = selectionIdx;
        }
        return rangeArray;
      },
      /**
       * Return the currnetly sorted column index
       * @return {number|null} column index
       * @private
       */
      _getSortedTableHeaderColumnIdx: function()
      {
        var tableHeaderColumns = this._getTableDomUtils().getTableHeaderColumns();

        var i, sorted;
        for (i = 0; i < tableHeaderColumns.length; i++)
        {
          // sorted column will have the sorted data attr
          sorted = $(tableHeaderColumns[i]).data('sorted');

          if (sorted != null)
          {
            return i;
          }
        }
        return null;
      },
      /**
       * Get tabbable elements within the element
       * @param {jQuery} element  DOM element
       * @return {jQuery|null} jQuery array of DOM elements
       * @private
       */
      _getTabbableElements: function(element)
      {
        var tabbableElements = element.find(':tabbable');

        if (tabbableElements != null && tabbableElements.length > 0)
        {
          return tabbableElements;
        }
        return null;
      },
      /**
       * Return table DOM utils instance
       * @return {Object} instance of table DOM utils
       * @private
       */
      _getTableDomUtils: function()
      {
        if (!this._tableDomUtils)
        {
          this._tableDomUtils = new oj.TableDomUtils(this);
        }
        return this._tableDomUtils;
      },
      /**
       * Handle an ojselect event on a menu item, if sort call the handler on the core.
       * If resize prompt the user with a dialog box
       * @private	 
       */
      _handleContextMenuSelect: function(event, ui)
      {
        var menuItemCommand = ui.item.attr('data-oj-command');
        var headerColumn = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-column-header-cell');
        var tableBodyCell = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-data-cell');
        var columnIdx = null;
        
        if (headerColumn != null)
        {
          columnIdx = this._getTableDomUtils().getElementColumnIdx(headerColumn);
        }
        if (tableBodyCell != null)
        {
          columnIdx = this._getTableDomUtils().getElementColumnIdx(tableBodyCell);
        }
        if (menuItemCommand == 'oj-table-sortAsc')
        {
          this._handleSortTableHeaderColumn(columnIdx, true, event);
        }
        else if (menuItemCommand == 'oj-table-sortDsc')
        {
          this._handleSortTableHeaderColumn(columnIdx, false, event);
        }
      },
      /**
       * Callback handler for data error.
       * @param {Object} error 
       * @private
       */
      _handleDataError: function(error)
      {
        this._clearDataWaitingState();
        oj.Logger.error(error);
      },
      /**
       * Callback handler for fetch start in the datasource.
       * @param {Object} event 
       * @private
       */
      _handleDataFetchStart: function(event)
      {
        this._setDataWaitingState();
      },
      /**
       * Callback handler for fetch completed in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions if refresh == true. Hide the Fetching Data... 
       * status message.
       * @param {Object} event
       * @private
       */
      _handleDataFetchEnd: function(event)
      {
        try 
        {
          var self = this;
          this._queueTask(function()
          {
            var offset = 0;
            var data = self._getData();
            
            if (data instanceof oj.PagingTableDataSource)
            {
              // when paging, this contains the page start index. In loadMore
              // mode this is always zero.
              offset = data.getStartItemIndex();
            }
            
            var indexArray = [];
            var i;
            
            for (i = 0; i < event['data'].length; i++)
            {
              // event['startIndex'] contains the offset at which the data should be inserted in the table. In paging mode
              // this is always zero. In loadMore mode it contains an offset.
              // Therefore we have to add both. e.g. in paging mode offset is non-zero while in loadMore event['startIndex'] is non-zero.
              // The indexArray will contain the indexes as contained in the datasource.
              indexArray[i] = i + offset + event['startIndex'];
            }
            
            self._refreshAll({'data': event['data'], 'keys' : event['keys'], 'indexes': indexArray}, event['startIndex']);
          });
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Callback handler for refresh in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions.
       * @param {Object} event 
       * @private
       */
      _handleDataRefresh: function (event)
      {
        try
        {
          var fetchPromise = this._invokeDataFetchRows();
          var self = this;
          this._queueTask(function ()
          {
            self._setCurrentRow(null, null);
            return fetchPromise;
          });
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Callback handler for reset in the datasource. Do an initial fetch
       * @param {Object} event 
       * @private
       */
      _handleDataReset: function (event)
      {
        try
        {
          this._initFetch();
          var self = this;
          this._queueTask(function()
          {
            self._setCurrentRow(null, null);
          });
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Callback handler for rows added into the datasource. Add a new tr and refresh the DOM
       * at the row index and refresh the table dimensions to accomodate the new
       * row
       * @param {Object} event
       * @private
       */
      _handleDataRowAdd: function(event)
      {
        try 
        {
          var data = this._getData();
          var eventData = event['data'];
          var eventIndexes = event['indexes'];
          var eventKeys = event['keys'];
          if (!(eventData instanceof Array))
          {
            eventData = [eventData];
          }
          var startIndex = 0;
          
          if (data instanceof oj.PagingTableDataSource)
          {
            startIndex = data.getStartItemIndex();
          }
          
          var rowArray = [];
          var i;
          for (i = 0; i < eventData.length; i++)
          {
            var rowIdx = eventIndexes[i] - startIndex;
            if (rowIdx !== undefined) 
            {
              var row = {'data': eventData[i], 'key': eventKeys[i], 'index': eventIndexes[i]};

              rowArray.push({row: row, rowIdx: rowIdx});
            }
          }
          if (rowArray.length > 0)
          {
            this._executeTableBodyRowsAdd(rowArray);
          }
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Callback handler for row change in the datasource. Refresh the changed
       * row.
       * @param {Object} event
       * @private
       */
      _handleDataRowChange: function(event)
      {
        try
        {
          var data = this._getData();
          var eventData = event['data'];
          var eventIndexes = event['indexes'];
          var eventKeys = event['keys'];
          if (!(eventData instanceof Array))
          {
            eventData = [eventData];
          }
          var startIndex = 0;
          
          if (data instanceof oj.PagingTableDataSource)
          {
            startIndex = data.getStartItemIndex();
          }
          
          var rowArray = [];
          var i;
          for (i = 0; i < eventData.length; i++)
          {
            var rowIdx = eventIndexes[i] - startIndex;
            if (rowIdx !== undefined) 
            {
              var row = {'data': eventData[i], 'key': eventKeys[i], 'index': eventIndexes[i]};

              rowArray.push({row: row, rowIdx: rowIdx});
            }
          }
          if (rowArray.length > 0)
          {
            this._executeTableBodyRowsChange(rowArray);
          }
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Callback handler for row removed in the datasource. Remove the row DOM from the
       * table body by searching for the matching rowKey. New rows will have null rowKey.
       * After removing the row, refresh all the remaining row indexes since
       * they will have shifted. Lastly, refresh the table dimensions
       * @param {Object} event
       * @private
       */
      _handleDataRowRemove: function(event)
      {
        try
        {
          var data = this._getData();
          var eventData = event['data'];
          var eventIndexes = event['indexes'];
          var eventKeys = event['keys'];
          if (!(eventData instanceof Array))
          {
            eventData = [eventData];
          }
          var startIndex = 0;
          
          if (data instanceof oj.PagingTableDataSource)
          {
            startIndex = data.getStartItemIndex();
          }
          
          var rowArray = [];
          var i;
          for (i = eventData.length - 1; i >= 0; i--)
          {
            var rowIdx = eventIndexes[i] - startIndex;
            if (rowIdx !== undefined) 
            {
              var row = {'data': eventData[i], 'key': eventKeys[i], 'index': eventIndexes[i]};

              rowArray.push({row: row, rowIdx: rowIdx});
            }
          }
          if (rowArray.length > 0)
          {
            this._executeTableBodyRowsRemove(rowArray);
          }
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Callback handler for sort completed in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions. Set row focus to the
       * current row.
       * @param {Object} event 
       * @private
       */
      _handleDataSort: function(event)
      {
        try
        {
          var columnIdx;
          
          if (event != null)
          {
            var i, column, sortField;
            var columns = this._getColumnDefs();

            for (i = 0; i < columns.length; i++)
            {
              column = columns[i];
              sortField = column['sortProperty'] == null ? column['field'] : column['sortProperty'];

              if (event['header'] == sortField)
              {
                columnIdx = i;
                break;
              }
            }
            if (columnIdx != null)
            {
              this._refreshSortTableHeaderColumn(columnIdx, event['direction'] == this._COLUMN_SORT_ORDER._ASCENDING);
            }
          }

          // clear selection if not single selection
          var existingSelection = this['options']['selection'];
          if (existingSelection != null)
          {
            var clearSelection = false;

            if (existingSelection.length > 1)
            {
              clearSelection = true;
            }
            else if (existingSelection[0] != null)
            {
              var startIndex = existingSelection[0]['startIndex'];
              var endIndex = existingSelection[0]['endIndex'];

              if (!oj.Object.compareValues(startIndex, endIndex) && endIndex != null)
              {
                clearSelection = true;
              }
            }
            if (clearSelection)
            {
              this._setSelection(null);
              this.option('selection', null, {'_context': {writeback: true, internalSet: true}});
            }
          }
          // set the current row
          this._setCurrentRow(this.options['currentRow'], null);
          var self = this;
          this._queueTask(function()
          {
            return self._invokeDataFetchRows(null);
          }).then(function()
          {
            if (columnIdx != null)
            {
              setTimeout(function(){self._scrollColumnIntoViewport(columnIdx)}, 0);
            }
          });
        }
        catch (e) 
        {
          oj.Logger.error(e);
        }
        finally 
        {
          this._clearDataWaitingState();
        }
      },
      /**
       * Handler for Left/Right keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownLeftRight: function(event)
      {
        // pressing left/right navigates the column headers
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
        var columns = this._getColumnDefs();

        if (focusedHeaderColumnIdx != null)
        {
          var newFocusedHeaderColumnIdx = focusedHeaderColumnIdx;

          if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_LEFT))
          {
            newFocusedHeaderColumnIdx = focusedHeaderColumnIdx > 0 ? focusedHeaderColumnIdx - 1 : focusedHeaderColumnIdx;
          }
          else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_RIGHT))
          {
            newFocusedHeaderColumnIdx = focusedHeaderColumnIdx < columns.length - 1 ? focusedHeaderColumnIdx + 1 : focusedHeaderColumnIdx;
          }

          if (newFocusedHeaderColumnIdx != focusedHeaderColumnIdx)
          {
            this._setHeaderColumnFocus(newFocusedHeaderColumnIdx, true, false, null);

            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              // if shift is also pressed then we need to select too
              var newFocusedHeaderColumnSelection = this._getHeaderColumnSelection(newFocusedHeaderColumnIdx);
              // we may be clearing or setting the selection
              this._setHeaderColumnSelection(newFocusedHeaderColumnIdx, !newFocusedHeaderColumnSelection, null, event, true);
              // if we are clearing the selection, then clear the previous column too.
              if (newFocusedHeaderColumnSelection)
              {
                if (this._getHeaderColumnSelection(focusedHeaderColumnIdx))
                {
                  this._setHeaderColumnSelection(focusedHeaderColumnIdx, false, null, event, true);
                }
              }
            }
          }
        }
      },
      /**
       * Handler for Tab keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownTab: function(event)
      {
        // if Tab is pressed while a row has focus then we 
        // want to Tab within that row and then go to the 
        // next row until Esc is pressed
        var tabHandled = false;
        var focusedRowIdx = this._getFocusedRowIdx();

        if (focusedRowIdx != null && this._isTableNavigationMode())
        {
          var currentFocusElement = document.activeElement;
          var tableBody = this._getTableDomUtils().getTableBody();
          
          if ($.contains(tableBody[0], currentFocusElement))
          {
            // if already focused on an element in the body, then
            // don't do anything
            return;
          }
          
          var tabbableElementsInBody = this._getTabbableElements(tableBody);
          // only bother if there are any tabbable elements
          if (tabbableElementsInBody != null)
          {
            tabHandled = true;
            
            if (!event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              var tableBodyRow = this._getTableDomUtils().getTableBodyRow(focusedRowIdx);
              var tabbableElementsInRow = this._getTabbableElements(tableBodyRow);

              if (tabbableElementsInRow != null)
              {
                $(tabbableElementsInRow[0]).focus();
              }
              else
              {
                // if there are no tabbable elements
                // in the row then focus on the first 
                // tabbable element in the body
                $(tabbableElementsInBody[0]).focus();
              }
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
        
        if (!tabHandled)
        {
          // tab out of the component to the next tabbable
          // element on the page
          var table = this._getTableDomUtils().getTable();
          var tabbableElementsInDocument = this._getTabbableElements($(document));
          var tabbableElementsInDocumentCount = tabbableElementsInDocument.length;
          var tabbableElementsInTable = this._getTabbableElements(table);
          var tabbableElementsInTableCount = tabbableElementsInTable != null ? tabbableElementsInTable.length : 0;
          var tableTabIndex = tabbableElementsInDocument.index(this._getTableDomUtils().getTable());
          if (!event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
          {
            if (tableTabIndex == tabbableElementsInDocumentCount - 1)
            {
              // Table is the last element. Let the browser handle the tab.
              return;
            }
            else
            {
              $(tabbableElementsInDocument[tableTabIndex + tabbableElementsInTableCount + 1]).focus();
            }
          }
          else if (tableTabIndex >= 0)
          {
            if (tableTabIndex == 0)
            {
              // Table is the first element. Let the browser handle the tab.
              return;
            }
            else
            {
              $(tabbableElementsInDocument[tableTabIndex - 1]).focus();
            }
          }
          else
          {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
        }
        // we need to remove Tab on keydown because we may not
        // get a keyup for it if focus moves
        // outside of table
        this._removeKeyboardKey(event.keyCode);
      },
      /**
       * Handler for Up/Down keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownUpDown: function(event)
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedRowIdx != null)
        {
          // if row is focused then up/down navigates the rows
          var tableBodyRows = this._getTableDomUtils().getTableBodyRows();
          var rowCount = tableBodyRows != null ? tableBodyRows.length : 0;
          var newFocusedRowIdx = focusedRowIdx;

          if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP))
          {
            if (focusedRowIdx > 0)
            {
              newFocusedRowIdx = focusedRowIdx - 1;
            }
            else
            {
              newFocusedRowIdx = focusedRowIdx;
            }
          }
          else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
          {
            newFocusedRowIdx = focusedRowIdx < rowCount - 1 ? focusedRowIdx + 1 : focusedRowIdx;
          }

          if (newFocusedRowIdx != focusedRowIdx)
          {
            var focused = this._setRowFocus(newFocusedRowIdx, true, true, null, event);
            
            if (!focused)
            {
              return;
            }

            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              // if shift is also pressed then we need to select too
              var newFocusedRowSelection = this._getRowSelection(newFocusedRowIdx);
              // we may be clearing or setting the selection
              this._setRowSelection(newFocusedRowIdx, !newFocusedRowSelection, null, event, true);
              // if we are clearing the selection, then clear the previous row too.
              if (newFocusedRowSelection)
              {
                if (this._getRowSelection(focusedRowIdx))
                {
                  this._setRowSelection(focusedRowIdx, false, null, event, true);
                }
              }
            }
          }
          // if user is on the first row and presses up the focus on the first column header
          else if (newFocusedRowIdx == focusedRowIdx &&
            focusedRowIdx == 0 &&
            this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP))
          {
            this._setHeaderColumnFocus(0, true, false, null);
          }
        }
        // if user is on a column header and pressed down then focus on the first row
        else if (focusedHeaderColumnIdx != null &&
          this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
        {
          this._setRowFocus(0, true, true, null, event);
        }
      },
      /**
       * Handler for End keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEnd: function(event)
      {
        // pressing End focuses on last column
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null &&
          focusedColumnIdx != this._getColumnDefs().length - 1)
        {
          this._setHeaderColumnFocus(this._getColumnDefs().length - 1, true, false, null);
        }
        else
        {
          var focusedRowIdx = this._getFocusedRowIdx();
          var tableBodyRows = this._getTableDomUtils().getTableBodyRows();
          var rowCount = tableBodyRows != null ? tableBodyRows.length : 0;

          if (focusedRowIdx != null && focusedRowIdx != rowCount - 1 && rowCount > 0)
          {
            this._setRowFocus(rowCount - 1, true, true, null, event);
          }
        }
      },
      /**
       * Handler for Enter keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEnter: function(event)
      {
        // pressing enter does sort on the focused column header
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null && this._getColumnDefs()[focusedColumnIdx]['sortable'] == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(focusedColumnIdx);
          var sorted = tableHeaderColumn.data('sorted');
          // if not already sorted then sort ascending. If already sorted
          // ascending then do descending sort and vice versa.
          if (sorted == null || sorted == this._COLUMN_SORT_ORDER._DESCENDING)
          {
            this._handleSortTableHeaderColumn(focusedColumnIdx, true, event);
          }
          else
          {
            this._handleSortTableHeaderColumn(focusedColumnIdx, false, event);
          }
        }
      },
      /**
       * Handler for Esc keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEsc: function(event)
      {
        // pressing Esc always returns focus back to the table.
        // This is for when users are tabbing through focuable
        // elements and need to get back to general table nav
        event.preventDefault();
        event.stopPropagation();
        this._getTableDomUtils().getTable().focus();
        this._setTableNavigationMode(false);
      },
      /**
       * Handler for Home keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupHome: function(event)
      {
        // pressing Home focuses on first column
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null && focusedColumnIdx != 0)
        {
          this._setHeaderColumnFocus(0, true, false, null);
        }
        else
        {
          var focusedRowIdx = this._getFocusedRowIdx();

          if (focusedRowIdx != null && focusedRowIdx != 0)
          {
            this._setRowFocus(0, true, true, null, event);
          }
        }
      },
      /**
       * Handler for Spacebar keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupSpacebar: function(event)
      {
        // pressing spacebar selects the focused row/column
        var focusedRowIdx = this._getFocusedRowIdx();

        if (focusedRowIdx != null)
        {
          this._setRowSelection(focusedRowIdx, !this._getRowSelection(focusedRowIdx), null, event, true);
        }
        else
        {
          var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
          if (focusedHeaderColumnIdx != null)
          {
            this._clearSelectedRows();
            this._setHeaderColumnSelection(focusedHeaderColumnIdx, !this._getHeaderColumnSelection(focusedHeaderColumnIdx), null, event, true);
          }
        }
      },
      /**
       * Callback handler max fetch count.
       * @private
       */
      _handleScrollerMaxRowCount: function()
      {
        // TODO: use inline messaging framwork when ready
        var errSummary = this._LOGGER_MSG._ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY;
        var errDetail = this._LOGGER_MSG._ERR_DOM_SCROLLER_MAX_COUNT_DETAIL;
        this._showInlineMessage(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['WARNING']);
      },
     /**
       * Handle scrollLeft on scroller
       * @private	 
       */
      _handleScrollerScrollLeft: function(scrollLeft, maxScrollLeft)
      {
        if (this._GetReadingDirection() === "rtl")
        {
          scrollLeft = Math.abs(scrollLeft);
          if (this._getTableDomUtils()._isWebkit())
          {
            scrollLeft = maxScrollLeft - scrollLeft;
          }
        }

        var tableHeader = this._getTableDomUtils().getTableHeader();
        var tableFooter = this._getTableDomUtils().getTableFooter();

        if (!this._getTableDomUtils().isDivScroller())
        {
          var tableHeaderRow = this._getTableDomUtils().getTableHeaderRow();
          if (tableHeaderRow)
          {
            if (this._GetReadingDirection() === "rtl")
            {
              tableHeaderRow.css(oj.TableDomUtils.CSS_PROP._RIGHT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
            else
            {
              tableHeaderRow.css(oj.TableDomUtils.CSS_PROP._LEFT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
          }

          var tableFooterRow = this._getTableDomUtils().getTableFooterRow();
          if (tableFooterRow)
          {
            if (this._GetReadingDirection() === "rtl")
            {
              tableFooterRow.css(oj.TableDomUtils.CSS_PROP._RIGHT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
            else
            {
              tableFooterRow.css(oj.TableDomUtils.CSS_PROP._LEFT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
          }
        }
        else
        {
          if (tableHeader)
          {
            if (this._GetReadingDirection() === "rtl")
            {
              tableHeader.css(oj.TableDomUtils.CSS_PROP._RIGHT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
            else
            {
              tableHeader.css(oj.TableDomUtils.CSS_PROP._LEFT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
          }
          if (tableFooter)
          {
            if (this._GetReadingDirection() === "rtl")
            {
              tableFooter.css(oj.TableDomUtils.CSS_PROP._RIGHT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
            else
            {
              tableFooter.css(oj.TableDomUtils.CSS_PROP._LEFT, '-' + scrollLeft + oj.TableDomUtils.CSS_VAL._PX);
            }
          }
        }
      },
      /**
       * Handler for column sort
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @param {Object} event
       * @private
       */
      _handleSortTableHeaderColumn: function(columnIdx, ascending, event)
      {
        // clear the sorted indicator on any other column
        this._clearSortedHeaderColumn(columnIdx);
        // get the column metadata
        var column = this._getColumnDefs()[columnIdx];
        // get which field to sort on
        var sortField = column['sortProperty'] == null ? column['field'] : column['sortProperty'];
        // invoke sort on the data
        this._invokeDataSort(sortField, ascending, event);
        this._sortColumn = column;
        this._refreshSortTableHeaderColumn(columnIdx, ascending);
      },
      /**
       * Hide the inline message.
       * @private
       */
      _hideInlineMessage: function()
      {
        var inlineMessage = this._getTableDomUtils().getTableInlineMessage();
        if (inlineMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY) != oj.TableDomUtils.CSS_VAL._NONE)
        {
          var inlineMessageHeight = inlineMessage.outerHeight();
          var tableContainer = this._getTableDomUtils().getTableContainer();
          var tableContainerBorderBottom = parseInt(tableContainer.css(oj.TableDomUtils.CSS_PROP._BORDER_BOTTOM_WIDTH), 10);
          var tableContainerMarginBottom = parseInt(tableContainer.css(oj.TableDomUtils.CSS_PROP._MARGIN_BOTTOM), 10);
          tableContainerMarginBottom = tableContainerMarginBottom - tableContainerBorderBottom - inlineMessageHeight;
          tableContainer.css(oj.TableDomUtils.CSS_PROP._MARGIN_BOTTOM, tableContainerMarginBottom + oj.TableDomUtils.CSS_VAL._PX);
          tableContainer.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._WARNING);
          inlineMessage.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._WARNING);
          inlineMessage.css(oj.TableDomUtils.CSS_PROP._BOTTOM, '');
          inlineMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._NONE);
        }
      },
      /**
       * Hide the 'No data to display.' message.
       * @private
       */
      _hideNoDataMessage: function()
      {
        var noDataRow = this._getTableDomUtils().getTableNoDataRow();
        if (noDataRow != null) {
          noDataRow.remove();
        }
      },
      /**
       * Hide the Fetching Data... status message.
       * @private
       */
      _hideStatusMessage: function()
      {
        var statusMessage = this._getTableDomUtils().getTableStatusMessage();
        statusMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._NONE);
      },
      /**
       * Hide the column header sort link
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _hideTableHeaderColumnSortLink: function(columnIdx, ascending)
      {
        // check if the column is sortable. If not, then there won't be any sort links
        if (this._getColumnDefs()[columnIdx]['sortable'] == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
          // check if the column is currently sorted
          var sorted = tableHeaderColumn.data('sorted');

          // we should only hide the ascending sort link if the column is not sorted or
          // is sorted by descending order
          if (ascending && (sorted == null || sorted == this._COLUMN_SORT_ORDER._DESCENDING))
          {
            var headerColumnAscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
            headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
          // we should only hide the descending sort link if the column is not sorted or
          // is sorted by ascending order
          else if (!ascending && (sorted == null || sorted == this._COLUMN_SORT_ORDER._ASCENDING))
          {
            var headerColumnDscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
            headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            headerColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
            headerColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Do an initial fetch
       * @private
       */
      _initFetch: function()
      {
        var self = this;
        var data = this._getData();
        // do an initial fetch if a TableDataSource
        // paging control should do the fetches for PagingTableDataSource
        if (data != null && (data instanceof oj.TableDataSource) && !(data instanceof oj.PagingTableDataSource))
        {
          // reset the scrollTop when we do an initial fetch
          this._getTableDomUtils().getScroller()[0].scrollTop = 0;
          
          if (this._isLoadMoreOnScroll())
          {
            this._queueTask(function()
            {
              return self._invokeDataFetchRows(0, {'fetchType': 'init', 'pageSize' : self.options['scrollPolicyOptions']['fetchSize']});
            });
          }
          else
          {
            this._queueTask(function()
            {
              return self._invokeDataFetchRows(0, {'fetchType': 'init'});
            });
          }
        }
        else if (data == null)
        {
          this._queueTask(function()
          {
            return Promise.resolve();
          });
        }
      },
      /**
       * Fetch rows
       * @param {number|null} startIndex start index
       * @param {Object} options options for the fetch
       * @return {Promise} Promise resolves when done.
       * @private
       */
      _invokeDataFetchRows: function(startIndex, options)
      {
        options = options || {};
        options['startIndex'] = startIndex;
        options['silent'] = true;
        var initFetch = options['fetchType'] == 'init'? true : false;
        var data = this._getData();
        var self = this;
        return new Promise(function(resolve, reject)
        {
          if (data != null)
          {
            self._setDataWaitingState();
            data.fetch(options).then(function(result)
            {
              if (result != null)
              {
                if (result['data'] != null)
                {
                  var offset = 0;
                  
                  if (data instanceof oj.PagingTableDataSource)
                  {
                    offset = data.getStartItemIndex();
                  }

                  var indexArray = [];
                  var i;

                  for (i = 0; i < result['data'].length; i++)
                  {
                    indexArray[i] = i + offset + result['startIndex'];
                  }
                  
                  self._refreshAll({'data': result['data'], 'keys' : result['keys'], 'indexes': indexArray}, result['startIndex'], initFetch, initFetch);
                }
              }
              self._clearDataWaitingState();
              resolve(null);
            }, function(error)
            {
               // TODO inline messaging framework
               self._clearDataWaitingState();
               reject(error);
            });
          }
          else
          {
            resolve(null);
          }
        });
      },
      /**
       * Invoke sort on a field. This function is called when a user clicks the 
       * column header sort links
       * @param {string} sortField  field name
       * @param {boolean} ascending  sort order ascending
       * @param {Object} event
       * @private
       */
      _invokeDataSort: function(sortField, ascending, event)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return null;
        }

        // show the Fetching Data... message
        this._showStatusMessage();
        
        var sortCriteria = {};
        sortCriteria['key'] = sortField;

        // the sort function on the datasource takes comparators
        if (ascending)
        {
          sortCriteria['direction'] = this._COLUMN_SORT_ORDER._ASCENDING;
        }
        else
        {
          sortCriteria['direction'] = this._COLUMN_SORT_ORDER._DESCENDING;
        }
        this._trigger('sort', event, {'header': sortCriteria['key'], 'direction': sortCriteria['direction']});
        data.sort(sortCriteria);
      },
      /**
       * Whether the columns have been updated
       * @return {boolean} true or false
       * @private
       */
      _isColumnMetadataUpdated: function()
      {
        if (this._columnDefArray != null)
        {
          var columnsMetadata = this._getColumnMetadata();
          if (this._columnDefArray.length != columnsMetadata.length)
          {
            return true;
          }
          else
          {
            var i, prop;
            for (i = 0; i < columnsMetadata.length; i++)
            {
              for (prop in columnsMetadata[i]) {
                if (columnsMetadata[i].hasOwnProperty(prop)) {
                  if (columnsMetadata[i][prop] != this._columnDefArray[i][prop])
                  {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
        return true;
      },
      /**
       * Is keybaord key pressed
       * @param {number} keyCode  KeyCode of the keyboard key.
       * @return {boolean} true or false
       * @private
       */
      _isKeyboardKeyPressed: function(keyCode)
      {
        var keyboardKeys = this._getKeyboardKeys();
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            return true;
          }
        }
        return false;
      },
      /**
       * Is loadMoreOnScroll
       * @return {boolean} true or false
       * @private
       */
      _isLoadMoreOnScroll: function()
      {
        return this.options['scrollPolicy'] == this._OPTION_SCROLL_POLICY._LOADMORE_ON_SCROLL ? true: false;
      },
      /**
       * Return whether the node is editable or clickable
       * @param {jQuery} node  Node
       * @return {boolean} true or false
       * @private	 
       */
      _isNodeEditableOrClickable: function(node)
      {
        var nodeName;
        var table = this._getTableDomUtils().getTable();

        while (null != node && node[0] != table[0] &&
          (nodeName = node.prop("nodeName")) != "TD" && nodeName != "TH")
        {
          // If the node is a text node, move up the hierarchy to only operate on elements
          // (on at least the mobile platforms, the node may be a text node)
          if (node[0].nodeType == 3) // 3 is Node.TEXT_NODE
          {
            node = node[0].parentNode;
            continue;
          }

          var tabIndex = node.attr('tabIndex');

          if (tabIndex != null && tabIndex >= 0)
          {
            return true;
          }
          else if (nodeName.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/))
          {
            // ignore elements with tabIndex == -1
            if (tabIndex != -1)
            {
              return true;
            }
          }
          node = node.parentNode;
        }
        return false;
      },
      /**
       * Returns whether the table is footerless
       * @return {boolean} true or false
       * @private
       */
      _isTableFooterless: function()
      {
        var columns = this._getColumnDefs();
        var i, footerRenderer;
        
        for (i = 0; i < columns.length; i++)
        {
          footerRenderer = this._getColumnRenderer(i, 'footer');
          if (footerRenderer != null)
          {
            return false
          }
        }
        return true;
      },
      /**
       * Returns whether the table is headerless
       * @return {boolean} true or false
       * @private
       */
      _isTableHeaderless: function()
      {
        var columns = this._getColumnDefs();

        var i, j;
        for (i = 0; i < columns.length; i++)
        {
          if (columns[i]['headerText'] != null ||
            columns[i]['headerStyle'] != null ||
            (columns[i]['sortable'] != null &&
              columns[i]['sortable'] != this._OPTION_NONE) ||
            columns[i]['sortProperty'] != null ||
            columns[i]['headerRenderer'] != null)
          {
            return false;
          }
        }
        
        return true;
      },
      /**
       * Returns whether the table header columns were rendered
       * @return {boolean} true or false
       * @private
       */
      _isTableHeaderColumnsRendered: function()
      {
        return this._renderedTableHeaderColumns == true;
      },
      /**
       * Return whether the component is in table navigation mode
       * @return {boolean} true or false
       * @private
       */
      _isTableNavigationMode: function()
      {
        return this._tableNavMode;
      },
      /**
       * Returns whether the table refresh is needed based on option change
       * @param {string} key option key
       * @param {Object} value option value
       * @return {boolean} true or false
       * @private
       */
      _isTableRefreshNeeded: function(key, value)
      {
        var currentOptions = this._cachedOptions;
        var refresh = false;
        
        if (key == 'contextMenu' && value == '#' + this._getTableDomUtils().getTable().attr('id') + '_contextmenu')
        {
          refresh = false;
        }
        else if (key != 'selection' && key != 'currentRow' && !oj.Object.compareValues(value, currentOptions[key]))
        {
          refresh = true;
        }
        
        this._cachedOptions = $.extend(true, {}, this.options);
        
        return refresh;
      },
      /**
       * Returns whether any of the table columns are sortable
       * @return {boolean} true or false
       * @private
       */
      _isTableSortable: function()
      {
        var columns = this._getColumnDefs();

        var i;
        for (i = 0; i < columns.length; i++)
        {
          if (columns[i]['sortable'] != null &&
              columns[i]['sortable'] != this._OPTION_NONE)
          {
            return true;
          }
        }
        
        return false;
      },
      /**
       * @param {Object} resultObject Object containing data array, key array, and index array
       * @param {number} startIndex start index
       * @param {boolean} resetScrollTop reset the scrollTop
       * @param {boolean} resetScrollLeft reset the scrollLeft
       * @private
       */
      _refreshAll: function(resultObject, startIndex, resetScrollTop, resetScrollLeft)
      {
        if (this._isColumnMetadataUpdated() ||
            (!this._isTableHeaderColumnsRendered() &&
            !this._isTableHeaderless()))
        {
          this._clearCachedMetadata();
          this._refreshTableHeader();
          
          // see if we need to clear the sort. If the column we sorted on is no
          // longer there then clear it.
          if (this._sortColumn != null)
          {
            var i, column;
            var foundColumn = false;
            var columns = this._getColumnDefs();
            if (columns != null)
            {
              for (i = 0; i < columns.length; i++)
              {
                column = columns[i];
                if (oj.Object.compareValues(column, this._sortColumn))
                {
                  foundColumn = true;
                  break;
                }
              }
              if (!foundColumn)
              {
                this._getData().sort(null);
              }
            }
          }
        }
        this._refreshTableFooter();
        this._refreshTableBody(resultObject, startIndex, resetScrollTop, resetScrollLeft);
      },
      /**
       * Handler for column sort
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _refreshSortTableHeaderColumn: function(columnIdx, ascending)
      {
        // clear the sorted indicator on any other column
        this._clearSortedHeaderColumn(columnIdx);
        // get the column header DOM element
        var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
        var sorted = tableHeaderColumn.data('sorted');
        
        if (ascending && sorted != this._COLUMN_SORT_ORDER._ASCENDING)
        {
          // store sort order on the DOM element
          tableHeaderColumn.data('sorted', this._COLUMN_SORT_ORDER._ASCENDING);
          var headerColumnAscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
          headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
          headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
          headerColumnAsc.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
          headerColumnDsc.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          this._hideTableHeaderColumnSortLink(columnIdx, !ascending);
        }
        else if (!ascending && sorted != this._COLUMN_SORT_ORDER._DESCENDING)
        {
          // store sort order on the DOM element
          tableHeaderColumn.data('sorted', this._COLUMN_SORT_ORDER._DESCENDING);
          var headerColumnDscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
          headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
          headerColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
          headerColumnDsc.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
          headerColumnAsc.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
        }
      },
      /**
       * Refresh the entire table body with data from the datasource
       * @param {Object} resultObject Object containing data array, key array, and index array
       * @param {number} startIndex start index
       * @param {boolean} resetScrollTop reset the scrollTop
       * @param {boolean} resetScrollLeft reset the scrollLeft
       * @private
       */
      _refreshTableBody: function(resultObject, startIndex, resetScrollTop, resetScrollLeft)
      {
        var tableBody = this._getTableDomUtils().getTableBody();

        if (tableBody == null)
        {
          return;
        }

        var rows = this._getRowIdxRowArray(resultObject, startIndex);
        var tableBodyRows;

        if (startIndex == 0)
        {
          oj.Components.subtreeDetached(tableBody[0]);
          tableBody.empty();
        }
        else
        {
          tableBodyRows = tableBody.children();
          if (tableBodyRows != null && tableBodyRows.length > 0)
          {
            var i;
            for (i = tableBodyRows.length - 1; i >= startIndex; i--)
            {
              this._getTableDomUtils().removeTableBodyRow(i);
            }
          }
        }
        this._getTableDomUtils().clearCachedDomRowData();
        this._hideNoDataMessage();
        tableBodyRows = tableBody.children();

        // if no data then bail
        if (rows.length == 0 && (tableBodyRows == null || tableBodyRows.length == 0))
        {
          this._showNoDataMessage();
        }
        else
        {
          var tableBodyDocFrag = $(document.createDocumentFragment());
          var i, row, rowIdx, tableBodyRow;
          for (i = 0; i < rows.length; i++)
          {
            row = rows[i].row;
            rowIdx = rows[i].rowIdx;
            if (row != null)
            { 
              tableBodyRow = this._getTableDomUtils().createTableBodyRow(rowIdx, row['key']);
              this._getTableDomUtils().styleTableBodyRow(tableBodyRow, true);
              this._getTableDomUtils().insertTableBodyRow(rowIdx, tableBodyRow, row, tableBodyDocFrag);
              this._refreshTableBodyRow(rowIdx, row, tableBodyRow, tableBodyDocFrag, startIndex, true);
            }
          }
          tableBody.append(tableBodyDocFrag); //@HTMLUpdateOK

          // Re-size the table before calling subtree attached. subtreeAttached is a
          // potentially expensive call so we want table to be laid out before it.
          this._getTableDomUtils().refreshTableDimensions(null, null, resetScrollTop, resetScrollLeft);
          oj.Components.subtreeAttached(tableBody[0]);
        }
      },
      /**
       * Refresh the row at a particular index with the row data
       * @param {number} rowIdx  row index relative to the start of the table
       * @param {Object} row  row and key object
       * @param {Object} tableBodyRow tr element
       * @param {Object} docFrag  document fragment
       * @param {number} docFragStartIdx  document fragment row start index
       * @param {boolean} isNew is new row
       * @private
       */
      _refreshTableBodyRow: function(rowIdx, row, tableBodyRow, docFrag, docFragStartIdx, isNew)
      {
        var options = this.options;
        var rowRenderer = this._getRowRenderer();
        var columns = this._getColumnDefs();
        var tableBody = this._getTableDomUtils().getTableBody();

        if (isNaN(rowIdx) || rowIdx < 0)
        {
          // validate rowIdx value
          oj.Logger.error('Error: Invalid rowIdx value: ' + rowIdx);
        }

        if (tableBodyRow == null)
        {
          // check if we already have a <tr> element at that index
          tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
          if (!tableBodyRow)
          {
            // if not return
            return;
          }
          else
          {
            tableBodyRow.empty();
            isNew = true;
            this._getTableDomUtils().createTableBodyCellAccSelect(rowIdx, row['key'], tableBodyRow);
          }
        }

        this._hideNoDataMessage();
        
        // check if a row renderer was defined
        if (rowRenderer)
        {
          var rowContext = this._getTableDomUtils().getRendererContextObject(row, tableBodyRow[0]);
          var rowContent = rowRenderer({'rowContext': rowContext, 
                                        'row': $.extend({}, row['data'])});

          if (rowContent != null)
          {
            // if the renderer returned a value then we set it as the content
            // for the row
            tableBodyRow.append(rowContent); //@HTMLUpdateOK
          }
          else
          {
            // if the renderer didn't return a value then the existing
            // row was manipulated. So get it and set the required
            // attributes just in case it was replaced or the attributes
            // got removed
            if (docFrag == null)
            {
              tableBodyRow = $(tableBody.children()[rowIdx]);
            }
            else
            {
              docFragStartIdx = docFragStartIdx == null ? 0 : docFragStartIdx;
              tableBodyRow = $(docFrag.children()[rowIdx - docFragStartIdx]);
            }
            this._getTableDomUtils().clearCachedDomRowData();
            this._getTableDomUtils().setTableBodyRowAttributes(rowIdx, row, tableBodyRow);
            this._getTableDomUtils().styleTableBodyRow(tableBodyRow, false);
          }
          this._getTableDomUtils().createTableBodyCellAccSelect(rowIdx, row['key'], tableBodyRow);

          // set the cell attributes and styling. Skip the 1st one
          // because it's the acc row select td
          var tableBodyCells = tableBodyRow.children('td');
          var i;
          for (i = 1; i < tableBodyCells.length; i++)
          {
            var tableBodyCell = $(tableBodyCells[i]);
            this._getTableDomUtils().setTableBodyCellAttributes(rowIdx, row['key'], i - 1, tableBodyCell);
            this._getTableDomUtils().styleTableBodyCell(i - 1, tableBodyCell, false);
          }
        }
        else
        {
          this._getTableDomUtils().setTableBodyRowAttributes(rowIdx, row, tableBodyRow);
          
          var j, column, cellRenderer;
          for (j = 0; j < columns.length; j++)
          {
            column = columns[j];
            cellRenderer = this._getColumnRenderer(j, 'cell');
            // set the cells in the inserted row with values from the row
            this._getTableDomUtils().setTableBodyCell(rowIdx, j, tableBodyRow, row, cellRenderer, isNew);
          }
        }
      },
      /**
       * Refresh the table footer
       * @private
       */
      _refreshTableFooter: function()
      {
        var columns = this._getColumnDefs();
        var tableFooter = this._getTableDomUtils().getTableFooter();

        if (!tableFooter)
        {
          if (this._isTableFooterless())
          {
            return;
          }
          else
          {
            // metadata could have been updated to add column headers
            tableFooter = this._getTableDomUtils().createTableFooter();
            this._getTableDomUtils().styleTableFooter(tableFooter);
          }
        }

        var tableFooterRow = this._getTableDomUtils().getTableFooterRow();
        // remove all the existing footer cells
        tableFooterRow.empty();

        if (columns && columns.length > 0)
        {
          this._getTableDomUtils().createTableFooterAccSelect(tableFooterRow);
          
          var i, column, footerRenderer, footerCell, footerCellContent;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            footerRenderer = this._getColumnRenderer(i, 'footer');
            footerCell = this._getTableDomUtils().createTableFooterCell(i, this._getColumnSelectionMode());
            this._getTableDomUtils().styleTableFooterCell(i, footerCell);
            this._getTableDomUtils().insertTableFooterCell(i, footerCell);

            if (footerRenderer)
            {
              // if footerRenderer is defined then call that
              footerCellContent = footerRenderer({'footerContext': this._getTableDomUtils().getRendererContextObject(null, footerCell[0]),
                                                  'columnIndex': i});
              
              if (footerCellContent != null)
              {
                // if the renderer returned a value then we set it as the content
                // for the footer cell
                footerCell.empty();
                footerCell.append(footerCellContent); //@HTMLUpdateOK
              }
              else
              {
                // if the renderer didn't return a value then the existing
                // footer cell was manipulated. So get it and set the required
                // attributes just in case it was replaced or the attributes
                // got removed
                footerCell = $(tableFooterRow.children(':not(.' + oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS + ')')[i]);
                this._getTableDomUtils().styleTableFooterCell(i, footerCell, this._getColumnSelectionMode());
              }
            }
          }
        }
      },
      /**
       * Refresh the table header
       * @private
       */
      _refreshTableHeader: function()
      {
        var columns = this._getColumnDefs();
        var tableHeader = this._getTableDomUtils().getTableHeader();

        if (!tableHeader)
        {
          if (this._isTableHeaderless())
          {
            return;
          }
          else
          {
            // metadata could have been updated to add column headers
            tableHeader = this._getTableDomUtils().createTableHeader();
            this._getTableDomUtils().styleTableHeader(tableHeader);
          }
        }

        var tableHeaderRow = this._getTableDomUtils().getTableHeaderRow();
        // remove all the existing column headers
        tableHeaderRow.empty();

        if (columns && columns.length > 0)
        {
          var tableHeaderAccSelectRowColumn = this._getTableDomUtils().createTableHeaderAccSelectRowColumn();
          tableHeaderRow.append(tableHeaderAccSelectRowColumn); //@HTMLUpdateOK

          var i, j, column, headerRenderer, headerColumn, headerColumnContent, headerContext, context;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            headerRenderer = this._getColumnRenderer(i, 'header');
            headerColumn = this._getTableDomUtils().createTableHeaderColumn(i, this._getColumnSelectionMode());
            
            if (headerRenderer)
            {
              // if headerRenderer is defined then call that
              headerContext = this._getTableDomUtils().getRendererContextObject(null, headerColumn[0]);
              context = {'headerContext': headerContext, 
                         'columnIndex': i,
                         'data': column['headerText']};
              
              if (column.sortable == oj.TableDomUtils._OPTION_ENABLED)
              {
                // add the sortable icon renderer
                context['columnHeaderSortableIconRenderer'] = function(options, delegateRenderer)
                {
                  oj.TableRendererUtils.columnHeaderSortableIconRenderer(this, options, delegateRenderer);
                }
              }
              else
              {
                context['columnHeaderDefaultRenderer'] = function(options, delegateRenderer)
                {
                  oj.TableRendererUtils.columnHeaderDefaultRenderer(this, options, delegateRenderer);
                }
              }
              headerColumnContent = headerRenderer(context);
              
              if (headerColumnContent != null)
              {
                // if the renderer returned a value then we set it as the content
                // for the headerColumn
                headerColumn.empty();
                headerColumn.append(headerColumnContent); //@HTMLUpdateOK
              }
              else
              {
                // if the renderer didn't return a value then the existing
                // headerColumn was manipulated. So get it and set the required
                // attributes just in case it was replaced or the attributes
                // got removed
                headerColumn = $(tableHeaderRow.children(':not(' + '.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS + ')')[i]);
                this._getTableDomUtils().setTableHeaderColumnAttributes(i, headerColumn);
                this._getTableDomUtils().styleTableHeaderColumn(i, headerColumn, this._getColumnSelectionMode(), false);
              }
            }

            // set the acc column selection checkbox
            this._getTableDomUtils().createTableHeaderColumnAccSelect(i, this._getColumnSelectionMode());
          }
          this._renderedTableHeaderColumns = true;
        }
      },
      /**
       * Refresh the status message
       * @private
       */
      _refreshTableStatusMessage: function()
      {
        var tableStatusMessage = this._getTableDomUtils().getTableStatusMessage();
        
        if (tableStatusMessage != null)
        {
          tableStatusMessage.remove();
        }
        this._getTableDomUtils().createTableStatusMessage();
      },
      /**
       * Register the events which will be published by the table component.
       * @private
       */
      _registerCustomEvents: function()
      {
        var jqEvent = (/** @type {{special: Object}} */($.event));
        var jqEventSpecial = jqEvent['special'];
        // ojtablebeforecurrentrow handlers will be passed an object which contains the
        // old and new current row
        jqEventSpecial['ojtablebeforecurrentrow'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtablesort handlers will be passed an object which contains the
        // header and direction
        jqEventSpecial['ojtablesort'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
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
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['REQUEST'], 'eventHandler': this._handleDataFetchStart.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['SYNC'], 'eventHandler': this._handleDataFetchEnd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['SORT'], 'eventHandler': this._handleDataSort.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['ADD'], 'eventHandler': this._handleDataRowAdd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['REMOVE'], 'eventHandler': this._handleDataRowRemove.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['CHANGE'], 'eventHandler': this._handleDataRowChange.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['REFRESH'], 'eventHandler': this._handleDataRefresh.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['RESET'], 'eventHandler': this._handleDataReset.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['ERROR'], 'eventHandler': this._handleDataError.bind(this)});

          var i;
          var ev;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++) {
            ev = data.on(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
            if (ev) {
                this._dataSourceEventHandlers[i]['eventHandler'] = ev;
            }
          }
        }
      },
      /**
       * Register event listeners which need to be registered directly on
       * the DOM element.
       * @private
       */
      _registerDomEventListeners: function()
      {
        if (this._getTableDomUtils().getScroller() != null)
        {
          // if width or height is defined then we can have scrollbars so register scroll event listeners
          this._getTableDomUtils().getScroller().scroll((function(event) {
            var scrollLeft = $(event.target).scrollLeft();
            var maxScrollLeft = $(event.target)[0].scrollWidth - $(event.target)[0].clientWidth;

            this._handleScrollerScrollLeft(scrollLeft, maxScrollLeft);
          }).bind(this));
        }
      },
      /**
       * Register the DOM Scroller. 
       * @private
       */
      _registerDomScroller: function()
      {
        var self = this;
        this._domScrollerMaxCountFunc = function(result)
        {
          if (result != null)
          {
            if (result['maxCountLimit'])
            {
              self._handleScrollerMaxRowCount();
            }
          }
        };
        this._domScroller = new oj.DomScroller(this._getTableDomUtils().getScroller(), this._data, {'fetchSize' : this.options['scrollPolicyOptions']['fetchSize'], 'maxCount' : this.options['scrollPolicyOptions']['maxCount'], 'success': this._domScrollerMaxCountFunc});
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
                                                      var tableContainerHeight = self._getTableDomUtils().getTableContainer().outerHeight();
                                                      var tableContainerWidth = self._getTableDomUtils().getTableContainer().outerWidth();
                                                      self._getTableDomUtils().refreshTableDimensions(tableContainerWidth, tableContainerHeight);
                                                    }, 50);
          this._isResizeListenerAdded = true;
        }
      },
      /**
       * Remove a keyCode from our internal list of pressed keys. This is done on keyup.
       * @private
       */
      _removeKeyboardKey: function(keyCode)
      {
        var keyboardKeys = this._getKeyboardKeys();
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            keyboardKeys.splice(i, 1);
          }
        }
      },

      /**
       * Scroll column into viewport
       * @param {number} columnIdx  row index
       * @private
       */
      _scrollColumnIntoViewport: function(columnIdx)
      {
        var isRTL = (this._GetReadingDirection() === "rtl");
        var tableBody = this._getTableDomUtils().getTableBody();
        var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

        if (!tableHeaderColumn)
        {
          return;
        }

        var scrollbarWidth = this._getTableDomUtils().getScrollbarWidth();
        var headerColumnRect = tableHeaderColumn.get(0).getBoundingClientRect();
        var tableBodyRect = tableBody.get(0).getBoundingClientRect();

        var scrolledLeft = false;
        
        if (isRTL)
        {
          if (headerColumnRect.left < tableBodyRect.left + scrollbarWidth)
          {
            var scrollLeftDiff = tableBodyRect.left - headerColumnRect.left + scrollbarWidth;
            if (!this._getTableDomUtils()._isIE())
            {
              scrollLeftDiff = -1 * scrollLeftDiff;
            }
            tableBody.scrollLeft(tableBody.scrollLeft() + scrollLeftDiff);
            scrolledLeft = true;
          }

          if (headerColumnRect.right > tableBodyRect.right && !scrolledLeft)
          {
            var scrollLeftDiff = headerColumnRect.right - tableBodyRect.right;
            if (!this._getTableDomUtils()._isIE())
            {
              scrollLeftDiff = -1 * scrollLeftDiff;
            }
            tableBody.scrollLeft(tableBody.scrollLeft() - scrollLeftDiff);
          }
        }
        else
        {
          if (headerColumnRect.left < tableBodyRect.left)
          {
            var scrollLeftDiff = tableBodyRect.left - headerColumnRect.left;
            tableBody.scrollLeft(tableBody.scrollLeft() - scrollLeftDiff);
            scrolledLeft = true;
          }

          if (headerColumnRect.right > tableBodyRect.right - scrollbarWidth && !scrolledLeft)
          {
            var scrollLeftDiff = headerColumnRect.right - tableBodyRect.right + scrollbarWidth;
            tableBody.scrollLeft(tableBody.scrollLeft() + scrollLeftDiff);
          }
        }
      },
      /**
       * Scroll row into viewport
       * @param {number} rowIdx  row index
       * @private
       */
      _scrollRowIntoViewport: function(rowIdx)
      {

        var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
        var scrollbarHeight = this._getTableDomUtils().getScrollbarHeight();
        var rowRect = tableBodyRow.get(0).getBoundingClientRect();
        var scrollingElement = this._getTableDomUtils().getScroller();
        var scrollingElementRect = scrollingElement.get(0).getBoundingClientRect();

        var scrolledDown = false;
        if (rowRect.bottom > scrollingElementRect.bottom - scrollbarHeight)
        {
          var scrollTopDiff = rowRect.bottom - scrollingElementRect.bottom + scrollbarHeight;
          scrollingElement.scrollTop(scrollingElement.scrollTop() + scrollTopDiff);
          scrolledDown = true;
        }

        if (rowRect.top < scrollingElementRect.top && !scrolledDown)
        {
          var scrollTopDiff = scrollingElementRect.top - rowRect.top;
          scrollingElement.scrollTop(scrollingElement.scrollTop() - scrollTopDiff);
        }

      },
      /**
       * Update the current row. If called with null then resets the currentRow.
       * If index/key argument is specified then sets the current row. A beforecurrentrow 
       * event is fired before the current row is changed. If that event results in
       * an error then the current row will not be changed.
       * @param {Object} currentRow current row
       * @param {Object} event
       * @param {Object} optionChange whether it was invoked through an optionChange call
       * @return {boolean} whether setting the current row was successful
       * @throws {Error}
       * @private
       */
      _setCurrentRow: function(currentRow, event, optionChange)
      {
        var existingCurrentRow = this._currentRow;
        var tableBodyRow, existingCurrentRowIndex, existingCurrentRowKey, existingCurrentRowIdx;
        var updateCurrentRow = true;
        
        if (currentRow == null)
        {
          if (existingCurrentRow != null)
          {
            try
            {
              updateCurrentRow = this._trigger('beforecurrentrow', event, {'currentRow': null, 'previousCurrentRow': this._currentRow});
            }
            catch (err)
            {
              // caught an error. Do not change current row
              var errSummary = this._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_SUMMARY;
              var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_DETAIL, {'error': err.toString()});
              oj.Logger.info(errSummary + '\n' + errDetail);
              // do not update the currentRow to the new value if an exception was caught
              return false;
            }

            if (!updateCurrentRow)
            {
              // do not update the currentRow to the new value if a listener returned false
              return false;
            }

            this._currentRow = null;
            this.option('currentRow', null,  {'_context': {writeback: true, originalEvent:event, internalSet: true}});
            
            if (event == null)
            {
              this._setRowFocus(-1, true, false, null, event);
            }

            existingCurrentRowIndex = existingCurrentRow['rowIndex'];
            existingCurrentRowKey = this._getRowKeyForDataSourceRowIndex(existingCurrentRowIndex);
            existingCurrentRowIdx = this._getRowIdxForRowKey(existingCurrentRowKey);
            tableBodyRow = this._getTableDomUtils().getTableBodyRow(existingCurrentRowIdx);

            if (tableBodyRow != null)
            {
              tableBodyRow.removeClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CURRENT_ROW_CLASS);
            }
          }

          return true;
        }
        var data = this._getData();
        var rowIndex = currentRow['rowIndex'];
        var rowIdx;
        var rowKey = currentRow['rowKey'];
        if (rowKey == null)
        {
          rowKey = this._getRowKeyForDataSourceRowIndex(rowIndex);
        }
        if (rowIndex == null)
        {
          rowIndex = this._getDataSourceRowIndexForRowKey(rowKey);
        }
        rowIdx = this._getRowIdxForRowKey(rowKey);
        currentRow = {'rowIndex': rowIndex, 'rowKey': rowKey};
          
        if (rowIdx != -1 && 
            (!data || 
            data.totalSize() == 0 ||
            rowIdx < -1 ||
            rowIdx === null ||
            rowKey === null))
        {
          var errSummary = this._LOGGER_MSG._ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY;
          var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL, {'rowIdx': rowIdx});
          if (optionChange)
          {
            // Only throw an Error if the current row was set through option change
            // so that the caller can be notified of the invalid row.
            throw new Error(errSummary + '\n' + errDetail);
          }
          else
          {
            oj.Logger.info(errSummary + '\n' + errDetail);
          }
          // do not update the currentRow
          return false;
        }
        
        var currentFocusedRowIdx = this._getFocusedRowIdx();
        var currentRowChanged = !oj.Object.compareValues(this._currentRow, currentRow);
        
        if (currentRowChanged)
        {
          try
          {
            updateCurrentRow = this._trigger('beforecurrentrow', event, {'currentRow': {'rowIndex': rowIndex, 'rowKey': rowKey}, 'previousCurrentRow': this._currentRow});
          }
          catch (err)
          {
            // caught an error. Do not change current row
            var errSummary = this._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_SUMMARY;
            var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_DETAIL, {'error': err.toString()});
            oj.Logger.info(errSummary + '\n' + errDetail);
            // do not update the currentRow to the new value if an exception was caught
            return false;
          }
          
          if (!updateCurrentRow)
          {
            // do not update the currentRow to the new value if a listener returned false
            return false;
          }
          
          this._currentRow = {'rowIndex': rowIndex, 'rowKey': rowKey};
          this.option('currentRow', this._currentRow, {'_context': {writeback: true, originalEvent:event, internalSet: true}});
          tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);

          if (tableBodyRow != null)
          {
            tableBodyRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CURRENT_ROW_CLASS);
          }
          if (existingCurrentRow != null)
          {
            existingCurrentRowIndex = existingCurrentRow['rowIndex'];
            existingCurrentRowKey = this._getRowKeyForDataSourceRowIndex(existingCurrentRowIndex);
            existingCurrentRowIdx = this._getRowIdxForRowKey(existingCurrentRowKey);
            tableBodyRow = this._getTableDomUtils().getTableBodyRow(existingCurrentRowIdx);

            if (tableBodyRow != null)
            {
              tableBodyRow.removeClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CURRENT_ROW_CLASS);
            }
          }
        }
        
        if (currentRowChanged || currentFocusedRowIdx != currentRow['rowIndex'])
        {
          if (event == null)
          {
            this._setRowFocus(rowIdx, true, false, null, event);
          }
        }
        return true;
      },
      /**
       * Set waiting state and show the Fetching Data... status message.
       * @private
       */
      _setDataWaitingState: function()
      {
        this._showStatusMessage();
        this._hideNoDataMessage();
        this._dataFetching = true;
      },
      /**
       * Set focus on column header
       * @param {number} columnIdx  column index
       * @param {boolean} focused  whether it's focused
       * @param {boolean} clearSelectedRows  whether to clear the selected rows
       * @param {Object} event
       * @private
       */
      _setHeaderColumnFocus: function(columnIdx, focused, clearSelectedRows, event)
      {
        var element = null;
        
        if (event != null)
        {
          element = event.currentTarget;
        }
        
        if (focused)
        {
          var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
          if (focusedHeaderColumnIdx != null && focusedHeaderColumnIdx != columnIdx)
          {
            this._setHeaderColumnFocus(focusedHeaderColumnIdx, false, false, event);
          }
          // clear focused row
          this._clearFocusedRow(true);
          // clear selected rows
          if (clearSelectedRows)
          {
            this._clearSelectedRows();
          }
          // scroll column into view
          this._scrollColumnIntoViewport(columnIdx);
          this._activeColumnIndex = columnIdx;
          
        }
        this._setHeaderColumnState(columnIdx, {focused: focused}, element);
      },
      /**
       * Set selection on column header
       * @param {number} columnIdx  column index
       * @param {boolean} selected  whether it's focused
       * @param {jQuery} element  DOM element which triggered the column header selection
       * @param {Object} event
       * @param {boolean} updateSelection  whether to update the selection
       * @private
       */
      _setHeaderColumnSelection: function(columnIdx, selected, element, event, updateSelection)
      {
        if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          if (isNaN(columnIdx) || columnIdx < 0)
          {
            // validate value
            oj.Logger.error('Error: Invalid column selection value: ' + columnIdx);
          }

          // if we have single selection then clear any existing selections
          if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE && selected)
          {
            this._clearSelectedHeaderColumns();
          }
          this._setHeaderColumnState(columnIdx, {selected: selected}, element, event);
          // save it
          this._setLastHeaderColumnSelection(columnIdx, selected);
          
          // update the acc checkbox
          var accSelectionColumn = this._getTableDomUtils().getTableHeaderColumnAccSelect(columnIdx);
          var accSelectCheckbox = $(accSelectionColumn.children('.' + oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_COLUMN_CLASS)[0]);
          accSelectCheckbox.prop('checked', selected);
          
          if (updateSelection)
          {
            var selection = this._getSelection();
            var existingSelection = this['options']['selection'];
            this.option('selection', selection, {'_context': {writeback: true, internalSet: true}});
          }
        }
      },
      /**
       * Set the state of the column header. e.g., focused, selected, etc.
       * @param {number} columnIdx  column index
       * @param {Object} state  Object which contains whether it's focused or selected
       * @param {jQuery} element  DOM element which triggered the column header state
       * @param {Object} event
       * @private
       */
      _setHeaderColumnState: function(columnIdx, state, element, event)
      {
        var headerColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

        if (!headerColumn)
        {
          return;
        }

        var focused = state.focused;
        var selected = state.selected;

        if (selected != null)
        {
          var headerColumnSelected = headerColumn.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);

          if (headerColumnSelected != selected)
          {
            if (!selected)
            {
              headerColumn.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              headerColumn.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
          }
        }
        if (focused != null)
        {
          if (!focused)
          {
            headerColumn.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            this._hideTableHeaderColumnSortLink(columnIdx, true);
            this._hideTableHeaderColumnSortLink(columnIdx, false);
          }
          else
          {
            headerColumn.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            this._showTableHeaderColumnSortLink(columnIdx);
          }
        }
        this._updateHeaderColumnCellsClass(columnIdx);
      },
      /**
       * Set the last column which was selected (chronologically)
       * @param {number} columnIdx  column index
       * @param {boolean} selected  whether it's selected
       * @private
       */
      _setLastHeaderColumnSelection: function(columnIdx, selected)
      {
        if (!this._lastSelectedColumnIdxArray)
        {
          this._lastSelectedColumnIdxArray = [];
        }

        var i;
        for (i = 0; i < this._lastSelectedColumnIdxArray.length; i++)
        {
          if (this._lastSelectedColumnIdxArray[i] == columnIdx)
          {
            this._lastSelectedColumnIdxArray.splice(i, 1);
            break;
          }
        }

        if (selected)
        {
          this._lastSelectedColumnIdxArray.push(columnIdx);
        }
      },
      /**
       * Set the last row which was selected (chronologically)
       * @param {number} rowIdx  row index
       * @param {boolean} selected  whether it's selected
       * @private
       */
      _setLastRowSelection: function(rowIdx, selected)
      {
        if (!this._lastSelectedRowIdxArray)
        {
          this._lastSelectedRowIdxArray = [];
        }

        for (var i = 0; i < this._lastSelectedRowIdxArray.length; i++)
        {
          if (this._lastSelectedRowIdxArray[i] == rowIdx)
          {
            this._lastSelectedRowIdxArray.splice(i, 1);
            break;
          }
        }

        if (selected)
        {
          this._lastSelectedRowIdxArray.push(rowIdx);
        }
      },
      /**
       * Set focus on row
       * @param {number} rowIdx  row index
       * @param {boolean} focused  whether it's focused
       * @param {boolean} updateCurrentRow  whether to update the currentRow
       * @param {jQuery} element  DOM element which triggered the row focus
       * @param {Object} event
       * @return {boolean} whether setting the row focus was successful
       * @private
       */
      _setRowFocus: function(rowIdx, focused, updateCurrentRow, element, event)
      {
        if (rowIdx == -1)
        {
          var focusedRowIdx = this._getFocusedRowIdx();
          if (focusedRowIdx != null)
          {
            this._setRowFocus(focusedRowIdx, false, updateCurrentRow, null, null);
          }
          if (updateCurrentRow)
          {
            var updateRowFocus = this._setCurrentRow(null, event);

            if (!updateRowFocus)
            {
              return false;
            }
          }
          return true;
        }
        var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
        
        if (!tableBodyRow)
        {
          return false;
        }

        if (focused)
        {
          var focusedRowIdx = this._getFocusedRowIdx();
          if (focusedRowIdx != null && focusedRowIdx != rowIdx)
          {
            this._setRowFocus(focusedRowIdx, false, updateCurrentRow, element, null);
          }
          
          if (updateCurrentRow)
          {
            var rowKey = this._getRowKeyForRowIdx(rowIdx);
            var updateRowFocus = this._setCurrentRow({'rowKey': rowKey}, event);

            if (!updateRowFocus)
            {
              return false;
            }
          }
        
          tableBodyRow.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
          this._scrollRowIntoViewport(rowIdx);
          // clear any hover on the row
          this._updateRowCellsClass(rowIdx, {focused: true, hover: false});
          // clear any focused column header
          this._clearFocusedHeaderColumn();
          // clear any selected column header
          this._clearSelectedHeaderColumns();
          // set to table navigation mode
          this._setTableNavigationMode(true);
        }
        else
        {
          tableBodyRow.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
        }
        // update focus style for the cells
        this._updateRowCellsClass(rowIdx, {focused: focused});
        
        return true;
      },
      /**
       * Set selection on row
       * @param {number} rowIdx  column index
       * @param {boolean} selected  whether it's selected
       * @param {jQuery} element  DOM element which triggered the row selection
       * @param {Object} event
       * @param {boolean} updateSelection  whether to update the selection
       * @private
       */
      _setRowSelection: function(rowIdx, selected, element, event, updateSelection)
      {
        if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          if (isNaN(rowIdx) || rowIdx < 0)
          {
            // validate value
            oj.Logger.error('Error: Invalid row selection value: ' + rowIdx);
          }

          // if we have single selection then clear any existing selections
          if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE && selected)
          {
            this._clearSelectedRows();
          }
          var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
          
          if (tableBodyRow != null)
          {
            var selectionChanged = false;
            var rowSelected = tableBodyRow.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);

            if (rowSelected != selected)
            {
              if (!selected)
              {
                tableBodyRow.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
              }
              else
              {
                tableBodyRow.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
              }
              selectionChanged = true;
            }

            if (selectionChanged)
            {
              // if selection was set then we want to override
              // the default style precedence
              if (selected)
              {
                this._updateRowCellsClass(rowIdx, {hover: false, focused: false, selected: true});
              }
              else
              {
                this._updateRowCellsClass(rowIdx, {selected: false});
              }
            }
            // save it
            this._setLastRowSelection(rowIdx, selected);

            // update the acc checkbox
            var accSelectionCell = this._getTableDomUtils().getTableBodyCellAccSelect(tableBodyRow);
            var accSelectCheckbox = $(accSelectionCell.children('.' + oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_ROW_CLASS)[0]);
            accSelectCheckbox.prop('checked', selected);

            if (updateSelection)
            {
              var selection = this._getSelection();
              this.option('selection', selection, {'_context': {writeback: true, internalSet: true}});
            }
          }
        }
      },
      /**
       * Sets selection
       * @param {Object} selection
       * @private	 
       */
      _setSelection: function(selection)
      { 
        if (selection == null)
        {
          this._clearSelectedRows();
          this._clearSelectedHeaderColumns();
          return;
        }

        // we need to set the selection
        var i, j, rangeObj, startRowKey, endRowKey, startRowIndex, endRowIndex, startRowIdx, endRowIdx, startColumnIdx, endColumnIdx;
        for (i = 0; i < selection.length; i++)
        {
          rangeObj = selection[i];

          if ((rangeObj['startKey'] == null && rangeObj['startIndex'] == null) || 
              (rangeObj['endKey'] == null && rangeObj['endIndex'] == null))
          {
            oj.Logger.error('Error: Invalid range object in selection. Both start and end objects must be specified');
            return null;
          }
          
          startRowKey = null;
          endRowKey = null; 
          startRowIndex = null;
          endRowIndex = null;
          startRowIdx = null;
          endRowIdx = null;
          startColumnIdx = null;
          endColumnIdx = null;

          // if keys are specified, we get the index from the key
          if (rangeObj['startKey'] != null && rangeObj['startKey']['row'] != null)
          {
            startRowIndex = this._getDataSourceRowIndexForRowKey(rangeObj['startKey']['row']);
          }
          if (rangeObj['endKey'] != null && rangeObj['endKey']['row'] != null)
          {
            endRowIndex = this._getDataSourceRowIndexForRowKey(rangeObj['endKey']['row']);
          }
          if (rangeObj['startKey'] != null && rangeObj['startKey']['column'] != null)
          {
            startColumnIdx = this._getColumnIdxForColumnKey(rangeObj['startKey']['column']);
          }
          if (rangeObj['endKey'] != null && rangeObj['endKey']['column'] != null)
          {
            endColumnIdx = this._getColumnIdxForColumnKey(rangeObj['endKey']['column']);
          }

          if (startRowIndex == null && rangeObj['startIndex'] != null)
          {
            startRowIndex = rangeObj['startIndex']['row'];
          }
          if (endRowIndex == null && rangeObj['endIndex'] != null)
          {
            endRowIndex = rangeObj['endIndex']['row'];
          }
          if (startColumnIdx == null && rangeObj['startIndex'] != null)
          {
            startColumnIdx = rangeObj['startIndex']['column'];
          }
          if (endColumnIdx == null && rangeObj['endIndex'] != null)
          {
            endColumnIdx = rangeObj['endIndex']['column'];
          }

          if (startRowIndex != null && endRowIndex != null && startColumnIdx != null && endColumnIdx != null)
          {
            oj.Logger.error('Error: Invalid range object in selection - Can only support row or column selection. Not both');
            return null;
          }
          if (startRowIndex != null && startRowIndex >= 0 && endRowIndex != null && endRowIndex >= 0)
          {
            // this is a row based selection
            startRowKey = this._getRowKeyForDataSourceRowIndex(startRowIndex);
            endRowKey = this._getRowKeyForDataSourceRowIndex(endRowIndex);
            startRowIdx = this._getRowIdxForRowKey(startRowKey);
            endRowIdx = this._getRowIdxForRowKey(endRowKey);
            for (j = startRowIdx; j <= endRowIdx; j++)
            {
              try
              {
                this._setRowSelection(j, true, null, null, false);
              }
              catch (e)
              {
                oj.Logger.error('Error: ' + e);
              }
            }
          }
          else if (startColumnIdx != null && endColumnIdx != null)
          {
            // this is a column based selection
            for (j = startColumnIdx; j <= endColumnIdx; j++)
            {
              try
              {
                this._setHeaderColumnSelection(j, true, null, null, false);
              }
              catch (e)
              {
                oj.Logger.error('Error: ' + e);
              }
            }
          }
          else
          {
            oj.Logger.error('Error: Invalid range object in selection - \n start row: ' + startRowIndex + '\n' + 'end row: ' + endRowIndex+ '\n' + 'start column: ' + startColumnIdx + '\n' + 'end column: ' + endColumnIdx);
            return null;
          }
        }
      },
      /**
       * Set whether the component is in table navigation mode
       * @param {boolean} value true or false
       * @private
       */
      _setTableNavigationMode: function(value)
      {
        this._tableNavMode = value;
      },
      /**
       * Show the inline message.
       * @param {string} summary
       * @param {string} detail
       * @param {number} severityLevel
       * @private
       */
      _showInlineMessage: function(summary, detail, severityLevel)
      {
        this._getTableDomUtils().setTableInlineMessage(summary, detail, severityLevel);
        var inlineMessage = this._getTableDomUtils().getTableInlineMessage();
        
        if (inlineMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY) == oj.TableDomUtils.CSS_VAL._NONE)
        {
          inlineMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._BLOCK);
          // set the table container margin to add space to display the message
          var inlineMessagePaddingLeft = parseInt(inlineMessage.css(oj.TableDomUtils.CSS_PROP._PADDING_LEFT), 10);
          var inlineMessagePaddingRight = parseInt(inlineMessage.css(oj.TableDomUtils.CSS_PROP._PADDING_RIGHT), 10);
          var tableContainer = this._getTableDomUtils().getTableContainer();
          if (severityLevel == oj.Message.SEVERITY_LEVEL['WARNING'])
          {
            tableContainer.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._WARNING);
            inlineMessage.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._WARNING);
          }
          var tableContainerWidth = tableContainer.width();
          inlineMessage.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableContainerWidth - inlineMessagePaddingLeft - inlineMessagePaddingRight + oj.TableDomUtils.CSS_VAL._PX);
          var inlineMessageHeight = inlineMessage.outerHeight();
          var tableContainerBorderBottom = parseInt(tableContainer.css(oj.TableDomUtils.CSS_PROP._BORDER_BOTTOM_WIDTH), 10);
          var tableContainerBorderLeft = parseInt(tableContainer.css(oj.TableDomUtils.CSS_PROP._BORDER_LEFT_WIDTH), 10);
          var tableContainerMarginBottom = parseInt(tableContainer.css(oj.TableDomUtils.CSS_PROP._MARGIN_BOTTOM), 10);
          tableContainerMarginBottom = tableContainerMarginBottom + tableContainerBorderBottom + inlineMessageHeight;
          tableContainer.css(oj.TableDomUtils.CSS_PROP._MARGIN_BOTTOM, tableContainerMarginBottom + oj.TableDomUtils.CSS_VAL._PX);
          inlineMessage.css(oj.TableDomUtils.CSS_PROP._BOTTOM, -1 * (tableContainerMarginBottom + tableContainerBorderBottom) + oj.TableDomUtils.CSS_VAL._PX);
          inlineMessage.css(oj.TableDomUtils.CSS_PROP._LEFT, -1 * tableContainerBorderLeft + oj.TableDomUtils.CSS_VAL._PX);
        }
      },
      /**
       * Show the 'No data to display.' message.
       * @private
       */
      _showNoDataMessage: function()
      {
        this._getTableDomUtils().createTableNoDataRow(this._getColumnDefs().length);
      },
      /**
       * Show the Fetching Data... status message.
       * @private
       */
      _showStatusMessage: function()
      {
        var statusMessage = this._getTableDomUtils().getTableStatusMessage();
        statusMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._INLINE);
        this._getTableDomUtils().refreshTableStatusPosition();
      },
      /**
       * Show the column header sort link
       * @param {number} columnIdx  column index
       * @private
       */
      _showTableHeaderColumnSortLink: function(columnIdx)
      {
        if (this._getColumnDefs()[columnIdx]['sortable'] == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

          if (!tableHeaderColumn)
          {
            return;
          }
          
          // check if the column is currently sorted
          var sorted = tableHeaderColumn.data('sorted');

          // we should only show the ascending sort link if the column is not sorted
          if (sorted == null)
          {
            var headerColumnAscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
            headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            var headerColumnAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
            headerColumnAsc.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            var headerColumnDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
            headerColumnDsc.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
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
       * Update the css class from all the cells in a column according to column state
       * @param {number} columnIdx  column index
       * @param {boolean} blur  true or false
       * @private
       */
      _updateHeaderColumnCellsClass: function(columnIdx, blur)
      {
        var state = this._getHeaderColumnState(columnIdx);
        var selected = state.selected;
        var selectedRowIdxs = this._getSelectedRowIdxs();
        var tableBodyRows = this._getTableDomUtils().getTableBodyRows();
        if (tableBodyRows != null && tableBodyRows.length > 0)
        {
          var i, j, tableBodyCell, rowSelected;
          for (i = 0; i < tableBodyRows.length; i++)
          {
            tableBodyCell = this._getTableDomUtils().getTableBodyCell(i, columnIdx);
            if (!selected)
            {
              rowSelected = false;
              for (j = 0; j < selectedRowIdxs.length; j++)
              {
                if (i == selectedRowIdxs[j])
                {
                  rowSelected = true;
                  break;
                }
              }
              if (!rowSelected)
              {
                $(tableBodyCell).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
              }
            }
            else
            {
              $(tableBodyCell).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
          }
        }
      },
      /**
       * Update the css class from all the cells in a row according to row state
       * @param {number} rowIdx  row index
       * @param {Object} state  row state
       * @param {boolean} blur  true or false
       * @private
       */
      _updateRowCellsClass: function(rowIdx, state, blur)
      {
        var tableBodyCells = this._getTableDomUtils().getTableBodyCells(rowIdx);
        var focused = state.focused;
        var selected = state.selected;
        var hover = state.hover;

        if (!tableBodyCells)
        {
          return;
        }

        if (hover != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!hover)
            {
              $(tableBodyCells[i]).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
            }
            else
            {
              $(tableBodyCells[i]).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
            }
          }
        }
        if (focused != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!focused)
            {
              $(tableBodyCells[i]).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            }
            else
            {
              $(tableBodyCells[i]).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            }
          }
        }
        if (selected != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!selected)
            {
              $(tableBodyCells[i]).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              $(tableBodyCells[i]).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
          }
        }
      },
      _setFinalTask: function(task)
      {
        this._finalTask = (task ? task.bind(this) : undefined);
      },

      _queueTask: function(task)
      {
        var self = this;
        if (!this._pendingTasks)
        {
          this._taskCount = 0;
          this._pendingTasks = Promise.resolve();
        }
        this._taskCount++;
        this._pendingTasks = this._pendingTasks
          .then(task.bind(self))
          .then(function(value)
        {
          self._taskCount--;
          if (self._taskCount == 0)
          {
            self._pendingTasks = undefined;
            if (self._finalTask)
            {
              self._finalTask();
            }
            self._trigger("ready");
          }
          return value;
        },
        function(error)
        {
          self._taskCount--;
          if (self._taskCount == 0)
          {
            self._pendingTasks = undefined;
            oj.Logger.error(error);
          }
          return Promise.reject(error);
        });

        return this._pendingTasks;
      }

      /* Later when needed
      _whenReady: function()
      {
        if (this._pendingTasks)
        {
          return this._pendingTasks;
        }
        return Promise.resolve();
      }
      */
    /**** end internal functions ****/
    }
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
     *       <td rowspan="2">Cell</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Focus on the row. If <code class="prettyprint">selectionMode</code> for rows is enabled, selects the row as well.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Press & Hold</kbd></td>
     *       <td>Display context menu</td>
     *     </tr>
     *     
     *     <tr>
     *       <td rowspan="2">Column Header</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Focus on the header. If <code class="prettyprint">selectionMode</code> for columns is enabled, selects the column as well.</td>
     *     </tr>      
     *     <tr>
     *       <td><kbd>Press & Hold</kbd></td>
     *       <td>Display context menu</td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment touchDoc - Used in touch section of classdesc, and standalone gesture doc
     * @memberof oj.ojTable
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
     *       <td rowspan="11">Cell</td>
     *       <td><kbd>Tab</kbd></td>
     *       <td>Move focus to next focusable element in row.
     *           <br>If focus is on the last focusable element in the row, move focus to first focusable element in next row.
     *           <br>If focus is on the last focusable element in the last row, move focus to next focusable element on the page (outside table).
     *       </td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+Tab</kbd></td>
     *       <td>Move focus to previous focusable element in row.
     *           <br>If focus is on the first focusable element in the row, move focus to last focusable element in previous row.
     *           <br>If focus is on the first focusable element in the first row, move focus to previous focusable element on the page (outside table).
     *       </td>
     *     </tr>
     *     <tr>
     *       <td><kbd>DownArrow</kbd></td>
     *       <td>Move focus to the next row.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+DownArrow</kbd></td>
     *       <td>Select and move focus to the next row.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>UpArrow</kbd></td>
     *       <td>Move focus to the previous row. If at the first row then move to the column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+UpArrow</kbd></td>
     *       <td>Select and move focus to the previous row.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>LeftArrow</kbd></td>
     *       <td>Do nothing.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>RightArrow</kbd></td>
     *       <td>Do nothing.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Home</kbd></td>
     *       <td>Move focus to first row.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>End</kbd></td>
     *       <td>Move focus to last row.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Space</kbd></td>
     *       <td>Select row.</td>
     *     </tr>
     *     <tr>
     *       <td rowspan="11">Column Header</td>
     *       <td><kbd>Tab</kbd></td>
     *       <td>Navigate to next focusable element on page (outside table).</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+Tab</kbd></td>
     *       <td>Navigate to previous focusable element on page (outside table).</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>DownArrow</kbd></td>
     *       <td>Move focus to the first row.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>UpArrow</kbd></td>
     *       <td>Do nothing.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>LeftArrow</kbd></td>
     *       <td>Move focus to previous column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+LeftArrow</kbd></td>
     *       <td>Select and move focus to previous column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>RightArrow</kbd></td>
     *       <td>Move focus to next column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+RightArrow</kbd></td>
     *       <td>Select and move focus to next column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Home</kbd></td>
     *       <td>Move focus to first column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>End</kbd></td>
     *       <td>Move focus to last column header.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Space</kbd></td>
     *       <td>Select column.</td>
     *     </tr>
     *   </tbody>
     * </table>
     * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
     * @memberof oj.ojTable
     */
    
    //////////////////     SUB-IDS     //////////////////

    /**
     * <p>Sub-ID for the ojTable component's cells.  See the <a href="#getNodeBySubId">getNodeBySubId</a> 
     * method for details.</p>
     * To lookup a cell the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-table-cell'</li>
     * <li><b>rowIndex</b>: the zero based absolute row index</li>
     * <li><b>columnIndex</b>: the zero based absolute column index</li>
     * </ul>       
     * 
     * @ojsubid
     * @member
     * @name oj-table-cell
     * @memberof oj.ojTable
     * @instance
     * 
     * @example <caption>Get the cell at row index 1 and column index 2:</caption>
     * var node = $( ".selector" ).ojTable( "getNodeBySubId", {'subId': 'oj-table-cell', 'rowIndex': 1, 'columnIndex': 2} );
     */

    /**
     * <p>Sub-ID for the ojTable component's headers.  See the <a href="#getNodeBySubId">getNodeBySubId</a> 
     * method for details.</p>
     * 
     *  To lookup a header the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-table-header'</li>
     * <li><b>index</b>: the zero based absolute column index.</li>
     * </ul>
     * 
     * @ojsubid
     * @member
     * @name oj-table-header
     * @memberof oj.ojTable
     * @instance
     * 
     * @example <caption>Get the header at the specified location:</caption>
     * var node = $( ".selector" ).ojTable( "getNodeBySubId", {'subId': 'oj-table-header', 'index':0} );
     */
    
    /**
     * <p>Sub-ID for the ojTable component's sort ascending icon in column headers.  See the <a href="#getNodeBySubId">getNodeBySubId</a> 
     * method for details.</p>
     * 
     * To lookup a sort icon the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-table-sort-ascending'</li>
     * <li><b>index</b>: the zero based absolute column index</li>
     * </ul>
     * 
     * @ojsubid
     * @member
     * @name oj-table-sort-ascending
     * @memberof oj.ojTable
     * @instance
     * 
     * @example <caption>Get the sort ascending icon from the header at the specified location:</caption>
     * var node = $( ".selector" ).ojTable( "getNodeBySubId", {'subId': 'oj-table-sort-ascending', 'index':0} );
     */ 
    
    /**
     * <p>Sub-ID for the ojTable component's sort descending icon in column headers.  See the <a href="#getNodeBySubId">getNodeBySubId</a> 
     * method for details.</p>
     * 
     * To lookup a sort icon the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-table-sort-descending'</li>
     * <li><b>index</b>: the zero based absolute column index</li>
     * </ul>
     * 
     * @ojsubid
     * @member
     * @name oj-table-sort-descending
     * @memberof oj.ojTable
     * @instance
     * 
     * @example <caption>Get the sort descending icon from the header at the specified location:</caption>
     * var node = $( ".selector" ).ojTable( "getNodeBySubId", {'subId': 'oj-table-sort-descending', 'index':0} );
     */
    
    /**
     * <p>Sub-ID for the ojTable component's footers.  See the <a href="#getNodeBySubId">getNodeBySubId</a> 
     * method for details.</p>
     * 
     *  To lookup a footer the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-table-footer'</li>
     * <li><b>index</b>: the zero based absolute column index.</li>
     * </ul>
     * 
     * @ojsubid
     * @member
     * @name oj-table-footer
     * @memberof oj.ojTable
     * @instance
     * 
     * @example <caption>Get the header at the specified location:</caption>
     * var node = $( ".selector" ).ojTable( "getNodeBySubId", {'subId': 'oj-table-footer', 'index':0} );
     */
  )
}());

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.FlattenedTreeTableDataSource
 * @extends oj.TableDataSource
 * @classdesc Object representing data used by the rowexpander component
 * @param {Object} data
 * @param {Object|null} options Array of options for the TreeTableDataSource
 * @constructor
 */
oj.FlattenedTreeTableDataSource = function(data, options)
{
  // Initialize
  options = options || {};

  if (!(data instanceof oj.FlattenedTreeDataSource))
  {
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }

  this._data = data;
  this._eventHandlers = [];
  this._startIndex = 0;
  this._nodeSetList = [];
  
  // override the fetchSize with -1 if not already specified.
  if (this._data.getOption('fetchSize') == null)
  {
    this._data.getFetchSize = function()
    {
      return -1;
    };
  }
  var self = this;
  // override the insert/removeRows function
  this._data.insertRows = function(insertAtIndex, insertAtKey, nodeSet)
  {
    var i, row, rowIdx, rowKey;
    var rowArray = [];
    var keyArray = [];
    var indexArray = [];
    for (i = 0; i < nodeSet.getCount(); i++)
    {
      row = nodeSet.getData(i);
      rowKey = nodeSet.getMetadata(i)['key'];
      rowIdx = insertAtIndex + i;
      self._nodeSetList[rowIdx] = {};
      self._nodeSetList[rowIdx]['nodeSet'] = nodeSet;
      self._nodeSetList[rowIdx]['startIndex'] = insertAtIndex;
      rowArray.push(row);
      keyArray.push(rowKey);
      indexArray.push(rowIdx);
      self._rows['data'].splice(rowIdx, 0, row);
      self._rows['keys'].splice(rowIdx, 0, rowKey);
      self._rows['indexes'].splice(rowIdx, 0, rowIdx);
    }
    if (!self._pageSize)
    {
      // only publish an add event if we are not paged. If we are paged then we re-fetch later anyway
      oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ADD'], {'data': rowArray, 'keys': keyArray, 'indexes': indexArray});
    }
    self._realignRowIndices();
    
    if (self._pageSize)
    {
      setTimeout(function(){
        self.fetch();
      }, 0);
    }
  };
  this._data.removeRows = function(rowKeys)
  {
    var i, row, rowIdx;
    var rowArray = [];
    var keyArray = [];
    var indexArray = [];
    for (i = 0; i < rowKeys.length; i++)
    {
      // indices shift down as we remove
      rowIdx = rowKeys[i].index - i;
      // just create a dummy row for deletion
      rowArray.push('');
      keyArray.push('');
      indexArray.push(rowIdx);
      self._rows['data'].splice(rowIdx, 1);
      self._rows['keys'].splice(rowIdx, 1);
      self._rows['indexes'].splice(rowIdx, 1);
    }
    if (!self._pageSize)
    {
      // only publish an remove event if we are not paged. If we are paged then we re-fetch later anyway
      oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REMOVE'], {'data': rowArray, 'keys': keyArray, 'indexes': indexArray});
    }
    self._realignRowIndices();
    
    if (self._pageSize)
    {
      setTimeout(function(){
        self.fetch();
      }, 0);
    }
  };
  
  this.Init();
  
  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    this._startFetchEnabled = true;
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.FlattenedTreeTableDataSource, oj.TableDataSource, "oj.FlattenedTreeTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.Init = function()
{
  oj.FlattenedTreeTableDataSource.superclass.Init.call(this);
};

/**
 * Determines whether this FlattenedTreeTableDataSource supports certain feature.
 * @override
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.getCapability = function(feature)
{
    return 'full';
};

/**
 * Retrieves the underlying DataSource.
 * @return {Object} the underlying oj.DataSource.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.getWrappedDataSource = function()
{
    return this._data;
};

/**
 * Fetch the row data.
 * @param {Object=} options Options to control fetch
 * @param {number} options.startIndex The index at which to start fetching records.
 * @param {boolean} options.silent If set, do not fire a sync event.
 * @return {Promise} Promise object resolves to a compound object which contains an array of row data objects, an array of ids, and the startIndex triggering done when complete.<p>
 *         The structure of the resolved compound object is:<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
 * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
 * <tr><td><b>startIndex</b></td><td>The startIndex for the returned set of rows</td></tr>
 * </tbody>
 * </table>  
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  var self = this;
  var fetchType = options['fetchType'];
  
  if (fetchType == 'init' && !this._startFetchEnabled)
  {
      return Promise.resolve();
  }

  return self._fetchInternal(options);
};




/**** start delegated functions ****/

/**
 * Return the row data found at the given index.
 * 
 * @param {number} index Index for which to return the row data. 
 * @param {Object=} options Options to control the at.
 * @return {Promise} Promise resolves to a compound object which has the structure below. If the index is out of range, Promise resolves to null.<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>The raw row data</td></tr>
 * <tr><td><b>index</b></td><td>The index for the row</td></tr>
 * <tr><td><b>key</b></td><td>The key value for the row</td></tr>
 * </tbody>
 * </table>
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.at = function(index, options)
{
  var row;

  if (index < 0 || index >= this._rows.length)
  {
    row = null;
  }
  else
  {
    row = {'data': this._rows['data'][index], 'index': index, 'key': this._rows['keys'][index]};
  }

  return new Promise(function(resolve, reject) {
    resolve(row);
  });
};

/**
 * Collapse the specified row.
 * @param {Object} rowKey the key of the row to collapse
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.collapse = function(rowKey)
{
  this._data.collapse(rowKey);
};


/**
 * Expand the specified row.
 * @param {Object} rowKey the key of the row to expand
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.expand = function(rowKey)
{
  this._data.expand(rowKey);
};

/**
 * Return the first row data whose id value is the given id
 * @param {string} id ID for which to return the row data, if found. 
 * @param {Object=} options Options to control the get.
 * @return {Promise} Promise which resolves to a compound object which has the structure below where the id matches the given id. If none are found, resolves to null.<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>The raw row data</td></tr>
 * <tr><td><b>index</b></td><td>The index for the row</td></tr>
 * <tr><td><b>key</b></td><td>The key value for the row</td></tr>
 * </tbody>
 * </table>
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.get = function(id, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Attach an event handler to the datasource
 * 
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.on = function(eventType, eventHandler)
{
  if (eventType == 'expand' ||
      eventType == 'collapse')
  {
    // expand/collapse listeners should be passed through to the FlattenedTreeDatasource
    this._data.on(eventType, eventHandler);
  }
  else
  {
    oj.FlattenedTreeTableDataSource.superclass.on.call(this, eventType, eventHandler);
  }
};

/**
 * Detach an event handler from the datasource
 * 
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.off = function(eventType, eventHandler)
{
  if (eventType == 'expand' ||
      eventType == 'collapse')
  {
    // expand/collapse listeners should be passed through to the FlattenedTreeDatasource
    this._data.off(eventType, eventHandler);
  }
  else
  {
    oj.FlattenedTreeTableDataSource.superclass.off.call(this, eventType, eventHandler);
  }
};

/**
 * Performs a sort on the data source.
 * @override
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.sort = function(criteria)
{
  if (criteria == null)
  {
      return Promise.resolve();
  }
  
  var self = this;
  criteria['axis'] = 'column';
  return new Promise(function(resolve, reject) 
  {
    self._data.getWrappedDataSource().sort(criteria,
      {"success": function(nodeSet)
        {
          setTimeout(function()
          {
            self._data.refresh();
            self._rows = null;
            var result = {'header': criteria['key'], 'direction': criteria['direction']};
            oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SORT'], result);
            resolve(result);
          }, 0);
        }.bind(this),
        "error": function(status)
        {
          //this._handleFetchRowsError(status, {'start': rowStart, 'count': rowCount}, callbacks, callbackObjects);
          reject(status);
        }.bind(this)
      });
  });
};

/**
 * Return the total size of data available, including server side if not local.
 * @override
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.totalSize = function()
{
  return -1;
};

/**** end delegated functions ****/

oj.FlattenedTreeTableDataSource.prototype._getMetadata = function(index)
{
    
  return this._nodeSetList[index]['nodeSet'].getMetadata(index - this._nodeSetList[index]['startIndex']);
}

oj.FlattenedTreeTableDataSource.prototype._fetchInternal = function(options)
{
  options = options || {};
  this._startFetch(options);
  this._startIndex = options['startIndex'] == null ? this._startIndex : options['startIndex'];
  
  // if pageSize is not specified then fetch everything
  var rangeCount = Number.MAX_VALUE;
  
  this._pageSize = options['pageSize'] == null ? this._pageSize : options['pageSize'];
  if (this._pageSize != null)
  {
    rangeCount = this._pageSize;
  }
  
  var startIndex = this._startIndex;
  if (this._rows != null)
  {
    if (this._pageSize != null)
    {
      var endIndex = this._rows['data'].length - 1;

      if (this._startIndex + this._pageSize - 1 <= endIndex)
      {
        endIndex = oj.FlattenedTreeTableDataSource._getEndIndex(this._rows, this._startIndex, this._pageSize);
        var rowArray = [];
        var keyArray = [];
        var i;
        for (i = this._startIndex; i <= endIndex; i++)
        {
          rowArray[i - this._startIndex] = this._rows['data'][i];
          keyArray[i - this._startIndex] = '';
        }
        var result = {'data': rowArray, 'keys': keyArray, 'startIndex': this._startIndex};
        this._endFetch(options, result, null);
        return Promise.resolve(result);
      }
      else if (this._startIndex <= endIndex)
      {
        startIndex = endIndex + 1;
      }
    }
    else
    {
      // we are fetching everything again so clear out the existing cached rows
      this._data.refresh();
      this._rows = null;
    }
  }
  
  var rangeOption = {'start': startIndex, 'count':  rangeCount};
  var self = this;
  return new Promise(function(resolve, reject) 
  {
    self._data.fetchRows(rangeOption,
    {
      "success": function(nodeSet)
      {
        self._handleFetchRowsSuccess(nodeSet);
        options['refresh'] = true;
        var endIndex = oj.FlattenedTreeTableDataSource._getEndIndex(self._rows, self._startIndex, self._pageSize);
        var rowArray = [];
        var keyArray = [];
        var i;
        for (i = self._startIndex; i <= endIndex; i++)
        {
          rowArray[i - self._startIndex] = self._rows['data'][i];
          keyArray[i - self._startIndex] = nodeSet.getMetadata(i)['key'];
        }
        var result = {'data': rowArray, 'keys': keyArray, 'startIndex': self._startIndex};
        self._endFetch(options, result, null);
        resolve(result);
      }.bind(this),
      "error": function(error)
      {
        self._endFetch(options, null, error);
        reject(error);
      }.bind(this)
    });
  });
};

oj.FlattenedTreeTableDataSource.prototype._handleFetchRowsSuccess = function(nodeSet)
{
  var i, rowIdx;
  for (i = 0; i < nodeSet.getCount(); i++)
  {
    rowIdx = this._startIndex + i;
    this._nodeSetList[rowIdx] = {};
    this._nodeSetList[rowIdx]['nodeSet'] = nodeSet;
    this._nodeSetList[rowIdx]['startIndex'] = this._startIndex;
  }

  if (!this._rows)
  {
    this._rows = {};
    this._rows['data'] = [];
    this._rows['keys'] = [];
    this._rows['indexes'] = [];
  }
  oj.FlattenedTreeTableDataSource._getRowArray(nodeSet, this, this._rows);
};

/**
 * Indicate starting fetch
 * @param {Object} options
 * @private
 */
oj.FlattenedTreeTableDataSource.prototype._startFetch = function(options)
{
  if (!options['silent'])
  {
    oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['REQUEST'], {'startIndex' : options['startIndex']});
  }
};

/**
 * Indicate ending fetch
 * @param {Object} options
 * @param {Object} result Result object
 * @param {Object} error Error
 * @private
 */
oj.FlattenedTreeTableDataSource.prototype._endFetch = function(options, result, error)
{
  if (error != null)
  {
    oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['ERROR'], error);
  }
  else
  {
    if (!options['silent'])
    {
      oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['SYNC'],  result);
    }
  }
};

oj.FlattenedTreeTableDataSource._getEndIndex = function(rows, startIndex, pageSize)
{
  var endIndex = rows['data'].length - 1;
  
  if (pageSize > 0)
  {
    endIndex = startIndex + pageSize - 1;
    endIndex = endIndex > rows['data'].length - 1 ? rows['data'].length - 1 : endIndex;
  }
  
  return endIndex;
};

oj.FlattenedTreeTableDataSource._getRowArray = function(nodeSet, rowSet, rows)
{
  var endIndex = nodeSet.getCount() - 1;
  var startIndex = nodeSet.getStart();

  var i;
  for (i = startIndex; i <= endIndex; i++)
  {
    var row = nodeSet.getData(i);
    rows['data'][i] = row;
    rows['keys'][i] = '';
    rows['indexes'][i] = i;
  }
};

// Realign all the indices of the rows (after sort for example)
oj.FlattenedTreeTableDataSource.prototype._realignRowIndices = function()
{
  for (var i = 0; i < this._rows['data'].length; i++)
  {
    this._rows['indexes'][i] = i;
  }
};
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @ignore
 * @export
 * @class oj.TableDomUtils
 * @classdesc DOM Utils for ojTable
 * @param {Object} component ojTable instance
 * @constructor
 */
oj.TableDomUtils = function(component)
{
  this.component = component;
  this.options = component['options'];
  this.element = component['element'];
  this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.TableDomUtils, oj.Object, "oj.TableDomUtils");

/**
 * Initializes the instance.
 * @export
 */
oj.TableDomUtils.prototype.Init = function()
{
  oj.TableDomUtils.superclass.Init.call(this);
};

/**
 * Clear any cached DOM
 * @private
 */
oj.TableDomUtils.prototype.clearCachedDom = function()
{
  this.clearCachedDomRowData();
  this._tableDimensions = null;
}

/**
 * Clear any cached DOM rows
 * @private
 */
oj.TableDomUtils.prototype.clearCachedDomRowData = function()
{
  this._cachedDomTableBodyRows = null;
}

/**
 * Create a span element for acc purposes
 * @param {string} text span text
 * @param {string|null} className css class
 * @return {jQuery} jQuery span DOM element
 */
oj.TableDomUtils.prototype.createAccLabelSpan = function(text, className)
{
  var accLabel = $(document.createElement('span'));
  if (className != null)
  {
    accLabel.addClass(className);
  }
  accLabel.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  accLabel.text(text);

  return accLabel;
};

/**
 * Add a default context menu to the table container if there is none. If there is
 * a context menu set on the table options we use that one. Add listeners
 * for context menu before show and select.
 * @param {function(Object)} handleContextMenuSelect function called for menu select
 * @return {jQuery} jQuery ul DOM element
 */
oj.TableDomUtils.prototype.createContextMenu = function(handleContextMenuSelect)
{
  var menuContainer = null;
  var self = this;

  if (this.options["contextMenu"] != null || this.getTable().attr("contextmenu") != null)
  {
    var menuContainerId = this.getContextMenuId();
    menuContainer = $(menuContainerId);
    if (menuContainer != null && menuContainer.length > 0)
    {
      var listItems = menuContainer.find('[data-oj-command]');
      
      if (listItems != null && listItems.length > 0)
      {
        var command;
        listItems.each(function() {
          if ($(this).children(oj.TableDomUtils.DOM_ELEMENT._A).length === 0)
          {
            command = $(this).attr('data-oj-command').split("-");
            $(this).replaceWith(self.createContextMenuItem(command[command.length - 1]));
          }
        });
        this._menuContainer = menuContainer;
        this.component._contextMenuId = menuContainerId;
        menuContainer.ojMenu('refresh');
        menuContainer.on("ojselect", handleContextMenuSelect);
      }
    }
  }
  else if (this.component._isTableSortable())
  {
    menuContainer = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._UL));
    menuContainer.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._NONE);
    menuContainer.attr(oj.TableDomUtils.DOM_ATTR._ID, this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + '_contextmenu');
    this.getTableContainer().append(menuContainer); //@HTMLUpdateOK
    var sortMenu = this.createContextMenuItem('sort');
    menuContainer.append(sortMenu); //@HTMLUpdateOK
    menuContainer.ojMenu();
    this._menuContainer = menuContainer;
    this.component._contextMenuId = '#' + menuContainer.attr(oj.TableDomUtils.DOM_ATTR._ID);
    menuContainer.on("ojselect", handleContextMenuSelect);
    this.component._setOption("contextMenu", '#' + menuContainer.attr(oj.TableDomUtils.DOM_ATTR._ID));
  }
  
  return menuContainer;
};

/**
 * Builds a menu for a command, takes care of submenus where appropriate
 * @return {jQuery} jQuery li DOM element
 */
oj.TableDomUtils.prototype.createContextMenuItem = function(command)
{
  if (command === 'sort')
  {
    return $(this.createContextMenuListItem(command)).append($('<ul></ul>').append($(this.createContextMenuListItem('sortAsc'))).append($(this.createContextMenuListItem('sortDsc')))); //@HTMLUpdateOK
  }
  return null;
};

/**
 * Builds a context menu list item from a command
 * @param {string} command the string to look up command value for as well as translation
 * @return {jQuery} jQuery li DOM element 
 */
oj.TableDomUtils.prototype.createContextMenuListItem = function(command)
{
  var contextMenuListItem = $(document.createElement('li'));
  contextMenuListItem.attr('data-oj-command', 'oj-table-' + command);
  contextMenuListItem.append(this.createContextMenuLabel(command)); //@HTMLUpdateOK

  return contextMenuListItem;
};

/**
 * Builds a context menu label by looking up command translation
 * @param {string} command the string to look up translation for
 * @return {jQuery} jQuery a DOM element
 */
oj.TableDomUtils.prototype.createContextMenuLabel = function(command)
{
  var contextMenuLabel = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._A));
  contextMenuLabel.attr(oj.TableDomUtils.DOM_ATTR._HREF, '#');
  var commandString = null;
  if (command == 'sort')
  {
    commandString = this.component.getTranslatedString('labelSort');
  }
  else if (command == 'sortAsc')
  {
    commandString = this.component.getTranslatedString('labelSortAsc');
  }
  else if (command == 'sortDsc')
  {
    commandString = this.component.getTranslatedString('labelSortDsc');
  }
  contextMenuLabel.text(commandString);

  return contextMenuLabel;
};

/**
 * Create the initial empty table
 * @param {boolean} isTableHeaderless is table headerless
 * @param {boolean} isTableFooterless is table footerless
 * @return {jQuery} jQuery table DOM element
 */
oj.TableDomUtils.prototype.createInitialTable = function(isTableHeaderless, isTableFooterless)
{
  var table = this.getTable();
  this.createTableContainer();
  // we only need a scroller div if we are using fallback scrolling
  if (this.isDivScroller())
  {
    this.createTableDivScroller();
  }

  if (!isTableHeaderless)
  {
    this.createTableHeader();
  }
  if (!isTableFooterless)
  {
    this.createTableFooter();
  }
  this.createTableBody();
  this.createTableStatusMessage();
  this.createTableInlineMessage();

  return table;
};

/**
 * Create an empty tbody element with appropriate styling
 * @return {jQuery} jQuery tbody DOM element
 */
oj.TableDomUtils.prototype.createTableBody = function()
{
  var table = this.getTable();
  var tableBody = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TBODY));
  table.append(tableBody); //@HTMLUpdateOK
  this._cachedDomTableBody = tableBody;

  return tableBody;
};

/**
 * Create an empty td element with appropriate styling
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableBodyCell = function(rowIdx, columnIdx)
{
  var tableBodyCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TD));

  return tableBodyCell;
};

/**
 * Create a checkbox for accessibility row selection
 * @param {number} rowIdx  row index
 * @param {Object} rowKey  row key
 * @param {jQuery} tableBodyRow  tr DOM element
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableBodyCellAccSelect = function(rowIdx, rowKey, tableBodyRow)
{
  var accSelectionCell = this.getTableBodyCellAccSelect(tableBodyRow);
  var isTableHeaderless = this.getTableHeader() == null ? true : false;

  if (accSelectionCell != null)
  {
    return accSelectionCell;
  }
  
  var rowKeyStr = rowKey != null ? rowKey.toString() : rowIdx.toString();

  accSelectionCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TD));
  accSelectionCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);
  accSelectionCell.css('padding', '0');
  accSelectionCell.css('border', '0');
  if (!isTableHeaderless)
  {
    accSelectionCell.attr(oj.TableDomUtils.DOM_ATTR._HEADERS, this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':' + oj.TableDomUtils._COLUMN_HEADER_ROW_SELECT_ID);
  }
  var accSelectCheckbox = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._INPUT));
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._ID, this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':acc_sel_row_' + this.hashCode(rowKeyStr));
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._TYPE, 'checkbox');
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._TABINDEX, '-1');
  var selectRowTitle = this.component.getTranslatedString(this.component._BUNDLE_KEY._LABEL_SELECT_ROW);
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._TITLE, selectRowTitle);
  accSelectCheckbox.addClass(oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_ROW_CLASS);
  accSelectCheckbox.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  accSelectionCell.append(accSelectCheckbox); //@HTMLUpdateOK
  tableBodyRow.prepend(accSelectionCell); //@HTMLUpdateOK

  return accSelectionCell;
};

/**
 * Create an empty tr element with appropriate styling
 * @param {number} rowIdx  row index
 * @param {Object} rowKey  row key
 * @return {jQuery} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.createTableBodyRow = function(rowIdx, rowKey)
{
  var tableBodyRow = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TR));
  this.createTableBodyCellAccSelect(rowIdx, rowKey, tableBodyRow);
  
  return tableBodyRow;
};

/**
 * Create an empty div element with appropriate styling
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableContainer = function()
{
  var options = this.options;
  // need to enclose the table in a div to provide horizontal scrolling
  var tableContainer = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._DIV));
  this.element.parent()[0].replaceChild(tableContainer[0], this.element[0]);
  tableContainer.prepend(this.element); //@HTMLUpdateOK
  this._cachedDomTableContainer = tableContainer;

  return tableContainer;
};

/**
 * Create an empty tfoot with appropriate styling
 * @return {jQuery} jQuery tfoot DOM element
 */
oj.TableDomUtils.prototype.createTableFooter = function()
{
  var table = this.getTable();
  var tableFooter = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TFOOT));
  var tableFooterRow = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TR));
  this.createTableFooterAccSelect(tableFooterRow);

  tableFooter.append(tableFooterRow); //@HTMLUpdateOK
  
  // check if thead is already there. If so add relative to thead.
  var tableHeader = this.getTableHeader();
  if (tableHeader != null)
  {
    tableHeader.after(tableFooter);
  }
  else
  {
    // check if tbody is already there. If so add relative to tbody.
    var tableBody = this.getTableBody();
    if (tableBody != null)
    {
      tableBody.before(tableFooter);
    }
    else
    {
      table.append(tableFooter); //@HTMLUpdateOK
    }
  }

  return tableFooter;
};

/**
 * Create a checkbox for accessibility row selection
 * @param {jQuery} tableFooterRow  tr DOM element
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableFooterAccSelect = function(tableFooterRow)
{
  var accFooterCell = tableFooterRow.children('.' + oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);

  if (accFooterCell != null && accFooterCell.length > 0)
  {
    return $(accFooterCell[0]);
  }
  accFooterCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TD));
  accFooterCell.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  accFooterCell.attr(oj.TableDomUtils.DOM_ATTR._TABINDEX, '-1');
  tableFooterRow.prepend(accFooterCell); //@HTMLUpdateOK

  return accFooterCell;
};

/**
 * Create an empty td element with appropriate styling
 * @param {number} columnIdx  column index
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableFooterCell = function(columnIdx)
{
  var tableFooterCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TD));

  return tableFooterCell;
};

/**
 * Create an empty thead & tr element with appropriate styling
 * @return {jQuery} jQuery thead DOM element
 */
oj.TableDomUtils.prototype.createTableHeader = function()
{
  var table = this.getTable();
  var tableHeader = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._THEAD));
  var tableHeaderRow = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TR));
  this._cachedDomTableHeaderRow = tableHeaderRow;
  tableHeader.append(tableHeaderRow); //@HTMLUpdateOK
  
  // check if tfoot is already there. If so add relative to tfoot.
  var tableFooter = this.getTableFooter();
  if (tableFooter != null)
  {
    tableFooter.before(tableHeader);
  }
  else
  {
    // check if tbody is already there. If so add relative to tbody.
    var tableBody = this.getTableBody();
    if (tableBody != null)
    {
      tableBody.before(tableHeader);
    }
    else
    {
      table.append(tableHeader); //@HTMLUpdateOK
    }
  }
  this._cachedDomTableHeader = tableHeader;
  
  return tableHeader;
};

/**
 * Create a th element for accessibility row selection
 * @return {jQuery} jQuery th DOM element
 */
oj.TableDomUtils.prototype.createTableHeaderAccSelectRowColumn = function()
{
  var headerColumn = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TH));
  headerColumn.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS);
  headerColumn.attr(oj.TableDomUtils.DOM_ATTR._ID, this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':' + oj.TableDomUtils._COLUMN_HEADER_ROW_SELECT_ID);
  var selectRowTitle = this.component.getTranslatedString(this.component._BUNDLE_KEY._LABEL_SELECT_ROW);
  headerColumn.attr(oj.TableDomUtils.DOM_ATTR._TITLE, selectRowTitle);
  headerColumn.css('padding', '0');
  headerColumn.css('border', '0');
  var headerColumnText = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._SPAN));
  headerColumnText.text(selectRowTitle);
  headerColumnText.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  headerColumn.append(headerColumnText); //@HTMLUpdateOK

  return headerColumn;
};

/**
 * Create a th element with appropriate styling and column content
 * @param {number} columnIdx  column index
 * @param {string} columnSelectionMode  column selection mode
 * @return {jQuery} jQuery th DOM element
 */
oj.TableDomUtils.prototype.createTableHeaderColumn = function(columnIdx, columnSelectionMode)
{
  var column = this.component._getColumnDefs()[columnIdx];
  var headerColumnCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TH));
  this.styleTableHeaderColumn(columnIdx, headerColumnCell, columnSelectionMode, true);
  // add abbr for acc
  headerColumnCell.attr('abbr', column.headerText);
  // add title for tooltip
  headerColumnCell.attr(oj.TableDomUtils.DOM_ATTR._TITLE, column.headerText);
  this.insertTableHeaderColumn(columnIdx, headerColumnCell);
  var headerContext = {'columnIndex' : columnIdx, 'headerContext': {'component': this.component, 'parentElement': headerColumnCell}};
  var headerTextRenderer = function(headerContentDiv)
  {
    headerContentDiv.text(column.headerText);
  }
  
  if (column.sortable == oj.TableDomUtils._OPTION_ENABLED)
  {
    headerColumnCell.attr('data-oj-sortable', oj.TableDomUtils._OPTION_ENABLED);
    oj.TableRendererUtils.columnHeaderSortableIconRenderer(headerContext, null, headerTextRenderer);
  }
  else
  {
    oj.TableRendererUtils.columnHeaderDefaultRenderer(headerContext, null, headerTextRenderer);
  }
  
  return headerColumnCell;
};

/**
 * Create a checkbox for accessibility column selection
 * @param {number} columnIdx  column index
 * @param {string} columnSelectionMode  column selection mode
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableHeaderColumnAccSelect = function(columnIdx, columnSelectionMode)
{
  if (columnSelectionMode != oj.TableDomUtils._OPTION_SELECTION_MODES._SINGLE &&
    columnSelectionMode != oj.TableDomUtils._OPTION_SELECTION_MODES._MULTIPLE)
  {
    return null;
  }
  var headerColumn = this.getTableHeaderColumn(columnIdx);
  var accSelectionHeaderColumn = this.getTableHeaderColumnAccSelect(columnIdx);

  if (accSelectionHeaderColumn != null)
  {
    return accSelectionHeaderColumn;
  }

  accSelectionHeaderColumn = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._DIV));
  accSelectionHeaderColumn.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS);
  accSelectionHeaderColumn.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  var accSelectCheckbox = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._INPUT));
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._ID, this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':acc_sel_col' + columnIdx);
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._TYPE, 'checkbox');
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._TABINDEX, '-1');
  var selectColumnTitle = this.component.getTranslatedString(this.component._BUNDLE_KEY._LABEL_SELECT_COLUMN);
  accSelectCheckbox.attr(oj.TableDomUtils.DOM_ATTR._TITLE, selectColumnTitle);
  accSelectCheckbox.addClass(oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_COLUMN_CLASS);
  accSelectionHeaderColumn.append(accSelectCheckbox); //@HTMLUpdateOK
  headerColumn.prepend(accSelectionHeaderColumn); //@HTMLUpdateOK

  return accSelectionHeaderColumn;
};

/**
 * Create a div element for table scrolling. Used in scrolling fallback mode.
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableDivScroller = function()
{
  var table = this.getTable();
  var tableContainer = this.getTableContainer();
  var tableDivScroller = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._DIV));
  tableDivScroller.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_SCROLLER_CLASS);
  tableContainer[0].replaceChild(tableDivScroller[0], table[0]);
  tableDivScroller.append(table); //@HTMLUpdateOK
  this._cachedDomTableDivScroller = tableDivScroller;

  return tableDivScroller;
};

/**
 * Create the no data message with appropriate styling
 * @param {number} columnCount  number of visible columns
 * @return {jQuery} jQuery row DOM element
 */
oj.TableDomUtils.prototype.createTableNoDataRow = function(columnCount)
{
  var tableBody = this.getTableBody();
  var tableNoDataRow = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TR));
  tableNoDataRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_NO_DATA_ROW_CLASS);

  this.createTableNoDataAccSelect(tableNoDataRow);
  this.createTableNoDataCell(tableNoDataRow, columnCount);

  tableBody.append(tableNoDataRow); //@HTMLUpdateOK
  return tableNoDataRow;
};

/**
 * Create a cell for accessibility row selection
 * @param {jQuery} tableNoDataRow  tr DOM element
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableNoDataAccSelect = function(tableNoDataRow)
{
  var accNoDataCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TD));
  accNoDataCell.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  accNoDataCell.attr(oj.TableDomUtils.DOM_ATTR._TABINDEX, '-1');
  tableNoDataRow.prepend(accNoDataCell); //@HTMLUpdateOK

  return accNoDataCell;
};

/**
 * Create the no data td element with appropriate styling and message
 * @param {jQuery} tableNoDataRow the no data row
 * @param {number} columnCount  number of visible columns
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableNoDataCell = function(tableNoDataRow, columnCount)
{
  var noDataCell = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._TD));
  noDataCell.attr(oj.TableDomUtils.DOM_ATTR._COLSPAN, columnCount || 1);
  noDataCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_NO_DATA_MESSAGE_CLASS);

  var emptyTextMsg = null;
  if (this.options['emptyText'] != null)
  {
    emptyTextMsg = this.options['emptyText'];
  }
  else
  {
    emptyTextMsg = this.component.getTranslatedString(this.component._BUNDLE_KEY._MSG_NO_DATA);
  }
  noDataCell.text(emptyTextMsg);

  tableNoDataRow.append(noDataCell);
  return noDataCell;
};

/**
 * Create a div element for inline messages
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableInlineMessage = function()
{
  var tableContainer = this.getTableContainer();
  var inlineMessage = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._DIV));
  inlineMessage.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_INLINE_MESSAGE_CLASS);
  inlineMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._NONE);
  tableContainer.append(inlineMessage); //@HTMLUpdateOK
  this._cachedDomTableInlineMessage = inlineMessage;
  
  return inlineMessage;
};

/**
 * Create a div element for the Fetching Data... status message
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableStatusMessage = function()
{
  var tableContainer = this.getTableContainer();
  var statusMessage = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._DIV));
  statusMessage.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
  statusMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._NONE);
  var statusMessageText = $(document.createElement(oj.TableDomUtils.DOM_ELEMENT._DIV));
  statusMessageText.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_TEXT_CLASS);
  statusMessageText.text(this.component.getTranslatedString(this.component._BUNDLE_KEY._MSG_FETCHING_DATA));
  statusMessage.append(statusMessageText);
  tableContainer.append(statusMessage); //@HTMLUpdateOK
  this._cachedDomTableStatusMessage = statusMessage;

  return statusMessage;
};

/**
 * Get the context menu
 * @return  {jQuery} jQuery table DOM element
 */
oj.TableDomUtils.prototype.getContextMenu = function()
{
  return this._menuContainer;
};

/**
 * Get the context menu id
 * @return  {string} context menu id
 */
oj.TableDomUtils.prototype.getContextMenuId = function()
{
  return this.options["contextMenu"] == null ? '#' + this.getTable().attr("contextmenu") : this.options["contextMenu"];
};

/**
 * Get the column index of the DOM element. e.g. pass in the table cell to
 * see which column it's in.
 * @param {jQuery} element  DOM element
 * @return {number|null} the column index
 * @private
 */
oj.TableDomUtils.prototype.getElementColumnIdx = function(element)
{
  var tableBodyCell = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);
  if (tableBodyCell != null)
  {
    return tableBodyCell.parent().children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS).index(tableBodyCell);
  }
  
  var tableHeaderColumn = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);
  if (tableHeaderColumn != null)
  {
    return tableHeaderColumn.parent().children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS).index(tableHeaderColumn);
  }
  
  var tableFooterCell = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);
  if (tableFooterCell != null)
  {
    return tableFooterCell.parent().children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS).index(tableFooterCell);
  }
  return null;
};

/**
 * Get the row index of the DOM element. e.g. pass in the table cell to
 * see which row it's in.
 * @param {jQuery} element  DOM element
 * @return {number} the row index
 * @private
 */
oj.TableDomUtils.prototype.getElementRowIdx = function(element)
{
  var tableBodyRow = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
  
  return tableBodyRow.index();
};

/**
  * Find the first ancestor of an element with a specific class name
  * @param {jQuery} element the element to find the nearest class name to
  * @param {string} className the class name to look for
  * @return {jQuery|null} the element with the className, if there is none returns null 
  */
oj.TableDomUtils.prototype.getFirstAncestor = function(element, className) 
{
  var parents;
  
  if (element == null)
  {
    return null;
  }
  element = $(element);

  if (element.hasClass(className))
  {
    return element;
  }
  parents = element.parents('.' + className);
  if (parents.length != 0)
  {
    return parents.eq(0);
  }
  return null;
};

/**
  * Get the context object to pass into the renderer
  * @param {Object} row row instance
  * @param {Object} parentElement element
  * @private
  */
oj.TableDomUtils.prototype.getRendererContextObject = function(row, parentElement)
{
  var context = {};
  context['component'] = this.component;
  var dataSource = this.component._getData();
  // unwrap the datasource if we have a PagingTableDataSource
  if (dataSource instanceof oj.PagingTableDataSource)
  {
    dataSource = dataSource.getWrappedDataSource();
  }
  context['datasource'] = dataSource;
  context['parentElement'] = parentElement;

  if (row != null)
  {
    context['status'] = this.getRendererStatusObject(row);
    
    if (dataSource instanceof oj.FlattenedTreeTableDataSource)
    {
      var rowContext = dataSource._getMetadata(row['index']);
      var i;
      for (i in rowContext)
      {
        if (rowContext.hasOwnProperty(i))
        {
          context[i] = rowContext[i];
        }
      } 
    }
  }

  return context;
};

/**
 * Get the status object to pass into the renderer
 * @param {Object} row row instance
 * @return {Object} status object
 * @private
 */
oj.TableDomUtils.prototype.getRendererStatusObject = function(row)
{
  return {'rowIndex': row['index'],
    'rowKey': row['key'],
    'currentRow': $.extend({}, this.component._getCurrentRow())};
};

/**
 * Return the scrollbar height
 * @return {number} scrolbar height
 * @private
 */
oj.TableDomUtils.prototype.getScrollbarHeight = function()
{
  var scroller = this.getScroller();
  if (scroller.get(0).clientHeight > 0)
  {
    var scrollbarHeight = scroller.get(0).offsetHeight - scroller.get(0).clientHeight;

    return scrollbarHeight;
  }
  return 0;
};

/**
 * Return the scrollbar width
 * @return {number} scrolbar width
 * @private
 */
oj.TableDomUtils.prototype.getScrollbarWidth = function()
{
  var scroller = this.getScroller();
  if (scroller.get(0).clientWidth > 0)
  {
    var scrollbarWidth = scroller.get(0).offsetWidth - scroller.get(0).clientWidth;

    return scrollbarWidth;
  }
  return 0;
};

/**
 * Return the table scroller
 * @return {jQuery} scrolbar
 */
oj.TableDomUtils.prototype.getScroller = function()
{
  if (!this.isDivScroller())
  {
    return this.getTableBody();
  }
  else
  {
    return this.getTableDivScroller();
  }
};
        
/**
 * Return the table element
 * @return {jQuery} jQuery table DOM element
 */
oj.TableDomUtils.prototype.getTable = function()
{
  return $(this.element);
};

/**
 * Return the table body element
 * @return {jQuery|null} jQuery tbody DOM element
 */
oj.TableDomUtils.prototype.getTableBody = function()
{
  if (!this._cachedDomTableBody)
  {
    var table = this.getTable();
    var tableBody = null;
    if (table)
    {
      tableBody = table.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_BODY_CLASS);
      if (tableBody && tableBody.length > 0)
      {
        this._cachedDomTableBody = $(tableBody.get(0));
      }
    }
  }

  return this._cachedDomTableBody;
};

/**
 * Return the cell element
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @param {jQuery|null} tableBodyRow  tr DOM element
 * @return {jQuery|null} jQuery td DOM element
 */
oj.TableDomUtils.prototype.getTableBodyCell = function(rowIdx, columnIdx, tableBodyRow)
{
  var tableBodyCells = this.getTableBodyCells(rowIdx, tableBodyRow);
  if (!tableBodyCells)
  {
    return null;
  }

  if (tableBodyCells.length > columnIdx)
  {
    return $(tableBodyCells[columnIdx]);
  }

  return null;
};

/**
 * Get checkbox cell for accessibility row selection
 * @param {jQuery} tableBodyRow  tr DOM element
 * @return {jQuery|null} jQuery td DOM element
 */
oj.TableDomUtils.prototype.getTableBodyCellAccSelect = function(tableBodyRow)
{
  if (tableBodyRow != null)
  {
    var accSelectionCell = tableBodyRow.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);

    if (accSelectionCell != null && accSelectionCell.length > 0)
    {
      return $(accSelectionCell[0]);
    }
  }
  return null;
};

/**
 * Return all the cell elements in a row
 * @param {number} rowIdx  row index
 * @param {jQuery|null} tableBodyRow  tr DOM element
 * @return {jQuery|null} jQuery array of td DOM elements
 */
oj.TableDomUtils.prototype.getTableBodyCells = function(rowIdx, tableBodyRow)
{
  if (!tableBodyRow)
  {
    tableBodyRow = this.getTableBodyRow(rowIdx);
  }

  if (!tableBodyRow)
  {
    return null;
  }

  var tableBodyCellElements = tableBodyRow.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);

  if (tableBodyCellElements != null && tableBodyCellElements.length > 0)
  {
    return tableBodyCellElements;
  }

  return null;
};

/**
 * Return table row
 * @param {number|null} rowIdx  row index
 * @return {jQuery|null} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.getTableBodyRow = function(rowIdx)
{
  var tableBodyRows = this.getTableBodyRows();

  if (!tableBodyRows)
  {
    return null;
  }
  
  if (rowIdx == null)
  {
    return null;
  }

  if (tableBodyRows.length > rowIdx)
  {
    return $(tableBodyRows[rowIdx]);
  }
  
  return null;
};

/**
 * Return all the table rows
 * @return {jQuery|null} jQuery array of tr DOM elements
 */
oj.TableDomUtils.prototype.getTableBodyRows = function()
{
  if (!this._cachedDomTableBodyRows)
  {
    var tableBody = this.getTableBody();
    var tableBodyRowElements = tableBody.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);

    if (tableBodyRowElements != null && tableBodyRowElements.length > 0)
    {
      this._cachedDomTableBodyRows = tableBodyRowElements;
    }
  }

  return this._cachedDomTableBodyRows;
};

/**
 * Return the table container
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableContainer = function()
{
  if (!this._cachedDomTableContainer)
  {
    if (!this.isDivScroller())
    {
      this._cachedDomTableContainer = $(this.element.get(0).parentNode);
    }
    else
    {
      this._cachedDomTableContainer = $(this.element.get(0).parentNode.parentNode);
    }
  }

  return this._cachedDomTableContainer;
};

/**
 * Return the table footer
 * @return {jQuery|null} jQuery tfoot DOM element
 */
oj.TableDomUtils.prototype.getTableFooter = function()
{
  var table = this.getTable();
  var tableFooter = null;
  if (table)
  {
    tableFooter = table.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CLASS);
    if (tableFooter && tableFooter.length > 0)
    {
      return $(tableFooter.get(0));
    }
  }

  return null;
};

/**
 * Return the footer cell element
 * @param {number} columnIdx  column index
 */
oj.TableDomUtils.prototype.getTableFooterCell = function(columnIdx)
{
  var tableFooterRow = this.getTableFooterRow();
  var tableFooterCells = $(tableFooterRow).children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);

  if (tableFooterCells.length >= columnIdx)
  {
    return $(tableFooterCells[columnIdx]); 
  }

  return null;
};

/**
 * Return table footer row
 * @return {jQuery|null} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.getTableFooterRow = function()
{
  if (!this._cachedDomTableFooterRow)
  {
    var tableFooter = this.getTableFooter();

    if (!tableFooter)
    {
      return null;
    }

    this._cachedDomTableFooterRow = $(tableFooter.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_ROW_CLASS).get(0));
  }

  return this._cachedDomTableFooterRow;
};

/**
 * Return the table header
 * @return {jQuery|null} jQuery thead DOM element
 */
oj.TableDomUtils.prototype.getTableHeader = function()
{
  if (!this._cachedDomTableHeader)
  {
    var table = this.getTable();
    var tableHeader = null;
    if (table)
    {
      tableHeader = table.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_CLASS);
      if (tableHeader && tableHeader.length > 0)
      {
        this._cachedDomTableHeader = $(tableHeader.get(0));
      }
    }
  }

  return this._cachedDomTableHeader;
};

/**
 * Return table column header
 * @param {number} columnIdx  column index
 * @return {jQuery|null} jQuery th DOM element
 */
oj.TableDomUtils.prototype.getTableHeaderColumn = function(columnIdx)
{
  var headerColumns = this.getTableHeaderColumns();

  if (!headerColumns)
  {
    return null;
  }

  if (headerColumns.length > columnIdx)
  {
    return $(headerColumns[columnIdx]);
  }

  return null;
};

/**
 * Get checkbox cell for accessibility column selection
 * @param {number} columnIdx  column index
 * @return {jQuery|null} jQuery td DOM element
 */
oj.TableDomUtils.prototype.getTableHeaderColumnAccSelect = function(columnIdx)
{
  var headerColumn = this.getTableHeaderColumn(columnIdx);

  if (headerColumn != null)
  {
    var accSelectionCell = headerColumn.children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS);

    if (accSelectionCell != null && accSelectionCell.length > 0)
    {
      return $(accSelectionCell[0]);
    }
  }
  return null;
};

/**
 * Return all table column headers
 * @return {jQuery|null} jQuery array of th DOM elements
 */
oj.TableDomUtils.prototype.getTableHeaderColumns = function()
{
  var tableHeaderRow = this.getTableHeaderRow();

  if (tableHeaderRow != null)
  {
    var headerColumnElements = tableHeaderRow.children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);

    if (headerColumnElements != null && headerColumnElements.length > 0)
    {
      return headerColumnElements;
    }
  }

  return null;
};

/**
 * Return table header row
 * @return {jQuery|null} jQuery th DOM element
 */
oj.TableDomUtils.prototype.getTableHeaderRow = function()
{
  if (!this._cachedDomTableHeaderRow)
  {
    var tableHeader = this.getTableHeader();

    if (!tableHeader)
    {
      return null;
    }

    this._cachedDomTableHeaderRow = $(tableHeader.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_ROW_CLASS).get(0));
  }

  return this._cachedDomTableHeaderRow;
};

/**
 * Return the table div scroller
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableDivScroller = function()
{
  if (!this._cachedDomTableDivScroller)
  {
    var tableContainer = this.getTableContainer();
    if (tableContainer)
    {
      var tableDivScroller = tableContainer.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_SCROLLER_CLASS);
      if (tableDivScroller && tableDivScroller.length > 0)
      {
        this._cachedDomTableDivScroller = $(tableDivScroller.get(0));
      }
    }
  }
  return this._cachedDomTableDivScroller;
};

/**
 * Return the table inline message element
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableInlineMessage = function()
{
  if (!this._cachedDomTableInlineMessage)
  {
    var tableContainer = this.getTableContainer();
    if (tableContainer)
    {
      var inlineMessage = tableContainer.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_INLINE_MESSAGE_CLASS);
      if (inlineMessage && inlineMessage.length > 0)
      {
        this._cachedDomTableInlineMessage = $(inlineMessage.get(0));
      }
    }
  }

  return this._cachedDomTableInlineMessage;
};

/**
 * Return the table no data row element
 * @return {jQuery|null} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.getTableNoDataRow = function()
{
  var tableBody = this.getTableBody();
  if (tableBody)
  {
    var noDataRow = tableBody.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_NO_DATA_ROW_CLASS);
    if (noDataRow && noDataRow.length > 0)
    {
      return $(noDataRow.get(0));
    }
  }
  return null;
};

/**
 * Return the table status message element
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableStatusMessage = function()
{
  if (!this._cachedDomTableStatusMessage)
  {
    var tableContainer = this.getTableContainer();
    if (tableContainer)
    {
      var statusMessage = tableContainer.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
      if (statusMessage && statusMessage.length > 0)
      {
        this._cachedDomTableStatusMessage = $(statusMessage.get(0));
      }
    }
  }

  return this._cachedDomTableStatusMessage;
};


/**
 * Get a hash code for a string
 * @param {string} str String
 * @return {number} hashCode
 */
oj.TableDomUtils.prototype.hashCode = function(str)
{
  // Same hash algorithm as Java's String.hashCode
  var hash = 0;
  if (str.length == 0)
  {
    return hash;
  }
  
  var charVal, i;
  for (i = 0; i < str.length; i++) 
  {
    charVal = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + charVal;
    hash = hash & hash;
  }
  return hash;
};

/**
 * Insert a td element in the appropriate place in the DOM
 * @param {number} rowIdx  row index
 * @param {Object} rowKey  row key
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyCell  DOM element
 * @param {jQuery} tableBodyRow  tr DOM element
 */
oj.TableDomUtils.prototype.insertTableBodyCell = function(rowIdx, rowKey, columnIdx, tableBodyCell, tableBodyRow)
{
  this.setTableBodyCellAttributes(rowIdx, rowKey, columnIdx, tableBodyCell);

  var tableBodyCells = $(tableBodyRow).children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);

  if (columnIdx == 0)
  {
    // insert right after the acc cell
    var accSelectionCell = tableBodyRow.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);

    if (accSelectionCell != null && accSelectionCell.length > 0)
    {
      $(accSelectionCell[0]).after(tableBodyCell);
    }
    else
    {
      // just prepend it
      tableBodyRow.prepend(tableBodyCell)
    }
  }
  else if (tableBodyCells.length >= columnIdx)
  {
    var previousCell = $(tableBodyCells.get(columnIdx - 1));
    previousCell.after(tableBodyCell);
  }
  else
  {
    $(tableBodyRow).append(tableBodyCell); //@HTMLUpdateOK
  }

  return tableBodyCell;
};

/**
 * Insert a tr element in the appropriate place in the DOM
 * @param {number} rowIdx  row index
 * @param {jQuery} tableBodyRow  DOM element
 * @param {Object} row  row and key object
 * @param {Object} docFrag  document fragment
 */
oj.TableDomUtils.prototype.insertTableBodyRow = function(rowIdx, tableBodyRow, row, docFrag)
{
  this.setTableBodyRowAttributes(rowIdx, row, tableBodyRow);

  if (docFrag == null)
  {
    var tableBody = this.getTableBody();
    var tableBodyRows = tableBody.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
    
    if (rowIdx == 0)
    {
      // just prepend it
      tableBody.prepend(tableBodyRow);
    }
    else if (tableBodyRows.length >= rowIdx)
    {
      var previousRow = $(tableBodyRows.get(rowIdx - 1));
      previousRow.after(tableBodyRow);
    }
    else
    {
      tableBody.append(tableBodyRow); //@HTMLUpdateOK
    }
  }
  else
  {
    docFrag.append(tableBodyRow); //@HTMLUpdateOK
  }
  this.clearCachedDomRowData();
};

/**
 * Insert a td element in the appropriate place in the DOM
 * @param {number} columnIdx  column index
 * @param {jQuery} tableFooterCell  DOM element
 */
oj.TableDomUtils.prototype.insertTableFooterCell = function(columnIdx, tableFooterCell)
{
  var tableFooterRow = this.getTableFooterRow();
  var tableFooterCells = $(tableFooterRow).children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);

  if (columnIdx == 0)
  {
    // insert right after the acc cell
    var accFooterCell = tableFooterRow.children('.' + oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);

    if (accFooterCell != null && accFooterCell.length > 0)
    {
      $(accFooterCell[0]).after(tableFooterCell);
    }
    else
    {
      // just prepend it
      tableFooterRow.prepend(tableFooterCell)
    }
  }
  else if (tableFooterRow.length >= columnIdx)
  {
    var previousCell = $(tableFooterCells.get(columnIdx - 1));
    previousCell.after(tableFooterCell);
  }
  else
  {
    tableFooterRow.append(tableFooterCell); //@HTMLUpdateOK
  }

  return tableFooterCell;
};

/**
 * Insert a th element in the appropriate place in the DOM
 * @param {number} columnIdx  column index
 * @param {jQuery} tableHeaderColumn  DOM element
 */
oj.TableDomUtils.prototype.insertTableHeaderColumn = function(columnIdx, tableHeaderColumn)
{
  var tableHeaderRow = this.getTableHeaderRow();
  var tableHeaderColumns = this.getTableHeaderColumns();
  // save the column index on the element
  this.setTableHeaderColumnAttributes(columnIdx, tableHeaderColumn);

  // if there is an existing th at the index then replace it
  var oldTableHeaderColumn = this.getTableHeaderColumn(columnIdx);
  if (oldTableHeaderColumn)
    oldTableHeaderColumn.replaceWith(tableHeaderColumn);
  else
  {
    if (columnIdx == 0)
    {
      // insert right after the acc column
      var accSelectionColumn = tableHeaderRow.children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS);

      if (accSelectionColumn != null && accSelectionColumn.length > 0)
      {
        $(accSelectionColumn[0]).after(tableHeaderColumn);
      }
      else
      {
        // just prepend it
        tableHeaderRow.prepend(tableHeaderColumn)
      }
    }
    else if (tableHeaderColumns.length >= columnIdx)
    {
      var previousColumn = $(tableHeaderColumns.get(columnIdx - 1));
      previousColumn.after(tableHeaderColumn);
    }
    else
    {
      tableHeaderRow.append(tableHeaderColumn); //@HTMLUpdateOK
    }
  }
};

/**
  * Returns true if a div scroller is used. False if tbody scrolling is used.
  * @return {boolean} Whether div scroller is used
  */
oj.TableDomUtils.prototype.isDivScroller = function()
{
  return this._isIE() && this._isIE() < 10 ? true : false;
}

/**
  * Returns true if scrollHeight > clientHeight for height and width.
  * @return {Array} First element is height boolean, followed by width boolean.
  */
oj.TableDomUtils.prototype.isTableContainerScrollable = function()
{
  var tableContainer = this.getTableContainer();
  var table = this.getTable();
  var tableStatusMessage = this.getTableStatusMessage();
  var tableStatusMessageDisplay = tableStatusMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY).toString();
  tableStatusMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._NONE);
  
  var result = [];
  if (tableContainer[0].clientHeight > 0)
  {
    // don't use tableContainer[0].scrollHeight as it may not be accurate
    if (table[0].clientHeight > tableContainer[0].clientHeight)
    {
      // overflow
      result[0] = 1;
    }
    else if (tableContainer[0].clientHeight - table[0].clientHeight > 1)
    {
      // underflow
      result[0] = -1;
    }
    else
    {
      result[0] = 0;
    }
  }
  else
  {
    result[0] = 0;
  }
  
  if (tableContainer[0].clientWidth > 0)
  {
      if (table[0].clientWidth > tableContainer[0].clientWidth)
      {
        // overflow
        result[1] = 1;
      }
      else if (tableContainer[0].clientWidth - table[0].clientWidth > 1)
      {
        // underflow
        result[1] = -1;
      }
      else
      {
        result[1] = 0;
      }
  }
  else
  {
    result[1] = 0;
  }
  
  tableStatusMessage.css(oj.TableDomUtils.CSS_PROP._DISPLAY, tableStatusMessageDisplay);
  return result;
}
/**
 * Refresh any translated strings in the context menu.
 */
oj.TableDomUtils.prototype.refreshContextMenu = function()
{
  var self = this;
  var menuContainer = this._menuContainer;

  if (menuContainer && menuContainer.length > 0)
  {
    var listItems = menuContainer.find('[data-oj-command]');
    listItems.each(function()
    {
      var contextMenuLabel = $(this).children(oj.TableDomUtils.DOM_ELEMENT._A);
      if (contextMenuLabel.length > 0)
      {
        var command = $(this).attr('data-oj-command').split("-");
        command = command[command.length - 1];

        var commandString;
        if (command == 'sort')
        {
          commandString = self.component.getTranslatedString('labelSort');
        }
        else if (command == 'sortAsc')
        {
          commandString = self.component.getTranslatedString('labelSortAsc');
        }
        else if (command == 'sortDsc')
        {
          commandString = self.component.getTranslatedString('labelSortDsc');
        }
        contextMenuLabel.contents().filter(function() {return this.nodeType === 3;})[0].nodeValue = commandString;
      }
    });
  }
};

/**
  * Refresh the table dimensions
  * @param {number|null} width  table container width
  * @param {number|null} height  table container height
  * @param {boolean} resetScrollTop reset the scrollTop
  * @param {boolean} resetScrollLeft reset the scrollLeft
  */
 oj.TableDomUtils.prototype.refreshTableDimensions = function(width, height, resetScrollTop, resetScrollLeft)
{
  this._refreshTableDimensions(width, height, resetScrollTop, resetScrollLeft);
  // set the current row
  this.component._setCurrentRow(this.options['currentRow'], null);
};

/**
 * Remove a tr element from the DOM
 * @param {number} rowIdx  row index
 */
oj.TableDomUtils.prototype.removeTableBodyRow = function(rowIdx)
{
  var tableBodyRow = this.getTableBodyRow(rowIdx);
  if (tableBodyRow != null)
  {
    oj.Components.subtreeDetached(tableBodyRow[0]);
    tableBodyRow.remove();
    this.clearCachedDomRowData();
  }
};

/**
 * Set the td cell. Calls the cell renderer or populates the value.
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyRow  tr DOM element
 * @param {Object} row row
 * @param {function(Object)} cellRenderer cell renderer
 * @param {boolean} isNew is new row
 * 
 */
oj.TableDomUtils.prototype.setTableBodyCell = function(rowIdx, columnIdx, tableBodyRow, row, cellRenderer, isNew)
{
  var columns = this.component._getColumnDefs();
  var column = columns[columnIdx];
  var tableBodyCell = null;

  if (!isNew)
  {
    tableBodyCell = this.getTableBodyCell(rowIdx, columnIdx, tableBodyRow);
  }

  if (!tableBodyCell)
  {
    tableBodyCell = this.createTableBodyCell(rowIdx, columnIdx);
    this.styleTableBodyCell(columnIdx, tableBodyCell, true);
    this.insertTableBodyCell(rowIdx, row['key'], columnIdx, tableBodyCell, tableBodyRow);
  }
  else
  {
    tableBodyCell.empty();
    this.styleTableBodyCell(columnIdx, tableBodyCell, false);
  }
  
  var data = null;

  if (column.field != null)
  {
    data = row['data'][column.field];
  }

  if (cellRenderer)
  {
    var cellContext = this.getRendererContextObject(row, tableBodyCell[0]);
    var cellColumnContent = cellRenderer({'cellContext': cellContext,
                                          'columnIndex': columnIdx,
                                          'data': data,
                                          'row': $.extend({}, row['data'])});

    if (cellColumnContent != null)
    {
      // if the renderer returned a value then we set it as the content
      // for the cell
      tableBodyCell.append(cellColumnContent); //@HTMLUpdateOK
    }
    else
    {
      // if the renderer didn't return a value then the existing
      // cell was manipulated. So get it and set the required
      // attributes just in case it was replaced or the attributes
      // got removed
      tableBodyCell = $(tableBodyRow.children(':not(' + '.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS + ')')[columnIdx]);
      this.setTableBodyCellAttributes(rowIdx, row['key'], columnIdx, tableBodyCell);
      this.styleTableBodyCell(columnIdx, tableBodyCell, false);
    }
  }
  else
  {
    tableBodyCell.text(data);
  }
};

/**
 * Set the attributes on the cell like rowIdx, columnIdx, etc
 * @param {number} rowIdx  row index
 * @param {Object} rowKey  row key
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyCell  td DOM element
 */
oj.TableDomUtils.prototype.setTableBodyCellAttributes = function(rowIdx, rowKey, columnIdx, tableBodyCell)
{
  var accessibility = this.options['accessibility'];
  var column = this.component._getColumnDefs()[columnIdx];
  var rowHeaderColumnId = null;
  var isTableHeaderless = this.getTableHeader() == null ? true : false;

  if (accessibility != null && accessibility['rowHeader'] != null)
  {
    rowHeaderColumnId = accessibility['rowHeader'];
  }
  else
  {
    rowHeaderColumnId = this.component._getColumnDefs()[0].id;
  }
  
  var rowKeyStr = rowKey != null ? rowKey.toString() : rowIdx.toString();

  var cellRowHeaderId = this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':' + rowHeaderColumnId + '_' + this.hashCode(rowKeyStr);

  var headers = this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':' + column.id;
  if (rowHeaderColumnId == column.id)
  {
    tableBodyCell.attr(oj.TableDomUtils.DOM_ATTR._ID, cellRowHeaderId);

    if (isTableHeaderless)
    {
      headers = '';
    }
  }
  else
  {
    if (!isTableHeaderless)
    {
      headers = headers + ' ' + cellRowHeaderId;
    }
    else
    {
      headers = cellRowHeaderId;
    }
  }

  if (!tableBodyCell.attr(oj.TableDomUtils.DOM_ATTR._HEADERS))
  {
    tableBodyCell.attr(oj.TableDomUtils.DOM_ATTR._HEADERS, headers);
  }
};

/**
 * Set the attributes on the row like rowIdx, etc
 * @param {number} rowIdx  row index
 * @param {Object} row row
 * @param {jQuery} tableBodyRow  tr DOM element
 */
oj.TableDomUtils.prototype.setTableBodyRowAttributes = function(rowIdx, row, tableBodyRow)
{
  tableBodyRow.data('rowKey', row['key']);
};

/**
 * Set the attributes on the header like columndx, etc
 * @param {number} columnIdx  column index
 * @param {jQuery} tableHeaderColumn  th DOM element
 */
oj.TableDomUtils.prototype.setTableHeaderColumnAttributes = function(columnIdx, tableHeaderColumn)
{
  var column = this.component._getColumnDefs()[columnIdx];

  if (!tableHeaderColumn.attr(oj.TableDomUtils.DOM_ATTR._ID))
  {
    tableHeaderColumn.attr(oj.TableDomUtils.DOM_ATTR._ID, this.getTable().attr(oj.TableDomUtils.DOM_ATTR._ID) + ':' + column.id);
  }
};

/**
 * Set the table inline message.
 * @param {string} summary
 * @param {string} detail
 * @param {number} severityLevel
 */
oj.TableDomUtils.prototype.setTableInlineMessage = function(summary, detail, severityLevel)
{
  var inlineMessage = this.getTableInlineMessage();
  inlineMessage.empty();
  inlineMessage.append(oj.PopupMessagingStrategyUtils.buildMessageHtml(document, summary, detail, severityLevel, null));
}

/**
 * Style the initial table
 */
oj.TableDomUtils.prototype.styleInitialTable = function()
{
  var table = this.getTable();
  var tableContainer = this.getTableContainer();
  var tableHeader = table.children(oj.TableDomUtils.DOM_ELEMENT._THEAD);
  tableHeader = tableHeader.length > 0 ? $(tableHeader[0]) : null;
  var tableFooter = table.children(oj.TableDomUtils.DOM_ELEMENT._TFOOT);
  tableFooter = tableFooter.length > 0 ? $(tableFooter[0]) : null;
  var tableBody = table.children(oj.TableDomUtils.DOM_ELEMENT._TBODY);
  tableBody = tableBody.length > 0 ? $(tableBody[0]) : null;
  // set the tabindex
  table.attr(oj.TableDomUtils.DOM_ATTR._TABINDEX, '0');
  // set focusable
  this.component._focusable(table);
  // set focusable
  this.component._focusable(tableContainer);

  this.styleTableHeader(tableHeader);
  this.styleTableFooter(tableFooter);
  this.styleTableBody(tableBody);
};

/**
 * Style the tbody element
 * @param {jQuery} tableBody thead DOM element
 */
oj.TableDomUtils.prototype.styleTableBody = function(tableBody)
{
  tableBody.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_BODY_CLASS);
  // Add a special marker attribute to tell child components that they are container within table
  tableBody.attr(oj.Components._OJ_CONTAINER_ATTR, this.component['widgetName']);
};

/**
 * Style the td element
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyCell  td DOM element
 * @param {boolean} isNew is new cell
 */
oj.TableDomUtils.prototype.styleTableBodyCell = function(columnIdx, tableBodyCell, isNew)
{
  var options = this.options;
  var column = this.component._getColumnDefs()[columnIdx];
 
  if (isNew || !tableBodyCell.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS))
  {
    tableBodyCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);
    
    // add the column option stuff in here since we only want to do this once when adding
    // the table data cell class. Column option styling or class can be overridden
    // later in a custom renderer
    if (column.style != null && (isNew || tableBodyCell.attr(oj.TableDomUtils.DOM_ATTR._STYLE) != column.style))
    {
      tableBodyCell.attr(oj.TableDomUtils.DOM_ATTR._STYLE, column.style);
    }
    if (column.className != null && (isNew || !tableBodyCell.hasClass(column.className)))
    {
      tableBodyCell.addClass(column.className);
    }
  }
  
  if (options.verticalGridVisible == oj.TableDomUtils._OPTION_ENABLED)
  {
    if (isNew || !tableBodyCell.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_VGRID_LINES_CLASS))
    {
      tableBodyCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_VGRID_LINES_CLASS);
    }
  }
};

/**
 * Style the tr element
 * @param {jQuery} tableBodyRow  tr DOM element
 * @param {boolean} isNew is new row
 */
oj.TableDomUtils.prototype.styleTableBodyRow = function(tableBodyRow, isNew)
{
  if (isNew || !tableBodyRow.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS))
  {
    tableBodyRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
  }
  if (this.options.horizontalGridVisible == oj.TableDomUtils._OPTION_ENABLED)
  {
    if (isNew || !tableBodyRow.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS))
    {
      tableBodyRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS);
    }
  }
};

/**
 * Style the table container
 * @param {jQuery} tableContainer  div DOM element
 */
oj.TableDomUtils.prototype.styleTableContainer = function(tableContainer)
{
  // add main css class to container
  tableContainer.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_CLASS);
  tableContainer.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_CONTAINER_CLASS);
  tableContainer.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._WIDGET);
};

/**
 * Style the tfoot element
 * @param {jQuery} tableFooter tfoot DOM element
 */
oj.TableDomUtils.prototype.styleTableFooter = function(tableFooter)
{
  if (!tableFooter)
  {
    return;
  }
  tableFooter.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CLASS);
  var tableFooterRow = $(tableFooter.children(oj.TableDomUtils.DOM_ELEMENT._TR)[0]);
  tableFooterRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_ROW_CLASS);
};

/**
 * Style the td element
 * @param {number} columnIdx  column index
 * @param {jQuery} tableFooterCell  td DOM element
 */
oj.TableDomUtils.prototype.styleTableFooterCell = function(columnIdx, tableFooterCell)
{
  var options = this.options;
  var lastColumn = columnIdx == this.component._getColumnDefs().length - 1 ? true : false;
  var column = this.component._getColumnDefs()[columnIdx];

  tableFooterCell.attr(oj.TableDomUtils.DOM_ATTR._STYLE, column.footerStyle);
  if (!tableFooterCell.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS))
  {
    tableFooterCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);
  }
  if (options.verticalGridVisible == oj.TableDomUtils._OPTION_ENABLED && !lastColumn)
  {
    tableFooterCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_VGRID_LINES_CLASS);
  }
  if (column.footerClassName)
  {
    tableFooterCell.addClass(column.footerClassName);
  }
};

/**
 * Style the thead element
 * @param {jQuery} tableHeader thead DOM element
 */
oj.TableDomUtils.prototype.styleTableHeader = function(tableHeader)
{
  if (!tableHeader)
  {
    return;
  }
  tableHeader.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_CLASS);
  tableHeader.css(oj.TableDomUtils.CSS_PROP._DISPLAY, 'table-header-group');
  var tableHeaderRow = $(tableHeader.children(oj.TableDomUtils.DOM_ELEMENT._TR)[0]);
  tableHeaderRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_ROW_CLASS);
  tableHeaderRow.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._RELATIVE);
};

/**
 * Style the th element
 * @param {number} columnIdx  column index
 * @param {jQuery} tableHeaderColumn  th DOM element
 * @param {string} columnSelectionMode  column selection mode
 * @param {boolean} isNew is new column
 */
oj.TableDomUtils.prototype.styleTableHeaderColumn = function(columnIdx, tableHeaderColumn, columnSelectionMode, isNew)
{
  var column = this.component._getColumnDefs()[columnIdx];
  
  if (isNew || !tableHeaderColumn.hasClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS))
  {
    tableHeaderColumn.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);
    if (column.headerStyle != null && (isNew || tableHeaderColumn.attr(oj.TableDomUtils.DOM_ATTR._STYLE) != column.headerStyle))
    {
      tableHeaderColumn.attr(oj.TableDomUtils.DOM_ATTR._STYLE, column.headerStyle);
    }
    if (column.headerClassName != null && (isNew || !tableHeaderColumn.hasClass(column.headerClassName)))
    {
      tableHeaderColumn.addClass(column.headerClassName);
    }
  }
};

/**
  * Helper function which returns if the browser is IE and if so the version.
  * @private
  * @return {number|null} IE version. null if not IE.
  */
oj.TableDomUtils.prototype._isIE = function()
{
  if (typeof this._browserIsIE == 'undefined')
  {
    var userAgent = navigator.userAgent;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
      var resultArray = (new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})')).exec(userAgent);
      if (resultArray != null)
      {
        this._browserIsIE = parseFloat(resultArray[1]);
      }
    }
    else if (userAgent.indexOf('Trident') >= 0)
    {
      this._browserIsIE = 11;
    }
    else
    {
      this._browserIsIE = null;
    }
  }
  return this._browserIsIE;
};

/**
  * Helper function which returns if the browser is webkit.
  * @private
  * @return {boolean} webkit
  */
oj.TableDomUtils.prototype._isWebkit = function()
{
  if (typeof this._browserIsWebkit == 'undefined')
  {
    this._browserIsWebkit = /webkit/.test(navigator.userAgent.toLowerCase());
  }
  return this._browserIsWebkit;
};

/**
  * Refresh the table dimensions
  * @param {number|null} width  table container width
  * @param {number|null} height  table container height
  * @param {boolean} resetScrollTop reset the scrollTop
  * @param {boolean} resetScrollLeft reset the scrollLeft
  */
 oj.TableDomUtils.prototype._refreshTableDimensions = function(width, height, resetScrollTop, resetScrollLeft)
{
  var options = this.options;
  var table = this.getTable();
  var tableHeader = this.getTableHeader();
  var tableFooter = this.getTableFooter();
  var tableFooterRow = this.getTableFooterRow();
  var tableHeaderRow = this.getTableHeaderRow();
  var tableContainer = this.getTableContainer();
  var tableBody = this.getTableBody();
  
  if (this._ignoreNextResize)
  {
    this._ignoreNextResize = false;
    return;
  }
  
  // preserve the scrollTop & scrollLeft
  var scrollTop = null;
  var scrollLeft = null;
  
  if (this.getScroller() != null)
  {
    var maxScrollTop = this.getScroller()[0].scrollHeight - this.getScroller()[0].clientHeight;
    var maxScrollLeft = this.getScroller()[0].scrollWidth - this.getScroller()[0].clientWidth;
    // only preserve the scroll positions if we can actually scroll
    if (maxScrollTop > 0)
    {
      scrollTop = this.getScroller()[0].scrollTop;
    }
    if (maxScrollLeft > 0)
    {
      scrollLeft = this.getScroller()[0].scrollLeft;
    }
  }
  
  // first remove any styling so that the browser sizes the table
  this._removeTableDimensionsStyling();
  this.styleTableContainer(tableContainer);
  
  var tableContainerScrollableState = this.isTableContainerScrollable();
  
  if (tableContainerScrollableState[0] === 1)
  {
    this._tableHeightConstrained = true;
  }
  else
  {
    this._tableHeightConstrained = false;
  }
  if (tableContainerScrollableState[1] === 1)
  {
    this._tableWidthConstrained = true;
  }
  else
  {
    this._tableWidthConstrained = false;
  }
  
  
  if (tableBody == null)
  {
    return;
  }
   
  if (this._tableHeightConstrained || this._tableWidthConstrained)
  {
    if (!this._tableDimensions)
    {
      this._tableDimensions = {};
    }
    
    // use constants for width height
    if (width > 0 || height > 0)
    {
      if (width > 0 && this._tableWidthConstrained)
      {
        this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH] = width;
      }
      if (height > 0 && this._tableHeightConstrained)
      {
        this._tableDimensions[oj.TableDomUtils.CSS_PROP._HEIGHT] = height;
      }
    }
    else
    {
      if (this._tableHeightConstrained)
      {
        this._tableDimensions[oj.TableDomUtils.CSS_PROP._HEIGHT] = tableContainer[0].offsetHeight;
      }
      else
      {
        this._tableDimensions[oj.TableDomUtils.CSS_PROP._HEIGHT] = 0;
      }
      if (this._tableWidthConstrained)
      {
        this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH] = tableContainer[0].offsetWidth;
      }
      else
      {
        this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH] = 0;
      }
    }

    if (!this._tableBorderWidth)
    {
      this._tableBorderWidth = tableContainer.outerWidth() - tableContainer.innerWidth();
    }
    if (!this._tableBorderHeight)
    {
      this._tableBorderHeight = tableContainer.outerHeight() - tableContainer.innerHeight();
    }
    
    // if there is a vertical scrollbar but no horizontal scrollbar then we need
    // to make sure the width sizes to accommodate the scrollbar
    var tableContainerScrollbarWidth = 0;
    if (this._tableHeightConstrained && !this._tableWidthConstrained)
    {
      tableContainer.css(oj.TableDomUtils.CSS_PROP._OVERFLOW, oj.TableDomUtils.CSS_VAL._AUTO);
      tableContainerScrollbarWidth = tableContainer.get(0).offsetWidth - tableContainer.get(0).clientWidth;
      
      // if tableContainer has set width then we need to shrink, otherwise we can expand
      if (this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH] > 0)
      {
        table.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableContainer.get(0).clientWidth + oj.TableDomUtils.CSS_VAL._PX);
      }
      else
      {
        table.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableContainer.get(0).scrollWidth + tableContainerScrollbarWidth + oj.TableDomUtils.CSS_VAL._PX);
        
        // check if we caused overflow
        tableContainerScrollableState = this.isTableContainerScrollable();
        
        if (tableContainerScrollableState[1] === 1)
        {
          // if we caused overflow we need to shrink
          table.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableContainer.get(0).clientWidth + oj.TableDomUtils.CSS_VAL._PX);
        }
      }
      tableContainer.css(oj.TableDomUtils.CSS_PROP._OVERFLOW, '');
      // the resize listeners will be called so ignore
      this._ignoreNextResize = true;
    }
    
    var tableWidth = table.width();

    // let the browser layout the column widths
    this._setColumnWidths();

    var captionHeight = 0;
    var caption = table.children('caption');
    if (caption != null && caption.length > 0)
    {
      captionHeight = $(caption[0]).outerHeight();
      caption.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._INLINE);
      if (tableHeader != null)
      {
        tableHeader.css(oj.TableDomUtils.CSS_PROP._BORDER_TOP, tableContainer.css(oj.TableDomUtils.CSS_PROP._BORDER_TOP).toString());
      }
    }

    // apply the styling which sets the fixed column headers, etc
    var tableHeaderHeight = 0;
    if (tableHeader != null)
    {
      tableHeader.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._BLOCK);
      if (!this.isDivScroller())
      {
        tableHeader.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._RELATIVE);
      }
      else
      {
        tableHeader.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._ABSOLUTE);
        tableHeader.css(oj.TableDomUtils.CSS_PROP._TOP, '0px');
      }
      tableHeaderRow.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._BLOCK);
      tableHeaderRow.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._RELATIVE);
      tableHeaderHeight = tableHeader.outerHeight();
    }

    if (this.isDivScroller())
    {
      // if we use fallback scrolling then the padding top of the container is used to 
      // position the table scroller to below the table header.
      tableContainer.css(oj.TableDomUtils.CSS_PROP._PADDING_TOP, tableHeaderHeight + captionHeight + oj.TableDomUtils.CSS_VAL._PX);
    }

    var tableFooterHeight = 0;
    if (tableFooter != null)
    {
      if (!this.isDivScroller())
      {
        tableFooter.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._RELATIVE);
      }
      else
      {
        tableFooter.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._ABSOLUTE);
        tableHeader.css(oj.TableDomUtils.CSS_PROP._BOTTOM, '0px');
      }
      tableFooter.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._BLOCK);
      tableFooterRow.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._BLOCK);
      tableFooterRow.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._RELATIVE);
    }

    tableBody.css(oj.TableDomUtils.CSS_PROP._DISPLAY, oj.TableDomUtils.CSS_VAL._BLOCK);
    var scrollbarWidth;
    var tableBodyHeight = 0;
    var tableBodyWidth = 0;

    if (!this.isDivScroller())
    {
      tableBody.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_Y, oj.TableDomUtils.CSS_VAL._AUTO);
      tableBody.css(oj.TableDomUtils.CSS_PROP._POSITION, oj.TableDomUtils.CSS_VAL._RELATIVE);

      if (this._tableWidthConstrained)
      {
        tableBody.css(oj.TableDomUtils.CSS_PROP._WIDTH, this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH] - this._tableBorderWidth);
      }
      else if (tableContainerScrollbarWidth > 0)
      {
        tableBody.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableWidth - this._tableBorderWidth + tableContainerScrollbarWidth);
      }
      tableBodyWidth = tableBody.width();
      
      if (tableFooter != null)
      {
        tableFooterHeight = tableFooter.outerHeight();
        tableBody.css(oj.TableDomUtils.CSS_PROP._TOP, -1 * tableFooterHeight + oj.TableDomUtils.CSS_VAL._PX);
      }

      // if we don't use fallback scrolling then size the table body
      // to fit in the height
      if (this._tableHeightConstrained)
      {
        tableBodyHeight = this._tableDimensions[oj.TableDomUtils.CSS_PROP._HEIGHT] - tableHeaderHeight - tableFooterHeight - captionHeight - this._tableBorderHeight;
        if (tableBodyHeight > 0)
        {
          tableBody.css(oj.TableDomUtils.CSS_PROP._HEIGHT, tableBodyHeight + oj.TableDomUtils.CSS_VAL._PX);
          tableBody.css(oj.TableDomUtils.CSS_PROP._MIN_HEIGHT, tableBodyHeight + oj.TableDomUtils.CSS_VAL._PX);
        }
      }
      else
      {
        tableBodyHeight = tableBody.outerHeight();
      }

      scrollbarWidth = this.getScrollbarWidth();

      if (this._tableWidthConstrained)
      {
        var tableBodyRows = this.getTableBodyRows();

        if (tableBodyRows != null && tableBodyRows.length > 0)
        {
          tableBody.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_X, oj.TableDomUtils.CSS_VAL._AUTO);
          tableContainer.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_X, oj.TableDomUtils.CSS_VAL._HIDDEN);

          if (tableHeader != null)
          {
            var tableHeaderWidth = this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH] - this._tableBorderWidth;

            if (tableHeaderWidth > 0)
            {
              if (scrollbarWidth > 0)
              {
                // if we have scrollbars then size the tableheader 
                // to align with the scrollbars
                tableHeader.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableHeaderWidth - scrollbarWidth + oj.TableDomUtils.CSS_VAL._PX);
              }
              else
              {
                tableHeader.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableHeaderWidth + oj.TableDomUtils.CSS_VAL._PX);
              }
            }
          }
        }
        else
        {
          // if we have no data then use the tableContainer's horizontal scroller
          tableBody.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_X, oj.TableDomUtils.CSS_VAL._HIDDEN);
          tableContainer.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_X, oj.TableDomUtils.CSS_VAL._AUTO);
          tableContainer.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_Y, oj.TableDomUtils.CSS_VAL._HIDDEN);
        }
      }
      else
      {
        tableBody.css(oj.TableDomUtils.CSS_PROP._OVERFLOW_X, oj.TableDomUtils.CSS_VAL._HIDDEN);
      }
    }

    if (this.isDivScroller())
    {
      var tableDivScroller = this.getTableDivScroller();
      tableDivScroller.css(oj.TableDomUtils.CSS_PROP._OVERFLOW, oj.TableDomUtils.CSS_VAL._AUTO);
      if (this._tableWidthConstrained)
      {
        tableDivScroller.css(oj.TableDomUtils.CSS_PROP._WIDTH, this._tableDimensions[oj.TableDomUtils.CSS_PROP._WIDTH]);
      }
      if (this._tableHeightConstrained)
      {
        tableDivScroller.css(oj.TableDomUtils.CSS_PROP._HEIGHT, this._tableDimensions[oj.TableDomUtils.CSS_PROP._HEIGHT] - tableHeaderHeight - tableFooterHeight);
      }
      tableBody.css(oj.TableDomUtils.CSS_PROP._FLOAT, oj.TableDomUtils.CSS_VAL._LEFT);
      tableContainer.css(oj.TableDomUtils.CSS_PROP._OVERFLOW, oj.TableDomUtils.CSS_VAL._HIDDEN);
    }

    if (tableFooter != null)
    {
      if (!this.isDivScroller())
      {
        tableFooter.css(oj.TableDomUtils.CSS_PROP._TOP, tableBodyHeight + oj.TableDomUtils.CSS_VAL._PX);
      }
    }
  }

  this._setHeaderColumnOverflowWidths();
  this._removeTableBodyRowBottomBorder(tableContainerScrollableState[0] < 0);
  this.refreshTableStatusPosition();
  
  if (scrollTop != null && !resetScrollTop)
  {
    var maxScrollTop = this.getScroller()[0].scrollHeight - this.getScroller()[0].clientHeight;
    scrollTop = scrollTop > maxScrollTop ? maxScrollTop : scrollTop;
    if (this.component._isLoadMoreOnScroll() && maxScrollTop == scrollTop)
    {
      // Do not set to maxScrollTop or we will cause another fetch
      scrollTop--;
    }
    this.getScroller()[0].scrollTop = scrollTop;
  }
  else if (resetScrollTop)
  {
    var self = this;
    setTimeout(function()
               {
                 self.getScroller()[0].scrollTop = 0;
               }, 50);
  }
  
  if (scrollLeft != null && !resetScrollLeft)
  {
    var maxScrollLeft = this.getScroller()[0].scrollWidth - this.getScroller()[0].clientWidth;
    scrollLeft = scrollLeft > maxScrollLeft ? maxScrollLeft : scrollLeft;
    this.getScroller()[0].scrollLeft = scrollLeft;
  }
  else if (resetScrollLeft)
  {
    this.getScroller()[0].scrollLeft = 0;
  }
};

/**
  * Refresh the table status position
  * @private
  */
oj.TableDomUtils.prototype.refreshTableStatusPosition = function()
{
  var tableContainer = this.getTableContainer();
  var tableBody = this.getTableBody();
  var tableStatusMessage = this.getTableStatusMessage();
  
  var overTableElement = tableContainer;
  
  if (tableBody.height() > 0)
  {
    overTableElement = tableBody;
  }

  // if status message is hidden then return
  if (!tableStatusMessage || !tableStatusMessage[0].offsetParent)
    return;

  // size the messaging background
  tableStatusMessage.css(oj.TableDomUtils.CSS_PROP._HEIGHT, tableBody.height() + oj.TableDomUtils.CSS_VAL._PX);
  tableStatusMessage.css(oj.TableDomUtils.CSS_PROP._WIDTH, tableBody.width() + oj.TableDomUtils.CSS_VAL._PX);
  var tableStatusMessageText = $(tableStatusMessage[0].children[0]);
  // refresh the status message position
  var isRTL = (this.component._GetReadingDirection() === "rtl");
  // position status in the center
  var options = {'my': 'center', 'at': 'center', 'collision': 'none', 'of': overTableElement};
  options = oj.PositionUtils.normalizeHorizontalAlignment(options, isRTL);
  (/** @type {Object} */ (tableStatusMessage)).position(options);
  var msgTextOptions = {'my': 'center', 'at': 'center', 'collision': 'none', 'of': tableStatusMessage};
  msgTextOptions = oj.PositionUtils.normalizeHorizontalAlignment(msgTextOptions, isRTL);
  (/** @type {Object} */ (tableStatusMessageText)).position(msgTextOptions);
};

/**
  * Iterate through the columns and remove the widths
  * @private
  */
oj.TableDomUtils.prototype._removeHeaderColumnAndCellColumnWidths = function()
{
  var columns = this.component._getColumnDefs();

  var i, headerColumn;
  for (i = 0; i < columns.length; i++)
  {
    headerColumn = this.getTableHeaderColumn(i);
    if (headerColumn != null)
    {
      headerColumn.css(oj.TableDomUtils.CSS_PROP._MIN_WIDTH, '');
    }
  }

  var tableBodyRows = this.getTableBodyRows();
  if (tableBodyRows != null && tableBodyRows.length > 0)
  {
    var tableBodyCell;
    for (i = 0; i < columns.length; i++)
    {

      tableBodyCell = this.getTableBodyCell(0, i, null);
      if (tableBodyCell != null)
      {
        tableBodyCell.css(oj.TableDomUtils.CSS_PROP._MIN_WIDTH, '');
      }
    }
  }
};

/**
 * Remove table cell bottom border
 * @param {boolean} underflow  table content underflow
 * @private
 */
oj.TableDomUtils.prototype._removeTableBodyRowBottomBorder = function(underflow)
{
  if (this.options.horizontalGridVisible != oj.TableDomUtils._OPTION_ENABLED)
  {
    return;
  }
  
  var tableBodyRows = this.getTableBodyRows();

  if (tableBodyRows != null && tableBodyRows.length > 0)
  {
    // first make sure that all rows have hgrid
    var i;
    for (i = 0; i < tableBodyRows.length; i++)
    {
      if (!$(tableBodyRows[i]).hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS))
      {
        $(tableBodyRows[i]).addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS);
      }
    }
    var lastTableBodyRow = $(tableBodyRows[tableBodyRows.length - 1]);

    if (!underflow)
    {
      lastTableBodyRow.removeClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS);
    }
  }
};
 
/**
 * Remove table dimensions styling
 * @private
 */
oj.TableDomUtils.prototype._removeTableDimensionsStyling = function()
{
  var table = this.getTable();
  var tableHeader = this.getTableHeader();        
  var tableHeaderRow = this.getTableHeaderRow();
  var tableFooter = this.getTableFooter();
  var tableFooterRow = this.getTableFooterRow();
  var tableBody = this.getTableBody();

  // first remove any styling so that the browser sizes the table
  if (tableHeader != null)
  {
    tableHeader.attr(oj.TableDomUtils.DOM_ATTR._STYLE, '');
    tableHeaderRow.attr(oj.TableDomUtils.DOM_ATTR._STYLE, '');
    
    var headerColumnTextDivs = tableHeaderRow.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
    var i;
    if (headerColumnTextDivs && headerColumnTextDivs.length > 0)
    {
      for (i = 0; i < headerColumnTextDivs.length; i++)
      {
        $(headerColumnTextDivs[i]).css(oj.TableDomUtils.CSS_PROP._WIDTH, '');
      }
    }
  }
  if (tableFooter != null)
  {
    tableFooter.attr(oj.TableDomUtils.DOM_ATTR._STYLE, '');
    tableFooterRow.attr(oj.TableDomUtils.DOM_ATTR._STYLE, '');
  }
  table.css(oj.TableDomUtils.CSS_PROP._DISPLAY, '');
  table.css(oj.TableDomUtils.CSS_PROP._WIDTH, '');
  
  if (tableBody != null)
  {
    tableBody.attr(oj.TableDomUtils.DOM_ATTR._STYLE, '');
  }

  this._removeHeaderColumnAndCellColumnWidths();
};

/**
 * Iterate through the columns and get and then set the widths
 * for the columns and first row this is so that when we re-apply the styling
 * the headers and footers will align with the cells
 * @private
 */
oj.TableDomUtils.prototype._setColumnWidths = function()
{
 var columns = this.component._getColumnDefs();
 // used to track if the widths are zero. This happens when the browser hasn't
 // finished rendering the columns
 var notZeroWidth = null;
 var columnWidths = [];
 var columnPaddingWidths = [];
 var i, headerColumnCell, headerColumnDiv, headerColumnTextDivHeight, headerColumnTextDiv, footerCell;
 for (i = 0; i < columns.length; i++)
 {
   notZeroWidth = false;
   headerColumnCell = this.getTableHeaderColumn(i);
   if (headerColumnCell != null)
   {
     // read in the widths first. Set the widths in a separate loop so setting
     // the widths of early columns does not affect the widths of the rest
     if (headerColumnCell.width() > 0)
     {
       notZeroWidth = true;
     }
     // webkit returns values which are 1px too small when using width()
     if (this._isWebkit()) 
     {
       columnWidths[i] = parseInt(window.getComputedStyle(headerColumnCell[0])[oj.TableDomUtils.CSS_PROP._WIDTH], 10);
       
       if (i == 0)
       {
         // Also due to webkit bug: http://stackoverflow.com/questions/5761145/webkit-safari-and-chrome-zero-width-td-with-only-bottom-border-is-displayed-as
         // we need to increase the width of the first column by 1px
         columnWidths[i] = columnWidths[i] + 1;
       }
     }
     else
     {
       columnWidths[i] = headerColumnCell.width();
     }
     columnPaddingWidths[i] = parseInt(headerColumnCell.css(oj.TableDomUtils.CSS_PROP._PADDING_RIGHT), 10) + parseInt(headerColumnCell.css(oj.TableDomUtils.CSS_PROP._PADDING_LEFT), 10);

     // also set the header heights
     headerColumnTextDivHeight = null;
     headerColumnTextDiv = headerColumnCell.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
     if (headerColumnTextDiv && headerColumnTextDiv.length > 0)
     {
       headerColumnTextDivHeight = headerColumnTextDiv.get(0).clientHeight;
     }
     if (headerColumnTextDivHeight != null)
     {
       headerColumnDiv = headerColumnCell.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CLASS);
       headerColumnDiv.css(oj.TableDomUtils.CSS_PROP._MIN_HEIGHT, headerColumnTextDivHeight + oj.TableDomUtils.CSS_VAL._PX);
     }
   }
 }
 for (i = 0; i < columns.length; i++)
 {
   headerColumnCell = this.getTableHeaderColumn(i);
   if (headerColumnCell != null)
   {
     headerColumnCell.css(oj.TableDomUtils.CSS_PROP._MIN_WIDTH, columnWidths[i] + oj.TableDomUtils.CSS_VAL._PX);
   }
   footerCell = this.getTableFooterCell(i);
   if (footerCell != null)
   {
     if (this._isWebkit() && i == 0) 
     {
       // undo the webkit workaround. Not needed for tfoot
       footerCell.css(oj.TableDomUtils.CSS_PROP._MIN_WIDTH, columnWidths[i] - 1 + oj.TableDomUtils.CSS_VAL._PX);
     }
     else
     {
      footerCell.css(oj.TableDomUtils.CSS_PROP._MIN_WIDTH, columnWidths[i] + oj.TableDomUtils.CSS_VAL._PX);
     }
   }
 }

 var tableBodyRows = this.getTableBodyRows();
 if (tableBodyRows != null && tableBodyRows.length > 0)
 {
   var tableBodyCell, tableBodyCellPaddingWidth, adjustedColumnWidth;
   for (i = 0; i < columns.length; i++)
   {

     tableBodyCell = this.getTableBodyCell(0, i, null);
     if (tableBodyCell != null)
     {
       if (tableBodyCell.width() > 0)
       {
         notZeroWidth = true;
       }
       tableBodyCellPaddingWidth = parseInt(tableBodyCell.css(oj.TableDomUtils.CSS_PROP._PADDING_RIGHT), 10) + parseInt(tableBodyCell.css(oj.TableDomUtils.CSS_PROP._PADDING_LEFT), 10);

       if (this._isWebkit())
       {
         if (i == 0)
         {
           columnWidths[i] = columnWidths[i] - 1;
         }
       }
       adjustedColumnWidth = null;
       if (tableBodyCellPaddingWidth > columnPaddingWidths[i])
       {
         adjustedColumnWidth = columnWidths[i] - tableBodyCellPaddingWidth + columnPaddingWidths[i];
       }
       else
       {
         adjustedColumnWidth = columnWidths[i] + columnPaddingWidths[i] - tableBodyCellPaddingWidth;
       }
       tableBodyCell.css(oj.TableDomUtils.CSS_PROP._MIN_WIDTH, adjustedColumnWidth + oj.TableDomUtils.CSS_VAL._PX);
     }
   }
 }
 
 return notZeroWidth;
};

/**
 * Iterate through the header columns and set widths for those
 * which have overflow so that the text displays an ellipsis
 * @private
 */
oj.TableDomUtils.prototype._setHeaderColumnOverflowWidths = function()
{
 var columns = this.component._getColumnDefs();
 var i, column, headerColumnCell, headerColumnDiv, headerColumnTextDiv, headerColumnTextDivWidth, newHeaderColumnTextDivWidth, sortPlaceHolderDivWidth;
 for (i = 0; i < columns.length; i++)
 {
   column = columns[i];  
   headerColumnCell = this.getTableHeaderColumn(i);
   if (headerColumnCell != null)
   {
     // if we have overflow
     headerColumnDiv = headerColumnCell.children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CLASS);
     if (headerColumnDiv.length > 0)
     {
       headerColumnDiv = $(headerColumnDiv[0]);
       headerColumnTextDiv = headerColumnCell.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
       if (headerColumnTextDiv && headerColumnTextDiv.length > 0)
       {
         sortPlaceHolderDivWidth = 0;
         if (column.sortable == oj.TableDomUtils._OPTION_ENABLED)
         {
           sortPlaceHolderDivWidth = $(headerColumnCell.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_SORT_PACEHOLDER_CLASS).get(0)).width();
         }
         
         if (headerColumnDiv[0].clientWidth > 0 && headerColumnTextDiv.width() + sortPlaceHolderDivWidth > headerColumnDiv[0].clientWidth)
         {
           headerColumnTextDiv.css(oj.TableDomUtils.CSS_PROP._WIDTH, '');
           headerColumnTextDivWidth = headerColumnTextDiv.width();
           newHeaderColumnTextDivWidth = headerColumnCell.width() - sortPlaceHolderDivWidth;
           
           // we only want to constrain the width.
           if (headerColumnTextDivWidth > newHeaderColumnTextDivWidth + 1)
           {
             headerColumnTextDiv.css(oj.TableDomUtils.CSS_PROP._WIDTH, newHeaderColumnTextDivWidth + oj.TableDomUtils.CSS_VAL._PX);
           }
         }
       }
     }
   }
 }
};

/**
 * @const
 */
oj.TableDomUtils.CSS_CLASSES =
  {
    _CHECKBOX_ACC_SELECT_COLUMN_CLASS: 'oj-table-checkbox-acc-select-column',
    _CHECKBOX_ACC_SELECT_ROW_CLASS: 'oj-table-checkbox-acc-select-row',
    _TABLE_CONTAINER_CLASS: 'oj-table-container',
    _TABLE_SCROLLER_CLASS: 'oj-table-scroller',
    _TABLE_CLASS: 'oj-table',
    _TABLE_ELEMENT_CLASS: 'oj-table-element',
    _TABLE_FOOTER_CLASS: 'oj-table-footer',
    _TABLE_FOOTER_ROW_CLASS: 'oj-table-footer-row',
    _TABLE_HEADER_CLASS: 'oj-table-header',
    _TABLE_HEADER_ROW_CLASS: 'oj-table-header-row',
    _COLUMN_HEADER_CELL_CLASS: 'oj-table-column-header-cell',
    _COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS: 'oj-table-column-header-acc-select-column',
    _COLUMN_HEADER_ACC_SELECT_ROW_CLASS: 'oj-table-column-header-acc-select-row',
    _COLUMN_HEADER_ACC_SELECT_ROW_TEXT_CLASS: 'oj-table-column-header-acc-select-row-text',
    _COLUMN_HEADER_CLASS: 'oj-table-column-header',
    _COLUMN_HEADER_TEXT_CLASS: 'oj-table-column-header-text',
    _COLUMN_HEADER_ASC_CLASS: 'oj-table-column-header-asc',
    _COLUMN_HEADER_DSC_CLASS: 'oj-table-column-header-dsc',
    _COLUMN_HEADER_SORT_PACEHOLDER_CLASS: 'oj-table-column-header-sort-placeholder',
    _COLUMN_HEADER_ACC_ASC_LINK_CLASS: 'oj-table-column-header-acc-asc-link',
    _COLUMN_HEADER_ACC_DSC_LINK_CLASS: 'oj-table-column-header-acc-dsc-link',
    _COLUMN_HEADER_ASC_LINK_CLASS: 'oj-table-column-header-asc-link',
    _COLUMN_HEADER_DSC_LINK_CLASS: 'oj-table-column-header-dsc-link',
    _COLUMN_HEADER_ASC_ICON_CLASS: 'oj-table-column-header-asc-icon',
    _COLUMN_HEADER_DSC_ICON_CLASS: 'oj-table-column-header-dsc-icon',
    _TABLE_BODY_CLASS: 'oj-table-body',
    _TABLE_DATA_ROW_CLASS: 'oj-table-body-row',
    _TABLE_DATA_CURRENT_ROW_CLASS: 'oj-table-body-current-row',
    _TABLE_DATA_CELL_CLASS: 'oj-table-data-cell',
    _TABLE_DATA_CELL_ACC_SELECT_CLASS: 'oj-table-data-cell-acc-select',
    _TABLE_VGRID_LINES_CLASS: 'oj-table-vgrid-lines',
    _TABLE_HGRID_LINES_CLASS: 'oj-table-hgrid-lines',
    _TABLE_FOOTER_CELL_CLASS: 'oj-table-footer-cell',
    _TABLE_FOOTER_CELL_VGRID_LINES_CLASS: 'oj-table-footer-cell-vgrid-lines',
    _TABLE_INLINE_MESSAGE_CLASS: 'oj-table-inline-message',
    _TABLE_STATUS_MESSAGE_CLASS: 'oj-table-status-message',
    _TABLE_STATUS_MESSAGE_TEXT_CLASS: 'oj-table-status-message-text',
    _TABLE_NO_DATA_MESSAGE_CLASS: 'oj-table-no-data-message',
    _TABLE_NO_DATA_ROW_CLASS: 'oj-table-no-data-row',
    _WIDGET_ICON_CLASS: 'oj-component-icon',
    _HIDDEN_CONTENT_ACC_CLASS: 'oj-helper-hidden-accessible'
  };

/**
 * @const
 */
oj.TableDomUtils.CSS_PROP =
  {
    _DISPLAY: 'display',
    _POSITION: 'position',
    _HEIGHT: 'height',
    _WIDTH: 'width',
    _TOP: 'top',
    _BOTTOM: 'bottom',
    _LEFT: 'left',
    _RIGHT: 'right',
    _PADDING_TOP: 'padding-top',
    _PADDING_LEFT: 'padding-left',
    _PADDING_RIGHT: 'padding-right',
    _OVERFLOW: 'overflow',
    _OVERFLOW_X: 'overflow-x',
    _OVERFLOW_Y: 'overflow-y',
    _MIN_WIDTH: 'min-width',
    _MIN_HEIGHT: 'min-height',
    _FLOAT: 'float',
    _BORDER_TOP: 'border-top',
    _BORDER_BOTTOM_WIDTH: 'border-bottom-width',
    _BORDER_LEFT_WIDTH: 'border-left-width',
    _MARGIN_BOTTOM: 'margin-bottom'
  };
  
/**
 * @const
 */
oj.TableDomUtils.CSS_VAL =
  {
    _NONE: 'none',
    _BLOCK: 'block',
    _RELATIVE: 'relative',
    _ABSOLUTE: 'absolute',
    _INLINE: 'inline',
    _AUTO: 'auto',
    _HIDDEN: 'hidden',
    _LEFT: 'left',
    _PX: 'px'
  };
  
/**
 * @const
 */
oj.TableDomUtils.DOM_ATTR =
  {
    _STYLE: 'style',
    _TABINDEX: 'tabindex',
    _TYPE: 'type',
    _ID: 'id',
    _TITLE: 'title',
    _HREF: 'href',
    _HEADERS: 'headers',
    _COLSPAN: 'colspan'
  };
  
/**
 * @const
 */
oj.TableDomUtils.DOM_ELEMENT =
  {
    _DIV: 'div',
    _A: 'a',
    _TR: 'tr',
    _TD: 'td',
    _TH: 'th',
    _TBODY: 'tbody',
    _THEAD: 'thead',
    _TFOOT: 'tfoot',
    _INPUT: 'input',
    _UL: 'ul',
    _SPAN: 'span'
  };
  

/**
 * @const
 */
oj.TableDomUtils.MARKER_STYLE_CLASSES =
  {
    _WIDGET: 'oj-component',
    _ACTIVE: 'oj-active',
    _CLICKABLE_ICON: 'oj-clickable-icon-nocontext',
    _DISABLED: 'oj-disabled',
    _ENABLED: 'oj-enabled',
    _FOCUS: 'oj-focus',
    _HOVER: 'oj-hover',
    _SELECTED: 'oj-selected',
    _WARNING: 'oj-warning'
  };
  
/**
 * @private
 * @const
 * @type {string}
 */
oj.TableDomUtils._COLUMN_HEADER_ROW_SELECT_ID =   '_hdrColRowSel';

/**
 * @private
 * @const
 * @type {string}
 */
oj.TableDomUtils._OPTION_ENABLED = 'enabled';
/**
 * @private
 * @const
 * @type {string}
 */
oj.TableDomUtils._OPTION_DISABLED = 'disabled';
/**
 * @private
 * @const
 */
oj.TableDomUtils._OPTION_SELECTION_MODES =
  {
    _SINGLE: 'single',
    _MULTIPLE: 'multiple'
  };

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @ignore
 */
oj.TableRendererUtils = {};

/**
 * Column Header Renderer
 * @param {Object} context renderer context
 * @param {Object} options renderer options
 * @param {function(Object)} delegateRenderer delegate renderer
 * @export
 */
oj.TableRendererUtils.columnHeaderDefaultRenderer = function(context, options, delegateRenderer)
{
  var parentElement = $(context['headerContext']['parentElement']);
  var headerColumnDiv = $(document.createElement('div'));
  headerColumnDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CLASS);
  parentElement.empty();
  parentElement.append(headerColumnDiv);
  
  // call the delegateRenderer
  var headerContentDiv = $(document.createElement('div'));
  headerContentDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
  headerColumnDiv.prepend(headerContentDiv); //@HTMLUpdateOK
  delegateRenderer(headerContentDiv);
};

/**
 * Column Header with Sort Icons Renderer
 * @param {Object} context renderer context
 * @param {Object} options renderer options
 * @param {function(Object)} delegateRenderer delegate renderer
 * @export
 */
oj.TableRendererUtils.columnHeaderSortableIconRenderer = function(context, options, delegateRenderer)
{
  var component = context['headerContext']['component'];
  var parentElement = $(context['headerContext']['parentElement']);
  var headerColumnDiv = $(document.createElement('div'));
  headerColumnDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CLASS);
  parentElement.empty();
  parentElement.append(headerColumnDiv);
  
  if (component._GetReadingDirection() === "rtl")
  {
    headerColumnDiv.css(oj.TableDomUtils.CSS_PROP._PADDING_LEFT, '0px');
  }
  else
  {
    headerColumnDiv.css(oj.TableDomUtils.CSS_PROP._PADDING_RIGHT, '0px');
  }
  
  var headerColumnAscDiv = $(document.createElement('div'));
  headerColumnAscDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
  headerColumnDiv.append(headerColumnAscDiv); //@HTMLUpdateOK
  var headerColumnAscLink = $(document.createElement('a'));
  headerColumnAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
  headerColumnAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._WIDGET_ICON_CLASS);
  headerColumnAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS);
  headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
  headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._CLICKABLE_ICON);
  component._hoverable(headerColumnAscLink);
  headerColumnAscDiv.append(headerColumnAscLink); //@HTMLUpdateOK
  var headerColumnAscWidth = headerColumnAscDiv.width();
  var headerColumnAscHeight = headerColumnAscDiv.height();
    
  // separate link for acc
  var headerColumnAccAscLink = $(document.createElement('a'));
  headerColumnAccAscLink.attr('tabindex', '0');
  headerColumnAccAscLink.attr('href', '#');
  headerColumnAccAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_ASC_LINK_CLASS);
  headerColumnAccAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  headerColumnAccAscLink.text(component.getTranslatedString('labelSortAsc'));
  headerColumnAscDiv.append(headerColumnAccAscLink); //@HTMLUpdateOK
  
  var headerColumnSortPlaceholderDiv = $(document.createElement('div'));
  headerColumnSortPlaceholderDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_SORT_PACEHOLDER_CLASS);
  headerColumnSortPlaceholderDiv.css(oj.TableDomUtils.CSS_PROP._DISPLAY, 'inline-block');
  headerColumnSortPlaceholderDiv.css('width', headerColumnAscWidth + 'px');
  headerColumnSortPlaceholderDiv.css('height', headerColumnAscHeight + 'px');
  headerColumnDiv.append(headerColumnSortPlaceholderDiv); //@HTMLUpdateOK

  //sort descending link
  var headerColumnDscDiv = $(document.createElement('div'));
  headerColumnDscDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
  // descending sort is initially not visible
  headerColumnDscDiv.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
  headerColumnDiv.append(headerColumnDscDiv); //@HTMLUpdateOK

  var headerColumnDscLink = $(document.createElement('a'));
  headerColumnDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
  headerColumnDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._WIDGET_ICON_CLASS);
  headerColumnDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS);
  headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
  headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._CLICKABLE_ICON);
  component._hoverable(headerColumnDscLink);
  headerColumnDscDiv.append(headerColumnDscLink); //@HTMLUpdateOK
    
  // separate link for acc
  var headerColumnAccDscLink = $(document.createElement('a'));
  headerColumnAccDscLink.attr('tabindex', '0');
  headerColumnAccDscLink.attr('href', '#');
  headerColumnAccDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_DSC_LINK_CLASS);
  headerColumnAccDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  headerColumnAccDscLink.text(component.getTranslatedString('labelSortDsc'));
  headerColumnDscDiv.append(headerColumnAccDscLink); //@HTMLUpdateOK
  
  // call the delegateRenderer
  var headerContentDiv = $(document.createElement('div'));
  headerContentDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
  headerColumnDiv.prepend(headerContentDiv); //@HTMLUpdateOK
  delegateRenderer(headerContentDiv);
};
});
