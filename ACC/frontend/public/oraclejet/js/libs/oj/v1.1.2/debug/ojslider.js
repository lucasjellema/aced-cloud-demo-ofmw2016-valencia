/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue', 'jqueryui-amd/draggable', 'ojs/ojtouchproxy'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * Copyright (c) 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function() {

/*!
 * JET Slider @VERSION
 *
 *
 * Depends:
 *  jquery.ui.widget.js
 */

/**
 * @ojcomponent oj.ojSlider
 * @augments oj.editableValue
 * 
 * @classdesc
 * <h3 id="sliderOverview-section">
 *   JET Slider Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sliderOverview-section"></a>
 * </h3>
 * <p>Description: The ojSlider component enhances an HTML <code class="prettyprint">input</code> element into an interactive slider.
 * </p>
 * The <code class="prettyprint">type</code> option is used to set the slider to either a single-thumb or a range slider.
 * Single thumb sliders are defined by setting the <code class="prettyprint">type</code> option to either <code class="prettyprint">"single"</code>, <code class="prettyprint">"fromMin"</code>, or <code class="prettyprint">"fromMax"</code>.
 * The <code class="prettyprint">type</code> option defaults to <code class="prettyprint">"fromMin"</code>, which will style the value bar from the minimum value to the slider thumb.
 * A range slider (a slider with two thumbs) is defined by setting <code class="prettyprint">type</code> to <code class="prettyprint">range"</code>. 
 * The value bar is styled between the thumbs for a range slider.
 * <ul>
 * <li> To create a single thumb slider:</li>
 * Either use the default <code class="prettyprint">type</code>, or set the <code class="prettyprint">type</code> option to either "single", "fromMin", or "fromMax".
 * Set the <code class="prettyprint">value</code> option to a number. The value should be between the <code class="prettyprint">min</code> and <code class="prettyprint">max</code> option values. 
 * <li> To create a range slider (slider with two thumbs):</li>
 * set the <code class="prettyprint">type</code> option to "range", 
 * and set the <code class="prettyprint">value</code> option to an array of two numbers.
 * The first array value must be less than or equal to the second array value, and both values must be between the <code class="prettyprint">min</code> and <code class="prettyprint">max</code> option values. 
 * </ul>
 * </p>
 * The step option of the slider specifies the interval between thumb stops. For example, if <code class="prettyprint">min</code>  is set to 0 and <code class="prettyprint">max</code>
 * is set to 10, a <code class="prettyprint">step</code> value of 2 would allow the thumb to be positioned at 0, 2, 4, 6, 8, and 10.
 * </p>
 * The <code class="prettyprint">orientation</code> option defaults to <code class="prettyprint">"horizontal"</code>.
 * Set <code class="prettyprint">orientation</code> to <code class="prettyprint">"vertical"</code> for a vertical slider (one where the thumb travels along the vertical axis).
 * </p>
 * Set the <code class="prettyprint">disabled</code> option <code class="prettyprint">true</code> to display a slider that displays a value but does not allow interaction.
 * </p>
 * For horizontal sliders, use the slider component's <code class="prettyprint">rootAttributes </code> 
 * to set the width. For vertical sliders, use <code class="prettyprint">style </code> attributes on the 
 * <code class="prettyprint">input </code> tag to set the slider height. These conventions are recommended in order
 * to achieve the best messaging format.
 * </p>
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
 * <h3 id="accessibility-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#accessibility-section"></a>
 * </h3>
 * <p>
 * The slider component is accessible - it sets and maintains the appropriate aria- attributes, 
 * including <code class="prettyprint">aria-valuenow</code>, <code class="prettyprint">aria-valuemax</code>,
 * <code class="prettyprint">aria-valuemin</code> and <code class="prettyprint">aria-orientation</code>.
 * <p>
 * It is up to the application developer to associate the label with the slider input component.
 * There are three ways to do this:
 * <ul>
 * <li>
 * Set an <code class="prettyprint">aria-labelledby</code> on the slider input to reference the label
 * <code class="prettyprint">id</code>.
 * </li>
 * <li>
 * Set an <code class="prettyprint">id</code> on the slider input, and also set 
 * the <code class="prettyprint">for</code> attribute on the label to be the input's id.
 * </li>
 * <li>
 * Set an <code class="prettyprint">aria-label</code> on the slider input. 
 * </li>
 * </ul>
 *
 * The slider component will then use this information in the input tag to create the appropriate aria attribute on the slider thumb(s).
</p>
In addition, the slider thumb element can be accessed using <code class="prettyprint">getNodeBySubId()</code> method.
This allows the user to (a) override any of the above aria attributes that were set automically on the thumb,
 * or (b) define additional aria attributes, such as <code class="prettyprint">aria-controls</code> 
 * or <code class="prettyprint">aria-valueText</code> .
 * <p> 
 * If the slider controls another element that is in a remote area of the page,
 * then the <code class="prettyprint">aria-controls</code> attribute for the slider thumb should be set.
 * This can also be accomplished by accessing the slider thumb element using <code class="prettyprint">getNodeBySubID()</code>.
 * 
 * <p> 
 * For example, suppose there is another component, that is in a remote area of the page that controlled by the slider.
 * Assume that the <code class="prettyprint">id</code>  of the remote element is "idOfRemoteElement".
 * Below we use the <code class="prettyprint">getNodeBySubId()</code> method to access the thumb element in order to set the 
 * <code class="prettyprint">aria-controls</code> attribute of the thumb to point to the the id ("idOfRemoteElement") of the remote html element:
 * 
 * <pre class="prettyprint">
 * <code>
 *  $(document).ready(function() {
 *     ko.applyBindings(...)
 *     var thumb0 = $('#inputslider-id').ojSlider("getNodeBySubId", {subId:"oj-slider-thumb-0"});
 *     $(thumb0).attr("aria-controls", "idOfRemoteElement");
 *  });
 * </code></pre>
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * @desc Creates an ojSlider component
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize component using widget API</caption>
 * &lt;input id="spin" type="text"/&gt;<br/>
 * $("#slider").ojSlider({'value': 10, 'max':100, 'min':0, 'step':2});
 * $("#slider").ojSlider({'option', 'value', 10});
 * @example <caption>Using knockout, value, min, max bind to observables - salary, salaryMax, salaryMin</caption> 
 * &lt;input id="foo" data-bind="ojComponent: 
 *   {component: 'ojSlider', value: salary, min:salaryMin, max:salaryMax, step:5}"/&gt;
 */
    oj.__registerWidget("oj.ojSlider", $['oj']['editableValue'], {
        defaultElement: "<input>",
        version: "1.1.1",
        widgetEventPrefix : "oj", 

        options: {

            /** @private 
              * @type {?number}
            */
            distance: 0,
            /** 
              * The maximum value of the slider. 
              * The <code class="prettyprint">max</code> must not be less than the 
              * <code class="prettyprint">min</code>, or else an Error is thrown during initialization.
              * @expose 
              * @memberof oj.ojSlider
              * @instance
              * @type {?number}
              * @default <code class="prettyprint">null</code>
              * @example <caption>Initialize the slider with the 
              * <code class="prettyprint">max</code> option specified:</caption>
              * $( ".selector" ).ojSlider( { "max": 100 } );
              * @example <caption>Set the <code class="prettyprint">max</code> to a number inside 
              * of quotes; this is valid and will be coerced to a number,
              * -100 in this example:</caption>
              * $( ".selector" ).ojSlider( { "max": "-100" } );
              */
            max: 100,
            /** 
              * The minimum value of the slider. 
              * The <code class="prettyprint">min</code> must not be greater than the 
              * <code class="prettyprint">max</code>, or else an Error is thrown during initialization.
              * @expose 
              * @memberof oj.ojSlider
              * @instance
              * @type {?number}
              * @default <code class="prettyprint">null</code>
              * @example <caption>Initialize the slider with the 
              * <code class="prettyprint">max</code> option specified:</caption>
              * $( ".selector" ).ojSlider( { "max": 100 } );
              * @example <caption>Set the <code class="prettyprint">max</code> to a number inside 
              * of quotes; this is valid and will be coerced to a number,
              * -100 in this example:</caption>
              * $( ".selector" ).ojSlider( { "max": "-100" } );
              */
            min: 0,
            /** 
              * Specify the orientation of the slider.
              *
              * @expose 
              * @memberof! oj.ojSlider
              * @instance
              * @type {string}
              * @ojvalue {string} "horizontal" Orient the slider horizontally.
              * @ojvalue {string} "vertical" Orient the slider vertically.
              * @default <code class="prettyprint">"horizontal"</code>
              *
              * @example <caption>Initialize the slider with the 
              * <code class="prettyprint">orientation</code> option specified:</caption>
              * $( ".selector" ).ojSlider( { "orientation": "vertical" } );
              * 
              * @example <caption>Get or set the <code class="prettyprint">orientation</code> 
              * option after initialization:</caption>
              * // getter
              * var orientation = $( ".selector" ).ojSlider( "option", "orientation" );
              * 
              * // setter
              * $( ".selector" ).ojSlider( "option", "orientation", "vertical" );
              */
            orientation: "horizontal",
            
            /**
              * readOnly is private - more UX design is necessary to support readonly across components.
              * Whether the component is readOnly. The element's <code class="prettyprint">readOnly</code>
              *  property is used as its initial value if it exists, when the option is not explicitly set. When neither is set, 
              * <code class="prettyprint">readOnly </code>
              * defaults to false.
              * 
              * @example <caption>Initialize component with <code class="prettyprint">readOnly</code> option:</caption>
              * $(".selector").ojSlider({"readOnly": true});
              * 
              * @private
              * @type {?boolean}
              * @default <code class="prettyprint">false</code>
              * @instance
              * @memberof oj.ojSlider
              */
            readOnly: false,

            
            /** 
             * Whether the component is disabled. The element's <code class="prettyprint">disabled</code>
             *  property is used as its initial 
             * value if it exists, when the option is not explicitly set. When neither is set, 
             * <code class="prettyprint">disabled </code>
             * defaults to false.
             * 
             * @example <caption>Initialize component with <code class="prettyprint">disabled</code> option:</caption>
             * $(".selector").ojSlider({"disabled": true});
             * 
             * @expose 
             * @type {?boolean}
             * @default <code class="prettyprint">false</code>
             * @instance
             * @memberof oj.ojSlider
             */
            disabled: false,

            /** 
             * Determines the size or amount of each interval or step the slider takes 
             * between min and max.
             * The full specified value of the range (max - min) should be divisible by step.
             *
             * @expose 
             * @instance
             * @type {?number}
             * @default <code class="prettyprint">1</code>
             * @memberof oj.ojSlider 
             * @example <caption>Initialize the slider with the 
             * <code class="prettyprint">step</code> option specified:</caption>
             * $( ".selector" ).ojSlider( { "step": 10 } );
             * @example <caption>Set the <code class="prettyprint">step</code> to a number inside 
             * of quotes; this is valid and will be coerced to a number,
             * 10 in this example:</caption>
             * $( ".selector" ).ojSlider( { "step": "10" } );
             **/

            step: 1,

            /**
              * The slider type determines whether the slider has one thumb or two thumbs, and how the value is represented in the UI.
              * <p> Note that for the use case of dynamically switching between a range slider and a single-thumb slider,
              * it is best to set the <code class="prettyprint">type</code> option before setting the <code class="prettyprint">value</code> option. 
              * This avoids the loss of the second thumb's value (during value coersion) when switching from a single-thumb slider to a range slider (when the value would be set as an array on a single-thumb slider).
              *
              * @expose
              * @type {?string}
              * @ojvalue {string} "fromMin" A single-thumb slider where the value bar goes from the slider min to the the slider thumb.
              * @ojvalue {string} "fromMax" A single-thumb slider where the value bar goes from the slider thumb to the the slider max.
              * @ojvalue {string} "range" A slider with two thumbs, where the value bar goes between the slider thumbs.
              * @ojvalue {string} "single" A single-thumb slider where the value bar has no additional styling.
              * @default <code class="prettyprint">"fromMin"</code>
              * @instance
              * @memberof oj.ojSlider
              * 
              * @example <caption>Initialize component with <code class="prettyprint">type</code> option set to "range":</caption>
              * $(".selector").ojSlider({"type": "range"});
              * 
              */

            type: "fromMin",
            
            /** 
             * The value of the component. Value can be a number or an array. 
             * When <code class="prettyprint">type</code> is equal to "range" the <code class="prettyprint">value</code> should be an array of two numbers,
             * while any other <code class="prettyprint">type</code> should have <code class="prettyprint">value</code> defined as a number.
             * 
             * <p> Note that the <code class="prettyprint">value</code> option should
             * be compatible with the <code class="prettyprint">type</code> option, as described above.
             * A value that is not compatible with the type will be coerced into a compatible value. 
             * For example, it <code class="prettyprint">type</code> is set to "range" 
             * and the value is not an array of two numbers, then the value will be
             * automatically coerced into an array of two numbers.
             *
             * <p> Also note that for the use case of dynamically switching between a single-thumb slider and a range slider,
             * you should set the <code class="prettyprint">type</code> option before setting the <code class="prettyprint">value</code> option.
             * This avoids the loss of the second thumb's value (during value coersion) when switching from a single-thumb slider to a range slider (when the value would be set as an array on a single-thumb slider).
             *
             * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
             * $(".selector").ojSlider({'value': 55});<br/>
             * @example <caption>Get or set <code class="prettyprint">value</code> option, after initialization:</caption>
             * // Getter: returns 55
             * $(".selector").ojSlider("option", "value");
             * // Setter: sets 20
             * $(".selector").ojSlider("option", "value", 20);
             * @example <caption>Set the <code class="prettyprint">value</code> to a number inside 
             * of quotes; this is valid and will be coerced to a number,
             * 10 in this example:</caption>
             * $( ".selector" ).ojSlider( { "value": "10" } );
             * @expose 
             * @access public
             * @instance
             * @default <code class="prettyprint">0</code>
             * @memberof oj.ojSlider
             * @type {?number|Array.<Number>}
             */
            value: 0
        },

        //
        // SLIDER_MIN and SLIDER_MAX are used as default aria-labelledby values on range slider thumbs.
        //
        /*
          _BUNDLE_KEY:
          {
              _SLIDER_MIN_:  'minimum',
              _SLIDER_MAX:   'maxiumum'    
          },
        */
        // 
        // Later on, we can do the following:
        // 
        // sliderMinimum = this.getTranslatedString(this._BUNDLE_KEY._SLIDER_MIN); 
        // sliderMaximum = this.getTranslatedString(this._BUNDLE_KEY._SLIDER_MAX); 
        //

        // number of pages in a slider
        // (how many times can you page up/down to go through the whole range)
        _numPages: 5,
        _isRTL: function() {
            return oj.DomUtils.getReadingDirection() === "rtl";
        },

        /*
        _getRootAttributesLocator: function() {
            return this.sliderWrapper;
        },            
*/

        _ComponentCreate : function () {

            this._super();

            this._newMultiValue = new Array();
            var node = this.element;

            // input type=number does not support the 'pattern' attribute, so
            // neither should ojInputNumber.
            // remove this before EditableValue grabs it and uses it.
            // node.removeAttr("pattern");
            
            node.removeAttr("pattern");

            this._keySliding = false;
            this._dragInProgress = false;

            this._thumbIndex = null;

            // ojSlider could support both <div> and <input> tags
            this._inputtag = false;
            if (this.element.is("INPUT")) 
            {
                this._inputtag = true;

                // Save the input tag style, apply to sliderWrapper later in the code.
                if (this.element[0].style) 
                    this._styleFromInputTag = this.element[0].style.cssText;

                // todo - test to ensure that this is put back on destory.
                this._inputElementOriginalDisplay = this.element.css("display");
                this.element.css("display", "none");

                // We will need the inputDiv later in order to destroy 
                var inputDiv = $(this.element).wrap('<div> </div>'); // @HTMLUpdateOK
                
                // _elementWrapped is the new wrapped input element.
                this._elementWrapped = inputDiv.parent();

            }
            else this._elementWrapped = this.element;

            var classes = "oj-slider ";

            if (this._isVertical()) 
                classes += "oj-slider-vertical";
            else
                classes += "oj-slider-horizontal";
        
            classes += " ui-widget ui-widget-content";

            this._elementWrapped.addClass(classes);

            // if (Array.isArray(this.options.value))
            if (this.options.type === "range")
                this._multipleThumbs = true;
            else this._multipleThumbs = false;

            this._calculateNewMax();

            this._setup();
	    this._setupEvents();

        },

        _AfterCreate : function ()
        {
            this._super();

	    this._makeDraggable();

            var label = this._GetLabelElementLocal();

            // this.$label = this._GetLabelElementLocal();

            //
            // Copy any labelled-by on the <input labelled-by="id"> to the slider thumb.
            //
            if (label) {

                // this id shold be on the thumb: aria-labelledby =

                // 
                // todo: verify that this works properly for range slider
                // 
                var thumb = this._elementWrapped.find('.oj-slider-thumb');
                // Set the aria-labelledby attribute of the thumb to the returned id.
                var labelId = label.attr("id");
                if (!labelId)
                    labelId = label.attr("for");

                thumb.attr('aria-labelledby', labelId);

                if (label.length > 1 && thumb.length > 1)  {

                    /*
                    var label2 = label[1];
                    var secondLabelId = $(label2).attr("id");
                    */

                    var thumb2 = thumb[1];
                    thumb2.attr('aria-labelledby',  String(labelId));
                }

            }
            else {

                //
                // Check if the <input> has aria-label=""
                //

                var ariaLabelString = this.element.attr("aria-label");
                if (ariaLabelString) {
                    // console.log("aria-label " + ariaLabelString);

                    var thumb = this._elementWrapped.find('.oj-slider-thumb');

                    // Set the aria-labelledby attribute of the thumb to the returned id
                    thumb.attr('aria-label',  ariaLabelString);

                }
            }
        },

        _GetLabelElementLocal : function ()
        {
            // If <input> has aria-labelledby set, then look for label it is referring to.
            var queryResult = this._getAriaLabelledByElementLocal();
            if (queryResult !== null && queryResult.length !== 0)
            {
                // console.log("found labelledby");
                // console.log("label id is " + queryResult.attr("id"));
                return queryResult;
            }
            
            queryResult = this._getAriaLabelForElementLocal();
            if (queryResult !== null && queryResult.length !== 0)
                return queryResult;

        },

        _getAriaLabelForElementLocal: function()
        {

            var id = this.element.prop("id");
            if (id !== undefined)
            {

                var labelQuery = "label[for='" + id + "']";

                // console.log("label id is " + $(labelQuery).attr("id"));

                var jqLabelQuery = $(labelQuery);
                if (jqLabelQuery.length > 0) return jqLabelQuery;

                var spanQuery = "span[for='" + id + "']";

                // console.log("span id is " + $(spanQuery).attr("id"));

                if ($(spanQuery).length !== 0)
                    return $(spanQuery);
            }
            return null;

        },

        _getAriaLabelledByElementLocal: function()
        {
            // look for a label with an id equal to the value of aria-labelledby. 
            // .prop does not work for aria-labelledby. Need to use .attr to find
            // aria-labelledby.
            var ariaId = this.element.attr("aria-labelledby");

            if (ariaId !== undefined )
            {

                var labelQuery = "label[id='" + ariaId + "']"; 
                var jqLabelQuery = $(labelQuery);
                if (jqLabelQuery.length > 0) return jqLabelQuery;

                var spanQuery = "span[id='" + ariaId + "']"; 
                var jqSpanQuery = $(spanQuery);
                if (jqSpanQuery.length > 0) return jqSpanQuery;

            }    
            else
                return null;
        },

        widget: function() {
            return this._elementWrapped;
        },

        _setup: function() {
            this._createSliderContainer();
            this._createBarBackground();
            this._createRange();
            this._createThumbs();
            this._refreshValue();
        },

        _getElementId: function() {
            return (this.element[0].id);
        },

        //
        // Return the id of the slider thumb at index.
        //
        _getThumbId: function(index) {

            var elementId = this._getElementId();
            var thumbId = elementId + "-thumb" + index;
            return thumbId;
        },

        // 
        // Return the id of the slider bar value.
        // 
        _getBarValueId: function(index) {

            var elementId = this._getElementId();
            var thumbId = elementId + "-barValue";
            return thumbId;
        },

        // 
        // Return the id of the slider bar.
        // 
        _getBarBackgroundId: function(index) {

            var elementId = this._getElementId();
            var thumbId = elementId + "-barBack";
            return thumbId;
        },

        // 
        // Return the id of the slider bar.
        // 
        _getSliderWrapperId: function(index) {

            var elementId = this._getElementId();
            var sliderWrapperId = elementId + "-sliderWrapper";
            return sliderWrapperId;
        },

        _createThumbs: function() {

            var i, thumbCount,
            ariaNow = "aria-valuenow = '" + this._valueMin() + "' ",
            ariaMin = "aria-valuemin = '" + this._valueMin() + "' ",
            ariaMax = "aria-valuemax = '" + this._valueMax() + "' ",
            options = this.options,
            orientationClass,
            thumb = "",
            thumbSpanStart = "<span ", 
            thumbClasses = "class='oj-slider-thumb ui-state-default' tabindex='0' role='slider'" + ariaMin + ariaMax + "></span>",
            thumbs = [];

            if (this._multipleThumbs) 
                thumbCount = this.options.value.length;
            else thumbCount = 1;

            // 
            // Assign each thumb a unique id based on the elementId and the thumb number.
            // 
            for (i=0; i < thumbCount; i++) {
                var thumbId = "id='" + this._getThumbId(i) + "' ";
                thumb = thumbSpanStart + thumbId + thumbClasses;
                thumbs.push( thumb );
            }

            this._thumbs = $(thumbs.join( "" )).appendTo(this._sliderContainer);  // @HTMLUpdateOK
            this._thumb = this._thumbs.eq(0);

            var that = this;
            this._thumbs.each(function( i ) {
                $( this ).data( "oj-slider-thumb-index", i );

                if (that._isVertical() ) 
                    $(this).attr('aria-orientation', "vertical");

                if (that.options.disabled) {
                    $(this).attr('aria-disabled', "true");
                    $(this).removeAttr("tabindex")
                } else {
                    $(this).removeAttr('aria-disabled');
                }
                
                // To support read only, we place set title = "read only" on the thumb.
                if (that.options.readOnly) {
                    $(this).attr('title', "read only");
                    // $(this).removeAttr("tabindex")
                } else 
                    $(this).removeAttr('title');
                
            });
        },

        // 
        // Create a containing div to group all component generated content.
        // This is used in messaging, so that we can apply margins/padding 
        // between the inline message div and the pixels that make up the slider.
        // 
        _createSliderContainer: function() {

            var sliderWrapperId = this._getSliderWrapperId();
            var existingSliderWrapper = this._elementWrapped.find('#' + sliderWrapperId);

            if (existingSliderWrapper.length) existingSliderWrapper.remove();

            this._sliderContainer = $("<div></div>");
            $(this._sliderContainer).attr('id', sliderWrapperId);
            this._sliderContainer.addClass("oj-slider-container");

            this.element.after(this._sliderContainer); // @HTMLUpdateOK

            // copy all style properties from the input tag to the enclosing slider div (sliderWrapper) 
            this._sliderContainer[0].style.cssText = this._styleFromInputTag;
            // 
            // If the height is not set on a vertical slider,
            // Apply a 150px default height.
            // 
            if (this._isVertical() && this._sliderContainer[0].style.height == "") {
                this._sliderContainer[0].style.height = "150px";
            }

        },

        _createBarBackground: function() {

            var barId = this._getBarBackgroundId();

            var existingBarBack = this._elementWrapped.find('#' + barId);

            if (existingBarBack.length) existingBarBack.remove();

            this._barback = $("<div></div>");

            var classes = "oj-slider-bar";
            
            if (this._isVertical()) 
                classes += " oj-slider-vertical";
            else
                classes += " oj-slider-horizontal";
        
            $(this._barback).attr('id', barId);
            this._barback.addClass(classes)

            // Place the background bar element immediately after the hidden input tab.
            this._sliderContainer.append(this._barback);  // @HTMLUpdateOK

            //
            // Clicking on the bar repositions the thumb.
            //
            var that = this;
            this._barback.on("mousedown" + that.eventNamespace, function( event ) {
                that._initDragging(event, false);
                that._mouseStop(event);
                that._refreshContainment();

                // that._closestThumb.addClass("ui-state-active").focus();
                // that._closestThumb.focus();

                var thumb = that._getActiveThumb();
                thumb.addClass("ui-state-active").focus();

            });

        },

        _createRange: function() {
            var options = this.options,
            classes = "";

            if ( options.type ) {

                if (!this.options.value) {

                    if (this._multipleThumbs) 
                        this.options.value = [this._valueMin(), this._valueMax()];
                    else 
                        this.options.value = this._valueMin();

                    this.option('value',
                                this.options.value,
                                {'_context': {writeback: true, internalSet: true}});

                } else if (this._multipleThumbs) {

                    // This is the expected, common case
                    if (this.options.value.length === 2) 
                        this.options.value = this.options.value.slice(0);
                    else {
                        // Coerse to an array here.
                        this.options.value = [this.options.value[0], this._valueMax()];
                        this.option('value',
                                    this.options.value,
                                    {'_context': {writeback: true, internalSet: true}});
                    }

                }

                if ( !this._range || !this._range.length ) {
                    this._range = $("<div></div>");
                    // Give the bar an id.
                    $(this._range).attr('id', this._getBarValueId());

                    // this._range = $("<div></div>").appendTo(this._sliderContainer);
                    this._sliderContainer.append(this._range);  // @HTMLUpdateOK
                    classes = "oj-slider-range oj-slider-bar-value";

                    //
                    // Like the bar background, clicking on the bar value also repositions the thumb.
                    //
                    var that = this;
                    this._range.on("mousedown" + that.eventNamespace, function( event ) {
                        that._initDragging(event, false);
                        that._mouseStop(event);
                        that._refreshContainment();
                        
                        var thumb = that._getActiveThumb();
                        thumb.addClass("ui-state-active").focus();

                    });

                } else {
                    this._range.removeClass( "oj-slider-range-min oj-slider-range-max" )
                    // Thumb range switching from true to min/max
                        .css({
                            "left": "",
                            "top": ""
                        });
                }

                this._range = this._sliderContainer.find('#' + this._getBarValueId());

                var newClass = "";
                if (options.type === "fromMin") newClass = " oj-slider-range-min";
                else if (options.type === "fromMax") newClass = " oj-slider-range-max";

                this._range.addClass( classes + newClass);
            } else {
                if ( this._range ) {
                    this._range.remove();
                }
                this._range = null;
            }
        },

        _setupTouch : function (e)
        {
            this._touchProxy = oj._TouchProxy.addTouchListeners(e);
        },

        _tearDownTouch : function (e)
        {
            oj._TouchProxy.removeTouchListeners(e);
        },

	/**
	 * Setup events for slider.
	 * 
	 * @protected
	 * @memberof oj.ojSlider
	 * @instance
	 */
        _setupEvents: function() {

            this._thumbs.toArray().forEach (

                function(current, i) {
                    var thumb = $(current);

                    // setup keyboard events on each thumb.
                    this._UnregisterChildNode(thumb);
                    this._on(thumb, this._thumbEvents);

                    // setup touch events on each thumb
                    this._setupTouch(thumb);

                    this._hoverable(thumb);
                    this._focusable(thumb);
                },
                this
            );
        },

        /**
          * Override of protected base class method.  
          * Method name needn't be quoted since is in externs.js.
          * @protected
          * @memberof oj.ojSlider
          * @instance
          */
        _destroy: function() {

            // Tear down touch events for each thumb.
            this._thumbs.toArray().forEach (
                function(current, i) {
                    var thumb = $(current);
                    this._tearDownTouch(thumb);
                },
                this
            );

            this._sliderContainer.remove();
            oj.DomUtils.unwrap(this.element, this._elementWrapped); // @HTMLUpdateOK
            this.element.css("display", this._inputElementOriginalDisplay);

	    this._RestoreAttributes(this.element);		
	    return this._super();

        },

        // 
        // Called on drag start.
        // Setup initial positions, distance.
        // Set the mouseSliding flag to true.
        // Define closestThumb, used later in drag handler.
        // 
        // Do not process mouse events if the slider is disabled (or readOnly).
        // 
        // The parameter fromThumb, if true, uses the thumb position,
        // otherwise we use the mouse position.
        // The mouse position is used for bar clicks,
        // while the thumb position is used when dragging the thumb.
        // 
        _initDragging: function(event, fromThumb) {

            var position, normValue, distance, index, allowed, offset, mouseOverThumb,
            that = this,
            o = this.options;

            this._closestThumb = this._thumb;

            if ( o.disabled ) return false;
            if ( o.readOnly ) return false;

            if (!fromThumb || this._multipleThumbs) {
                position = { x: event.pageX, y: event.pageY };
                normValue = this._getNormValueFromMouse(position);
            }
            else {
                normValue = this._getNormValueFromThumb();
            }

            distance = this._valueMax() - this._valueMin() + 1;

            if (this._multipleThumbs) {
                this._thumbs.each(function( i ) {
                    var thisDistance = Math.abs( normValue - that._getMultiValues(i) );
                    if (( distance > thisDistance ) ||
                        ( distance === thisDistance &&
                          (i === that._lastChangedValueIndex || that._getMultiValues(i) === o.min ))) {
                        distance = thisDistance;
                        this._closestThumb = $( this );
                        index = i;
                    } 
                });
            }

            this._dragInProgress = true;
            this._thumbIndex = index;
            if (!this._closestThumb) return;

            if ( !this._thumbs.hasClass( "ui-state-hover" ) ) {
                // console.log("call slide");
                this._slide( event, index, normValue );
            }

            var thumb = this._getActiveThumb();
            thumb.addClass("ui-state-active").focus();

            return true;
        },

        _mouseStart: function() {

            return true;
        },

        _mouseDrag: function( event ) {

            // console.log("mouseDrag " + normValue + " " + position.x + " " + position.y);
            // Mirror the mouse drag with a pct change.

            var pct = this._getFracFromThumb() * 100;
            // console.log("pct " + pct);

            if (this._multipleThumbs) this._setRangeMultiThumb(pct, this._thumbIndex);
            else this._setRange(pct);

            return false;
        },

        _mouseStop: function( event ) {

            this._thumbs.removeClass( "ui-state-active" );
            this._dragInProgress = false;

            var normValue = this._getNormValueFromThumb();
            this._slide( event, this._thumbIndex, normValue );
            // _change is needed for click positioning
            this._change( event, this._thumbIndex );

            this._thumbIndex = null;

            return false;
        },

        _isVertical: function() {
            return (this.options.orientation === "vertical");
        },
        // 
        // Adjust the fraction for bounds limits and orientation.
        // 
        _getOrientationAdjustedFrac: function(frac) {

            if ( frac > 1 ) {
                frac = 1;
            }
            if ( frac < 0 ) {
                frac = 0;
            }
            if ( this._isVertical() ) {
                frac = 1 - frac;
            }

            return frac;
        },

        // 
        // Return a normalized value (trimmed to step increments)
        // based on the passed mouse coordinates.
        //
        _getNormValueFromMouse: function(position) {

            var pixelTotal,
            pixelMouse,
            valueTotal,
            valueMouse;

            var fracMouse = this._getFracFromMouse(position);

            valueTotal = this._valueMax() - this._valueMin();

            if (this._isRTL() && !this._isVertical())
                fracMouse = 1 - fracMouse;

            valueMouse = this._valueMin() + fracMouse * valueTotal;

            return this._trimAlignValue( valueMouse );
        },

        // 
        // Return the fraction (between 0 and 1)
        // that represents the bar value.
        // This is based on the mouse position parameter.
        // 
        _getFracFromMouse: function(position) {

            var pixelTotal, pixelMouse, fracMouse;

            if (!this._isVertical()) {
                pixelTotal = this._barback.width();
                pixelMouse = position.x - this._barback.offset().left;
            } else {
                pixelTotal = this._barback.height();
                pixelMouse = position.y - this._barback.offset().top;
            }

            if (pixelTotal == 0) return 1;

            fracMouse = ( pixelMouse / pixelTotal );
            fracMouse = this._getOrientationAdjustedFrac(fracMouse);

            return fracMouse;

        },


        // Return the active thumb
        _getActiveThumb: function() {
            if (this._multipleThumbs) 
                return($(this._thumbs[this._thumbIndex]));
            else 
                return(this._thumb);
        },

        // 
        // Return the fraction (between 0 and 1)
        // that represents the bar value.
        // This is based on the current position of the thumb.
        // 
        _getFracFromThumb: function() {

            var pixelTotal, pixelMouse, fracThumb;

            var thumb = this._getActiveThumb();

            var pos;

            if (!this._isVertical()) {
                var halfThumbWidth = thumb.outerWidth()/2;
                pos = thumb.offset().left + halfThumbWidth;
                pixelTotal = this._barback.width();
                pixelMouse = pos - this._barback.offset().left;
            } else {
                var halfThumbHeight = thumb.outerHeight()/2;
                pos = thumb.offset().top + halfThumbHeight;
                pixelTotal = this._barback.height();
                pixelMouse = pos - this._barback.offset().top;
            }

            if (pixelTotal == 0) return 1;

            fracThumb = ( pixelMouse / pixelTotal );

            // console.log("pos " + pos + " pctMouse " + fracThumb);

            fracThumb = this._getOrientationAdjustedFrac(fracThumb);

            return fracThumb;

        },


        _getNormValueFromThumb: function() {
            var fracThumb,
            valueTotal,
            valueMouse;

            fracThumb = this._getFracFromThumb();

            // console.log("_getNormValueFromThumb percent: " + fracThumb);

            valueTotal = this._valueMax() - this._valueMin();

            if (this._isRTL() && !this._isVertical())
                fracThumb = 1 - fracThumb;

            valueMouse = this._valueMin() + fracThumb * valueTotal;

            var trimmedValue =  this._trimAlignValue( valueMouse );
            // console.log("_getNormValueFromThumb valueMouse: " + valueMouse + " " + trimmedValue);

            return trimmedValue;
        },

        _slide: function( event, index, newVal ) {
            
            // console.log("_slide: options.value " + this.options.value + " newVal " + newVal);

            var otherVal,
            allowed;

            if (this._multipleThumbs) {

                otherVal = this._getMultiValues( index ? 0 : 1 );

                if ( ( this.options.value.length === 2 ) &&
                     ( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
                   ) {
                    newVal = otherVal;
                }

                if ( newVal !== this._getMultiValues(index) ) {
                    // console.log("slide " + index + " " + newVal);
                    this._setMultiValue(event, index, newVal);
                }
            } else {
                // This case handles a single value
                // console.log("_slide: single value ");
                if ( newVal !== this._getSingleValue() ) {

                    //console.log("_slide: setSingleValue ");

                    // sets slider thumb value
                    this._setSingleValue(event, newVal);

                    if (this._inputtag) {
                        this.element.val(newVal);
                    }
                }
            }
        },

        _change: function( event, index ) {

            // console.log("_change from " + this.options.value + " to newValue " + this._newValue);

            // Plan for 1.2: (once _SetRawValue() is implemented) 
            //    call _SetRawValue when we are sliding.
            //    (comment out the outside condition, conditionalize the SetValue)
            //

            if ( !this._keySliding && !this._dragInProgress ) 
            {
                if (this._multipleThumbs) {
                    // store the last change values for creating draggable containment
                    this._lastChangedValues = this._getNewValues(index, this._newMultiValue[index]);
                    this._SetValue(this._lastChangedValues, event); 
                }
                else {
                    this._SetValue(this._newValue, event); 
                }

                //store the last changed value index for reference when thumbs overlap
                this._lastChangedValueIndex = index;
                
            }
        },
        
        // 
        // Return the value of the slider.
        // For a single thumbbed slider, return a number.
        // For a two thumbbed slider, return an array.
        // 
        _getSingleValue: function() {

            if ( !this._keySliding && !this._dragInProgress ) {
                return this._getValueAligned();
            } else {
                if (!isNaN(this._newValue)) return this._newValue;
                return this._getValueAligned();

            }
        },

        // 
        // Set the slider value.
        // Pass on the event to _change.
        // 
        _setSingleValue: function(event, newValue ) {

            this._newValue = this._trimAlignValue( newValue );
            // console.log("setSingleValue " + newValue + " -> " + this._newValue);

            this._change(event, 0 );
            // console.log("setSingleValue options.value = " + this.options.value)
            this._refreshValue();

            return;

        },

        // 
        // Return the value for the specified thumb.
        // 
        _getMultiValues: function(index) {

            // 
            // Parameter index is supplied.
            // Return the value for the specified thumb.
            // 
            if (this._multipleThumbs) {

                if (!this._keySliding && !this._dragInProgress ) {
                    return this._getValuesAligned(index);
                } else {
                    // Return the raw value if we are sliding the thumb.
                    // This is needed to have the thumb track the mouse properly.
                    if (index === this._thumbIndex) {
                        if (!isNaN(this._newMultiValue[index]))
                            return this._newMultiValue[index];
                    }
                    return this._getValuesAligned(index);
                }
            } else {
                return this._getSingleValue();   
            }

        },

        //
        // Internal setter for slider values.
        // Sets the value for the specifed thumb.
        // (index 0 is used for a single thumb, 
        // for a range slider index 0 and index 1 are used).
        //
        _setMultiValue: function(event, index, newValue ) {

            this._newMultiValue[index] = this._trimAlignValue( newValue );
            // console.log(index + " _setMultiValue " + this._newValue);
            this._change(event, index );
            this._refreshValue();
            return;

        },

        _setOption: function( key, value, flags ) {

            var i;
            var coercedValue;

            if (key === "value")
            {
                if (Array.isArray(value)) {
                    this._multipleThumbs = true;
                    coercedValue = value;
                }
                else {
                    this._multipleThumbs = false;
                    coercedValue = this._parse(key, value);
                }
            }

            if (key === "max" || key === "min")
            {
                coercedValue = this._parse(key, value);
            }
            else if (key === "step")
            {
                coercedValue = this._parseStep(value);    
            }
            else
                coercedValue = value;
            
            // Note - this sets aria-disabled="false" on the top level element.
            // For sliders, we do not set disabled on the top level div.
            if ( key != "disabled" ) 
                this._super( key, coercedValue, flags );

            // when a dom element supports readonly, use that, and not aria-readonly.
            // having both is an error

            // Note - for now, readOnly is private.
            if (key === "readOnly")
            {
                this._elementWrapped.toggleClass( "oj-read-only", !!coercedValue );
                this._setup();
            }
            if (key === "disabled") {
	        this._disableDraggable();
                this._elementWrapped.toggleClass( "oj-disabled", !!coercedValue );
                this.options.disabled = coercedValue;
                this._setup();
            }

            switch ( key ) {
            case "orientation":

                this._elementWrapped.removeClass("oj-slider-horizontal oj-slider-vertical");
                this._barback.removeClass("oj-slider-horizontal oj-slider-vertical");

                if (this._isVertical()) {
                    this._elementWrapped.addClass( "oj-slider-vertical");
                    this._barback.addClass("oj-slider-vertical");
                } else {
                    this._elementWrapped.addClass( "oj-slider-horizontal");
                    this._barback.addClass("oj-slider-horizontal");
                }

                this._refreshValue();

                // Reset positioning from previous orientation
                this._thumbs.css( coercedValue === "horizontal" ? "top" : "left", "" );

	        this._makeDraggable();

                break;
            case "value":
                this._refreshValue();
	        this._makeDraggable();
                break;

            case "step":
            case "min":
            case "max":

                this._calculateNewMax();
                this._refreshValue();
	        this._makeDraggable();
                break;
            case "range":

                this._setup();
                break;
            }
        },

        // internal value getter
        // _getValueAligned() returns value trimmed by min and max, aligned by step
        _getValueAligned: function() {
            var val = this.options.value;
            val = this._trimAlignValue( val );

            return val;
        },

        // 
        // Internal values getter
        //
        // _getValuesAligned() returns array of values trimmed by min and max, aligned by step
        // _getValuesAligned( index ) returns single value trimmed by min and max, aligned by step
        // 
        _getValuesAligned: function( index ) {
            var val = this._trimAlignValue(this.options.value[index]);
            return val;
        },

        // Return options.values with the new value copied in the array
        _getNewValues: function(index, newValue) {

            var vals, i;

            vals = this.options.value.slice();

            for ( i = 0; i < vals.length; i += 1) {
                // console.log("**********  " + i + " " + vals[i]);
                vals[ i ] = this._trimAlignValue( vals[ i ] );
            }

            // assume newValue is trim aligned
            // Assign only if it is the thumb that is actually sliding
            if (index === this._thumbIndex)
                vals[index] = newValue;

            return vals;

        },

        // returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function( val ) {
            if ( val <= this._valueMin() ) {
                return this._valueMin();
            }
            if ( val >= this._valueMax() ) {
                return this._valueMax();
            }
            var step = ( this.options.step > 0 ) ? this.options.step : 1,
            valModStep = (val - this._valueMin()) % step,
            alignValue = val - valModStep;

            if ( Math.abs(valModStep) * 2 >= step ) {
                alignValue += ( valModStep > 0 ) ? step : ( -step );
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat( alignValue.toFixed(5) );
        },

        _calculateNewMax: function() {
            // Check if we need to do this--don't just use straight remainder because of JS math issues
            var min = this._valueMin();
            if ((((this.options.max - min) / this.options.step) % 1) !== 0) {
                var remainder = ( this.options.max - min ) % this.options.step;
                this.max = this.options.max - remainder;
            }
            else {
                this.max = this.options.max;
            }
        },

        _valueMin: function() {
            return this.options.min;
        },

        _valueMax: function() {
            return this.max;
        },

        //
        // Calculate the grid size passed to draggable.
        // This implements the drag to step increments.
        // For a horizontal grid, we would return an array of [pixelInterval, 1],
        // while a vertical grid returns [1, pixelInterval].
        //
        _getGrid: function () {

            var numIntervals;
            if (this.options.step > 0)
                numIntervals = (this._valueMax() - this._valueMin()) / this.options.step;
            else
                numIntervals = 100; // this case should not occur.

            var pixelTotal;

            if (!this._isVertical()) {
                pixelTotal = this._barback.width();
            } else {
                pixelTotal = this._barback.height();
            }
            
            var pixelInterval = pixelTotal / numIntervals;

            if (pixelInterval < 1) pixelInterval = 1;

            if (!this._isVertical()) {
                return new Array(pixelInterval, 1);
            } else {
                return new Array(1, pixelInterval);
            }
            
        },

        _getThumbsValueFrac: function (index) {

            return ((this._getMultiValues(index) - this._valueMin()) / (this._valueMax() - this._valueMin()));
            // Note - (max - min) is checked in options to make sure that it is non-zero and positive 
            // Note - we always use aligned values.
        },

        _refreshValue: function() {

            var lastValPercent, valPercent, value, valueMin, valueMax, valPercentCss;

            // 
            // Multiple thumbs case.
            // 
            if (this._multipleThumbs) {
                this._thumbs.toArray().forEach (

                    function(current, i) {
                        var thumb = $(current);
                        valPercent = this._getThumbsValueFrac(i) * 100;

                        // valPercentCss = valPercent; // use this for the css width/left/etc.
                        if (this._isRTL() && !this._isVertical()) valPercent = 100 - valPercent;
                        // console.log(i + " Refresh value " + valPercent);
                        
                        if (!this._isVertical()) {
                            $(thumb)["css"]({left: valPercent + "%"});
                        } else { 
                            $(thumb)["css"]({top: (100 - valPercent) + "%"});
                        }

                        $(thumb).attr('aria-valuenow', this._getMultiValues(i));
                        this._setRangeMultiThumb(valPercent, i);

                    },
                    this
                );

            } else {

                // 
                // Scalar value (single thumb)
                //

                // 
                // We always want an aligned value here.
                // 
                value =  this._getValueAligned();

                // console.log("refreshValue: single value " + value)

                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = ( valueMax !== valueMin ) ?
                    ( value - valueMin ) / ( valueMax - valueMin ) * 100 : 0;

                // valPercentCss = valPercent; // use this for the css width/left/etc.
                if (this._isRTL() && !this._isVertical()) valPercent = 100 - valPercent;

                if (!this._isVertical()) {
                    this._thumb["css"]({left: valPercent + "%"});
                } else {
                    this._thumb["css"]({top: (100 - valPercent) + "%"});
                }

                $(this._thumb).attr('aria-valuenow', value);

                // this._setRange(valPercentCss);
                this._setRange(valPercent);
            }
        },

        // Set the range (bar value)
        _setRange: function(val) {

            var oRange = this.options.type;

            if (!this._isVertical()) {

                if (!this._isRTL()) {
                    if (oRange === "fromMin") {
                        this._range["css"]( { width: val + "%" });
                    }
                    if (oRange === "fromMax") {
                        this._range["css" ]( { width: ( 100 - val ) + "%" });
                    }
                }
                else {
                    if (oRange === "fromMin") {
                        this._range["css" ]( { width: ( 100 - val ) + "%" });
                    }
                    if (oRange === "fromMax") {
                        this._range["css"]( { width: val + "%" });
                    }
                }
            }
            else {

                if ( oRange === "fromMin") {
                    this._range["css"]( { height: val + "%" });
                }
                if ( oRange === "fromMax") {
                    this._range["css"]( { height: ( 100 - val ) + "%" });
                }
            }
        },

        // 
        // set the range for a multi-thumb (range) slider
        // 
        _setRangeMultiThumb: function(val, index) {

            // console.log("");
            // console.log(index + " setRangeMultiThumb " + val);

            var id = this._range.attr('id');

            if (index == 0) {

                var thumb1Pct = this._getThumbsValueFrac(1) * 100;
                // console.log("thumb1Pct " + thumb1Pct);

                switch (this.options.type) {

                case "fromMin":

                    if (!this._isVertical()) {
                        this._range["css"]( { width: val + "%" });
                    } 
                    else {
                        this._range["css"]( { height: val + "%" });
                    }
                    break;

                case "range":

                    if (!this._isVertical() ) {
                        if (!this._isRTL()) {
                            this._range["css"]( { left: val + "%" });
                            this._range["css"]( { width: (thumb1Pct - val) + "%" });
                        }
                        else {
                            this._range["css"]( { left: (100 - thumb1Pct) + "%" });
                            this._range["css"]( { width: (thumb1Pct - (100 - val)) + "%" });
                        }

                    } else {
                        this._range["css"]( { top: (100 - thumb1Pct) + "%" });
                        this._range["css"]( { height: (thumb1Pct - val) + "%" });
                    }

                    break;
                }

            } else {

                var thumb0Pct = this._getThumbsValueFrac(0) * 100;
                // console.log("thumb0Pct " + thumb0Pct);

                switch (this.options.type) {

                case "fromMax":
                    if (!this._isVertical()) {
                        this._range["css" ]( { width: ( 100 - val ) + "%" });
                    } 
                    else {
                        this._range["css" ]( { height: ( 100 - val ) + "%" });
                    }
                    break;

                case "range":

                    if (!this._isVertical() ) {
                        if (!this._isRTL()) {
                            if (document.getElementById(id)) {
                                var barLeft = parseInt(document.getElementById(id).style.left, 10);
                                this._range["css"]( { width: (val - barLeft ) + "%" });
                            }
                        }
                        else {
                            if (document.getElementById(id)) {
                                this._range["css"]( { left: val + "%" });
                                this._range["css"]( { width: (- val + 100 - thumb0Pct) + "%" });
                            }
                        }

                    } else {

                        if (document.getElementById(id)) {
                            this._range["css"]( { top: (100 - val) + "%" });
                            this._range["css"]( { height: (val - thumb0Pct) + "%" });
                        }
                    }

                    break;
                }
            }
        },

        _thumbEvents: {
            keydown: function( event ) {
                var allowed, curVal, newVal, step, tempVal,
                
                index = $( event.target ).data( "oj-slider-thumb-index" );
                this._thumbIndex = index;

                switch (event.keyCode) {
                case $.ui.keyCode.HOME:
                case $.ui.keyCode.END:
                case $.ui.keyCode.PAGE_UP:
                case $.ui.keyCode.PAGE_DOWN:
                case $.ui.keyCode.UP:
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                case $.ui.keyCode.LEFT:
                    event.preventDefault();
                    if ( !this._keySliding ) {
                        this._keySliding = true;
                        $( event.target ).addClass( "ui-state-active" );
                    }
                    break;
                }

                step = this.options.step;

                if (this._multipleThumbs) {
                    curVal = newVal = this._getMultiValues( index );
                } else {
                    curVal = newVal = this._getSingleValue();
                }

                switch (event.keyCode) {
                case $.ui.keyCode.HOME:
                    newVal = this._valueMin();
                    break;
                case $.ui.keyCode.END:
                    newVal = this._valueMax();
                    break;
                case $.ui.keyCode.PAGE_UP:
                    newVal = this._trimAlignValue(
                        curVal + ( ( this._valueMax() - this._valueMin() ) / this._numPages )
                    );
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    newVal = this._trimAlignValue(
                        curVal - ( (this._valueMax() - this._valueMin()) / this._numPages ) );
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.RIGHT:

                    if (!this._isRTL() || this._isVertical()) {
                        if (curVal === this._valueMax()) return;
                        tempVal = curVal + step;
                    }
                    else {
                        if (curVal === this._valueMin()) return;
                        tempVal = curVal - step;
                    }

                    newVal = this._trimAlignValue(tempVal);
                    break;
                case $.ui.keyCode.DOWN:
                case $.ui.keyCode.LEFT:

                    if (!this._isRTL() || this._isVertical()) {
                        if (curVal === this._valueMin()) return;
                        tempVal = curVal - step;
                    }
                    else {
                        if (curVal === this._valueMax()) return;
                        tempVal = curVal + step;
                        // console.log("horz key " + curVal + " -> " + tempVal + " " + step);
                    }

                    newVal = this._trimAlignValue(tempVal);
                    break;
                }

                this._slide( event, index, newVal );
            },
            keyup: function(event) {
                var index = $( event.target ).data( "oj-slider-thumb-index" );
                this._thumbIndex = index;

                if ( this._keySliding ) {
                    this._keySliding = false;

                    this._change( event, index );
                    
                    $( event.target ).removeClass( "ui-state-active" );
                }
                this._thumbIndex = null;
                this._refreshContainment();

            }
        },

        // P R O T E C T E D    C O N S T A N T S   A N D   M E T H O D S

        // *********** START WIDGET FACTORY METHODS (they retain _camelcase naming convention) **********
        
        
        /**
          * Called at component create time primarily to initialize options, often using DOM values. This 
          * method is called before _ComponentCreate is called, so components that override this method 
          * should be aware that the component has not been rendered yet. The element DOM is available and 
          * can be relied on to retrieve any default values. <p> 
          * @param {!Object} originalDefaults - original default options defined on the widget and its ancestors
          * @param {?Object} constructorOptions - options passed into the widget constructor
          * 
          * @memberof oj.ojSlider
          * @instance
          * @protected
          */
        _InitOptions: function(originalDefaults, constructorOptions)
        {

            var opts = this.options;
            var self = this;

            this._superApply(arguments);

            // props changed for 1.1.1 backport.
            var props = 
                [{attribute: "disabled", defaultOptionValue: false, validateOption: true},
                 {attribute: "placeholder", defaultOptionValue: ""},
                 {attribute: "value", defaultOptionValue: null}, // don't coerce here. I do it myself
                 {attribute: "readonly", option: "readOnly", defaultOptionValue: false, validateOption: true},
                 {attribute: "required", defaultOptionValue: false,
                  coerceDomValue: true, validateOption: true},
                 {attribute: "title", defaultOptionValue: ""},
                 {attribute: "min", defaultOptionValue: null},
                 {attribute: "max", defaultOptionValue: null},
                 {attribute: "step", defaultOptionValue: 1}];


            oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this,
                // post-process callback
                function (initializedOptions)
                { 
                    // coerce regardless of where the option value came from - dom/constructor
                    var toParse = ['value', 'step', 'min', 'max'];
                    
                    for (var i=0; i<toParse.length; i++)
                    {
                        var opt = toParse[i];
                        var value = (opt in initializedOptions) ? initializedOptions[opt] : opts[opt];
                        if (value != null)
                        {
                            if (opt === 'step')
                                initializedOptions[opt] =  self._parseStep(value);
                            else if (opt === 'min' || opt === 'max')
                                initializedOptions[opt] =  self._parse(opt, value);
                            else if (opt === 'value') {
                                if (Array.isArray(value))
                                    // todo - create a version of _parse to accept array values.
                                    // initializedOptions[opt] =  self._parse(opt, value);
                                    initializedOptions[opt] = value;
                                else 
                                    initializedOptions[opt] =  self._parse(opt, value);
                            }
                        } 
                    }
                }
            );
            
            if (opts['value'] === undefined)
            {
                throw new Error(this.getTranslatedString("noValue"));
            }
            
            // now make sure min < max, else throw an Error
            if (opts['min'] != null && opts['max'] != null)
            {
                if (opts['max'] < opts['min'])
                {
                    throw new Error(this.getTranslatedString("maxMin"));
                }
                
                // Make sure value is within min and max
                if (opts['value'] < opts['min'] || opts['value'] > opts['max']) {
                    throw new Error(this.getTranslatedString("valueRange"));
                }
            }
        },
        
        /**
         * Return the subcomponent node represented by the documented locator 
         * attribute values.
         * Test authors should target sub elements using the following names:
         * <ul>
         * <li><b>oj-slider-bar</b>: the slider bar</li>
         * <li><b>oj-slider-bar-value</b>: The value portion of the slider bar. </li>
         * <li><b>oj-slider-thumb-0</b>: The thumb for a single thumb slider, the minimum thumb for a range slider.</li>
         * <li><b>oj-slider-thumb-1</b>: The second thumb of a range slider. (Do not use in a single thumb slider) </li>
         * </ul>
         * @expose
         * @memberof! oj.ojSlider
         * @instance
         * @override
         * @param {Object} locator An Object containing at minimum a subId property 
         *        whose value is a string, documented by the component, that allows 
         *        the component to look up the subcomponent associated with that 
         *        string.  It contains:<p>
         *        component: optional - in the future there may be more than one 
         *        component contained within a page element<p>
         *        subId: the string, documented by the component, that the component 
         *        expects in getNodeBySubId to locate a particular subcomponent
         * @returns {Element|null} the subcomponent located by the subId string passed
         *          in locator, if found.<p>
         */
        getNodeBySubId: function(locator)
        {
            if (locator == null)
            {
                return this.element ? this.element[0] : null;
            }
            
            var subId = locator['subId'];
            
            var thumbId;
            if (subId === "oj-slider-thumb-0") {
                thumbId = "#" + this._getThumbId(0);
                return this.widget().find(thumbId)[0];
            }
            else if (subId === "oj-slider-thumb-1") {
                thumbId = "#" + this._getThumbId(1);
                return this.widget().find(thumbId)[0];
            }
            else if (subId === "oj-slider-bar") {
                var barId = "#" + this._getBarBackgroundId();
                return this.widget().find(barId)[0];
            }
            else if (subId === "oj-slider-bar-value") {
                var barValueId = "#" + this._getBarValueId();
                return this.widget().find(barValueId)[0];
            }
            
            // Non-null locators have to be handled by the component subclasses
            return null;
        },
        
        /**
         * Returns the subId locator for the given child DOM node. 
         * Invoked by widget
         * @param {!Element} node - child DOM node
         * @return {Object|null} The subId for the DOM node, or null when none is found.
         */
        getSubIdByNode: function(node)
        {
            var item, key;

            if (node != null) {
                if (node.id === this._getThumbId(0) && $(node).hasClass("oj-slider-thumb"))
                    return {'subId': 'oj-slider-thumb-0'};
                else if (node.id === this._getThumbId(1) && $(node).hasClass("oj-slider-thumb"))
                    return {'subId': 'oj-slider-thumb-1'};
                else if (node.id === this._getBarBackgroundId() && $(node).hasClass("oj-slider-bar"))
                    return {'subId': 'oj-slider-bar'};
                else if (node.id === this._getBarValueId() && $(node).hasClass("oj-slider-bar-value"))
                    return {'subId': 'oj-slider-bar-value'};
            }

            return null;
        },

        // *********** END WIDGET FACTORY METHODS **********

        /**
         * Returns the default styleclass for the component.
         * 
         * @return {string}
         * @memberof oj.ojSlider
         * @override
         * @protected
         */
        _GetDefaultStyleClass: function()
        {
            return "oj-slider";
        },

        // The user can clear out min/max by setting the option to null, so we
        // do not coerce null.
        /**
         * @param {string} option name of the option. this will show up in the error if thrown
         * @param val value to parse
         * @throws {Error} if option value is invalid
         * @private
         */
        _parse: function(option, val)
        {
            var returnValue;
            if (val !== null)
                returnValue = +val;
            else
                returnValue = val;

            if (isNaN(returnValue))
                throw new Error(this.getTranslatedString("optionNum", {'option':option}));
            
            return returnValue;
        },
        /**
         * parse the step's value
         * We are following the behavior of HTML-5 the best we can. According
         * to the spec, it says step must be a number greater than 0. 
         * Chrome defaults it to 1 if it is not.
         * @throws {Error} if option value is invalid 
         * @private
         */
        _parseStep: function(val)
        {
            var defaultStep = 1, parsedStep;
            if (val === null)
                return defaultStep;
            parsedStep = this._parse("step", val);
            if (parsedStep <= 0)
            {
                // throw an exception
                throw new Error(this.getTranslatedString("invalidStep"));
            }
            // DEFAULT to 1 if it isn't > 0
            if (parsedStep === null || parsedStep <= 0)
                parsedStep = defaultStep;
            return parsedStep;
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        //
        // Draggable - used to implement slider thumb dragging
        //
        // JQueryUI draggable is used to implement the dragging of slider thumbs.
        // Several draggable options are used:
        //
        // - Axis constaint
        //   The thumb is constrained to movement along the x-axis (for horizontal sliders)
        //   or movement along the y-axis (for vertical siders)
        //
        // - Range constraints
        //   The thumb is constrained to ranges along the axis using the draggable constraint 
        //   option. 
        //
        // - Step
        //   The granularity of movement is constrained to the step size using the grid 
        //   option.
        //
        /////////////////////////////////////////////////////////////////////////////////////////

        // return the endpoint of the bar
        _getEndInterval: function() {
            return (this._barback.offset().left + this._barback.width());
        },
            
        // return the startpoint of the bar
        _getStartInterval: function() {
            return (this._barback.offset().left);
        },
            

        // 
        // Return the containment array for a range slider.
        // 
	_getContainmentArrayRange: function(index) {

            var valFrac;

            // Initialize contaiment array to that of the single thumb case.
            var c = this._getContainmentArray();
            var x1 = c[0], y1 = c[1], x2 = c[2], y2 = c[3];

            // console.log(index + " pre containment " + x1 + " " + y1 + " " + x2 + " " + y2);

            // 
            // Limit the maximum slide of the first thumb to the current value of the second thumb.
            // Limit the minimum slide of the second thumb to the current value of the first thumb.
            // 

            var thumbHalfHeight = this._thumb.outerHeight()/2;

            switch (index) {

            case 0:
                valFrac = this._getThumbsValueFrac(1);
                if (!this._isVertical()) {
                    if (!this._isRTL()) {
                        x2 = x1 + (valFrac * this._barback.width());
                    }
                    else {
                        x2 = this._getEndInterval();
                        x1 = x2 - (valFrac * this._barback.width());
                    }
                }
                else {
                    y2 = this._barback.offset().top + this._barback.height();
                    y1 = this._barback.offset().top + ((1 - valFrac) * this._barback.height());
                }

                break;

            case 1:
                valFrac = this._getThumbsValueFrac(0);
                if (!this._isVertical()) {
                    if (!this._isRTL()) {
                        x1 = this._barback.offset().left + (valFrac * this._barback.width());
                    }
                    else {
                        x1 = this._getStartInterval();
                        x2 = x1 + ((1 - valFrac) * this._barback.width());
                    }
                }
                else {
                    y1 = this._barback.offset().top;
                    y2 = y1 + ((1 - valFrac) * this._barback.height());
                }
                break;
            }

            // console.log(index + " valFrac " + valFrac);
            // console.log(index + " containment " + x1 + " " + y1 + " " + x2 + " " + y2);

            return ([x1, y1, x2, y2]);
        },


        // 
        // Return the containment boundbox of the bar.
        // Used to constrain the slider thumb to the bar.
        // 
	_getContainmentArray: function() {

            var x1 = this._barback.offset().left;
            var y1;

            if (!this._isVertical()) {
                y1 = this._barback.offset().top;
            } else {
                // y1 = this._barback.offset().top - this._thumb.outerHeight()/2;
                y1 = this._barback.offset().top;
            }
            
            var x2 = x1 + this._barback.width();
            var y2 = y1 + this._barback.height();

            // console.log(" containment array " + x1 + " " + y1 + " " + x2 + " " + y2);
            return ([x1, y1, x2, y2]);
        },

        // 
        // Set up the draggable with the context, thumb, and containment parameters.
        // Use the axis method to ensure only horizontal or vertical movement.
        // 
	_callDraggable: function(thumbParam, containmentArray) {

            // in progress
           var g = this._getGrid();

            var axisValue;
            if (!this._isVertical()) axisValue = "x";
            else axisValue = "y";

            // var that = this ? sub for containment
            var that = this;

            thumbParam.draggable({
                axis: axisValue,
		containment: containmentArray,
                // grid: [8.8,1],
                grid: g,
                disabled: false,
		start: function( event, ui ) {
                    // console.log("drag start");
                    that._initDragging(event, true);
		},
		'drag': function( event, ui ) {
                    // console.log("drag");
                    that._mouseDrag(event);
		},
		stop: function( event, ui ) {
                    // console.log("drag stop");
                    that._mouseStop(event);
                    that._refreshContainment();
		}
	    });
        },

        //
        // Refresh the thumb slider containment (for range sliders)
        // After an interaction (slide or key) is complete, this method is used to redefine the 
        // containment of the slider thumb.
        //
	_refreshContainment: function() {

	    var that = this,
	    options = this.options;
            var containmentArray;

            if (this._multipleThumbs) {
                this._thumbs.toArray().forEach (

                    function(current, i) {
                        var thumb = $(current);
                        containmentArray = this._getContainmentArrayRange(i);
                        thumb['draggable']("option", "containment", containmentArray);
                    },
                    this
                );
            }
        },

        //
        // Setup the draggable for each of the thumbs.
        //
	_makeDraggable: function() {

            // Do not allow dragging on a disabled thumb.
            if (this.options.disabled) return;

            var containmentArray;

            // console.log("_makeDraggable");

            if (this._multipleThumbs) {
                this._thumbs.toArray().forEach (

                    function(current, i) {
                        var thumb = $(current);
                        containmentArray = this._getContainmentArrayRange(i);
	                this._callDraggable(thumb, containmentArray);
                    },
                    this
                );

            } else {
                containmentArray = this._getContainmentArray();
	        this._callDraggable(this._thumb, containmentArray);
                // needed ?
	        // this._thumb.addClass("oj-draggable")
            }
	},

        // 
        // Call this if we change option to disabled.
        // 
	_disableDraggable: function() {

            if (this._multipleThumbs) {
                this._thumbs.toArray().forEach (

                    function(current, i) {
                        var thumb = $(current);
                        if (thumb.is('.ui-draggable'))
                            thumb['draggable']("disable");
                    },
                    this
                );

            } else {
                if (this._thumb.is('.ui-draggable'))
                    this._thumb.draggable("disable");
            }
	}

        /////////////////////////////////////////////////////////////////////////////////////////
        // Draggable - end
        /////////////////////////////////////////////////////////////////////////////////////////


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
 *       <td>Slider Bar</td>
 *       <td><kbd>Tap</kbd></td>
 *       <td>Reposition the thumb.</td>
 *     </tr>
 *     <tr>
 *       <td>Slider Thumb</td>
 *       <td><kbd>Swipe</kbd></td>
 *       <td>Reposition the thumb.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
 * @memberof oj.ojSlider
 */

/**
 * The JET slider supports keyboard actions for thumb movement:
 *
 * <p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td> Places focus on the slider component.
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Scrolls right on a horizontal slider, scrolls up on a vertical slider.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Scrolls left on a horizontal slider, scrolls down on a vertical slider.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Scrolls right on a horizontal slider, scrolls up on a vertical slider.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Scrolls left on a horizontal slider, scrolls down on a vertical slider.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>PageUp</kbd></td>
 *       <td>Scrolls one page right on a horizontal slider, scrolls one page up on a vertical slider. <br>
 *       A page is defined as 20% of the range of the slider.
 *     </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>PageDown</kbd></td>
 *       <td>Scrolls one page left on a horizontal slider, scrolls one page down on a vertical slider.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Scrolls to the right end on a horizontal slider, scrolls to the bottom on a vertical slider.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Scrolls to the left end on a horizontal slider, scrolls to the top on a vertical slider.
 *       </td>
 *     </tr>
 * </tbody>
 * </table>
 *
 * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
 * @memberof oj.ojSlider
 *
 */

    });

}() );
});
