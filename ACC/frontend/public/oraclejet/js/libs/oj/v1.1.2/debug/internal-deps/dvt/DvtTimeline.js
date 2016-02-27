/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtTimelineOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  /** Copyright (c) 2011, Oracle and/or its affiliates. All rights reserved. */
var DvtTimeUtils = new Object();

DvtTimeUtils.supportsTouch = function()
{
  return DvtAgent.isTouchDevice();
};

DvtObj.createSubclass(DvtTimeUtils, DvtObj, 'DvtTimeUtils');


/**
 * startTime - the start time of timeline in millis
 * endTime - the end of the timeline in millis
 * time - the time in question
 * width - the width of the element
 *
 * @return the position relative to the width of the element
 */
DvtTimeUtils.getDatePosition = function(startTime, endTime, time, width)
{
  var number = (time - startTime) * width;
  var denominator = (endTime - startTime);
  if (number == 0 || denominator == 0)
    return 0;

  return number / denominator;
};


/**
 * @return time in millis
 */
DvtTimeUtils.getPositionDate = function(startTime, endTime, pos, width)
{
  var number = pos * (endTime - startTime);
  if (number == 0 || width == 0)
    return startTime;

  return (number / width) + startTime;
};
/**
 * This is the base class for all time based components (Gantt, Timeline).  It handles the following:
 * - all common attributes (start time, end time etc.)
 * - association with the generic overview component
 * - scrolling, including autoscroll
 * - creation of scrollable canvas
 * - zoom
 * - time axis (multiple)
 * - current time and highlighted time period
 *
 * @param {DvtContext} context The rendering context.
 * @param {object} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function.
 * @class TimeBasedContainer component.
 * @constructor
 * @extends {DvtBaseComponent}
 * @export
 */
var DvtTimeComponent = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtTimeComponent, DvtBaseComponent, 'DvtTimeComponent');

DvtTimeComponent.BACKGROUND_ID = 'bg';

/**
 * Initializes the view.
 * @param {DvtContext} context The rendering context.
 * @param {object} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function
 * @protected
 */
DvtTimeComponent.prototype.Init = function(context, callback, callbackObj) 
{
  DvtTimeComponent.superclass.Init.call(this, context);

  this._callback = callback;
  this._callbackObj = callbackObj;

  this._virtualize = false;
};


/**
 * Renders the component using the specified xml.  If no xml is supplied to a component
 * that has already been rendered, this function will rerender the component with the
 * specified size.
 * @param {string} xml The component xml.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 * @export
 */
DvtTimeComponent.prototype.render = function(width, height, options) 
{
  if (options)
    this.SetOptions(options);

  // Store the size
  this.Width = width;
  this.Height = height;

  // If new xml is provided, parse it and apply the properties
  if (this.Options)
  {
    var props = this.Parse(this.Options);
    this._applyParsedProperties(props);
  }
};

/**
 * @override
 */
DvtTimeComponent.prototype.SetOptions = function(options)
{
  this.Options = DvtJSONUtils.clone(options);
};

// adds a tick mark
DvtTimeComponent.prototype.addTick = function(container, x1, x2, y1, y2, stroke, id)
{
  var line = new DvtLine(this.getCtx(), x1, y1, x2, y2, id);
  line.setStroke(stroke);
  line.setPixelHinting(true);

  container.addChild(line);
  return line;
};

// add a label in time axis
DvtTimeComponent.prototype.addAxisLabel = function(container, label, x, y, maxLength)
{
  label.setX(x);
  label.setY(y);
  if (label.isTruncated())
    label.setTextString(label.getUntruncatedTextString());
  DvtTextUtils.fitText(label, maxLength, Infinity, container);

  // center align text
  label.alignCenter();
};

// add a label in series time axis
DvtTimeComponent.prototype.addLabel = function(container, pos, text, maxLength, y, labelStyle, id, renderBackground, labelPadding, labelList, isRTL)
{
  var label = new DvtOutputText(this.getCtx(), text, pos, 0, id);
  if (labelStyle != null)
    label.setCSSStyle(labelStyle);

  container.addChild(label);
  var dim = label.getDimensions();
  container.removeChild(label);
  y = y - dim.h;
  label.setY(y);
  if (isRTL)
    label.setX(pos - dim.w);

  if (renderBackground)
  {
    var width = Math.min(dim.w + labelPadding * 2, maxLength);
    if (!isRTL)
      var x = pos;
    else
      x = pos - width + 2 * labelPadding;
    var backgroundRect = new DvtRect(this.getCtx(), x - labelPadding, y - labelPadding, width, dim.h + labelPadding * 2, 'ob_' + id);
    backgroundRect.setCSSStyle(labelStyle);
    backgroundRect.setCornerRadius(3);
    container.addChild(backgroundRect);
    if (labelList)
      labelList.push(backgroundRect);
  }
  DvtTextUtils.fitText(label, maxLength, Infinity, container);
  if (labelList)
    labelList.push(label);

  return label;
};

DvtTimeComponent.prototype._applyParsedProperties = function(props)
{
  this._origStart = props.origStart;
  this._origEnd = props.origEnd;
  this._start = props.start;
  this._end = props.end;

  this._inlineStyle = props.inlineStyle;

  this._scale = props.scale;
  this._converter = props.converter;

  this.applyStyleValues();
};

/**
 * Combines style defaults with the styles provided
 *
 */
DvtTimeComponent.prototype.applyStyleValues = function()
{
  this._style.parseInlineStyle(this._inlineStyle);
};

//////////// attribute methods ////////////////////////////
DvtTimeComponent.prototype.isAnimationEnabled = function()
{
  return false;
};

DvtTimeComponent.prototype.getAdjustedStartTime = function() 
{
  return this._start;
};

DvtTimeComponent.prototype.getAdjustedEndTime = function() 
{
  return this._end;
};


/**
 * Returns the overall (virtualized) length of the content
 */
DvtTimeComponent.prototype.getContentLength = function() 
{
  return this._contentLength;
};

DvtTimeComponent.prototype.setContentLength = function(length)
{
  if (this._canvasLength < length)
    this._contentLength = length;
  else
    this._contentLength = this._canvasLength;

  if (!this._virtualize)
  {
    this._fetchStartPos = 0;
    this._fetchEndPos = this._contentLength;
  }
};

DvtTimeComponent.prototype.renderScrollableCanvas = function()
{
  this._canvas = new DvtContainer(this.getCtx(), 'canvas');
  this.addChild(this._canvas);
};

DvtTimeComponent.prototype.isRTL = function()
{
  return DvtAgent.isRightToLeft(this.getCtx());
};

/////////////////// scrolling ////////////////////////////
DvtTimeComponent.prototype.setVScrollPos = function(pos) 
{
  if (this._canvas != null)
    this._canvas.setTranslateY(0 - pos);
};

DvtTimeComponent.prototype.setHScrollPos = function(pos) 
{
  if (this._canvas != null)
    this._canvas.setTranslateX(0 - pos);
};
var DvtTimeComponentAxis = function(context, callback, callbackObj, isVertical, zoomOrder, maxZoomOrder) {
  this.Init(context, callback, callbackObj, isVertical, zoomOrder, maxZoomOrder);
};

DvtObj.createSubclass(DvtTimeComponentAxis, DvtContainer, 'DvtTimeComponentAxis');

DvtTimeComponentAxis.DEFAULT_INTERVAL_WIDTH = 50;
DvtTimeComponentAxis.DEFAULT_INTERVAL_HEIGHT = 21;
DvtTimeComponentAxis.DEFAULT_INTERVAL_PADDING = 2;
DvtTimeComponentAxis.DEFAULT_BORDER_WIDTH = 1;
DvtTimeComponentAxis.DEFAULT_SEPARATOR_WIDTH = 1;

/**
 * Attribute for valid scales.
 * @const
 * @private
 */
DvtTimeComponentAxis._VALID_SCALES = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'quarters', 'years'];

DvtTimeComponentAxis.prototype.Init = function(context, callback, callbackObj, isVertical, zoomOrder, dateFormatStrings)
{
  DvtTimeComponentAxis.superclass.Init.call(this, context);

  this._calendar = new DvtTimeComponentCalendar();
  this._formatter = new DvtTimeComponentAxisFormatter(DvtTimeComponentAxisFormatter.SHORT, dateFormatStrings);
  if (isVertical)
    this._contentSize = DvtTimeComponentAxis.DEFAULT_INTERVAL_WIDTH;
  else
    this._contentSize = DvtTimeComponentAxis.DEFAULT_INTERVAL_HEIGHT;
  this._borderWidth = DvtTimeComponentAxis.DEFAULT_BORDER_WIDTH;
  this._zoomOrder = zoomOrder;
  this._dateToIsoConverter = context.getLocaleHelpers()['dateToIsoConverter'];
};

DvtTimeComponentAxis.prototype.setScale = function(scale)
{
  this._scale = scale;
};

DvtTimeComponentAxis.prototype.increaseScale = function()
{
  for (var s = 0; s < this._zoomOrder.length - 1; s++)
  {
    if (this._zoomOrder[s] == this._scale)
    {
      this._scale = this._zoomOrder[s + 1];
      return true;
    }
  }
  return false;
};

DvtTimeComponentAxis.prototype.decreaseScale = function()
{
  for (var s = 1; s < this._zoomOrder.length; s++)
  {
    if (this._zoomOrder[s] == this._scale)
    {
      this._scale = this._zoomOrder[s - 1];
      return true;
    }
  }
  return false;
};

DvtTimeComponentAxis.prototype.setConverter = function(converter)
{
  this._converter = converter;
};

DvtTimeComponentAxis.prototype.setDefaultConverter = function(defaultConverter)
{
  this._defaultConverter = defaultConverter;
};

DvtTimeComponentAxis.prototype.getContentSize = function()
{
  return this._contentSize;
};

DvtTimeComponentAxis.prototype.setContentSize = function(contentSize)
{
  if (contentSize > this._contentSize)
    this._contentSize = contentSize;
};

DvtTimeComponentAxis.prototype.getTimeAxisWidth = function()
{
  // read from skin?
  if (this._timeAxisWidth == null)
    this._timeAxisWidth = 30;

  return this._timeAxisWidth;
};

DvtTimeComponentAxis.prototype.setBorderWidth = function(borderWidth)
{
  this._borderWidth = borderWidth;
};

DvtTimeComponentAxis.prototype.getBorderWidth = function()
{
  return this._borderWidth;
};

DvtTimeComponentAxis.prototype.getSize = function()
{
  return this._contentSize + (this._borderWidth * 2);
};

DvtTimeComponentAxis.prototype.setType = function(type, dateFormatStrings)
{
  // create a new formatter based on the new type
  this._formatter = new DvtTimeComponentAxisFormatter(type, dateFormatStrings);
};

// utility method: find the closiest date to the time scale of the specified date
DvtTimeComponentAxis.prototype.adjustDate = function(date)
{
  return this._calendar.adjustDate(new Date(date), this._scale);
};

DvtTimeComponentAxis.prototype.getNextDate = function(date)
{
  return this._calendar.getNextDate(new Date(date), this._scale);
};

DvtTimeComponentAxis.prototype.formatDate = function(date)
{
  if (this._converter)
  {
    var converter;
    if (this._converter[this._scale])
      converter = this._converter[this._scale];
    else if (this._converter['default'])
      converter = this._converter['default'];
    else
      converter = this._converter;

    if (converter['format'])
      return converter['format'](this._dateToIsoConverter ? this._dateToIsoConverter(date) : date);
    else if (converter['getAsString'])
      return converter['getAsString'](date);
  }
  if (this._defaultConverter)
  {
    if (this._defaultConverter[this._scale])
    {
      converter = this._defaultConverter[this._scale];
      if (converter['format'])
        return converter['format'](this._dateToIsoConverter ? this._dateToIsoConverter(date) : date);
      else if (converter['getAsString'])
        return converter['getAsString'](date);
    }
  }
  return this._formatter.format(date, this._scale);
};

DvtTimeComponentAxis.prototype.getZoomOrder = function()
{
  return this._zoomOrder;
};

DvtTimeComponentAxis.prototype.setZoomOrder = function(zoomOrder)
{
  this._zoomOrder = zoomOrder;
};
// todo: use DateJS?
var DvtTimeComponentAxisFormatter = function(type, locale) 
{
  this.Init(type, locale);
};

DvtObj.createSubclass(DvtTimeComponentAxisFormatter, DvtObj, 'DvtTimeComponentAxisFormatter');

DvtTimeComponentAxisFormatter.LONG = 0;
DvtTimeComponentAxisFormatter.SHORT = 1;

DvtTimeComponentAxisFormatter.prototype.Init = function(type, dateFormatStrings) 
{
  this._type = type;
  this._dateFormatStrings = dateFormatStrings;

  this._formats = [];
  this._formats[0] = new Object();
  this._formats[0]['seconds'] = 'HH:MM:ss';
  this._formats[0]['minutes'] = 'HH:MM';
  this._formats[0]['hours'] = 'HH:MM';
  this._formats[0]['days'] = 'dddd';
  this._formats[0]['weeks'] = 'm/dd';
  this._formats[0]['months'] = 'mmmm';
  this._formats[0]['quarters'] = 'mmmm';
  this._formats[0]['halfyears'] = 'yyyy';
  this._formats[0]['years'] = 'yyyy';
  this._formats[0]['twoyears'] = 'yyyy';

  this._formats[1] = new Object();
  this._formats[1]['seconds'] = 'HH:MM:ss';
  this._formats[1]['minutes'] = 'HH:MM';
  this._formats[1]['hours'] = 'HH:MM';
  this._formats[1]['days'] = 'm/dd';
  this._formats[1]['weeks'] = 'm/dd';
  this._formats[1]['months'] = 'mmm';
  this._formats[1]['quarters'] = 'mmm';
  this._formats[1]['halfyears'] = 'yy';
  this._formats[1]['years'] = 'yy';
  this._formats[1]['twoyears'] = 'yy';
};


/**
 * Change the format string for a particular time scale.
 *
 * @param scale
 * @param pattern - the format string
 */
DvtTimeComponentAxisFormatter.prototype.setPattern = function(scale, pattern)
{
  this._formats[this._type][scale] = pattern;
};

DvtTimeComponentAxisFormatter.prototype.format = function(date, scale) 
{
  var format = this._formats[this._type][scale];
  if (format != null)
    return date.format(format, null, this._dateFormatStrings);
  else
    return date.toLocaleString();
};

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 * @export
 */

var dateFormat = function(dateFormatStrings) {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function(val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = '0' + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function(date, mask, utc, dateFormatStrings) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == '[object String]' && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError('invalid date');

		mask = String(dF.masks[mask] || mask || dF.masks['default']);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == 'UTC:') {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? 'getUTC' : 'get',
			d = date[_ + 'Date'](),
			D = date[_ + 'Day'](),
			m = date[_ + 'Month'](),
			y = date[_ + 'FullYear'](),
			H = date[_ + 'Hours'](),
			M = date[_ + 'Minutes'](),
			s = date[_ + 'Seconds'](),
			L = date[_ + 'Milliseconds'](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				'd': d,
				'dd': pad(d),
				'ddd': dateFormatStrings.dayNames[D],
				'dddd': dateFormatStrings.dayNames[D + 7],
				'm': m + 1,
				'mm': pad(m + 1),
				'mmm': dateFormatStrings.monthNames[m],
				'mmmm': dateFormatStrings.monthNames[m + 12],
				'yy': String(y).slice(2),
				'yyyy': y,
				'h': H % 12 || 12,
				'hh': pad(H % 12 || 12),
				'H': H,
				'HH': pad(H),
				'M': M,
				'MM': pad(M),
				's': s,
				'ss': pad(s),
				'l': pad(L, 3),
				'L': pad(L > 99 ? Math.round(L / 10) : L),
				't': H < 12 ? 'a' : 'p',
				'tt': H < 12 ? 'am' : 'pm',
				'T': H < 12 ? 'A' : 'P',
				'TT': H < 12 ? 'AM' : 'PM',
				'Z': utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
				'o': (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				'S': ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	'default': 'ddd mmm dd yyyy HH:MM:ss',
	shortDate: 'm/d/yy',
	mediumDate: 'mmm d, yyyy',
	longDate: 'mmmm d, yyyy',
	fullDate: 'dddd, mmmm d, yyyy',
	shortTime: 'h:MM TT',
	mediumTime: 'h:MM:ss TT',
	longTime: 'h:MM:ss TT Z',
	isoDate: 'yyyy-mm-dd',
	isoTime: 'HH:MM:ss',
	isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// For convenience...
Date.prototype.format = function(mask, utc, dateFormatStrings) {
	return dateFormat(this, mask, utc, dateFormatStrings);
};
// todo: this should be used by Timeline also
var DvtTimeComponentCalendar = function(options) 
{
  this.Init(options);
};

DvtObj.createSubclass(DvtTimeComponentCalendar, DvtObj, 'DvtTimeComponentCalendar');

DvtTimeComponentCalendar.prototype.Init = function() 
{
  this._dayInMillis = 1000 * 60 * 60 * 24;
};

DvtTimeComponentCalendar.prototype.getFirstDayOfWeek = function()
{
  // sunday; locale based
  return 0;
};

DvtTimeComponentCalendar.prototype.adjustDate = function(date, scale)
{
  var _adjustedDate = new Date(date.getTime());
  if (scale == 'weeks')
  {
    _adjustedDate.setHours(0, 0, 0);
    var roll_amt = (date.getDay() - this.getFirstDayOfWeek() + 7) % 7;
    if (roll_amt > 0)
      _adjustedDate.setTime(_adjustedDate.getTime() - roll_amt * this._dayInMillis);
  }
  else if (scale == 'months')
  {
    _adjustedDate.setDate(1);
  }
  else if (scale == 'days')
  {
    _adjustedDate.setHours(0, 0, 0);
  }
  else if (scale == 'hours')
  {
    _adjustedDate.setMinutes(0, 0, 0);
  }
  else if (scale == 'minutes')
  {
    _adjustedDate.setSeconds(0, 0);
  }
  else if (scale == 'seconds')
  {
    _adjustedDate.setMilliseconds(0);
  }
  else if (scale == 'quarters')
  {
    _adjustedDate.setDate(1);
    roll_amt = 2 - (date.getMonth() + 11) % 3;
    if (roll_amt > 0)
      _adjustedDate.setMonth(_adjustedDate.getMonth() + roll_amt);
  }
  else if (scale == 'halfyears')
  {
    _adjustedDate.setDate(1);
    roll_amt = 5 - (date.getMonth() + 11) % 6;
    if (roll_amt > 0)
      _adjustedDate.setMonth(_adjustedDate.getMonth() + roll_amt);
  }
  else if (scale == 'years')
  {
    _adjustedDate.setMonth(0);
    _adjustedDate.setDate(1);
  }
  else if (scale == 'twoyears')
  {
    _adjustedDate.setMonth(0);
    _adjustedDate.setDate(1);
  }

  return _adjustedDate;
};

DvtTimeComponentCalendar.prototype.getNextDate = function(date, scale)
{
  var _nextDate = new Date(date.getTime());
  if (scale == 'seconds')
    _nextDate.setSeconds(date.getSeconds() + 1);
  else if (scale == 'minutes')
    _nextDate.setMinutes(date.getMinutes() + 1);
  else if (scale == 'hours')
    _nextDate.setHours(date.getHours() + 1);
  else if (scale == 'days')
    _nextDate.setDate(date.getDate() + 1);
  else if (scale == 'weeks')
    _nextDate.setDate(date.getDate() + 7);
  else if (scale == 'months')
    _nextDate.setMonth(date.getMonth() + 1);
  else if (scale == 'quarters')
    _nextDate.setMonth(date.getMonth() + 3);
  else if (scale == 'halfyears')
    _nextDate.setMonth(date.getMonth() + 6);
  else if (scale == 'years')
    _nextDate.setFullYear(date.getFullYear() + 1);
  else if (scale == 'twoyears')
    _nextDate.setFullYear(date.getFullYear() + 2);
  else
  {
    // circuit breaker
    _nextDate.setYear(date.getYear() + 1);
  }
  return _nextDate;
};
// Base class for all time based JSON parser (Gantt, Timeline)
var DvtTimeComponentParser = function(view) 
{
  this.Init(view);
};

DvtObj.createSubclass(DvtTimeComponentParser, DvtObj, 'DvtTimeComponentParser');

DvtTimeComponentParser.prototype.Init = function(view) 
{
  this._view = view;
  this._calendar = new DvtTimeComponentCalendar();
};


/**
 * Parses the specified XML String and returns the root node of the timeline
 * @param {string} options The String containing XML describing the component.
 * @return {object} An object containing the parsed properties
 */
DvtTimeComponentParser.prototype.parse = function(options)
{
  this._startTime = new Date(options['start']);
  this._endTime = new Date(options['end']);

  var ret = this.ParseRootAttributes();

  ret.inlineStyle = options['style'];

  return ret;
};


/**
 * Parses the attributes on the root node.
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtTimeComponentParser.prototype.ParseRootAttributes = function()
{
  // The object that will be populated with parsed values and returned
  var ret = new Object();

  ret.origStart = this._startTime;
  ret.origEnd = this._endTime;
  ret.orientation = 'horizontal';

  return ret;
};

DvtTimeComponentParser.prototype.getCalendar = function()
{
  return this._calendar;
};

DvtTimeComponentParser.prototype.setCalendar = function(calendar)
{
  this._calendar = calendar;
};

DvtTimeComponentParser.prototype.getDate = function(date)
{
  if (date == null)
    return null;
  else if (date.getTime) // check function reference
    return date.getTime();
  else if (!isNaN(date))
    return date;
  else
    return (new Date(date)).getTime() + 0 * 60 * 60 * 1000; // for twitter, replace 0 with 5
};

DvtTimeComponentParser.prototype.adjustDate = function(date, scale)
{
  return this._calendar.adjustDate(date, scale);
};

DvtTimeComponentParser.prototype.getNextDate = function(date, scale)
{
  return this._calendar.getNextDate(date, scale);
};

var DvtElementNode = function() 
{
};

DvtElementNode.prototype.getChildNodes = function()
{
  return this.childNodes;
};

DvtElementNode.prototype.getName = function() 
{
  return this.getAttribute('name');
};

DvtElementNode.prototype.getAttribute = function(name) 
{
  return this[name];
};
/**
 * Timeline keyboard handler.
 * @param {DvtEventManager} manager The owning DvtEventManager.
 * @class DvtTimelineKeyboardHandler
 * @extends {DvtKeyboardHandler}
 * @constructor
 */
var DvtTimelineKeyboardHandler = function(manager)
{
  this.Init(manager);
};

DvtObj.createSubclass(DvtTimelineKeyboardHandler, DvtKeyboardHandler, 'DvtTimelineKeyboardHandler');

/**
 * @override
 */
DvtTimelineKeyboardHandler.prototype.Init = function(manager)
{
  DvtTimelineKeyboardHandler.superclass.Init.call(this, manager);
};

/**
 * @override
 */
DvtTimelineKeyboardHandler.prototype.isSelectionEvent = function(event)
{
  return this.isNavigationEvent(event) && !event.ctrlKey;
};

/**
 * @override
 */
DvtTimelineKeyboardHandler.prototype.isMultiSelectEvent = function(event)
{
  return event.keyCode == DvtKeyboardEvent.SPACE && event.ctrlKey;
};

/**
 * @override
 */
DvtTimelineKeyboardHandler.prototype.processKeyDown = function(event)
{
  var keyCode = event.keyCode;
  if (DvtKeyboardEvent.isEquals(event) || DvtKeyboardEvent.isPlus(event))
    this._eventManager.zoomBy(1 / DvtTimeline.ZOOM_BY_VALUE);
  else if (DvtKeyboardEvent.isMinus(event) || DvtKeyboardEvent.isUnderscore(event))
    this._eventManager.zoomBy(DvtTimeline.ZOOM_BY_VALUE);
  else if (keyCode == DvtKeyboardEvent.PAGE_UP)
  {
    if (event.shiftKey)
      this._eventManager.panBy(-0.25, 0);
    else
      this._eventManager.panBy(0, -0.25);

    DvtEventManager.consumeEvent(event);
  }
  else if (keyCode == DvtKeyboardEvent.PAGE_DOWN)
  {
    if (event.shiftKey)
      this._eventManager.panBy(0.25, 0);
    else
      this._eventManager.panBy(0, 0.25);

    DvtEventManager.consumeEvent(event);
  }

  return DvtTimelineKeyboardHandler.superclass.processKeyDown.call(this, event);
};

/**
 * Finds the next navigable item based on direction.
 * @param {DvtTimelineSeriesNode} currentNavigable The item with current focus.
 * @param {DvtKeyboardEvent} event The keyboard event.
 * @param {Array} navigableItems An array of items that could receive focus next.
 * @return {DvtTimelineSeriesNode} The next navigable item.
 */
DvtTimelineKeyboardHandler.getNextNavigable = function(currentNavigable, event, navigableItems)
{
  var series = currentNavigable.getSeries();
  var seriesIndex = currentNavigable.getSeriesIndex();

  var isRTL = DvtAgent.isRightToLeft(series.getCtx());
  var isVertical = series.isVertical();
  var isDualSeries = navigableItems.length > 1;

  if (!isRTL && DvtKeyboardEvent.RIGHT_ARROW == event.keyCode || isRTL && DvtKeyboardEvent.LEFT_ARROW == event.keyCode)
  {
    if (!isVertical)
      return DvtTimelineKeyboardHandler.getNextItem(currentNavigable, navigableItems[seriesIndex], true);
    else if (isDualSeries && seriesIndex != 1)
      return DvtTimelineKeyboardHandler.getClosestItem(currentNavigable, navigableItems[1]);
  }
  else if (!isRTL && DvtKeyboardEvent.LEFT_ARROW == event.keyCode || isRTL && DvtKeyboardEvent.RIGHT_ARROW == event.keyCode)
  {
    if (!isVertical)
      return DvtTimelineKeyboardHandler.getNextItem(currentNavigable, navigableItems[seriesIndex], false);
    else if (isDualSeries && seriesIndex != 0)
      return DvtTimelineKeyboardHandler.getClosestItem(currentNavigable, navigableItems[0]);
  }
  else if (DvtKeyboardEvent.DOWN_ARROW == event.keyCode)
  {
    if (isVertical)
      return DvtTimelineKeyboardHandler.getNextItem(currentNavigable, navigableItems[seriesIndex], true);
    else if (isDualSeries && seriesIndex != 1)
      return DvtTimelineKeyboardHandler.getClosestItem(currentNavigable, navigableItems[1]);
  }
  else if (DvtKeyboardEvent.UP_ARROW == event.keyCode)
  {
    if (isVertical)
      return DvtTimelineKeyboardHandler.getNextItem(currentNavigable, navigableItems[seriesIndex], false);
    else if (isDualSeries && seriesIndex != 0)
      return DvtTimelineKeyboardHandler.getClosestItem(currentNavigable, navigableItems[0]);
  }
  return null;
};

/**
 * Gets the next item in the given direction.
 * @param {DvtTimelineSeriesNode} item The current item.
 * @param {Array} navigableItems An array of items to traverse.
 * @param {Boolean} isNext - True iff going forward in time, false otherwise.
 * @return {DvtTimelineSeriesNode} The next item in the given direction.
 */
DvtTimelineKeyboardHandler.getNextItem = function(item, navigableItems, isNext)
{
  var nextIndex = navigableItems.indexOf(item) + (isNext ? 1 : -1);
  if (nextIndex >= 0 && nextIndex < navigableItems.length)
    return navigableItems[nextIndex];
  else
    return null;
};

/**
 * Finds the item with the closest start time to the start time of the given item.
 * @param {DvtTimelineSeriesNode} item The given item.
 * @param {Array} navigableItems An array of items to search through.
 * @return {DvtTimelineSeriesNode} The item with the closest start time.
 */
DvtTimelineKeyboardHandler.getClosestItem = function(item, navigableItems)
{
  if (navigableItems.length > 0)
  {
    var closest = navigableItems[0];
    var itemLoc = item.getLoc();
    var dist = Math.abs(itemLoc - closest.getLoc());
    for (var i = 1; i < navigableItems.length; i++)
    {
      var testDist = Math.abs(itemLoc - navigableItems[i].getLoc());
      if (testDist < dist)
      {
        dist = testDist;
        closest = navigableItems[i];
      }
    }
    return closest;
  }
  return null;
};
/**
 * Timeline event manager.
 * @param {DvtTimeline} timeline The owning DvtTimeline.
 * @extends {DvtEventManager}
 * @constructor
 */
var DvtTimelineEventManager = function(timeline)
{
  this.Init(timeline.getCtx(), timeline.processEvent, timeline);
  this._timeline = timeline;
  this._isDragPanning = false;
  this._isPinchZoom = false;
};

DvtObj.createSubclass(DvtTimelineEventManager, DvtEventManager, 'DvtTimelineEventManager');

DvtTimelineEventManager.GECKO_MOUSEWHEEL = 'wheel';

/**
 * @override
 */
DvtTimelineEventManager.prototype.addListeners = function(displayable)
{
  DvtTimelineEventManager.superclass.addListeners.call(this, displayable);
  DvtSvgDocumentUtils.addDragListeners(this._timeline, this._onDragStart, this._onDragMove, this._onDragEnd, this);
  if (!DvtAgent.isTouchDevice())
  {
    if (DvtAgent.isPlatformGecko())
      displayable.addEvtListener(DvtTimelineEventManager.GECKO_MOUSEWHEEL, this.OnMouseWheel, false, this);
    else
      displayable.addEvtListener(DvtMouseEvent.MOUSEWHEEL, this.OnMouseWheel, false, this);
    // IE does not always fire the appropriate mouseover and mouseout events, so use mouseenter instead
    if (DvtAgent.isPlatformIE())
    {
      var stage = this.getCtx().getStage();
      stage.addEvtListener('mouseenter', this.OnMouseEnter, false, this);
      stage.addEvtListener('mouseleave', this.OnMouseLeave, false, this);
    }
  }
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.removeListeners = function(displayable)
{
  DvtTimelineEventManager.superclass.removeListeners.call(this, displayable);
  if (!DvtAgent.isTouchDevice())
  {
    if (DvtAgent.isPlatformGecko())
      displayable.removeEvtListener(DvtTimelineEventManager.GECKO_MOUSEWHEEL, this.OnMouseWheel, false, this);
    else
      displayable.removeEvtListener(DvtMouseEvent.MOUSEWHEEL, this.OnMouseWheel, false, this);
    // IE does not always fire the appropriate mouseover and mouseout events, so use mouseenter instead
    if (DvtAgent.isPlatformIE())
    {
      var stage = this.getCtx().getStage();
      stage.removeEvtListener('mouseenter', this.OnMouseEnter, false, this);
      stage.removeEvtListener('mouseleave', this.OnMouseLeave, false, this);
    }
  }
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.OnKeyDown = function(event)
{
  DvtTimelineEventManager.superclass.OnKeyDown.call(this, event);
  this._timeline.HandleKeyDown(event);
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.OnClick = function(event)
{
  if (this._isDragPanning)
    return;

  DvtTimelineEventManager.superclass.OnClick.call(this, event);
  this._timeline.HandleMouseClick(event);
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.PreOnMouseOver = function(event)
{
  if (this._mouseOutTimer && this._mouseOutTimer.isRunning())
    this._mouseOutTimer.stop();
  DvtTimelineEventManager.superclass.PreOnMouseOver.call(this, event);

  if (!DvtAgent.isPlatformIE() && !this.isMouseOver)
  {
    this.isMouseOver = true;
    this._timeline.showThenHideHotspots();
  }
};

/**
 * Handler for the mouseenter event.
 * @param {DvtMouseEvent} event The mouseenter event.
 */
DvtTimelineEventManager.prototype.OnMouseEnter = function(event)
{
  if (this._mouseOutTimer && this._mouseOutTimer.isRunning())
    this._mouseOutTimer.stop();

  if (!this.isMouseOver)
  {
    this.isMouseOver = true;
    this._timeline.showThenHideHotspots();
  }
};

/**
 * Handler for the mouseleave event.
 * @param {DvtMouseEvent} event The mouseleave event.
 */
DvtTimelineEventManager.prototype.OnMouseLeave = function(event)
{
  if (!this._mouseOutTimer)
    this._mouseOutTimer = new DvtTimer(this.getCtx(), 10, this._onMouseOutTimerEnd, this, 1);

  this._mouseOutTimer.reset();
  this._mouseOutTimer.start();
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.PreOnMouseOut = function(event)
{
  DvtTimelineEventManager.superclass.PreOnMouseOut.call(this, event);
  if (!DvtAgent.isPlatformIE())
  {
    if (!this._mouseOutTimer)
      this._mouseOutTimer = new DvtTimer(this.getCtx(), 10, this._onMouseOutTimerEnd, this, 1);

    this._mouseOutTimer.reset();
    this._mouseOutTimer.start();
  }
};

/**
 * Mouse out timer callback function.
 * @private
 */
DvtTimelineEventManager.prototype._onMouseOutTimerEnd = function()
{
  this.isMouseOver = false;
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.PreOnMouseDown = function(event)
{
  this._isDragPanning = false;
  DvtTimelineEventManager.superclass.PreOnMouseDown.call(this, event);
  this._timeline.HandleMouseDown(event);
};

/**
 * Mouse wheel event handler.
 * @param {mousewheel} event The mousewheel event.
 * @protected
 */
DvtTimelineEventManager.prototype.OnMouseWheel = function(event)
{
  this._timeline.HandleMouseWheel(event);
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.OnTouchStartBubble = function(event)
{
  DvtTimelineEventManager.superclass.OnTouchStartBubble.call(this, event);
  this._timeline.HandleTouchStart(event);
  // iOS does not set focus on touch, so need to force focus
  var stage = this._timeline.getCtx().getStage();
  var wrappingDiv = stage.getSVGRoot().parentNode;
  wrappingDiv.focus();
};

/**
 * @override
 */
DvtTimelineEventManager.prototype.OnTouchEndBubble = function(event)
{
  DvtTimelineEventManager.superclass.OnTouchEndBubble.call(this, event);
  this._timeline.HandleTouchEnd(event);
};

/**
 * Drag start callback.
 * @param {DvtBaseEvent} event
 * @return {boolean} Whether drag is initiated.
 * @private
 */
DvtTimelineEventManager.prototype._onDragStart = function(event)
{
  if (DvtAgent.isTouchDevice())
    return this._onTouchDragStart(event);
  else
    return this._onMouseDragStart(event);
};

/**
 * Drag move callback.
 * @param {DvtBaseEvent} event
 * @return {boolean}
 * @private
 */
DvtTimelineEventManager.prototype._onDragMove = function(event)
{
  if (DvtAgent.isTouchDevice())
    return this._onTouchDragMove(event);
  else
    return this._onMouseDragMove(event);
};

/**
 * Drag end callback.
 * @param {DvtBaseEvent} event
 * @return {boolean}
 * @private
 */
DvtTimelineEventManager.prototype._onDragEnd = function(event)
{
  if (DvtAgent.isTouchDevice())
    return this._onTouchDragEnd(event);
  else
    return this._onMouseDragEnd(event);
};

/**
 * Return the relative position relative to the stage, based on the cached stage absolute position.
 * @param {number} pageX
 * @param {number} pageY
 * @return {DvtPoint} The relative position.
 * @private
 */
DvtTimelineEventManager.prototype._getRelativePosition = function(pageX, pageY) {
  if (!this._stageAbsolutePosition)
    this._stageAbsolutePosition = this._context.getStageAbsolutePosition();

  return new DvtPoint(pageX - this._stageAbsolutePosition.x, pageY - this._stageAbsolutePosition.y);
};

/**
 * Mouse drag start callback.
 * @param {DvtBaseEvent} event
 * @return {boolean} Whether drag is initiated.
 * @private
 */
DvtTimelineEventManager.prototype._onMouseDragStart = function(event)
{
  if (event.button != DvtMouseEvent.RIGHT_CLICK_BUTTON)
  {
    var relPos = this._getRelativePosition(event.pageX, event.pageY);
    this._timeline.beginDragPan(relPos.x, relPos.y);
    return true;
  }
  return false;
};

/**
 * Mouse drag move callback.
 * @param {DvtBaseEvent} event
 * @private
 */
DvtTimelineEventManager.prototype._onMouseDragMove = function(event)
{
  var relPos = this._getRelativePosition(event.pageX, event.pageY);
  if (this._timeline.contDragPan(relPos.x, relPos.y))
    this._isDragPanning = true;
};

/**
 * Mouse drag end callback.
 * @param {DvtBaseEvent} event
 * @private
 */
DvtTimelineEventManager.prototype._onMouseDragEnd = function(event)
{
  this._timeline.endDragPan();
  // Clear the stage absolute position cache
  this._stageAbsolutePosition = null;
};

/**
 * Touch drag start callback.
 * @param {DvtBaseEvent} event
 * @return {boolean} Whether drag is initiated.
 * @private
 */
DvtTimelineEventManager.prototype._onTouchDragStart = function(event)
{
  var touches = event.touches;
  if (touches.length == 1)
  {
    var relPos = this._getRelativePosition(touches[0].pageX, touches[0].pageY);
    this._timeline.beginDragPan(relPos.x, relPos.y);
    return true;
  }
  else if (touches.length == 2)
  {
    this._timeline.endDragPan();
    this._isPinchZoom = true;
    var relPos1 = this._getRelativePosition(touches[0].pageX, touches[0].pageY);
    var relPos2 = this._getRelativePosition(touches[1].pageX, touches[1].pageY);
    this._timeline.beginPinchZoom(relPos1.x, relPos1.y, relPos2.x, relPos2.y);
    DvtEventManager.consumeEvent(event);
    return true;
  }
  return false;
};

/**
 * Touch drag move callback.
 * @param {DvtBaseEvent} event
 * @private
 */
DvtTimelineEventManager.prototype._onTouchDragMove = function(event)
{
  var touches = event.touches;
  // make sure this is a single touch and not a multi touch
  if (touches.length == 1)
  {
    var relPos = this._getRelativePosition(touches[0].pageX, touches[0].pageY);
    this._timeline.contDragPan(relPos.x, relPos.y);
    event.preventDefault();
  }
  else if (touches.length == 2)
  {
    var relPos1 = this._getRelativePosition(touches[0].pageX, touches[0].pageY);
    var relPos2 = this._getRelativePosition(touches[1].pageX, touches[1].pageY);
    this._timeline.contPinchZoom(relPos1.x, relPos1.y, relPos2.x, relPos2.y);
    event.preventDefault();
  }
};

/**
 * Touch drag end callback.
 * @param {DvtBaseEvent} event
 * @private
 */
DvtTimelineEventManager.prototype._onTouchDragEnd = function(event)
{
  if (!this._isPinchZoom)
  {
    this._timeline.endDragPan();
    event.preventDefault();
  }
  else
  {
    this._isPinchZoom = false;
    this._timeline.endPinchZoom();
    event.preventDefault();
  }
  // Clear the stage absolute position cache
  this._stageAbsolutePosition = null;
};

/**
 * Zooms by the specified amount.
 * @param {number} dz A number specifying the zoom ratio. dz = 1 means no zoom.
 */
DvtTimelineEventManager.prototype.zoomBy = function(dz)
{
  this._timeline.zoomBy(dz);
};

/**
 * Pans by the specified amount.
 * @param {number} dx A number from specifying the pan ratio in the x direction, e.g. dx = 0.5 means pan end by 50%..
 * @param {number} dy A number from specifying the pan ratio in the y direction, e.g. dy = 0.5 means pan down by 50%.
 */
DvtTimelineEventManager.prototype.panBy = function(dx, dy)
{
  var deltaX = dx * this._timeline._canvasLength * (DvtAgent.isRightToLeft(this._context) ? -1 : 1);
  var deltaY = dy * this._timeline._seriesSize;
  if (deltaX != 0)
    this._timeline._triggerViewportChange = true;

  var focusObj = this.getFocus();
  if (focusObj)
    this._timeline._dragPanSeries = focusObj._series;

  this._timeline.panBy(deltaX, deltaY);
  this._timeline.endPan();
};

/**
 * Zoom in button click handler.
 * @param {DvtBaseEvent} event The dispatched event to be processed by the object.
 */
DvtTimelineEventManager.prototype.HandleZoomInClick = function(event)
{
  this._timeline.handleZoom(true);
};

/**
 * Zoom out button click handler.
 * @param {DvtBaseEvent} event The dispatched event to be processed by the object.
 */
DvtTimelineEventManager.prototype.HandleZoomOutClick = function(event)
{
  this._timeline.handleZoom(false);
};
/**
 * Timeline component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtTimeComponent}
 * @export
 */
var DvtTimeline = function()
{

};

DvtObj.createSubclass(DvtTimeline, DvtTimeComponent, 'DvtTimeline');

DvtTimeline.DEFAULT_TIMELINE_STYLE = 'border:1px #d9dfe3;background-color:#f9f9f9;';

DvtTimeline.DEFAULT_AXIS_STYLE = 'background-color:#f9f9f9;border:1px #d9dfe3;';
DvtTimeline.DEFAULT_AXIS_LABEL_STYLE = 'color:#333333;font-size:12px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';
DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_STYLE = 'background-color:rgba(249,249,249,0.8);color:#4f4f4f;white-space:nowrap;font-size:14px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';
DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_PADDING = 1;
DvtTimeline.DEFAULT_AXIS_SEPARATOR_STYLE = 'color:#bcc7d2;';
DvtTimeline.DEFAULT_OVERVIEW_BACKGROUND_COLOR = '#e6ecf3';
DvtTimeline.DEFAULT_OVERVIEW_LABEL_STYLE = 'color:#4f4f4f;font-size:12px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';
DvtTimeline.DEFAULT_OVERVIEW_WINDOW_BORDER_COLOR = '#4f4f4f';
DvtTimeline.DEFAULT_OVERVIEW_WINDOW_BACKGROUND_COLOR = '#ffffff';
DvtTimeline.DEFAULT_OVERVIEW_HEIGHT = 100;
DvtTimeline.DEFAULT_OVERVIEW_WIDTH = 60;

DvtTimeline.DEFAULT_HOTSPOT_BACKGROUND_COLOR = '#000000';
DvtTimeline.DEFAULT_HOTSPOT_BORDER_RADIUS = 2;
DvtTimeline.DEFAULT_HOTSPOT_OPACITY = 0.6;
DvtTimeline.DEFAULT_HOTSPOT_WIDTH = 28;
DvtTimeline.DEFAULT_HOTSPOT_HEIGHT = 28;
DvtTimeline.DEFAULT_HOTSPOT_PADDING = 3;
DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH = 14;
DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT = 14;
DvtTimeline.DEFAULT_HOTSPOT_ANIMATION_DURATION = 0.3;

DvtTimeline.ZOOM_BY_VALUE = 1.5;

DvtTimeline.ORIENTATION_VERTICAL = 'vertical';

/**
 * Returns a new instance of DvtTimeline.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtTimeline}
 * @export
 */
DvtTimeline.newInstance = function(context, callback, callbackObj)
{
  var timeline = new DvtTimeline();
  timeline.Init(context, callback, callbackObj);
  return timeline;
};

/**
 * Initializes the component.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @protected
 */
DvtTimeline.prototype.Init = function(context, callback, callbackObj)
{
  DvtTimeline.superclass.Init.call(this, context, callback, callbackObj);

  // Create the event handler and add event listeners
  this.EventManager = new DvtTimelineEventManager(this, context, callback, callbackObj);
  this.EventManager.addListeners(this);
  if (!DvtAgent.isTouchDevice())
  {
    this._keyboardHandler = new DvtTimelineKeyboardHandler(this.EventManager);
    this.EventManager.setKeyboardHandler(this._keyboardHandler);
  }
  else
    this._keyboardHandler = null;
};

DvtTimeline.prototype.Parse = function(options)
{
  this._parser = new DvtTimelineParser(this);
  return this._parser.parse(options);
};

DvtTimeline.prototype._applyParsedProperties = function(props)
{
  var orientation = props.orientation;
  if (orientation && orientation == DvtTimeline.ORIENTATION_VERTICAL)
    this._isVertical = true;
  else
    this._isVertical = false;

  this._hasOverview = props.hasOverview;
  this._viewStartTime = props.viewStart;
  this._viewEndTime = props.viewEnd;
  this._selectionMode = props.selectionMode;
  if (this._selectionMode == 'single')
    this.SelectionHandler = new DvtSelectionHandler(DvtSelectionHandler.TYPE_SINGLE);
  else if (this._selectionMode == 'multiple')
    this.SelectionHandler = new DvtSelectionHandler(DvtSelectionHandler.TYPE_MULTIPLE);
  else
    this.SelectionHandler = null;

  // Pass to event handler
  this.EventManager.setSelectionHandler(this.SelectionHandler);

  this._axisInlineStyle = props.axisStyle;
  this._shortDesc = props.shortDesc;
  this._id = props.id;
  this._referenceObjects = props.referenceObjects;
  this._zoomOrder = props.zoomOrder;
  this._seriesScale = props.seriesScale;

  // Internationalization strings
  this._dateFormatStrings = {
    dayNames: [
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_SUNDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_MONDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_TUESDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_WEDNESDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_THURSDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_FRIDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SHORT_SATURDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SUNDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_MONDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_TUESDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_WEDNESDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_THURSDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_FRIDAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DAY_SATURDAY', null)
    ],
    monthNames: [
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_JANUARY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_FEBRUARY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_MARCH', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_APRIL', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_MAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_JUNE', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_JULY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_AUGUST', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_SEPTEMBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_OCTOBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_NOVEMBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SHORT_DECEMBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_JANUARY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_FEBRUARY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_MARCH', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_APRIL', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_MAY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_JUNE', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_JULY', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_AUGUST', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_SEPTEMBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_OCTOBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_NOVEMBER', null),
      DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'MONTH_DECEMBER', null)
    ]
  };

  if (this._seriesScale)
  {
    this._seriesConverter = props.seriesConverter;
    this._seriesTimeAxis = new DvtTimeComponentAxis(this.getCtx(), null, null, this._isVertical);
    this._seriesTimeAxis.setScale(this._seriesScale);
    this._seriesTimeAxis.setConverter(this._seriesConverter);
    if (this._isVertical)
    {
      this._seriesTimeAxis.setType(DvtTimeComponentAxisFormatter.SHORT, this._dateFormatStrings);
      this._seriesTimeAxis.setDefaultConverter(this._resources['converterVert']);
    }
    else
    {
      this._seriesTimeAxis.setType(DvtTimeComponentAxisFormatter.LONG, this._dateFormatStrings);
      this._seriesTimeAxis.setDefaultConverter(this._resources['converter']);
    }
  }

  this._defaultInversions = [false, true];

  DvtTimeline.superclass._applyParsedProperties.call(this, props);
};

DvtTimeline.prototype.getTimeAxisSize = function()
{
  return this._timeAxis.getSize();
};

DvtTimeline.prototype.getTimeAxisVisibleSize = function(seriesCount)
{
  if (!this._hasOverview && seriesCount == 1)
    return this.getTimeAxisSize() - this._timeAxis.getBorderWidth();
  else
    return this.getTimeAxisSize();
};

/**
 * @override
 * @export
 */
DvtTimeline.prototype.select = function(selection)
{
  // Update the options
  // TODO: update this for stuff...
  this.Options['selection'] = DvtJSONUtils.clone(selection);

  // Perform the selection
  if (this.SelectionHandler)
    this.applyInitialSelections();
};

/**
 * Renders the component with the specified data.  If no data is supplied to a component
 * that has already been rendered, the component will be rerendered to the specified size.
 * @param {object} options The object containing specifications and data for this component.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 * @export
 */
DvtTimeline.prototype.render = function(options, width, height)
{
  // ensure options is updated
  if (options)
    this.SetOptions(options);

  this._series = null;
  this._axis = null;
  this._canvas = null;
  this._innerCanvas = null;
  this._overview = null;
  this._overviewCanvas = null;

  if (this.Options)
  {
    this._resources = this.Options['_resources'];
    if (this._resources == null)
      this._resources = [];
  }

  // The overall size of this component
  this.Width = width;
  this.Height = height;

  // If new xml is provided, parse it and apply the properties
  if (options)
  {
    var props = this.Parse(this.Options);
    this._applyParsedProperties(props);
  }
  else
  {
    // must apply new height and width values for resize case
    this.applyStyleValues();
  }

  this._fetchStartPos = 0;
  if (this._isVertical)
    this._fetchEndPos = height;
  else
    this._fetchEndPos = width;

  // clear any contents rendered previously
  this.removeChildren();

  if (this.Options['styleDefaults'])
  {
    this._axisStyleDefaults = this.Options['styleDefaults']['minorAxis'];
    this._majorAxisStyleDefaults = this.Options['styleDefaults']['majorAxis'];
    this._itemStyleDefaults = this.Options['styleDefaults']['item'];
    this._seriesStyleDefaults = this.Options['styleDefaults']['series'];
    this._referenceObjectStyleDefaults = this.Options['styleDefaults']['referenceObject'];
    this._overviewStyleDefaults = this.Options['styleDefaults']['overview'];
  }
  this.prepareViewportLength();

  if (this._scale)
  {
    this.prepareTimeAxisZoomLevelIntervals(this._start, this._end);
    this._populateSeries();
    this.applyAxisStyleValues();
  }

  // Render the timeline
  this.createBackground();
  this.renderScrollableCanvas();
  this.setupInnerCanvas();

  if (this.hasValidOptions())
  {
    this.renderSeries();
    this.renderSeriesLabels();
    this.renderAxis();

    if (this._hasOverview)
      this.renderOverview();

    // just use the first object as the focus
    if (this._keyboardHandler)
    {
      for (var i = 0; i < this._series.length; i++)
      {
        var series = this._series[i];
        if (series._items && series._items.length > 0)
        {
          this.EventManager.setFocusObj(series._items[0]);
          break;
        }
      }
    }

    // render scroll hotspots now so they are on top of everything
    this.renderScrollHotspots();

    if (DvtAgent.isEnvironmentBrowser())
      this.showThenHideHotspots();

    this.createZoomControls();

    // Initial Selection
    if (this.SelectionHandler)
      this.applyInitialSelections();

    if (DvtTimeUtils.supportsTouch())
      this._setAriaProperty('flowto', this._series[0].getId());
  }
  else
    this.renderEmptyText();

  this.UpdateAriaAttributes();

  // Set the timeline as the only keyboard listener
  // Prevents overview from receiving keyboard events
  this.getCtx().setKeyboardFocusArray([this]);
};

DvtTimeline.prototype.renderEmptyText = function()
{
  // Get the empty text string
  if (this.Options['series'])
    var emptyTextStr = DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'INVALID_DATA', null);
  else
    emptyTextStr = DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'NO_DATA', null);

  DvtTextUtils.renderEmptyText(this._canvas, emptyTextStr,
      new DvtRectangle(0, 0, this._backgroundWidth, this._backgroundHeight),
      this.EventManager, new DvtCSSStyle(DvtTimelineSeries.DEFAULT_EMPTY_TEXT_STYLE));
};

/**
 * Helper method to decide whether or not the options are valid.
 * @return {boolean} Whether this timeline has valid options.
 */
DvtTimeline.prototype.hasValidOptions = function()
{
  var hasValidScale = this._scale && DvtTimeComponentAxis._VALID_SCALES.indexOf(this._scale) != -1;
  var hasValidStartAndEnd = this._start && this._end && (this._end > this._start);
  var hasValidSeries = this._series && this._series.length > 0;
  var hasValidSeriesScale = this._seriesScale ? DvtTimeComponentAxis._VALID_SCALES.indexOf(this._seriesScale) != -1 : true;
  var hasValidViewport = (this._viewStartTime && this._viewEndTime) ? this._viewEndTime > this._viewStartTime : true;
  var hasValidViewStart = this._viewStartTime ? (this._viewStartTime >= this._start && this._viewStartTime < this._end) : true;
  var hasValidViewEnd = this._viewEndTime ? (this._viewEndTime > this._start && this._viewEndTime <= this._end) : true;

  return (hasValidScale && hasValidStartAndEnd && hasValidSeries && hasValidSeriesScale && hasValidViewport &&
          hasValidViewStart && hasValidViewEnd);
};

/**
 * @override
 */
DvtTimeline.prototype.GetComponentDescription = function()
{
  if (this._shortDesc)
    return this._shortDesc;
  else
    return DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'TIMELINE');
};

DvtTimeline.prototype.renderScrollHotspots = function()
{
  if (this._series)
  {
    var seriesCount = this._series.length;
    var axisSize = this.getTimeAxisVisibleSize(seriesCount);
    this._scrollHotspots = [];
    for (var i = 0; i < seriesCount; i++)
    {
      var scrollHotspots = new DvtContainer(this.getCtx(), 'hotspots_s' + i);
      this.addChild(scrollHotspots);

      if (!this._isVertical)
      {
        var backX = this._startX + DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        var forwardX = this._startX + this._canvasLength - DvtTimeline.DEFAULT_HOTSPOT_WIDTH - DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        var backY = this._startY + (i * (this._seriesSize + axisSize)) + (this._seriesSize - DvtTimeline.DEFAULT_HOTSPOT_HEIGHT) / 2;
        var forwardY = backY;
        var arrowBackX = backX + DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH / 2;
        var arrowForwardX = forwardX + DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH / 2;
        var arrowBackY = backY + DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT / 2;
        var arrowForwardY = arrowBackY;
        var arrowBackResource = this._resources['scrollLeft'];
        var arrowForwardResource = this._resources['scrollRight'];
      }
      else
      {
        if (this.isRTL())
          var key = Math.abs(i - 1);
        else
          key = i;
        backX = this._startX + (key * (this._seriesSize + axisSize)) + (this._seriesSize - DvtTimeline.DEFAULT_HOTSPOT_WIDTH) / 2;
        forwardX = backX;
        backY = this._startY + DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        forwardY = this._startY + this._canvasLength - DvtTimeline.DEFAULT_HOTSPOT_HEIGHT - DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        arrowBackX = backX + DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH / 2;
        arrowForwardX = arrowBackX;
        arrowBackY = backY + DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT / 2;
        arrowForwardY = forwardY + DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT / 2;
        arrowBackResource = this._resources['scrollUp'];
        arrowForwardResource = this._resources['scrollDown'];
      }

      var leftHotspot = new DvtRect(this.getCtx(), backX, backY, DvtTimeline.DEFAULT_HOTSPOT_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_HEIGHT, 'lhs');
      leftHotspot.setSolidFill(DvtTimeline.DEFAULT_HOTSPOT_BACKGROUND_COLOR, 1);
      leftHotspot.setCornerRadius(DvtTimeline.DEFAULT_HOTSPOT_BORDER_RADIUS);
      leftHotspot.hotspot = 'left';
      leftHotspot.setAlpha(0);
      leftHotspot.setMouseEnabled(false);
      var leftArrow = new DvtImage(this.getCtx(), arrowBackResource, arrowBackX, arrowBackY, DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT, 'lhs_arr');
      leftArrow.hotspot = 'left';
      leftHotspot.addChild(leftArrow);
      var rightHotspot = new DvtRect(this.getCtx(), forwardX, forwardY, DvtTimeline.DEFAULT_HOTSPOT_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_HEIGHT, 'rhs');
      rightHotspot.setSolidFill(DvtTimeline.DEFAULT_HOTSPOT_BACKGROUND_COLOR, 1);
      rightHotspot.setCornerRadius(DvtTimeline.DEFAULT_HOTSPOT_BORDER_RADIUS);
      rightHotspot.hotspot = 'right';
      rightHotspot.setAlpha(0);
      rightHotspot.setMouseEnabled(false);
      var rightArrow = new DvtImage(this.getCtx(), arrowForwardResource, arrowForwardX, arrowForwardY, DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT, 'rhs_arr');
      rightArrow.hotspot = 'right';

      rightHotspot.addChild(rightArrow);
      scrollHotspots.addChild(leftHotspot);
      this._scrollHotspots.push(leftHotspot);
      scrollHotspots.addChild(rightHotspot);
      this._scrollHotspots.push(rightHotspot);

      if (!this._isVertical)
      {
        var topX = this._startX + (this._canvasLength - DvtTimeline.DEFAULT_HOTSPOT_WIDTH) / 2;
        var bottomX = topX;
        var topY = this._startY + (i * (this._seriesSize + axisSize)) + DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        var bottomY = this._startY + ((i + 1) * this._seriesSize) + (i * axisSize) - DvtTimeline.DEFAULT_HOTSPOT_HEIGHT - DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        var arrowTopX = topX + DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH / 2;
        var arrowBottomX = arrowTopX;
        var arrowTopY = topY + DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT / 2;
        var arrowBottomY = bottomY + DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT / 2;
        var arrowTopResource = this._resources['scrollUp'];
        var arrowBottomResource = this._resources['scrollDown'];
      }
      else
      {
        if (this.isRTL())
          var key = Math.abs(i - 1);
        else
          key = i;
        topX = this._startX + (key * (this._seriesSize + axisSize)) + DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        bottomX = this._startX + ((key + 1) * this._seriesSize) + (key * axisSize) - DvtTimeline.DEFAULT_HOTSPOT_WIDTH - DvtTimeline.DEFAULT_HOTSPOT_PADDING;
        topY = this._startY + (this._canvasLength - DvtTimeline.DEFAULT_HOTSPOT_WIDTH) / 2;
        bottomY = topY;
        arrowTopX = topX + DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH / 2;
        arrowBottomX = bottomX + DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH / 2;
        arrowTopY = topY + DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT / 2;
        arrowBottomY = arrowTopY;
        arrowTopResource = this._resources['scrollLeft'];
        arrowBottomResource = this._resources['scrollRight'];
      }

      var topHotspot = new DvtRect(this.getCtx(), topX, topY, DvtTimeline.DEFAULT_HOTSPOT_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_HEIGHT, 'ths');
      topHotspot.setSolidFill(DvtTimeline.DEFAULT_HOTSPOT_BACKGROUND_COLOR, 1);
      topHotspot.setCornerRadius(DvtTimeline.DEFAULT_HOTSPOT_BORDER_RADIUS);
      topHotspot.hotspot = 'top';
      topHotspot.setAlpha(0);
      topHotspot.setMouseEnabled(false);
      var upArrow = new DvtImage(this.getCtx(), arrowTopResource, arrowTopX, arrowTopY, DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT, 'ths_arr');
      upArrow.hotspot = 'top';
      topHotspot.addChild(upArrow);
      var bottomHotspot = new DvtRect(this.getCtx(), bottomX, bottomY, DvtTimeline.DEFAULT_HOTSPOT_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_HEIGHT, 'bhs');
      bottomHotspot.setSolidFill(DvtTimeline.DEFAULT_HOTSPOT_BACKGROUND_COLOR, 1);
      bottomHotspot.setCornerRadius(DvtTimeline.DEFAULT_HOTSPOT_BORDER_RADIUS);
      bottomHotspot.hotspot = 'bottom';
      bottomHotspot.setAlpha(0);
      bottomHotspot.setMouseEnabled(false);
      var downArrow = new DvtImage(this.getCtx(), arrowBottomResource, arrowBottomX, arrowBottomY, DvtTimeline.DEFAULT_HOTSPOT_ARROW_WIDTH, DvtTimeline.DEFAULT_HOTSPOT_ARROW_HEIGHT, 'bhs_arr');
      downArrow.hotspot = 'bottom';

      bottomHotspot.addChild(downArrow);
      scrollHotspots.addChild(topHotspot);
      this._scrollHotspots.push(topHotspot);
      scrollHotspots.addChild(bottomHotspot);
      this._scrollHotspots.push(bottomHotspot);
    }
  }
};

DvtTimeline.prototype.showThenHideHotspots = function(series) 
{
  var animator = new DvtAnimator(this.getCtx(), DvtTimeline.DEFAULT_HOTSPOT_ANIMATION_DURATION, 0, DvtEasing.linear);
  for (var i = 0; i < this._scrollHotspots.length; i++)
  {
    var hotspot = this._scrollHotspots[i];
    var id = hotspot.getId();
    var show = true;
    if (this._contentLength <= this._canvasLength && (id == 'lhs' || id == 'rhs'))
      show = false;

    var pId = hotspot.getParent().getId();
    if (pId)
    {
      var parentSeries = pId.substring(pId.length - 1);
      if (series != null && (series != parentSeries))
        show = false;

      var seriesObj = this._series[parentSeries];
      if (seriesObj._maxOverflowValue <= this._seriesSize && (id == 'ths' || id == 'bhs'))
        show = false;
    }
    if (show)
      animator.addProp(DvtAnimator.TYPE_NUMBER, hotspot, hotspot.getAlpha, hotspot.setAlpha, DvtTimeline.DEFAULT_HOTSPOT_OPACITY);
  }
  DvtPlayable.appendOnEnd(animator, this.hideHotspots, this);
  animator.play();
};

DvtTimeline.prototype.hideHotspots = function()
{
  var hotSpotsLength = this._scrollHotspots.length;
  if (hotSpotsLength != 0)
  {
    var animator = new DvtAnimator(this.getCtx(), DvtTimeline.DEFAULT_HOTSPOT_ANIMATION_DURATION, 0, DvtEasing.linear);
    for (var i = 0; i < hotSpotsLength; i++)
    {
      var hotspot = this._scrollHotspots[i];
      animator.addProp(DvtAnimator.TYPE_NUMBER, hotspot, hotspot.getAlpha, hotspot.setAlpha, 0);
    }
    animator.play();
  }
};

/**
 * Combines style defaults with the styles provided
 *
 */
DvtTimeline.prototype.applyStyleValues = function()
{
  this._style = new DvtCSSStyle(DvtTimeline.DEFAULT_TIMELINE_STYLE);
  if (this.Options['styleDefaults'])
  {
    var style = this.Options['styleDefaults']['borderColor'];
    if (style)
      this._style.parseInlineStyle('border-color:' + style + ';');
  }
  if (this._hasOverview)
  {
    this._overviewSize = this._isVertical ? DvtTimeline.DEFAULT_OVERVIEW_WIDTH : DvtTimeline.DEFAULT_OVERVIEW_HEIGHT;
    var overviewStyle = this.Options['overview']['style'];
    if (overviewStyle)
    {
      var splits = overviewStyle.split(';');
      for (var i = 0; i < splits.length; i++)
      {
        var s = splits[i];
        if (s && s.length > 0)
        {
          var colonIndex = s.indexOf(':');
          if (colonIndex > - 1)
          {
            var attrName = DvtStringUtils.trim(s.substring(0, colonIndex));
            if ((this._isVertical && attrName == 'width') || (!this._isVertical && attrName == 'height'))
            {
              this._overviewSize = parseInt(DvtStringUtils.trim(s.substring(colonIndex + 1)), 10);
              break;
            }
          }
        }
      }
    }
  }
  DvtTimeline.superclass.applyStyleValues.call(this);

  // double border width to account for stroke width rendering
  var borderWidth = this._style.getBorderWidth();
  var doubleBorderWidth = borderWidth * 2;
  var borderStyle = 'border:' + doubleBorderWidth + 'px;';
  this._style.parseInlineStyle(borderStyle);

  this._startX = borderWidth;
  this._startY = borderWidth;
  this._backgroundWidth = this.Width;
  this._backgroundHeight = this.Height;

  if (this._isVertical)
  {
    // The size of the canvas viewport
    this._canvasLength = this._backgroundHeight - doubleBorderWidth;
    if (this._hasOverview)
    {
      this._canvasSize = this._backgroundWidth - this._overviewSize - doubleBorderWidth;
      if (this.isRTL())
        this._startX = this._startX + this._overviewSize;
    }
    else
      this._canvasSize = this._backgroundWidth - doubleBorderWidth;
  }
  else
  {
    // The size of the canvas viewport
    this._canvasLength = this._backgroundWidth - doubleBorderWidth;
    if (this._hasOverview)
      this._canvasSize = this.Height - this._overviewSize - doubleBorderWidth;
    else
      this._canvasSize = this.Height - doubleBorderWidth;
  }
};


/**
 * Combines style defaults with the styles provided
 *
 */
DvtTimeline.prototype.applyAxisStyleValues = function()
{
  this._axisStyle = new DvtCSSStyle(DvtTimeline.DEFAULT_AXIS_STYLE);
  if (this._axisStyleDefaults)
  {
    var axisStyles = '';
    var style = this._axisStyleDefaults['backgroundColor'];
    if (style)
      axisStyles = axisStyles + 'background-color:' + style + ';';
    style = this._axisStyleDefaults['borderColor'];
    if (style)
      axisStyles = axisStyles + 'border-color:' + style + ';';
    style = this._axisStyleDefaults['borderWidth'];
    if (style)
      axisStyles = axisStyles + 'border-width:' + style + ';';
    this._axisStyle.parseInlineStyle(axisStyles);
  }
  this._axisStyle.parseInlineStyle(this._axisInlineStyle);

  // double border width to account for stroke width rendering
  this._axisBorderWidth = this._axisStyle.getBorderWidth();
  var borderStyle = 'border:' + this._axisBorderWidth * 2 + 'px;';
  this._axisStyle.parseInlineStyle(borderStyle);

  this._timeAxis.setBorderWidth(this._axisBorderWidth);
  this._axisLength = this._contentLength + (this._axisBorderWidth * 2) - DvtTimeComponentAxis.DEFAULT_SEPARATOR_WIDTH;

  if (this._seriesStyleDefaults && this._seriesStyleDefaults['backgroundColor'])
  {
    var bgColor = this._seriesStyleDefaults['backgroundColor'];
    var r = DvtColorUtils.getRed(bgColor);
    var g = DvtColorUtils.getGreen(bgColor);
    var b = DvtColorUtils.getBlue(bgColor);
    this._seriesBackgroundOverlayStyle = 'background-color:rgba(' + r + ',' + g + ',' + b + ',0.8);';
  }
};


/**
 * Renders the background of the timeline.
 * @protected
 */
DvtTimeline.prototype.createBackground = function()
{
  this._background = new DvtRect(this.getCtx(), 0, 0, this._backgroundWidth, this._backgroundHeight, 'bg');
  this._background.setCSSStyle(this._style);
  this._background.setPixelHinting(true);

  var cp = new DvtClipPath();
  cp.addRect(0, 0, this._backgroundWidth, this._backgroundHeight);
  this._background.setClipPath(cp);

  this.addChild(this._background);
};


/**
 * Creates the inner canvas of the timeline.
 * @protected
 */
DvtTimeline.prototype.setupInnerCanvas = function()
{
  this._innerCanvas = new DvtContainer(this.getCtx(), 'iCanvas');
  var cp = new DvtClipPath();
  if (this._isVertical)
  {
    cp.addRect(this._startX, this._startY, this._canvasSize, this._canvasLength);
    this._innerCanvas.setTranslateX(this._startX);
    this._innerCanvas.setTranslateY(this._startY + this._startPos);
  }
  else
  {
    cp.addRect(this._startX, this._startY, this._canvasLength, this._canvasSize);
    this._innerCanvas.setTranslateX(this._startX + this._startPos);
    this._innerCanvas.setTranslateY(this._startY);
  }

  this._canvas.setClipPath(cp);
  this._canvas.addChild(this._innerCanvas);
};
/*
DvtTimeline.prototype.prepareTimeAxis = function(startDate, endDate)
{
  var context = this.getCtx();
  var axisLabelStyle = new DvtCSSStyle(DvtTimeline.DEFAULT_AXIS_LABEL_STYLE);
  if (this._axisStyleDefaults)
    axisLabelStyle.parseInlineStyle(this._axisStyleDefaults['labelStyle']);

  var axis = new DvtRect(context, 0, 0, 0, 0, 'tempAxis');
  var minW = Infinity;
  var maxH = 0;

  this._dates = [];
  this._labels = [];
  var currentDate = this._timeAxis.adjustDate(startDate).getTime();
  this._dates.push(currentDate);
  while (currentDate < endDate)
  {
    var labelText = this._timeAxis.formatDate(this._timeAxis.adjustDate(currentDate));
    var label = new DvtOutputText(context, labelText, 0, 0, 's_label' + currentDate);
    label.setCSSStyle(axisLabelStyle);
    // save the time associated with the element for dynamic resize
    label.time = currentDate;
    this._labels.push(label);
    var nextDate = this._timeAxis.getNextDate(this._timeAxis.adjustDate(currentDate)).getTime();

    // update maximum label width and height
    axis.addChild(label);
    var dim = label.getDimensions();
    axis.removeChild(label);
    var labelWidth = Math.max(DvtTimeComponentAxis.DEFAULT_INTERVAL_WIDTH, (dim.w + DvtTimeComponentAxis.DEFAULT_INTERVAL_PADDING * 2));
    var widthFactor = (nextDate - currentDate) / labelWidth;
    if (widthFactor < minW)
      minW = widthFactor;
    if (dim.h > maxH)
      maxH = dim.h;

    // the last currentDate added in this loop is outside of the time range, but is needed
    // for the last 'next' date when actually creating the time axis in renderTimeAxis
    currentDate = nextDate;
    this._dates.push(currentDate);
  }
  this._timeAxis.setContentSize(maxH + DvtTimeComponentAxis.DEFAULT_INTERVAL_PADDING * 2);
  this.setContentLength((endDate - startDate) / minW);
};
*/

DvtTimeline.prototype.prepareViewportLength = function()
{
  this._setLength = true;
  this._startPos = 0;
  if (this.isRTL() && !this._isVertical)
    this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
  if (this._viewStartTime && this._viewEndTime)
  {
    var viewTime = this._viewEndTime - this._viewStartTime;
    if (viewTime > 0)
    {
      this._setLength = false;
      var widthFactor = this._canvasLength / viewTime;
      this.setContentLength(widthFactor * (this._end - this._start));
      this._startPos = widthFactor * (this._start - this._viewStartTime);
      if (this.isRTL() && !this._isVertical)
        this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
    }
  }
};

DvtTimeline.prototype.prepareTimeAxisZoomLevelIntervals = function(startDate, endDate)
{
  var context = this.getCtx();
  var axisLabelStyle = new DvtCSSStyle(DvtTimeline.DEFAULT_AXIS_LABEL_STYLE);
  if (this._axisStyleDefaults)
    axisLabelStyle.parseInlineStyle(this._axisStyleDefaults['labelStyle']);

  this._timeAxis = new DvtTimeComponentAxis(context, null, null, this._isVertical, this._zoomOrder);
  this._timeAxis.setConverter(this._converter);
  this._timeAxis.setType(DvtTimeComponentAxisFormatter.SHORT, this._dateFormatStrings);

  this._dates = [];
  this._labels = [];
  this._zoomLevelLengths = [];

  if (this._isVertical)
  {
    var defaultLength = DvtTimeComponentAxis.DEFAULT_INTERVAL_HEIGHT;
    this._timeAxis.setDefaultConverter(this._resources['converterVert']);
  }
  else
  {
    defaultLength = DvtTimeComponentAxis.DEFAULT_INTERVAL_WIDTH;
    this._timeAxis.setDefaultConverter(this._resources['converter']);
  }

  for (var i = 0; i < this._timeAxis._zoomOrder.length; i++)
  {
    var scale = this._timeAxis._zoomOrder[i];
    this._timeAxis.setScale(scale);
    var axis = new DvtRect(context, 0, 0, 0, 0, 'tempAxis');
    var minLength = Infinity;
    var maxSize = 0;

    var dates = [];
    var labels = [];

    var currentDate = this._timeAxis.adjustDate(startDate).getTime();
    dates.push(currentDate);
    while (currentDate < endDate)
    {
      var labelText = this._timeAxis.formatDate(this._timeAxis.adjustDate(currentDate));
      var label = new DvtOutputText(context, labelText, 0, 0, 's_label' + currentDate);
      label.setCSSStyle(axisLabelStyle);
      // save the time associated with the element for dynamic resize
      label.time = currentDate;
      labels.push(label);
      var nextDate = this._timeAxis.getNextDate(this._timeAxis.adjustDate(currentDate)).getTime();

      // update maximum label width and height
      axis.addChild(label);
      var dim = label.getDimensions();
      axis.removeChild(label);
      if (this._isVertical)
      {
        var lengthDim = dim.h;
        var sizeDim = dim.w;
      }
      else
      {
        lengthDim = dim.w;
        sizeDim = dim.h;
      }
      var labelLength = Math.max(defaultLength, lengthDim + (DvtTimeComponentAxis.DEFAULT_INTERVAL_PADDING * 2));
      var lengthFactor = (nextDate - currentDate) / labelLength;
      if (lengthFactor < minLength)
        minLength = lengthFactor;
      if (sizeDim > maxSize)
        maxSize = sizeDim;

      // the last currentDate added in this loop is outside of the time range, but is needed
      // for the last 'next' date when actually creating the time axis in renderTimeAxis
      currentDate = nextDate;
      dates.push(currentDate);
    }
    this._timeAxis.setContentSize(maxSize + DvtTimeComponentAxis.DEFAULT_INTERVAL_PADDING * 2);
    this._dates.push(dates);
    this._labels.push(labels);
    var zoomLevelLength = ((endDate - startDate) / minLength);
    this._zoomLevelLengths.push(zoomLevelLength);
    if (scale == this._scale)
    {
      this._zoomLevelOrder = i;
      if (this._setLength)
      {
        this.setContentLength(zoomLevelLength);
        this._setLength = false;
        if (this._viewStartTime == null)
        {
          if (this._viewEndTime != null)
          {
            this._viewStartTime = this._viewEndTime - (this._canvasLength / zoomLevelLength) * (endDate - startDate);
            if (this._viewStartTime < this._start)
              this._viewStartTime = this._start;
            var viewTime = this._viewEndTime - this._viewStartTime;
            var widthFactor = this._canvasLength / viewTime;
            this.setContentLength(widthFactor * (this._end - this._start));
            this._startPos = widthFactor * (this._start - this._viewStartTime);
            if (this.isRTL() && !this._isVertical)
              this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
          }
          else
          {
            this._viewStartTime = this._start;
            this._startPos = 0;
            if (this.isRTL() && !this._isVertical)
              this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
            this._viewEndTime = (this._canvasLength / zoomLevelLength) * (endDate - startDate) + this._viewStartTime;
            if (this._viewEndTime > this._end)
              this._viewEndTime = this._end;
          }
        }
        else
        {
          this._viewEndTime = (this._canvasLength / zoomLevelLength) * (endDate - startDate) + this._viewStartTime;
          if (this._viewEndTime > this._end)
            this._viewEndTime = this._end;
          viewTime = this._viewEndTime - this._viewStartTime;
          widthFactor = this._canvasLength / viewTime;
          this.setContentLength(widthFactor * (this._end - this._start));
          this._startPos = widthFactor * (this._start - this._viewStartTime);
          if (this.isRTL() && !this._isVertical)
            this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
        }
      }
    }
    if (i == 0)
      this._maxContentLength = labels.length * this._canvasLength;
  }
  this._timeAxis.setScale(this._scale);
};

DvtTimeline.prototype._populateSeries = function()
{
  // clear the series holder
  this._series = [];
  this._seriesOptions = [];

  var series = this.Options['series'];
  if (series)
  {
    var seriesCount = Math.min(series.length, 2);
    for (var i = 0; i < seriesCount; i++)
    {
      var seriesOptions = series[i];
      seriesOptions['start'] = this._start;
      seriesOptions['end'] = this._end;
      seriesOptions['inverted'] = this._defaultInversions[i];
      seriesOptions['orientation'] = this.Options['orientation'];
      seriesOptions['referenceObjects'] = this._referenceObjects;
      seriesOptions['timeline'] = this;
      seriesOptions['index'] = i;
      if (this.Options['majorAxis'])
      {
        seriesOptions['scale'] = this.Options['majorAxis']['scale'];
        seriesOptions['timeAxis'] = this._seriesTimeAxis;
      }

      if (this.Options['styleDefaults'])
      {
        seriesOptions['seriesStyleDefaults'] = this._seriesStyleDefaults;
        seriesOptions['itemStyleDefaults'] = this._itemStyleDefaults;
        seriesOptions['referenceObjectStyleDefaults'] = this._referenceObjectStyleDefaults;
        seriesOptions['axisStyleDefaults'] = this._majorAxisStyleDefaults;
      }
      this._seriesOptions.push(seriesOptions);

      var s = new DvtTimelineSeries(this.getCtx(), this.HandleEvent, this);
      this._series.push(s);
    }
  }
};

DvtTimeline.prototype.renderAxis = function()
{
  var seriesCount = this._series.length;
  var axisSize = this.getTimeAxisSize();
  var axisVisibleSize = this.getTimeAxisVisibleSize(seriesCount);
  var axisStart = seriesCount == 1 ? (this._canvasSize - axisVisibleSize) : (this._canvasSize / seriesCount - (axisVisibleSize / 2));
  if (this.isRTL() && this._isVertical && this._series.length == 1)
    axisStart = 0;

  if (this._axis == null)
  {
    var cp = new DvtClipPath();
    if (this._isVertical)
    {
      this._axis = new DvtRect(this.getCtx(), axisStart, -this._axisBorderWidth, axisSize, this._axisLength, 'axis');
      cp.addRect(axisStart, 0, axisSize, this._contentLength);
    }
    else
    {
      this._axis = new DvtRect(this.getCtx(), -this._axisBorderWidth, axisStart, this._axisLength, axisSize, 'axis');
      cp.addRect(0, axisStart, this._contentLength, axisSize);
    }
    this._axis.setCSSStyle(this._axisStyle);
    this._axis.setPixelHinting(true);
    this._axis.setClipPath(cp);

    this._innerCanvas.addChild(this._axis);
  }
  else
  {
    cp = new DvtClipPath();
    if (this._isVertical)
    {
      this._axis.setX(axisStart);
      this._axis.setY(-this._axisBorderWidth);
      this._axis.setWidth(axisSize);
      this._axis.setHeight(this._axisLength);
      cp.addRect(axisStart, 0, axisSize, this._contentLength);
    }
    else
    {
      this._axis.setX(-this._axisBorderWidth);
      this._axis.setY(axisStart);
      this._axis.setWidth(this._axisLength);
      this._axis.setHeight(axisSize);
      cp.addRect(0, axisStart, this._contentLength, axisSize);
    }
    this._axis.setClipPath(cp);
  }

  this.createSeriesTicks(this._contentLength, axisStart);
};

DvtTimeline.prototype.createSeriesTicks = function(length, axisStartPos)
{
  // remove all existing ticks and labels
  this._axis.removeChildren();

  var separatorStyle = new DvtCSSStyle(DvtTimeline.DEFAULT_AXIS_SEPARATOR_STYLE);
  var seriesAxisLabelStyle = new DvtCSSStyle(DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_STYLE);
  if (this._axisStyleDefaults)
  {
    var separatorColor = this._axisStyleDefaults['separatorColor'];
    if (separatorColor)
      separatorStyle.parseInlineStyle('color:' + separatorColor + ';');
    if (this._seriesBackgroundOverlayStyle)
      seriesAxisLabelStyle.parseInlineStyle(this._seriesBackgroundOverlayStyle);
    if (this._majorAxisStyleDefaults)
      seriesAxisLabelStyle.parseInlineStyle(this._majorAxisStyleDefaults['labelStyle']);
  }
  var separatorStroke = new DvtSolidStroke(separatorStyle.getStyle(DvtCSSStyle.COLOR));

  var axisSize = this._timeAxis.getContentSize();
  var axisStart = axisStartPos + this._timeAxis._borderWidth;
  var axisEnd = (axisStart + axisSize);
  this.renderTimeAxis(this._fetchStartPos, this._fetchEndPos, this._axis, length, axisEnd, axisStart, axisStart, separatorStroke);
  if (this._seriesScale)
    this.renderSeriesTimeAxis(this._fetchStartPos, this._fetchEndPos, this._innerCanvas, 'o_', length, seriesAxisLabelStyle);
};

// virtualization
// render time axis for a given range
DvtTimeline.prototype.renderTimeAxis = function(startPos, endPos, container, length, axisEnd, tickStart, labelStart, stroke)
{
  var block = new DvtContainer(this.getCtx(), 'block_' + startPos + '_' + endPos);
  block.startPos = startPos;
  block.endPos = endPos;
  container.addChild(block);

  // the last date in dates is past the end time, and only used as the last 'next' date
  var dates = this._dates[this._zoomLevelOrder];
  var labels = this._labels[this._zoomLevelOrder];
  for (var i = 0; i < dates.length - 1; i++)
  {
    var date = dates[i];
    var next = dates[i + 1];

    var currentPos = DvtTimeUtils.getDatePosition(this._start, this._end, date, length);
    var nextPos = DvtTimeUtils.getDatePosition(this._start, this._end, next, length);
    var maxLength = nextPos - currentPos;

    if (currentPos != 0)
    {
      if (this._isVertical)
        var tickElem = this.addTick(block, axisEnd, tickStart, currentPos, currentPos, stroke, 's_tick' + date);
      else if (!this.isRTL())
        tickElem = this.addTick(block, currentPos, currentPos, axisEnd, tickStart, stroke, 's_tick' + date);
      else
        tickElem = this.addTick(block, length - currentPos, length - currentPos, axisEnd, tickStart, stroke, 's_tick' + date);
      // save the time associated with the element for dynamic resize
      tickElem.time = date;
    }
    if (this._isVertical)
      this.addAxisLabel(block, labels[i], labelStart + ((axisEnd - labelStart) / 2), currentPos + ((nextPos - currentPos) / 2) - 7, axisEnd - labelStart);
    else if (!this.isRTL())
      this.addAxisLabel(block, labels[i], currentPos + ((nextPos - currentPos) / 2), labelStart + 2, maxLength);
    else
      this.addAxisLabel(block, labels[i], length - (currentPos + ((nextPos - currentPos) / 2)), labelStart + 2, maxLength);
  }
};

DvtTimeline.prototype.renderSeriesTimeAxis = function(startPos, endPos, container, prefix, length, labelStyle)
{
  if (this._majorAxisLabels)
  {
    for (var i = 0; i < this._majorAxisLabels.length; i++)
    {
      container.removeChild(this._majorAxisLabels[i]);
    }
  }
  this._majorAxisLabels = [];

  var start = this._start;
  var end = this._end;

  var startDate = DvtTimeUtils.getPositionDate(start, end, startPos, length);
  var adjustedStartDate = this._seriesTimeAxis.adjustDate(startDate);

  var current = new Date(adjustedStartDate);
  var currentPos = DvtTimeUtils.getDatePosition(start, end, adjustedStartDate, length);
  while (currentPos < endPos)
  {
    var label = this._seriesTimeAxis.formatDate(this._seriesTimeAxis.adjustDate(current));
    var next = this._seriesTimeAxis.getNextDate(this._seriesTimeAxis.adjustDate(current));

    var next_time_pos = DvtTimeUtils.getDatePosition(start, end, next, length);
    var maxLength = next_time_pos - currentPos;

    var time_pos = currentPos;

    if (!this.isRTL())
    {
      if (this._isVertical)
        var labelElem = this.addLabel(container, 5, label, maxLength, time_pos + 18, labelStyle, prefix + 'label' + currentPos + '_s0', true, DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_PADDING, this._majorAxisLabels, this.isRTL());
      else
        labelElem = this.addLabel(container, time_pos + 5, label, maxLength, this._seriesSize - 2, labelStyle, prefix + 'label' + currentPos + '_s0', true, DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_PADDING, this._majorAxisLabels, this.isRTL());
    }
    else
    {
      if (this._isVertical)
        labelElem = this.addLabel(container, this._canvasSize - 5, label, maxLength, time_pos + 18, labelStyle, prefix + 'label' + currentPos + '_s0', true, DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_PADDING, this._majorAxisLabels, this.isRTL());
      else
        labelElem = this.addLabel(container, length - (time_pos + 5), label, maxLength, this._seriesSize - 2, labelStyle, prefix + 'label' + currentPos + '_s0', true, DvtTimeline.DEFAULT_SERIES_AXIS_LABEL_PADDING, this._majorAxisLabels, this.isRTL());
    }
    labelElem.time = current.getTime();

    current = next;
    currentPos = next_time_pos;
  }
};

DvtTimeline.prototype.renderSeries = function()
{
  if (this._series)
  {
    var seriesCount = this._series.length;
    var axisSize = this.getTimeAxisVisibleSize(seriesCount);
    if (!this._isVertical)
    {
      if (seriesCount > 1 && (this._canvasSize % 2 != axisSize % 2))
      {
        this._timeAxis.setContentSize(this._timeAxis.getContentSize() + 1);
        axisSize = this.getTimeAxisVisibleSize(seriesCount);
      }
    }
    this._seriesSize = (this._canvasSize - axisSize) / seriesCount;
    for (var i = 0; i < seriesCount; i++)
    {
      var series = this._series[i];

      // setup overflow controls
      var cp = new DvtClipPath();
      if (this._isVertical)
      {
        if (this.isRTL())
          var key = Math.abs(i - 1);
        else
          key = i;
        if (this.isRTL() && this._series.length == 1)
        {
          cp.addRect(axisSize, 0, this._seriesSize, this._contentLength);
          var posMatrix = new DvtMatrix(1, 0, 0, 1, axisSize, 0);
        }
        else
        {
          cp.addRect(key * (this._seriesSize + axisSize), 0, this._seriesSize, this._contentLength);
          posMatrix = new DvtMatrix(1, 0, 0, 1, key * (this._seriesSize + axisSize), 0);
        }
        var width = this._seriesSize;
        var height = this._contentLength;
      }
      else
      {
        cp.addRect(0, i * (this._seriesSize + axisSize), this._contentLength, this._seriesSize);
        posMatrix = new DvtMatrix(1, 0, 0, 1, 0, i * (this._seriesSize + axisSize));
        width = this._contentLength;
        height = this._seriesSize;
      }
      series.setClipPath(cp);

      series.setMatrix(posMatrix);
      this._innerCanvas.addChild(series);
      series.render(width, height, this._seriesOptions[i]);
    }
  }
};

DvtTimeline.prototype.renderSeriesLabels = function()
{
  if (this._series)
  {
    var seriesCount = this._series.length;
    var labelSpacing = DvtTimelineSeries._DEFAULT_LABEL_SPACING;
    //TODO: Update to use zoom control spacing constant rather than '6'
    var zoomControlSpacing = DvtTransientButton._DEFAULT_RADIUS * 2 + 6;
    var doubleLabelSpacing = labelSpacing * 2;
    for (var i = 0; i < seriesCount; i++)
    {
      var series = this._series[i];
      var seriesLabel = series.getLabel();
      if (seriesLabel != null)
      {
        var seriesLabelStyle = series.getLabelStyle();
        if (this._seriesBackgroundOverlayStyle)
          seriesLabelStyle.parseInlineStyle(this._seriesBackgroundOverlayStyle);
        var seriesLabelElem = new DvtOutputText(this.getCtx(), seriesLabel, 0, 0, 'sl_s' + i);
        seriesLabelElem.setCSSStyle(seriesLabelStyle);

        this.addChild(seriesLabelElem);
        var dim = seriesLabelElem.getDimensions();
        this.removeChild(seriesLabelElem);
        if (this._isVertical)
          var totalSpace = this._seriesSize;
        else
          totalSpace = this._canvasLength;
        var width = Math.min(dim.w, totalSpace - (i - 1) * -zoomControlSpacing - doubleLabelSpacing);

        var backgroundRect = new DvtRect(this.getCtx(), 0, 0, width + DvtTimelineSeries.DEFAULT_LABEL_PADDING * 2, dim.h + DvtTimelineSeries.DEFAULT_LABEL_PADDING * 2, 'slb_s' + i);
        backgroundRect.setCSSStyle(seriesLabelStyle);
        backgroundRect.setCornerRadius(3);

        if (!this._isVertical)
        {
          if (this.isRTL())
            var posX = this._canvasLength - width - labelSpacing - (i - 1) * -zoomControlSpacing;
          else
            posX = this._startX + labelSpacing + (i - 1) * -zoomControlSpacing;
          var posY = i * (this._canvasSize - dim.h - doubleLabelSpacing) + labelSpacing + this._startY;
        }
        else
        {
          if (this.isRTL())
          {
            var key = Math.abs(i - 1);
            posX = key * (this._canvasSize - width - doubleLabelSpacing) + labelSpacing + this._startX + (i - 1) * zoomControlSpacing;
          }
          else
            posX = i * (this._canvasSize - width - doubleLabelSpacing) + labelSpacing + this._startX + (i - 1) * -zoomControlSpacing;
          posY = this._startY + labelSpacing;
        }
        var posMatrix = new DvtMatrix(1, 0, 0, 1, posX, posY);
        seriesLabelElem.setMatrix(posMatrix);
        posMatrix = new DvtMatrix(1, 0, 0, 1, posX - DvtTimelineSeries.DEFAULT_LABEL_PADDING, posY - DvtTimelineSeries.DEFAULT_LABEL_PADDING);
        backgroundRect.setMatrix(posMatrix);

        this.addChild(backgroundRect);
        DvtTextUtils.fitText(seriesLabelElem, width, Infinity, this);
      }
      if (series._isEmpty)
      {
        var seriesEmptyText = series.getEmptyText();
        if (seriesEmptyText != null)
        {
          var seriesEmptyTextStyle = series.getEmptyTextStyle();
          var seriesEmptyTextElem = new DvtOutputText(this.getCtx(), seriesEmptyText, 0, 0, 'et_s' + i);
          seriesEmptyTextElem.setCSSStyle(seriesEmptyTextStyle);

          this.addChild(seriesEmptyTextElem);
          var dim = seriesEmptyTextElem.getDimensions();
          this.removeChild(seriesEmptyTextElem);

          var posMatrix = new DvtMatrix(1, 0, 0, 1, (this._canvasLength - dim.w) / 2 + this._startX, i * (this._seriesSize + this.getTimeAxisVisibleSize(seriesCount)) + ((this._seriesSize - dim.h) / 2) + this._startY);
          seriesEmptyTextElem.setMatrix(posMatrix);

          this.addChild(seriesEmptyTextElem);
        }
      }
    }
  }
};

DvtTimeline.prototype.renderOverview = function()
{
  this._overviewCanvas = new DvtContainer(this.getCtx(), 'oCanvas');
  var borderWidth = this._style.getBorderWidth();
  var halfBorderWidth = borderWidth / 2;
  if (this._isVertical)
  {
    var width = this._overviewSize;
    var height = this.Height - borderWidth;
    if (!this.isRTL())
      this._overviewCanvas.setTranslateX(this.Width - this._overviewSize - halfBorderWidth);
    else
      this._overviewCanvas.setTranslateX(halfBorderWidth);
    this._overviewCanvas.setTranslateY(halfBorderWidth);
  }
  else
  {
    width = this.Width - borderWidth;
    height = this._overviewSize;
    this._overviewCanvas.setTranslateY(this.Height - this._overviewSize - halfBorderWidth);
    this._overviewCanvas.setTranslateX(halfBorderWidth);
  }
  this.addChild(this._overviewCanvas);

  this._overview = new DvtTimelineOverview(this.getCtx(), this.HandleEvent, this);
  this._overviewCanvas.addChild(this._overview);

  var overviewObject = this._getOverviewObject();
  this._overview.render(overviewObject, width, height);
};

DvtTimeline.prototype.getOverviewWindowBackgroundColor = function()
{
  if (this._overviewStyleDefaults && this._overviewStyleDefaults['window'] && this._overviewStyleDefaults['window']['backgroundColor'])
    return this._overviewStyleDefaults['window']['backgroundColor'];
  else
    return DvtTimeline.DEFAULT_OVERVIEW_WINDOW_BACKGROUND_COLOR;
};

DvtTimeline.prototype.getOverviewWindowBorderColor = function()
{
  if (this._overviewStyleDefaults && this._overviewStyleDefaults['window'] && this._overviewStyleDefaults['window']['borderColor'])
    return this._overviewStyleDefaults['window']['borderColor'];
  else
    return DvtTimeline.DEFAULT_OVERVIEW_WINDOW_BORDER_COLOR;
};

DvtTimeline.prototype.getOverviewBackgroundColor = function()
{
  if (this._overviewStyleDefaults && this._overviewStyleDefaults['backgroundColor'])
    return this._overviewStyleDefaults['backgroundColor'];
  else
    return DvtTimeline.DEFAULT_OVERVIEW_BACKGROUND_COLOR;
};

DvtTimeline.prototype._getOverviewObject = function()
{
  var orientation = this._isVertical ? 'vertical' : 'horizontal';
  var handle = this._isVertical ? this._resources['overviewHandleVert'] + '\" _hw=\"15\" _hh=\"3\"' :
                                  this._resources['overviewHandleHor'] + '\" _hw=\"3\" _hh=\"15\"';
  var hasRef = (this._referenceObjects && this._referenceObjects.length > 0 && this._referenceObjects[0]);
  var sizing = this._isVertical ? '' : '_ds=\"square\" _dsx=\"1.3d\" _dsy=\"0.9d\" ';
  var windowBorderColor = this.getOverviewWindowBorderColor();
  var overviewObject = '<timelineOverview renstart=\"' + this._viewStartTime + '\" start=\"' + this._start +
      '\" end=\"' + this._end + '\" width=\"' + this._contentLength +
      '\" orn=\"' + orientation + (hasRef ? ('\" ocd=\"' + this._referenceObjects[0].getTime()) : '') +
      '\" _hbi=\"' + handle + ' ovp=\"below\" selmode=\"' + this._selectionMode + '\"' +
      ' rtl=\"' + this.isRTL() + '\" sid=\"ts1\" _bts=\"none\" _btc=\"#4f4f4f\" _fc=\"#aadd77\" ' + sizing +
      '_do=\"0\" _wbc=\"' + this.getOverviewWindowBackgroundColor() + '\" _wbts=\"solid\" _wbrs=\"solid\"' +
      ' _wbbs=\"solid\" _wbls=\"solid\" _wbtc=\"' + windowBorderColor + '\" _wbrc=\"' + windowBorderColor +
      '\" _wbbc=\"' + windowBorderColor + '\" _wblc=\"' + windowBorderColor + '\" _hfc=\"#FFFFFF\" _obc=\"' +
      this.getOverviewBackgroundColor() + '\" _ctic=\"#FF591F\" _tic=\"#BCC7D2\"' + ' _tabc=\"#D9DFE3\"' +
      ' _tabo=\"1\" _bs=\"solid\" _bc=\"#648BAF\" _bw=\"1px\" _bof=\"0px\" _dbs=\"solid\" _dbc=\"#648BAF\"' +
      ' _dbw=\"1px\" _hbs=\"solid\" _hbc=\"#85bbe7\" _hbw=\"2px\" _hbof=\"0px\" _hgc=\"#ebeced\" _hgo=\"1\"' +
      ' _hdbs=\"solid\" _hdbc=\"#85bbe7\" _hdbw=\"2px\" _sbs=\"solid\" _sbc=\"#000000\" _sbw=\"2px\" _sbof=\"0px\"' +
      ' _sbo=\"1\" _sdbs=\"solid\" _sdbc=\"#000000\" _sdbw=\"2px\" _asbs=\"solid\" _asbc=\"#000000\" _asbw=\"2px\"' +
      ' _asbof=\"0px\" _asbo=\"1\" _asgc=\"#e4f0fa\" _asgo=\"1\" _asdbs=\"solid\" _asdbc=\"#000000\" _asdbw=\"2px\"' +
      ' _aoc=\"off\">' +
      this._getMajorAxisXml() +
      this._getOverviewMarkersXml() +
                       '</timelineOverview>';
  return overviewObject;
};

DvtTimeline.prototype._getMajorAxisXml = function()
{
  var xml = '<ticks>';
  if (this._seriesTimeAxis)
  {
    var start = this._start;
    var end = this._end;
    var length = this._isVertical ? this.Height : this.Width;
    var startDate = DvtTimeUtils.getPositionDate(start, end, this._fetchStartPos, length);
    var adjustedStartDate = this._seriesTimeAxis.adjustDate(startDate);

    var current = new Date(adjustedStartDate);
    var currentPos = DvtTimeUtils.getDatePosition(start, end, adjustedStartDate, length);
    while (currentPos < this._fetchEndPos)
    {
      var label = this._seriesTimeAxis.formatDate(this._seriesTimeAxis.adjustDate(current));
      var next = this._seriesTimeAxis.getNextDate(this._seriesTimeAxis.adjustDate(current));

      var next_time_pos = DvtTimeUtils.getDatePosition(start, end, next, length);
      xml += '<tick time=\"' + current.getTime() + '\" label=\"' + label + '\"/>';

      current = next;
      currentPos = next_time_pos;
    }
  }
  xml += '</ticks>';
  return xml;
};

DvtTimeline.prototype._getOverviewMarkersXml = function()
{
  if (this._series)
  {
    var overviewMarkers = '<markers>';
    var seriesCount = this._series.length;
    for (var i = 0; i < seriesCount; i++)
    {
      var items = this._series[i]._items;
      for (var j = 0; j < items.length; j++)
      {
        var item = items[j];
        overviewMarkers += '<ti rk=\"' + j;
        overviewMarkers += '\" tid=\"' + item.getId();
        overviewMarkers += '\" t=\"' + item.getStartTime();
        var endTime = item.getEndTime();
        if (endTime)
        {
          overviewMarkers += '\" et=\"' + endTime;
          var durationFillColor = item.getDurationFillColor();
          if (durationFillColor)
            overviewMarkers += '\" dfc=\"' + durationFillColor;
        }
        overviewMarkers += '\" _sd=\"true\"/>';
      }
    }
    overviewMarkers += '</markers>';
    return overviewMarkers;
  }
};

DvtTimeline.prototype.HandleTouchStart = function(event)
{
  var touches = event.touches;
  if (touches.length == 1)
  {
    this._dragPanSeries = this._findSeries(event.target);
    if (this._dragPanSeries)
    {
      if (this._series[0] == this._dragPanSeries)
        var series = 0;
      else
        series = 1;
    }
    this.showThenHideHotspots(series);
  }
};

DvtTimeline.prototype.beginPinchZoom = function(x1, y1, x2, y2)
{
  if (this._isVertical)
    this._initialPinchZoomLoc = Math.sqrt((y1 - y2) * (y1 - y2)) + (y1 < y2 ? y1 : y2);
  else
    this._initialPinchZoomLoc = Math.sqrt((x1 - x2) * (x1 - x2)) + (x1 < x2 ? x1 : x2);
  var widthFactor = (this._end - this._start) / this._contentLength;
  this._initialPinchZoomTime = widthFactor * this._initialPinchZoomLoc + this._viewStartTime;
  this._initialPinchZoomDist = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  this._initialPinchZoomLength = this._contentLength;
};

DvtTimeline.prototype.HandleMouseWheel = function(event)
{
  DvtEventManager.consumeEvent(event);
  var wheelDelta = event.wheelDelta;
  if (wheelDelta)
  {
    var compPagePos = this.getCtx().getStageAbsolutePosition();
    if (this._isVertical)
      var compLoc = event.pageY - compPagePos.y;
    else
      compLoc = event.pageX - compPagePos.x;
    var widthFactor = (this._end - this._start) / this._contentLength;
    var time = widthFactor * compLoc + this._viewStartTime;

    wheelDelta = (wheelDelta * .02) + 1;
    this.handleZoomWheel(this.getContentLength() * wheelDelta, time, compLoc, true);
  }
};

DvtTimeline.prototype.handleZoomWheel = function(newLength, time, compLoc, triggerViewportChangeEvent)
{
  if (newLength > this._maxContentLength)
  {
    newLength = this._maxContentLength;
    this.disableZoomButton(true);
  }
  else
    this.enableZoomButton(true);
  if (this._canvasLength > newLength)
  {
    newLength = this._canvasLength;
    this.disableZoomButton(false);
  }
  else
    this.enableZoomButton(false);
  var zoomIn = this._contentLength <= newLength;
  var oldViewTime = this._viewEndTime - this._viewStartTime;
  var viewLength = (oldViewTime / (this._end - this._start)) * this._contentLength;
  this.setContentLength(newLength);
  var viewTime = (viewLength / this._contentLength) * (this._end - this._start);
  if (time)
  {
    var widthFactor = (this._end - this._start) / this._contentLength;
    this._viewStartTime = time - (compLoc * widthFactor);
    if (this._viewStartTime < this._start)
      this._viewStartTime = this._start;
    this._viewEndTime = this._viewStartTime + viewTime;
    if (this._viewEndTime > this._end)
    {
      this._viewEndTime = this._end;
      this._viewStartTime = this._viewEndTime - viewTime;
      if (this._viewStartTime < this._start)
        this._viewStartTime = this._start;
    }
    this._startPos = (1 / widthFactor) * (this._start - this._viewStartTime);
    if (this.isRTL() && !this._isVertical)
      this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
  }
  else
  {
    this._viewStartTime = this._start;
    this._viewEndTime = this._viewStartTime + viewTime;
    if (this._viewStartTime < this._start)
      this._viewStartTime = this._start;
    this._startPos = 0;
    if (this.isRTL() && !this._isVertical)
      this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
  }
  if (this._hasOverview)
  {
    if (this._isVertical)
      var overviewLength = this._overview.Height;
    else
      overviewLength = this._overview.Width;
    this._overview.setViewportRange(this._viewStartTime, this._viewEndTime, overviewLength);
  }
  if (zoomIn)
  {
    while (this._zoomLevelOrder > 0)
    {
      var minLength = this._zoomLevelLengths[this._zoomLevelOrder - 1];
      if (this._contentLength >= minLength)
      {
        this._zoomLevelOrder--;
        this._timeAxis.decreaseScale();
        this._scale = this._timeAxis._scale;
      }
      else
        break;
    }
  }
  else
  {
    while (this._zoomLevelOrder < this._zoomLevelLengths.length - 1)
    {
      var minLength = this._zoomLevelLengths[this._zoomLevelOrder];
      if (this._contentLength < minLength)
      {
        this._zoomLevelOrder++;
        this._timeAxis.increaseScale();
        this._scale = this._timeAxis._scale;
      }
      else
        break;
    }
  }
  this.applyAxisStyleValues();
  this.renderAxis();
  this.updateSeries();
  if (this._isVertical)
    this._innerCanvas.setTranslateY(this._startY + this._startPos);
  else
    this._innerCanvas.setTranslateX(this._startX + this._startPos);
  if (triggerViewportChangeEvent)
    this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
};

DvtTimeline.prototype.handleZoom = function(zoomIn)
{
  if (!zoomIn)
    this.zoomBy(DvtTimeline.ZOOM_BY_VALUE);
  else
    this.zoomBy(1 / DvtTimeline.ZOOM_BY_VALUE);
};

/**
 * Zooms by the specified amount.
 * @param {number} dz A number specifying the zoom ratio, e.g. dz = 2 means zoom in by 200%.
 */
DvtTimeline.prototype.zoomBy = function(dz)
{
  var shiftRatio = (1 / dz - 1) / 2 + 1;
  if (this._isVertical)
    var compLoc = this.Height / 2;
  else
    compLoc = this.Width / 2;
  var widthFactor = (this._end - this._start) / this._contentLength;
  var time = widthFactor * compLoc + this._viewStartTime;
  this.handleZoomWheel(this.getContentLength() * shiftRatio, time, compLoc, true);
};

DvtTimeline.prototype.updateSeries = function()
{
  if (this._series)
  {
    var seriesCount = this._series.length;
    var axisSize = this.getTimeAxisVisibleSize(seriesCount);
    this._seriesSize = (this._canvasSize - axisSize) / seriesCount;
    for (var i = 0; i < seriesCount; i++)
    {
      var series = this._series[i];

      // setup overflow controls
      series.setClipPath(null);
      var cp = new DvtClipPath();
      if (this._isVertical)
      {
        if (this.isRTL())
          var key = Math.abs(i - 1);
        else
          key = i;
        if (this.isRTL() && this._series.length == 1)
        {
          cp.addRect(axisSize, 0, this._seriesSize, this._contentLength);
          var posMatrix = new DvtMatrix(1, 0, 0, 1, axisSize, 0);
        }
        else
        {
          cp.addRect(key * (this._seriesSize + axisSize), 0, this._seriesSize, this._contentLength);
          posMatrix = new DvtMatrix(1, 0, 0, 1, key * (this._seriesSize + axisSize), 0);
        }
        var width = this._seriesSize;
        var height = this._contentLength;
      }
      else
      {
        cp.addRect(0, i * (this._seriesSize + axisSize), this._contentLength, this._seriesSize);
        posMatrix = new DvtMatrix(1, 0, 0, 1, 0, i * (this._seriesSize + axisSize));
        width = this._contentLength;
        height = this._seriesSize;
      }
      series.setClipPath(cp);

      series.setMatrix(posMatrix);
      series.reRender(width, height);
    }
  }
};

DvtTimeline.prototype.HandleKeyDown = function(event)
{
  if (DvtKeyboardEvent.RIGHT_ARROW == event.keyCode || DvtKeyboardEvent.LEFT_ARROW == event.keyCode ||
      DvtKeyboardEvent.DOWN_ARROW == event.keyCode || DvtKeyboardEvent.UP_ARROW == event.keyCode)
    this.updateScrollForItemNavigation(this.EventManager.getFocus());
};

DvtTimeline.prototype.HandleMouseDown = function(event)
{
  this._dragPanSeries = this._findSeries(event.target);
};

DvtTimeline.prototype.beginDragPan = function(compX, compY)
{
  this._currentX = compX;
  this._currentY = compY;
};

DvtTimeline.prototype.HandleTouchEnd = function(event)
{
  if (this._selectionMode != 'none')
    this.handleShapeClick(event, (this._selectionMode == 'multiple'));
};

DvtTimeline.prototype.HandleMouseClick = function(event)
{
  this.handleShapeClick(event, (event.ctrlKey && this._selectionMode == 'multiple'));
};

DvtTimeline.prototype.endDragPan = function()
{
  this._dragPanSeries = null;
  this.endPan();
};

/**
 * Ends panning.
 */
DvtTimeline.prototype.endPan = function()
{
  if (this._triggerViewportChange)
  {
    this._triggerViewportChange = false;
    this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
  }
};

DvtTimeline.prototype.endPinchZoom = function()
{
  this._initialPinchZoomDist = null;
  this._initialPinchZoomLoc = null;
  this._initialPinchZoomLength = null;
  this._initialPinchZoomTime = null;
  if (this._triggerViewportChange)
  {
    this._triggerViewportChange = false;
    this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
  }
};

DvtTimeline.prototype.contPinchZoom = function(x1, y1, x2, y2)
{
  var currPinchZoomDist = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  if (currPinchZoomDist != this._initialPinchZoomDist)
    this._triggerViewportChange = true;
  var newLength = ((currPinchZoomDist / this._initialPinchZoomDist) * this._initialPinchZoomLength);
  this.handleZoomWheel(newLength, this._initialPinchZoomTime, this._initialPinchZoomLoc, false);
};

DvtTimeline.prototype.contDragPan = function(compX, compY)
{
  if (this._currentX && this._currentY)
  {
    var deltaX = this._currentX - compX;
    var deltaY = this._currentY - compY;
    if (deltaX == 0 && deltaY == 0)
      return false;

    this._triggerViewportChange = true;
    this._currentX = compX;
    this._currentY = compY;
    this.panBy(deltaX, deltaY);
    return true;
  }
  return false;
};

/**
 * Pans the Timeline by the specified amount.
 * @param {number} deltaX The number of pixels to pan in the x direction.
 * @param {number} deltaY The number of pixels to pan in the y direction.
 */
DvtTimeline.prototype.panBy = function(deltaX, deltaY)
{
  var seriesCount = this._series.length;
  var axisSize = this.getTimeAxisVisibleSize(seriesCount);
  if (this._isVertical)
  {
    var minTranslateX;
    var maxTranslateX;
    if (this._dragPanSeries)
    {
      var newTranslateX = this._dragPanSeries.getTranslateX() - deltaX;
      if (this._series.length > 1 && (!this.isRTL() && this._dragPanSeries._isInverted || this.isRTL() && !this._dragPanSeries._isInverted))
      {
        var minTranslateX = axisSize + (2 * this._dragPanSeries.Width) - this._dragPanSeries._maxOverflowValue;
        var maxTranslateX = this._dragPanSeries.Width + axisSize;
      }
      else if (this.isRTL() && !this._dragPanSeries._isInverted)
      {
        minTranslateX = this._dragPanSeries.Width - this._dragPanSeries._maxOverflowValue + axisSize;
        maxTranslateX = axisSize;
      }
      else
      {
        minTranslateX = 0;
        maxTranslateX = this._dragPanSeries._maxOverflowValue - this._dragPanSeries.Width;
      }

      if (newTranslateX < minTranslateX)
        newTranslateX = minTranslateX;
      else if (newTranslateX > maxTranslateX)
        newTranslateX = maxTranslateX;
      this._dragPanSeries.setTranslateX(newTranslateX);
    }

    var newTranslateY = this._innerCanvas.getTranslateY() - deltaY;
    minTranslateY = -(this._contentLength - this._canvasLength - this._startY);
    maxTranslateY = this._startY;

    if (newTranslateY < minTranslateY)
      newTranslateY = minTranslateY;
    else if (newTranslateY > maxTranslateY)
      newTranslateY = maxTranslateY;
    this._innerCanvas.setTranslateY(newTranslateY);

    this._startPos = newTranslateY - this._startY;
    var widthFactor = this.getContentLength() / (this._end - this._start);
    var viewTime = this._viewEndTime - this._viewStartTime;
    this._viewStartTime = this._start - (this._startPos / widthFactor);
    this._viewEndTime = this._viewStartTime + viewTime;
    if (this._hasOverview)
    {
      var overviewLength = this._overview.Height;
      this._overview.setViewportRange(this._viewStartTime, this._viewEndTime, overviewLength);
    }
    //this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
  }
  else
  {
    var newTranslateX = this._innerCanvas.getTranslateX() - deltaX;
    minTranslateX = -(this._contentLength - this._canvasLength - this._startX);
    maxTranslateX = this._startX;

    if (newTranslateX < minTranslateX)
      newTranslateX = minTranslateX;
    else if (newTranslateX > maxTranslateX)
      newTranslateX = maxTranslateX;
    this._innerCanvas.setTranslateX(newTranslateX);

    this._startPos = newTranslateX - this._startX;
    if (this.isRTL())
      this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
    var widthFactor = this.getContentLength() / (this._end - this._start);
    var viewTime = this._viewEndTime - this._viewStartTime;
    this._viewStartTime = this._start - (this._startPos / widthFactor);
    this._viewEndTime = this._viewStartTime + viewTime;
    if (this.isRTL())
      this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
    if (this._hasOverview)
    {
      var overviewLength = this._overview.Width;
      this._overview.setViewportRange(this._viewStartTime, this._viewEndTime, overviewLength);
    }
    //this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
    if (this._dragPanSeries)
    {
      var newTranslateY = this._dragPanSeries.getTranslateY() - deltaY;
      if (this._dragPanSeries._isInverted)
      {
        var minTranslateY = axisSize + (2 * this._dragPanSeries.Height) - this._dragPanSeries._maxOverflowValue;
        var maxTranslateY = this._dragPanSeries.Height + axisSize;
      }
      else
      {
        var minTranslateY = 0;
        var maxTranslateY = this._dragPanSeries._maxOverflowValue - this._dragPanSeries.Height;
      }

      if (newTranslateY < minTranslateY)
        newTranslateY = minTranslateY;
      else if (newTranslateY > maxTranslateY)
        newTranslateY = maxTranslateY;
      this._dragPanSeries.setTranslateY(newTranslateY);
    }
  }
};

// event callback method
DvtTimeline.prototype.HandleEvent = function(event, component)
{
  var type = event.getType();

  // check for selection event, and handle accordingly
  if (type == 'selection' || type == 'dvtAct')
  {
    DvtEventDispatcher.dispatchEvent(this._callback, this._callbackObj, this, event);
  }
  else if (type == 'overview')
  {
    var subType = event.getSubType();
    if (subType == 'rangeChanging' || subType == 'rangeChange')
    {
      var oldViewTime = this._viewEndTime - this._viewStartTime;
      this._viewStartTime = event.getNewStartTime();
      this._viewEndTime = event.getNewEndTime();
      var viewTime = this._viewEndTime - this._viewStartTime;
      if (viewTime > 0)
      {
        var widthFactor = this._canvasLength / viewTime;
        this.setContentLength(widthFactor * (this._end - this._start));
        this._startPos = widthFactor * (this._start - this._viewStartTime);
        if (this.isRTL() && !this._isVertical)
          this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
        if (oldViewTime > viewTime)
        {
          var zoomLevelOrder = this._zoomLevelLengths.length;
          var minLength = this._zoomLevelLengths[zoomLevelOrder - 1];
          while (this._contentLength >= minLength && zoomLevelOrder > 0)
          {
            zoomLevelOrder--;
            minLength = this._zoomLevelLengths[zoomLevelOrder - 1];
          }
          if (zoomLevelOrder == this._zoomLevelLengths.length)
            zoomLevelOrder--;
          this._zoomLevelOrder = zoomLevelOrder;
          this._timeAxis.setScale(this._timeAxis._zoomOrder[zoomLevelOrder]);
          this._scale = this._timeAxis._scale;
        }
        else
        {
          var zoomLevelOrder = 0;
          var minLength = this._zoomLevelLengths[zoomLevelOrder];
          while (this._contentLength < minLength && zoomLevelOrder < this._zoomLevelLengths.length - 1)
          {
            zoomLevelOrder++;
            minLength = this._zoomLevelLengths[zoomLevelOrder];
          }
          this._zoomLevelOrder = zoomLevelOrder;
          this._timeAxis.setScale(this._timeAxis._zoomOrder[zoomLevelOrder]);
          this._scale = this._timeAxis._scale;
        }
        this.applyAxisStyleValues();
        this.renderAxis();
        this.updateSeries();
        if (this._isVertical)
          this._innerCanvas.setTranslateY(this._startY + this._startPos);
        else
          this._innerCanvas.setTranslateX(this._startX + this._startPos);
      }
      if (subType == 'rangeChange')
        this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
    }
    if (subType == 'scrollPos' || subType == 'scrollTime')
    {
      this._viewStartTime = event.getNewStartTime();
      this._viewEndTime = event.getNewEndTime();
      var widthFactor = this.getContentLength() / (this._end - this._start);
      this._startPos = widthFactor * (this._start - this._viewStartTime);
      if (this.isRTL() && !this._isVertical)
        this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
      if (this._isVertical)
        this._innerCanvas.setTranslateY(this._startY + this._startPos);
      else
        this._innerCanvas.setTranslateX(this._startX + this._startPos);
      this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
    }
  }
  else if (type = 'timeline')
  {
    var subType = event.getSubType();
    if (subType == 'selection')
    {
      var selectedItemId = event.getItemId();
      var isMultiSelect = event.isMultiSelect() && this._selectionMode == 'multiple';
      for (var i = 0; i < this._series.length; i++)
      {
        var s = this._series[i];
        for (var j = 0; j < s._items.length; j++)
        {
          var item = s._items[j];
          if (item.getId() == selectedItemId)
          {
            this.SelectionHandler._addToSelection(item, isMultiSelect);
            this.EventManager.setFocusObj(item);
            this.updateScrollForItemSelection(item);
            break;
          }
        }
      }
    }
    else if (subType == 'highlight')
    {
      var itemId = event.getItemId();
      for (var i = 0; i < this._series.length; i++)
      {
        var s = this._series[i];
        for (var j = 0; j < s._items.length; j++)
        {
          var item = s._items[j];
          if (item.getId() == itemId)
          {
            item.showHoverEffect(true);
            break;
          }
        }
      }
    }
    else if (subType == 'unhighlight')
    {
      var itemId = event.getItemId();
      for (var i = 0; i < this._series.length; i++)
      {
        var s = this._series[i];
        for (var j = 0; j < s._items.length; j++)
        {
          var item = s._items[j];
          if (item.getId() == itemId)
          {
            item.hideHoverEffect(true);
            break;
          }
        }
      }
    }
  }
  else
  {
    /* TODO: Remove this later... */
    var what = 'yeah';
  }
};

DvtTimeline.prototype.createZoomControls = function()
{
  var context = this.getCtx();
  var upState = DvtTransientButton.getStateFromURL(context, this._resources['zoomIn']);
  var overState = DvtTransientButton.getStateFromURL(context, this._resources['zoomIn_h']);
  var downState = DvtTransientButton.getStateFromURL(context, this._resources['zoomIn_a']);
  var disabledState = DvtTransientButton.getStateFromURL(context, this._resources['zoomIn_d']);
  this.zoomin = new DvtTransientButton(this.getCtx(), upState, overState, downState,
      disabledState, this.EventManager, this.EventManager.HandleZoomInClick);
  this.zoomin.setTooltip(DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'ZOOM_IN', null));
  upState = DvtTransientButton.getStateFromURL(context, this._resources['zoomOut']);
  overState = DvtTransientButton.getStateFromURL(context, this._resources['zoomOut_h']);
  downState = DvtTransientButton.getStateFromURL(context, this._resources['zoomOut_a']);
  disabledState = DvtTransientButton.getStateFromURL(context, this._resources['zoomOut_d']);
  this.zoomout = new DvtTransientButton(this.getCtx(), upState, overState, downState,
      disabledState, this.EventManager, this.EventManager.HandleZoomOutClick);
  this.zoomout.setTooltip(DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'ZOOM_OUT', null));
  this.zoomin.hide();
  this.zoomout.hide();

  if (DvtTimeUtils.supportsTouch())
  {
    DvtToolkitUtils.setAttrNullNS(this.zoomin.getElem(), 'role', 'button');
    DvtToolkitUtils.setAttrNullNS(this.zoomin.getElem(), 'aria-label', DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'ZOOM_IN', null));
    DvtToolkitUtils.setAttrNullNS(this.zoomout.getElem(), 'role', 'button');
    DvtToolkitUtils.setAttrNullNS(this.zoomout.getElem(), 'aria-label', DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'ZOOM_OUT', null));
  }

  // In order for tooltips to show up, we need to associate the buttons through the event manager
  this.EventManager.associate(this.zoomin, this.zoomin);
  this.EventManager.associate(this.zoomout, this.zoomout);

  if (!this.isRTL())
  {
    this.zoomin.setTranslateX(this._startX + 11);
    this.zoomout.setTranslateX(this._startX + 11);
  }
  else
  {
    this.zoomin.setTranslateX(this._backgroundWidth - 44);
    this.zoomout.setTranslateX(this._backgroundWidth - 44);
  }
  this.zoomin.setTranslateY(this._startY + 11);
  this.zoomout.setTranslateY(this._startY + 48);
  this._canvas.addChild(this.zoomin);
  this._canvas.addChild(this.zoomout);

  var contentLength = this.getContentLength();
  if (contentLength >= this._maxContentLength)
    this.disableZoomButton(true);
  if (this._canvasLength >= contentLength)
    this.disableZoomButton(false);
};

DvtTimeline.prototype.enableZoomButton = function(isZoomIn)
{
  if (isZoomIn)
  {
    this.zoomin.setEnabled(true);
    this.zoomin.drawUpState();
  }
  else
  {
    this.zoomout.setEnabled(true);
    this.zoomout.drawUpState();
  }
};

DvtTimeline.prototype.disableZoomButton = function(isZoomIn)
{
  if (isZoomIn)
  {
    this.zoomin.setEnabled(false);
    this.zoomin.drawDisabledState();
    this.zoomin.setCursor(null);
  }
  else
  {
    this.zoomout.setEnabled(false);
    this.zoomout.drawDisabledState();
    this.zoomout.setCursor(null);
  }
};

DvtTimeline.prototype.updateScrollForItemSelection = function(item)
{
  var viewSize = this._viewEndTime - this._viewStartTime;
  this._viewStartTime = item.getStartTime() - (viewSize / 2);
  if (this._viewStartTime < this._start)
    this._viewStartTime = this._start;
  else if ((this._viewStartTime + viewSize) > this._end)
    this._viewStartTime = (this._end - viewSize);
  this._viewEndTime = this._viewStartTime + viewSize;
  var widthFactor = this.getContentLength() / (this._end - this._start);
  this._startPos = widthFactor * (this._start - this._viewStartTime);
  if (this.isRTL() && !this._isVertical)
    this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
  if (this._isVertical)
    this._innerCanvas.setTranslateY(this._startY + this._startPos);
  else
    this._innerCanvas.setTranslateX(this._startX + this._startPos);
  this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
};

DvtTimeline.prototype.updateScrollForItemNavigation = function(item)
{
  var itemSize = this._isVertical ? item.getHeight() : item.getWidth();
  var itemStart = item.getLoc() - (this._isVertical ? (itemSize / 2) + DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_WIDTH : DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET + DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_WIDTH);
  if (this.isRTL() && !this._isVertical)
  {
    itemStart = itemStart - DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_WIDTH;
    this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
  }
  var itemEnd = itemStart + itemSize + 2 * DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_WIDTH;
  var endPos = this._startPos - this._canvasLength;

  if (-itemStart > this._startPos)
    this._startPos = -itemStart;
  else if (-itemEnd < endPos)
    this._startPos = -itemEnd + this._canvasLength;

  var widthFactor = this.getContentLength() / (this._end - this._start);
  var viewTime = this._viewEndTime - this._viewStartTime;
  this._viewStartTime = this._start - (this._startPos / widthFactor);
  if (this._viewStartTime < this._start)
  {
    this._viewStartTime = this._start;
    this._startPos = (this._start - this._viewStartTime) * widthFactor;
  }
  this._viewEndTime = this._viewStartTime + viewTime;
  if (this._viewEndTime > this._end)
  {
    this._viewEndTime = this._end;
    this._viewStartTime = this._viewEndTime - viewTime;
    this._startPos = (this._start - this._viewStartTime) * widthFactor;
  }
  if (this.isRTL() && !this._isVertical)
    this._startPos = this._backgroundWidth - this._contentLength - this._startPos;
  if (this._isVertical)
    this._innerCanvas.setTranslateY(this._startY + this._startPos);
  else
    this._innerCanvas.setTranslateX(this._startX + this._startPos);

  if (this._hasOverview)
  {
    if (this._isVertical)
      var overviewLength = this._overview.Height;
    else
      overviewLength = this._overview.Width;
    this._overview.setViewportRange(this._viewStartTime, this._viewEndTime, overviewLength);
  }
  this.__dispatchEvent(new DvtTimelineViewportChangeEvent(DvtTimelineViewportChangeEvent.TYPE, this._viewStartTime, this._viewEndTime, this._scale));
};

DvtTimeline.prototype.handleShapeClick = function(event)
{
  if (event)
  {
    var drawable = this._findDrawable(event.target);
    if (drawable)
    {
      var series = this._findSeries(drawable);
      if (drawable._node)
      {
        // action event support
        series = this._findSeries(drawable);
        series.HandleItemAction(drawable._node);
      }
    }
  }
};

DvtTimeline.prototype.applyInitialSelections = function()
{
  if (this.Options['selection'])
  {
    var items = [];
    for (var i = 0; i < this._series.length; i++)
    {
      var s = this._series[i];
      for (var j = 0; j < s._items.length; j++)
      {
        items.push(s._items[j]);
      }
    }
  }
  this.SelectionHandler.processInitialSelections(this.Options['selection'], items);
};

DvtTimeline.prototype.processEvent = function(event)
{
  if (event)
    this.__dispatchEvent(event);
};

DvtTimeline.prototype._findSeries = function(target)
{
  if (target && target != this)
  {
    var id = target.getId();
    if (target == this._series[0] || (this._series.length > 1 && target == this._series[1]))
      return target;
    if (id && id.substring(id.length - 3, id.length) == '_s0')
      return this._series[0];
    else if (id && id.substring(id.length - 3, id.length) == '_s1')
      return this._series[1];
    else
      return this._findSeries(target.getParent());
  }
  return null;
};

DvtTimeline.prototype._findDrawable = function(target)
{
  if (target)
  {
    var id = target.getId();
    if (id && id.substring(0, 10) == '_duration_' && target._node)
      return target;

    var parent = target.getParent();
    if (parent)
    {
      if (id && id.substring(0, 4) == 'zoom')
        return target;

      if (id && id.substring(0, 8) == '_bubble_' && parent._node)
        return parent;

      var grandParent = parent.getParent();
      if (grandParent)
      {
        if (id && id.substring(0, 8) == '_bubble_' && grandParent._node)
          return grandParent;

        id = grandParent.getId();
        if (id && id.substring(0, 8) == '_bubble_' && grandParent.getParent())
          return grandParent.getParent();
      }
    }
  }
  return null;
};

/**
 * Returns the automation object for this timeline
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtTimeline.prototype.getAutomation = function()
{
  if (!this.Automation)
    this.Automation = new DvtTimelineAutomation(this);
  return this.Automation;
};

DvtTimeline.prototype.isVertical = function()
{
  return this._isVertical;
};

/**
 * @override
 */
DvtTimeline.prototype.__getEventManager = function()
{
  return this.EventManager;
};
/**
 * Timeline automation service.
 * @param {DvtTimeline} timeline The owning DvtTimeline.
 * @class  DvtTimelineAutomation
 * @implements {DvtAutomation}
 * @constructor
 * @export
 */
var DvtTimelineAutomation = function(timeline)
{
  this._timeline = timeline;
};

DvtObj.createSubclass(DvtTimelineAutomation, DvtAutomation, 'DvtTimelineAutomation');

DvtTimelineAutomation.TIMELINE_ITEM_STRING = 'timelineItem';

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>timelineItem[seriesIndex][itemIndex]</li>
 * </ul>
 * @override
 */
DvtTimelineAutomation.prototype.GetSubIdForDomElement = function(displayable)
{
  var logicalObj = this._timeline.EventManager.GetLogicalObject(displayable);
  if (logicalObj && (logicalObj instanceof DvtTimelineSeriesNode))
  {
    for (var i = 0; i < this._timeline._series.length; i++)
    {
      var series = this._timeline._series[i];
      var itemIndex = series._items.indexOf(logicalObj);
      if (itemIndex != -1)
        return DvtTimelineAutomation.TIMELINE_ITEM_STRING + '[' + i + '][' + itemIndex + ']';
    }
  }
  return null;
};

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>timelineItem[seriesIndex][itemIndex]</li>
 * </ul>
 * @override
 * @export
 */
DvtTimelineAutomation.prototype.getDomElementForSubId = function(subId)
{
  if (subId)
  {
    var parenIndex = subId.indexOf('[');
    if (parenIndex > 0 && subId.substring(0, parenIndex) === DvtTimelineAutomation.TIMELINE_ITEM_STRING)
    {
      var endParenIndex = subId.indexOf(']');
      if (endParenIndex > 0)
      {
        var seriesIndex = parseInt(subId.substring(parenIndex + 1, endParenIndex));
        var itemIndex = parseInt(subId.substring(endParenIndex + 2, subId.length - 1));

        var series = this._timeline._series[seriesIndex];
        if (series)
        {
          var node = series._items[itemIndex];
          if (node)
            return node.getDisplayables()[0].getElem();
        }
      }
    }
  }
  return null;
};
/**
 * Timeline JSON Parser
 * @param {DvtTimeline} timeline The owning DvtTimeline component.
 * @class
 * @constructor
 * @extends {DvtObj}
 */
var DvtTimelineParser = function(timeline) {
  this.Init(timeline);
};

DvtObj.createSubclass(DvtTimelineParser, DvtTimeComponentParser, 'DvtTimelineParser');

/**
 * Parses the specified XML String and returns the root node of the timeline
 * @param {string} options The String containing XML describing the component.
 * @return {object} An object containing the parsed properties
 */
DvtTimelineParser.prototype.parse = function(options)
{
  this._itemSelection = options['selectionMode'];

  if (options['viewportStart'])
    this._viewStartTime = new Date(options['viewportStart']);
  if (options['viewportEnd'])
    this._viewEndTime = new Date(options['viewportEnd']);

  var ret = DvtTimelineParser.superclass.parse.call(this, options);
  var minorAxis = options['minorAxis'];
  if (minorAxis)
  {
    var scale = minorAxis['scale'];
    ret.scale = scale;
    var zoomOrder = minorAxis['zoomOrder'];
    if (zoomOrder == null)
      zoomOrder = [scale];
    else
    {
      // TODO: update zoom implementation to handle longest value first
      // for now, just reverse order to ensure no regressions
      zoomOrder.reverse();
    }
    ret.zoomOrder = zoomOrder;
    ret.converter = minorAxis['converter'];
    ret.axisStyle = minorAxis['style'];
  }
  var majorAxis = options['majorAxis'];
  if (majorAxis)
  {
    ret.seriesScale = majorAxis['scale'];
    ret.seriesConverter = majorAxis['converter'];
  }
  ret.shortDesc = options['shortDesc'];
  ret.id = options['id'];
  ret.orientation = options['orientation'];
  var referenceObjects = options['referenceObjects'];
  if (referenceObjects && referenceObjects.length > 0)
  {
    var referenceObjectsValueArray = [];
    for (var i = 0; i < referenceObjects.length; i++)
    {
      referenceObjectsValueArray.push(new Date(referenceObjects[i]['value']));
    }
    ret.referenceObjects = referenceObjectsValueArray;
  }

  var overview = options['overview'];
  if (overview != null && overview['rendered'] == 'on')
    ret.hasOverview = true;
  else
    ret.hasOverview = false;

  return ret;
};


/**
 * Parses the attributes on the root node.
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtTimelineParser.prototype.ParseRootAttributes = function() 
{
  var ret = DvtTimelineParser.superclass.ParseRootAttributes.call(this);

  ret.start = this._startTime.getTime();
  ret.end = this._endTime.getTime();
  if (this._viewStartTime)
    ret.viewStart = this._viewStartTime.getTime();
  if (this._viewEndTime)
    ret.viewEnd = this._viewEndTime.getTime();
  ret.selectionMode = 'none';
  if (this._itemSelection != null)
    ret.selectionMode = this._itemSelection;

  return ret;
};
/**
 * TimelineSeries component.
 * @param {DvtContext} context The rendering context.
 * @param {object} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function
 * @class TimelineSeries component.
 * @constructor
 * @extends {DvtContainer}
 */
var DvtTimelineSeries = function(context, callback, callbackObj)
{
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtTimelineSeries, DvtTimeComponent, 'DvtTimelineSeries');

DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET = 20;
DvtTimelineSeries.DEFAULT_BUBBLE_SPACING = 15;
DvtTimelineSeries.DEFAULT_DURATION_FEELER_OFFSET = 10;

DvtTimelineSeries.DEFAULT_THUMBNAIL_WIDTH = 32;
DvtTimelineSeries.DEFAULT_THUMBNAIL_HEIGHT = 32;

/**
 * Attribute for series label spacing.
 * @const
 * @private
 */
DvtTimelineSeries._DEFAULT_LABEL_SPACING = 20;

// state
DvtTimelineSeries.ENABLED_STATE_KEY = 'en';
DvtTimelineSeries.SELECTED_STATE_KEY = 'sel';
DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY = 'asel';
DvtTimelineSeries.HIGHLIGHTED_STATE_KEY = 'hl';

DvtTimelineSeries.FEELER_WIDTH_KEY = 'fw';
DvtTimelineSeries.FEELER_COLOR_KEY = 'fc';
DvtTimelineSeries.ITEM_FILL_COLOR_KEY = 'bc';
DvtTimelineSeries.ITEM_STROKE_COLOR_KEY = 'bsc';
DvtTimelineSeries.ITEM_STROKE_WIDTH_KEY = 'bsw';
DvtTimelineSeries.ITEM_INNER_STROKE_COLOR_KEY = 'bisc';
DvtTimelineSeries.ITEM_INNER_STROKE_WIDTH_KEY = 'bisw';

// style
DvtTimelineSeries.DEFAULT_STYLE = 'background-color:#f9f9f9;';
DvtTimelineSeries.DEFAULT_LABEL_STYLE = 'background-color:rgba(249,249,249,0.8);color:#252525;white-space:nowrap;font-size:13px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';
DvtTimelineSeries.DEFAULT_LABEL_PADDING = 2;
DvtTimelineSeries.DEFAULT_EMPTY_TEXT_STYLE = 'color:#333333;white-space:nowrap;font-size:12px;font-weight:normal;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';
DvtTimelineSeries.DEFAULT_SERIES_AXIS_SEPARATOR_STYLE = 'color:#bcc7d2';

DvtTimelineSeries.DEFAULT_ITEM_ENABLED_FILL_COLOR = '#ffffff';
DvtTimelineSeries.DEFAULT_ITEM_ENABLED_STROKE_COLOR = '#648baf';
DvtTimelineSeries.DEFAULT_ITEM_ENABLED_STROKE_WIDTH = 1;
DvtTimelineSeries.DEFAULT_ITEM_SELECTED_FILL_COLOR = '#ffffff';
DvtTimelineSeries.DEFAULT_ITEM_SELECTED_STROKE_COLOR = '#000000';
DvtTimelineSeries.DEFAULT_ITEM_SELECTED_STROKE_WIDTH = 2;
DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_FILL_COLOR = '#ffffff';
DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_STROKE_COLOR = '#000000';
DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_STROKE_WIDTH = 2;
DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_FILL_COLOR = '#ffffff';
DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_STROKE_COLOR = '#85bbe7';
DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_STROKE_WIDTH = 2;

DvtTimelineSeries.DEFAULT_ITEM_INNER_FILL_COLOR = 'rgba(249,249,249,0)';
DvtTimelineSeries.DEFAULT_ITEM_INNER_ENABLED_STROKE_COLOR = 'rgba(249,249,249,0)';
DvtTimelineSeries.DEFAULT_ITEM_INNER_ENABLED_STROKE_WIDTH = 2;
DvtTimelineSeries.DEFAULT_ITEM_INNER_SELECTED_STROKE_COLOR = 'rgba(249,249,249,0)';
DvtTimelineSeries.DEFAULT_ITEM_INNER_SELECTED_STROKE_WIDTH = 2;
DvtTimelineSeries.DEFAULT_ITEM_INNER_ACTIVE_SELECTED_STROKE_COLOR = '#e4f0fa';
DvtTimelineSeries.DEFAULT_ITEM_INNER_ACTIVE_SELECTED_STROKE_WIDTH = 2;
DvtTimelineSeries.DEFAULT_ITEM_INNER_HIGHLIGHTED_STROKE_COLOR = '#e4f0fa';
DvtTimelineSeries.DEFAULT_ITEM_INNER_HIGHLIGHTED_STROKE_WIDTH = 2;

DvtTimelineSeries.DEFAULT_ITEM_TITLE_STYLE = 'color:#000000;white-space:nowrap;font-size:12px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';
DvtTimelineSeries.DEFAULT_ITEM_DESCRIPTION_STYLE = 'color:#084B8A;white-space:nowrap;font-size:12px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;';

DvtTimelineSeries.DEFAULT_FEELER_ENABLED_WIDTH = 1;
DvtTimelineSeries.DEFAULT_FEELER_SELECTED_WIDTH = 2;
DvtTimelineSeries.DEFAULT_FEELER_ACTIVE_SELECTED_WIDTH = 2;
DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_WIDTH = 2;
DvtTimelineSeries.DEFAULT_FEELER_ENABLED_COLOR = '#648baf';
DvtTimelineSeries.DEFAULT_FEELER_SELECTED_COLOR = '#333333';
DvtTimelineSeries.DEFAULT_FEELER_ACTIVE_SELECTED_COLOR = '#333333';
DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_COLOR = '#85bbe7';

DvtTimelineSeries.DEFAULT_REFERENCE_OBJECT_STYLE = 'color:#ff591f';
DvtTimelineSeries.DEFAULT_COLORS_ARRAY = ['#267DB3', '#68C182', '#FAD55C', '#ED6647',
                                          '#8561C8', '#6DDBDB', '#FFB54D', '#E371B2',
                                          '#47BDEF', '#A2BF39', '#A75DBA', '#F7F37B'];


/**
 * Initializes the view.
 * @param {DvtContext} context The rendering context.
 * @param {object} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function
 * @protected
 */
DvtTimelineSeries.prototype.Init = function(context, callback, callbackObj)
{
  DvtTimelineSeries.superclass.Init.call(this, context, callback, callbackObj);
  this._blocks = [];
  this._renderedReferenceObjects = [];
  this._seriesTicksArray = [];
  this._itemListeners = [];
};


/**
 * Reset animator queue
 */
DvtTimelineSeries.prototype.resetAnimators = function()
{
  if (this._animatorQueue != null)
  {
    for (var i = 0; i < this._animatorQueue.length; i++)
      this._animatorQueue[i].stop(true);
  }

  if (this._animationTimer != null)
    this._animationTimer.stop();

  delete this._animatorQueue;
  delete this._animationTimer;
};

DvtTimelineSeries.prototype.addAnimator = function(animator)
{
  if (this._animatorQueue == null)
    this._animatorQueue = [];

  this._animatorQueue.push(animator);
};

DvtTimelineSeries.prototype.startAnimations = function()
{
  if (this._animatorQueue != null && this._animatorQueue.length > 0)
  {
    var current = this._animatorQueue.shift();
    current.play();

    if (this._animationTimer == null)
    {
      var speed = 2500 / this._animatorQueue.length / 2;
      this._animationTimer = new DvtTimer(this.getCtx(), speed, this.startAnimations, this);
      this._animationTimer.start();
    }
  }
  else
  {
    if (this._animationTimer != null)
      this._animationTimer.stop();
  }
};


/**
 * Renders the component using the specified xml.  If no xml is supplied to a component
 * that has already been rendered, this function will rerender the component with the
 * specified size.
 * @param {string} data The json string.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtTimelineSeries.prototype.render = function(width, height, options)
{
  this._canvas = null;
  this._blocks = [];
  this._renderedReferenceObjects = [];
  this.removeChildren();

  DvtTimelineSeries.superclass.render.call(this, width, height, options);

  var orientation = this.Options['orientation'];
  if (orientation && orientation == DvtTimeline.ORIENTATION_VERTICAL)
    this._isVertical = true;
  else
    this._isVertical = false;

  this._fetchStartPos = 0;
  if (this._isVertical)
  {
    this._fetchEndPos = height;
    this._maxOverflowValue = width;
    this._length = height;
    this._size = width;
  }
  else
  {
    this._fetchEndPos = width;
    this._maxOverflowValue = height;
    this._length = width;
    this._size = height;
  }

  this._isInverted = this.Options['inverted'];
  this._colorCount = 0;
  this._maxDurationSize = 0;

  this.createBackground(width, height);
  this.renderScrollableCanvas();
  this.renderReferenceObjects();
  if (this._scale && this._timeAxis)
    this.createSeriesTicks(width);

  // render markers
  this.parseDataXML();

  //todo: make these update call unnecessary.... although not sure how to put them behind items...
  this.updateReferenceObjects();
  this.updateSeriesTicks();

  if (DvtTimeUtils.supportsTouch())
  {
    if (this._items.length > 0)
      this._setAriaProperty('flowto', '_bt_' + this._items[0].getId());
  }

  // Apply 'Series' label for accessibility
  var desc = this.GetComponentDescription();
  if (desc) {
    DvtToolkitUtils.setAttrNullNS(this.getElem(), 'role', 'group');
    DvtToolkitUtils.setAttrNullNS(this.getElem(), 'aria-label', DvtStringUtils.processAriaLabel(desc));
  }
};

/**
 * @override
 */
DvtTimelineSeries.prototype.GetComponentDescription = function()
{
  var seriesDescArray = [DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'TIMELINE_SERIES')];
  // Use series label if set, otherwise use series index value
  if (this._label)
    seriesDescArray.push(this._label);
  else
    seriesDescArray.push(this.Options['index'] + 1);
  return DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'COLON_SEP_LIST', seriesDescArray);
};

DvtTimelineSeries.prototype.reRender = function(width, height)
{
  this._canvas.setTranslateY(0);
  this._canvas.setTranslateX(0);

  this.Width = width;
  this.Height = height;

  this._fetchStartPos = 0;
  if (this._isVertical)
  {
    this._fetchEndPos = height;
    this._maxOverflowValue = width;
    this._length = height;
    this._size = width;
  }
  else
  {
    this._fetchEndPos = width;
    this._maxOverflowValue = height;
    this._length = width;
    this._size = height;
  }

  this._background.setWidth(width);
  this._background.setHeight(height);

  // render markers
  this.adjustItemsForZoom();
  this.updateReferenceObjects();
  this.updateSeriesTicks();
};

/**
 * Combines style defaults with the styles provided
 */
DvtTimelineSeries.prototype.applyStyleValues = function()
{
  this._style = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_STYLE);
  this._seriesStyleDefaults = this.Options['seriesStyleDefaults'];
  this._itemStyleDefaults = this.Options['itemStyleDefaults'];
  this._referenceObjectStyleDefaults = this.Options['referenceObjectStyleDefaults'];
  this._axisStyleDefaults = this.Options['axisStyleDefaults'];
  this._colors = DvtTimelineSeries.DEFAULT_COLORS_ARRAY;
  this._labelStyle = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_LABEL_STYLE);
  this._emptyTextStyle = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_EMPTY_TEXT_STYLE);
  this._referenceObjects = this.Options['referenceObjects'];

  if (this._seriesStyleDefaults)
  {
    var style = this._seriesStyleDefaults['backgroundColor'];
    if (style)
      this._style.parseInlineStyle('background-color:' + style + ';');
    style = this._seriesStyleDefaults['colors'];
    if (style)
      this._colors = style;
    style = this._seriesStyleDefaults['labelStyle'];
    if (style)
      this._labelStyle.parseInlineStyle(style);
    style = this._seriesStyleDefaults['emptyTextStyle'];
    if (style)
      this._emptyTextStyle.parseInlineStyle(style);
  }
  if (this._referenceObjectStyleDefaults)
  {
    style = this._referenceObjectStyleDefaults['color'];
    if (style)
      this._referenceObjectStyle.parseInlineStyle('color:' + style + ';');
  }
  DvtTimeline.superclass.applyStyleValues.call(this);
};

/**
 * @override
 */
DvtTimelineSeries.prototype.SetOptions = function(options)
{
  this.Options = options;
};

DvtTimelineSeries.prototype.adjustItemsForZoom = function()
{
  if (this._items == null || this._items.length == 0)
    return;
  var isRTL = this.isRTL();
  var startPos = this._fetchStartPos;
  var endPos = this._fetchEndPos;
  // only one block for now
  var block = this._blocks[0];
  block.startPos = startPos;
  block.endPos = endPos;

  this.prepareDurations(this._items);
  if (this._isVertical)
    this._initialSpacing = 20 * (this._maxDurationSize > 0 ? 1 : 0) + DvtTimelineSeries.DEFAULT_BUBBLE_SPACING + 10 * this._maxDurationSize;
  else
    this._initialSpacing = 20 + DvtTimelineSeries.DEFAULT_BUBBLE_SPACING + 10 * this._maxDurationSize;

  for (var j = 0; j < this._items.length; j++)
  {
    var item = this._items[j];
    var startTime = item.getStartTime();
    var loc = DvtTimeUtils.getDatePosition(this._start, this._end, startTime, this._length);
    // offset position if a duration bar is rendered as well
    var endTime = item.getEndTime();
    if (endTime && endTime != startTime)
    {
      var span = DvtTimeUtils.getDatePosition(this._start, this._end, endTime, this._length) - loc;
      loc = loc + Math.min(DvtTimelineSeries.DEFAULT_DURATION_FEELER_OFFSET, span / 2);
    }
    item.setLoc(loc);
    item.setSpacing(null);
  }
  for (var j = 0; j < this._items.length; j++)
  {
    var item = this._items[j];
    var itemTime = item.getStartTime();
    if (itemTime < this._start || itemTime > this._end)
    {
      continue;
    }
    loc = item.getLoc();
    var spacing = this.calculateSpacing(item, this._items.length);
    item.setSpacing(spacing);

    var bubble = item.getBubble();
    var itemWidth = item.getWidth();
    var itemHeight = item.getHeight();
    var transX;
    var transY;
    if (this._isVertical)
    {
      transY = loc - (itemHeight / 2);
      if (isRTL && this._isInverted || !isRTL && !this._isInverted)
        transX = this._size - (itemWidth + this._initialSpacing);
      else
        transX = this._initialSpacing;
    }
    else
    {
      if (!isRTL)
        transX = loc - DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET;
      else
        transX = this._length - loc - itemWidth + DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET;
      if (!this._isInverted)
        transY = this.Height - spacing - itemHeight;
      else
        transY = spacing;
    }
    bubble.setTranslate(transX, transY);

    if (!this._isVertical)
    {
      var feeler = item.getFeeler();
      if (!this._isInverted)
      {
        var feelerY = this.Height;
        var feelerHeight = this.Height - spacing;
      }
      else
      {
        feelerY = 0;
        feelerHeight = spacing;
      }
      var feelerX;
      if (isRTL)
        feelerX = this._length - loc;
      else
        feelerX = loc;
      feeler.setTranslateY(0);
      feeler.setX1(feelerX);
      feeler.setY1(feelerY);
      feeler.setX2(feelerX);
      feeler.setY2(feelerHeight);
    }
  }
  this.adjustDurationsForZoom();

  if (!this._isVertical)
    this.adjustFeelers();

  if (!this._isInverted)
  {
    this.adjustDurations();
    this.adjustItems();
  }
  this.adjustBackground();
};

DvtTimelineSeries.prototype.adjustDurationsForZoom = function()
{
  var isRTL = this.isRTL();
  for (var i = this._maxDurationSize; i > 0; i--)
  {
    for (var j = 0; j < this._items.length; j++)
    {
      var node = this._items[j];
      var duration = node.getDurationBar();
      if (duration != null)
      {
        if (this._isVertical)
          duration.setTranslateY(0);
        else
          duration.setTranslateX(0);
        var loc = DvtTimeUtils.getDatePosition(this._start, this._end, node.getStartTime(), this._length);
        var durationSize = 22 + 10 * node.getDurationLevel();
        var endLoc = DvtTimeUtils.getDatePosition(this._start, this._end, node.getEndTime(), this._length);
        if (this._isVertical)
        {
          if (!isRTL && !this._isInverted || isRTL && this._isInverted)
            duration.setX(this._size - durationSize + 5);
          else
            duration.setX(-5);
          duration.setY(loc);
          duration.setWidth(durationSize);
          duration.setHeight(endLoc - loc);
        }
        else
        {
          var width = endLoc - loc;
          if (!isRTL)
            duration.setX(loc);
          else
            duration.setX(this._length - loc - width);
          if (!this._isInverted)
          {
            duration.setY(this._size - durationSize + 5);
            duration.setWidth(width);
            duration.setHeight(durationSize);
          }
          else
          {
            duration.setY(-5);
            duration.setWidth(width);
            duration.setHeight(durationSize);
          }
        }
      }
    }
  }
};

DvtTimelineSeries.prototype.createSeriesTicks = function(width)
{
  var separatorStyle = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_SERIES_AXIS_SEPARATOR_STYLE);
  if (this._axisStyleDefaults)
  {
    var separatorColor = this._axisStyleDefaults['separatorColor'];
    if (separatorColor)
      separatorStyle.parseInlineStyle('color:' + separatorColor + ';');
  }
  var separatorStroke = new DvtSolidStroke(separatorStyle.getStyle(DvtCSSStyle.COLOR));
  separatorStroke.setStyle(DvtStroke.DASHED, 3);

  this._seriesTicks = new DvtContainer(this.getCtx());
  this.renderSeriesTimeAxis(this._fetchStartPos, this._fetchEndPos, this._seriesTicks, 'o_', width, separatorStroke);
  this._canvas.addChild(this._seriesTicks);
};

DvtTimelineSeries.prototype.renderSeriesTimeAxis = function(startPos, endPos, container, prefix, width, stroke)
{
  var start = this._start;
  var end = this._end;

  var startDate = DvtTimeUtils.getPositionDate(start, end, startPos, this._length);
  var adjustedStartDate = this._timeAxis.adjustDate(startDate);

  var current = new Date(startDate);
  var currentPos = DvtTimeUtils.getDatePosition(start, end, adjustedStartDate, this._length);
  while (currentPos < endPos)
  {
    var next = this._timeAxis.getNextDate(this._timeAxis.adjustDate(current));
    var next_time_pos = DvtTimeUtils.getDatePosition(start, end, next, this._length);

    if (!this._isVertical && this.isRTL())
      var pos = this._length - currentPos;
    else
      pos = currentPos;
    if (this._isVertical)
    {
      var x1 = 0;
      var y1 = pos;
      var x2 = this._maxOverflowValue;
      var y2 = pos;
    }
    else
    {
      x1 = pos;
      y1 = 0;
      x2 = pos;
      y2 = this._maxOverflowValue;
    }

    var tickElem = this.addTick(container, x1, x2, y1, y2, stroke, prefix + 'tick' + currentPos);
    // save the time associated with the element for dynamic resize
    tickElem.time = current.getTime();
    this._seriesTicksArray.push(tickElem);

    current = next;
    currentPos = next_time_pos;
  }
};


/**
 * Renders the background of the series.
 * @param {int} width The width of the component.
 * @param {int} height The height of the component.
 * @protected
 */
DvtTimelineSeries.prototype.createBackground = function(width, height)
{
  this._background = new DvtRect(this.getCtx(), 0, 0, width, height, 'bg');
  this._background.setCSSStyle(this._style);
  this._background.setPixelHinting(true);
  this._background.setCursor('move');

  this.addChild(this._background);
};


/**
 * Parses the xml String describing the component.
 * @param {object} options The xml string.
 * @protected
 */
DvtTimelineSeries.prototype.Parse = function(options)
{
  this._parser = new DvtTimelineSeriesParser(this);
  return this._parser.parse(options);
};


/**
 * Applies the parsed properties to this component.
 * @param {object} props An object containing the parsed properties for this component.
 * @private
 */
DvtTimelineSeries.prototype._applyParsedProperties = function(props)
{
  this._items = props.items;
  if (this._items && this._items.length > 0)
    this._isEmpty = false;
  else
    this._isEmpty = true;

  this._defaultStyles = props.defaultStyles;
  this._itemTitleStyle = props.itemTitleStyle;
  this._itemDescriptionStyle = props.itemDescriptionStyle;
  this._referenceObjectStyle = props.referenceObjectStyle;

  this._label = props.label;
  this._timeAxis = props.timeAxis;
  this._emptyText = props.emptyText;
  if (this._emptyText == null)
    this._emptyText = DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'NO_DATA', null);

  DvtTimelineSeries.superclass._applyParsedProperties.call(this, props);
};


/**
 * Renders the series items.
 * @protected
 */
DvtTimelineSeries.prototype.renderItems = function(startPos, endPos, animate)
{
  // TODO: the feeler would actually need to be render in a completely separately container
  // than the block containing the items
  var block = new DvtContainer(this.getCtx(), 'itemBlock_' + startPos + '_' + endPos);
  block.startPos = startPos;
  block.endPos = endPos;

  this.prepareDurations(this._items);
  if (this._isVertical)
    this._initialSpacing = 20 * (this._maxDurationSize > 0 ? 1 : 0) + DvtTimelineSeries.DEFAULT_BUBBLE_SPACING + 10 * this._maxDurationSize;
  else
    this._initialSpacing = 20 + DvtTimelineSeries.DEFAULT_BUBBLE_SPACING + 10 * this._maxDurationSize;

  this._layoutItems = new Array();
  for (var i = 0; i < this._items.length; i++)
  {
    var item = this._items[i];
    var loc = DvtTimeUtils.getDatePosition(this._start, this._end, item.getStartTime(), this._length);
    // offset position if a duration bar is rendered as well
    var endTime = item.getEndTime();
    if (endTime && endTime != item.getStartTime())
    {
      var span = DvtTimeUtils.getDatePosition(this._start, this._end, endTime, this._length) - loc;
      loc = loc + Math.min(DvtTimelineSeries.DEFAULT_DURATION_FEELER_OFFSET, span / 2);
    }
    item.setLoc(loc);
    var add = true;
    for (var j = 0; j < this._layoutItems.length; j++)
    {
      // ensure items are sorted in ascending order
      if (loc < this._layoutItems[j].getLoc())
      {
        this._layoutItems.splice(j, 0, item);
        add = false;
        break;
      }
    }
    if (add)
      this._layoutItems.push(item);
  }

  for (var k = 0; k < this._layoutItems.length; k++)
  {
    var item = this._layoutItems[k];
    var loc = DvtTimeUtils.getDatePosition(this._start, this._end, item.getStartTime(), this._length);
    if (loc < startPos || loc > endPos)
    {
      continue;
    }
    this.addItem(block, block.feelers, block.durations, item, animate);
  }
  if (DvtTimeUtils.supportsTouch())
  {
    for (var i = 0; i < this._layoutItems.length - 1; i++)
    {
      var item = this._layoutItems[i];
      var next = this._layoutItems[i + 1];
      item.getBubble()._setAriaProperty('flowto', '_bt_' + next.getId());
    }
  }
  this.renderDurations(block.durations);

  this._canvas.addChild(block);
  this._blocks.push(block);
};


/**
 * Renders the duration bars.
 * @param {object} durationBlock The block holding the duration bars.
 * @protected
 */
DvtTimelineSeries.prototype.renderDurations = function(durationBlock)
{
  var context = this.getCtx();
  var isRTL = this.isRTL();
  for (var i = this._maxDurationSize; i > 0; i--)
  {
    for (var j = 0; j < this._items.length; j++)
    {
      var node = this._items[j];
      var startTime = node.getStartTime();
      var endTime = node.getEndTime();
      if (endTime && endTime != startTime && i == node.getDurationLevel())
      {
        var loc = DvtTimeUtils.getDatePosition(this._start, this._end, startTime, this._length);
        var durationId = '_duration_' + node.getId();
        var durationSize = 22 + 10 * node.getDurationLevel();
        var endLoc = DvtTimeUtils.getDatePosition(this._start, this._end, endTime, this._length);
        if (this._isVertical)
        {
          if (!isRTL && !this._isInverted || isRTL && this._isInverted)
            var duration = new DvtRect(context, this._size - durationSize + 5, loc, durationSize, endLoc - loc, durationId);
          else
            duration = new DvtRect(context, -5, loc, durationSize, endLoc - loc, durationId);
          duration.setY(loc);
          duration.setWidth(durationSize);
          duration.setHeight(endLoc - loc);
        }
        else
        {
          var width = endLoc - loc;
          if (!isRTL)
            var transX = loc;
          else
            transX = this._length - loc - width;
          if (!this._isInverted)
            duration = new DvtRect(context, transX, this._size - durationSize + 5, width, durationSize, durationId);
          else
            duration = new DvtRect(context, transX, -5, width, durationSize, durationId);
        }
        duration.setCornerRadius(5);
        duration.setSolidFill(node.getDurationFillColor());

        var feelerWidth = this.getStyle(DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.FEELER_WIDTH_KEY);
        var feelerColor = this.getStyle(DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.FEELER_COLOR_KEY);
        var feelerStroke = new DvtSolidStroke(feelerColor, 1, feelerWidth);
        duration.setStroke(feelerStroke);

        duration._node = node;
        this._callbackObj.EventManager.associate(duration, node);
        durationBlock.addChild(duration);
        node.setDurationBar(duration);
        node.setDurationSize(durationSize - 5);
      }
    }
  }
};


/**
 * Begins the rendering flow.
 * @protected
 */
DvtTimelineSeries.prototype.parseDataXML = function()
{
  if (this._items == null || this._items.length == 0)
    return;

  this.resetAnimators();

  this.renderItems(this._fetchStartPos, this._fetchEndPos);
  if (!this._isVertical)
    this.adjustFeelers();

  if (!this._isInverted)
  {
    this.adjustDurations();
    this.adjustItems();
  }
  this.adjustBackground();

  // start the wave animation
  this.startAnimations();
};


/**
 * Adjusts the background positioning if required.
 * @protected
 */
DvtTimelineSeries.prototype.adjustBackground = function()
{
  if (this._maxOverflowValue > this._size)
  {
    if (this._isVertical)
      this._background.setWidth(this._maxOverflowValue);
    else
      this._background.setHeight(this._maxOverflowValue);
    var sizeDiff = this._maxOverflowValue - this._size;
  }
  else
    sizeDiff = 0;

  if (this._isVertical)
  {
    if ((!this._isInverted && !this.isRTL()) || (this._isInverted && this.isRTL()))
      this._background.setTranslateX(-sizeDiff);
  }
  else if (!this._isInverted)
    this._background.setTranslateY(-sizeDiff);
};


/**
 * Calculates the height value for the item given.
 * @protected
 */
DvtTimelineSeries.prototype.calculateSpacing = function(item, index)
{
  if (this._layoutItems == null || this._layoutItems.length == 0)
    return;

  var x = item.getLoc();
  var y = item.getSpacing();
  if (y == null)
    y = this._initialSpacing;

  var maxOverflowValue = this._maxOverflowValue;

  if (!this._isVertical)
  {
    var hOffset = DvtTimelineSeries.DEFAULT_BUBBLE_SPACING;
    for (var i = 0; i < index; i++)
    {
      var currItem = this._layoutItems[i];
      var currWidth = currItem.getWidth() + 10;
      var currHeight = currItem.getHeight();
      if (currItem.getLoc() != null && currItem != item)
      {
        var currx = currItem.getLoc();
        if (currx == null)
          currx = 0;

        var curry = currItem.getSpacing();
        if (curry == null)
          curry = this._initialSpacing;

        if (x >= currx && x <= currx + currWidth && y >= curry && y <= curry + currHeight)
        {
          y = curry + currHeight + hOffset;
          // y changed, do the loop again
          item.setSpacing(y);

          // calculate again from start since y changed and we might have a conflict again
          y = this.calculateSpacing(item, index);
        }
      }

      if (maxOverflowValue < y + currHeight)
        maxOverflowValue = y + currHeight;
    }
  }
  else
  {
    for (var i = 0; i < index; i++)
    {
      var currItem = this._layoutItems[i];
      var currWidth = currItem.getWidth() + 10;
      if (maxOverflowValue < y + currWidth)
        maxOverflowValue = y + currWidth;
    }
  }

  if (maxOverflowValue > this._maxOverflowValue)
    this._maxOverflowValue = maxOverflowValue + DvtTimelineSeries.DEFAULT_BUBBLE_SPACING;

  return y;
};


/**
 * Calculates the duration height value for the item given.
 * @protected
 */
DvtTimelineSeries.prototype.calculateDurationSize = function(item, index)
{
  if (this._items == null || this._items.length == 0)
    return;

  var initialY = 1;
  var startTime = item.getStartTime();
  var endTime = item.getEndTime();
  if (!endTime || endTime == startTime)
    return;

  var y = item.getDurationLevel();
  if (y == null)
    y = initialY;

  for (var i = 0; i < index; i++)
  {
    var currItem = this._items[i];
    if (currItem != item)
    {
      var currStartTime = currItem.getStartTime();
      var currEndTime = currItem.getEndTime();
      if (!currEndTime || currEndTime == currStartTime)
        continue;

      var curry = currItem.getDurationLevel();
      if (curry == null)
        curry = initialY;

      if (startTime >= currStartTime && startTime <= currEndTime && y == curry)
      {
        y = curry + 1;
        // y changed, do the loop again
        item.setDurationLevel(y);

        // calculate again from start since y changed and we might have a conflict again
        y = this.calculateDurationSize(item, index);
      }
    }
  }
  if (y > this._maxDurationSize)
    this._maxDurationSize = y;
  return y;
};


/**
 * Prepares the duration bars for rendering.
 * @protected
 */
DvtTimelineSeries.prototype.prepareDurations = function(nodes)
{
  for (var i = 0; i < this._items.length; i++)
  {
    var node = this._items[i];
    var startTime = node.getStartTime();
    var endTime = node.getEndTime();
    if (endTime && endTime != startTime)
    {
      node.setDurationLevel(this.calculateDurationSize(node, this._items.length));
      if (node.getDurationFillColor() == null)
      {
        node.setDurationFillColor(this._colors[this._colorCount]);
        this._colorCount++;
        if (this._colorCount == this._colors.length)
          this._colorCount = 0;
      }
    }
  }
};

DvtTimelineSeries.prototype.renderReferenceObjects = function()
{
  if (this._referenceObjects)
  {
    var maxRefObjects = Math.min(1, this._referenceObjects.length);
    for (var i = 0; i < maxRefObjects; i++)
    {
      var refObject = this._referenceObjects[i];
      if (refObject)
      {
        var pos = DvtTimeUtils.getDatePosition(this._start, this._end, refObject, this._length);
        if (this._isVertical)
          var ref = new DvtLine(this.getCtx(), 0, pos, this._maxOverflowValue, pos, 'zoomOrder[i]');
        else
        {
          if (this.isRTL())
            pos = this._length - pos;
          ref = new DvtLine(this.getCtx(), pos, 0, pos, this._maxOverflowValue, 'zoomOrder[i]');
        }
        var referenceObjectStroke = new DvtSolidStroke(this._referenceObjectStyle.getStyle(DvtCSSStyle.COLOR));
        ref.setStroke(referenceObjectStroke);
        ref.setPixelHinting(true);
        ref.date = refObject;
        this._canvas.addChild(ref);
        this._renderedReferenceObjects[i] = ref;
      }
    }
  }
};

DvtTimelineSeries.prototype.updateReferenceObjects = function()
{
  for (var i = 0; i < this._renderedReferenceObjects.length; i++)
  {
    var ref = this._renderedReferenceObjects[i];
    var pos = DvtTimeUtils.getDatePosition(this._start, this._end, ref.date, this._length);
    if (this._isVertical)
    {
      ref.setX1(0);
      ref.setY1(pos);
      ref.setX2(this._maxOverflowValue);
      ref.setY2(pos);
    }
    else
    {
      if (this.isRTL())
        pos = this._length - pos;

      ref.setX1(pos);
      ref.setY1(0);
      ref.setX2(pos);
      ref.setY2(this._maxOverflowValue);
    }
  }
};

DvtTimelineSeries.prototype.updateSeriesTicks = function()
{
  for (var i = 0; i < this._seriesTicksArray.length; i++)
  {
    var tick = this._seriesTicksArray[i];
    if (!this._isVertical && this.isRTL())
      var pos = this._length - DvtTimeUtils.getDatePosition(this._start, this._end, tick.time, this._length);
    else
      pos = DvtTimeUtils.getDatePosition(this._start, this._end, tick.time, this._length);
    if (this._isVertical)
    {
      tick.setX1(0);
      tick.setY1(pos);
      tick.setX2(this._maxOverflowValue);
      tick.setY2(pos);
    }
    else
    {
      tick.setX1(pos);
      tick.setY1(0);
      tick.setX2(pos);
      tick.setY2(this._maxOverflowValue);
    }
  }
};

/**
 * Adds a timeline item to the series canvas
 */
DvtTimelineSeries.prototype.addItem = function(block, feelerBlock, durationBlock, node, animate)
{
  var context = this.getCtx();
  var nodeId = node.getId();
  var isRTL = this.isRTL();

  // all the feelers goes to the beginning so that the bubbles always goes on top of them
  if (feelerBlock == null)
  {
    feelerBlock = new DvtContainer(context, 'feelers');
    block.addChild(feelerBlock);
    block.feelers = feelerBlock;
  }

  if (durationBlock == null)
  {
    durationBlock = new DvtContainer(context, 'durations');
    block.addChild(durationBlock);
    block.durations = durationBlock;
  }

  var loc = node.getLoc();
  var spacing = this.calculateSpacing(node, this._items.length);
  node.setSpacing(spacing);

  var itemStyle = node.getStyle();

  var marginTop = 5;
  var marginStart = 5;
  var content = this.getItemContent(node, null);
  this.addChild(content);
  var dim = content.getDimensions();
  this.removeChild(content);

  // TODO: Review this later...
  node.setWidth(dim.w + marginStart * 2);
  node.setHeight(dim.h + marginTop * 2);
  var nodeWidth = node.getWidth();
  var nodeHeight = node.getHeight();

  if (animate == undefined)
    animate = this.isAnimationEnabled();

  if (!this._isVertical)
  {
    // draw the feeler
    var feelerId = '_feeler_' + nodeId;
    if (!this._isInverted)
    {
      var feelerY = this.Height;
      var feelerHeight = this.Height - spacing;
    }
    else
    {
      feelerY = 0;
      feelerHeight = spacing;
    }
    var feelerX;
    if (isRTL)
      feelerX = this._length - loc;
    else
      feelerX = loc;
    var feeler = new DvtLine(context, feelerX, feelerY, feelerX, feelerHeight, feelerId);
    if (animate)
      feeler.setAlpha(0);
    feelerBlock.addChild(feeler);
    var feelerWidth = this.getStyle(DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.FEELER_WIDTH_KEY);
    var feelerColor = this.getStyle(DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.FEELER_COLOR_KEY);
    var stroke = new DvtSolidStroke(feelerColor, 1, feelerWidth);
    feeler.setStroke(stroke);
    feeler._node = node;
  }

  // draw the bubble
  var bubbleId = '_bubble_' + nodeId;
  if (this._isVertical)
  {
    var offset = nodeHeight / 2;
    var startOffset = offset - 6;
    var endOffset = offset + 6;
    if (!isRTL && this._isInverted || isRTL && !this._isInverted)
    {
      var bubbleArray = [0, 0, 0, startOffset, -6, offset, 0, endOffset, 0, nodeHeight, nodeWidth, nodeHeight, nodeWidth, 0, 0, 0];
      var innerBubbleArray = [2, 2, 2, startOffset, -4, offset, 2, endOffset, 2, nodeHeight - 2, nodeWidth - 2, nodeHeight - 2, nodeWidth - 2, 2, 2, 2];
    }
    else
    {
      bubbleArray = [0, 0, 0, nodeHeight, nodeWidth, nodeHeight, nodeWidth, endOffset, nodeWidth + 6, offset, nodeWidth, startOffset, nodeWidth, 0, 0, 0];
      innerBubbleArray = [2, 2, 2, nodeHeight - 2, nodeWidth - 2, nodeHeight - 2, nodeWidth - 2, endOffset, nodeWidth + 4, offset, nodeWidth - 2, startOffset, nodeWidth - 2, 2, 2, 2];
    }
  }
  else
  {
    if (!isRTL)
      offset = DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET;
    else
      offset = nodeWidth - DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET;
    startOffset = offset - 6;
    endOffset = offset + 6;
    if (this._isInverted)
    {
      bubbleArray = [0, 0, startOffset, 0, offset, -6, endOffset, 0, nodeWidth, 0, nodeWidth, nodeHeight, 0, nodeHeight, 0, 0];
      innerBubbleArray = [2, 2, startOffset, 2, offset, -4, endOffset, 2, nodeWidth - 2, 2, nodeWidth - 2, nodeHeight - 2, 2, nodeHeight - 2, 2, 2];
    }
    else
    {
      bubbleArray = [0, 0, 0, nodeHeight, startOffset, nodeHeight, offset, nodeHeight + 6, endOffset, nodeHeight, nodeWidth, nodeHeight, nodeWidth, 0, 0, 0];
      innerBubbleArray = [2, 2, 2, nodeHeight - 2, startOffset, nodeHeight - 2, offset, nodeHeight + 4, endOffset, nodeHeight - 2, nodeWidth - 2, nodeHeight - 2, nodeWidth - 2, 2, 2, 2];
    }
  }
  var bubble = new DvtPolygon(context, bubbleArray, bubbleId);
  var innerBubble = new DvtPolygon(context, innerBubbleArray, bubbleId + '_i');
  bubble.setSolidFill(this.getStyle(DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_FILL_COLOR_KEY));
  bubble.setStroke(new DvtSolidStroke(this.getStyle(DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_COLOR_KEY)));

  innerBubble.setSolidFill(DvtTimelineSeries.DEFAULT_ITEM_INNER_FILL_COLOR);
  innerBubble.setStroke(new DvtSolidStroke(DvtTimelineSeries.DEFAULT_ITEM_INNER_ENABLED_STROKE_COLOR, 1, DvtTimelineSeries.DEFAULT_ITEM_INNER_ENABLED_STROKE_WIDTH));
  //bubble.setPixelHinting(true);

  // margin around content
  content.setTranslate(marginStart, marginTop);
  bubble.addChild(innerBubble);
  bubble.addChild(content);

  var bubbleContainerId = '_bt_' + nodeId;
  var bubbleContainer = new DvtTimelineSeriesItem(context, this._defaultStyles, bubbleContainerId);
  if (animate)
    bubbleContainer.setAlpha(0);
  bubbleContainer.addChild(bubble);
  if (DvtTimeUtils.supportsTouch())
    DvtToolkitUtils.setAttrNullNS(bubbleContainer._elem, 'id', bubbleContainer._id);

  // associate the node with the marker
  bubbleContainer._node = node;
  var transX;
  var transY;
  if (this._isVertical)
  {
    transY = loc - (nodeHeight / 2);
    if (isRTL && this._isInverted || !isRTL && !this._isInverted)
      transX = this._size - (nodeWidth + this._initialSpacing);
    else
      transX = this._initialSpacing;
  }
  else
  {
    if (!isRTL)
      transX = loc - DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET;
    else
      transX = this._length - loc - nodeWidth + DvtTimelineSeries.DEFAULT_BUBBLE_OFFSET;
    if (!this._isInverted)
      transY = this.Height - spacing - nodeHeight;
    else
      transY = spacing;
  }
  bubbleContainer.setTranslate(transX, transY);

  if (loc >= 0)
    block.addChild(bubbleContainer);

  // associate the displayable with the node
  node.setBubble(bubbleContainer);
  bubbleContainer.setAriaRole('group');
  node._updateAriaLabel();

  this._callbackObj.EventManager.associate(bubbleContainer, node);

  if (!this._isVertical)
    node.setFeeler(feeler);

  if (animate)
  {
    var animator = new DvtAnimator(context, 1, 0, DvtEasing.linear);
    animator.addProp(DvtAnimator.TYPE_NUMBER, bubbleContainer, bubbleContainer.getAlpha, bubbleContainer.setAlpha, 1);
    if (!this._isVertical)
      animator.addProp(DvtAnimator.TYPE_NUMBER, feeler, feeler.getAlpha, feeler.setAlpha, 1);
    this.addAnimator(animator);
  }

  return bubble;
};


/**
 * Creates the series item contents.
 * @protected
 */
DvtTimelineSeries.prototype.getItemContent = function(node, inlineStyle)
{
  var context = this.getCtx();
  var isRTL = this.isRTL();
  var title = node.getTitle();
  var desc = node.getDescription();
  var thumbnail = node.getThumbnail();

  var container = new DvtContainer(context);
  var offsetX = 0;
  var offsetY = 0;

  if (!isRTL)
  {
    if (thumbnail != null)
    {
      var thumbImage = new DvtImage(context, thumbnail, 0, 0, DvtTimelineSeries.DEFAULT_THUMBNAIL_WIDTH, DvtTimelineSeries.DEFAULT_THUMBNAIL_HEIGHT, '_tn');
      thumbImage.setMouseEnabled(false);
      container.addChild(thumbImage);
      offsetX = DvtTimelineSeries.DEFAULT_THUMBNAIL_WIDTH + 2;
    }

    if (title != null)
    {
      var titleText = new DvtOutputText(this.getCtx(), title, offsetX, offsetY);
      titleText.setCSSStyle(this._itemTitleStyle);
      offsetY = 15;
      container.addChild(titleText);
    }

    if (desc != null)
    {
      var descText = new DvtOutputText(this.getCtx(), desc, offsetX, offsetY);
      descText.setCSSStyle(this._itemDescriptionStyle);
      container.addChild(descText);
    }
  }
  else
  {
    if (title != null)
    {
      titleText = new DvtOutputText(this.getCtx(), title, 0, offsetY);
      titleText.setCSSStyle(this._itemTitleStyle);
      offsetX = titleText.measureDimensions().w + 2;
      offsetY = 15;
      container.addChild(titleText);
    }

    if (desc != null)
    {
      descText = new DvtOutputText(this.getCtx(), desc, 0, offsetY);
      descText.setCSSStyle(this._itemDescriptionStyle);
      var width = descText.measureDimensions().w + 2;
      if (offsetX != 0 && width != offsetX)
      {
        if (width > offsetX)
        {
          titleText.setX(width - offsetX);
          offsetX = width;
        }
        else
          descText.setX(offsetX - width);
      }
      else
        offsetX = width;
      container.addChild(descText);
    }

    if (thumbnail != null)
    {
      thumbImage = new DvtImage(context, thumbnail, offsetX, 0, DvtTimelineSeries.DEFAULT_THUMBNAIL_WIDTH, DvtTimelineSeries.DEFAULT_THUMBNAIL_HEIGHT, '_tn');
      thumbImage.setMouseEnabled(false);
      container.addChild(thumbImage);
    }
  }
  return container;
};

DvtTimelineSeries.prototype.getLabel = function()
{
  return this._label;
};

DvtTimelineSeries.prototype.getLabelStyle = function()
{
  return this._labelStyle;
};

DvtTimelineSeries.prototype.getEmptyText = function()
{
  return this._emptyText;
};

DvtTimelineSeries.prototype.getEmptyTextStyle = function()
{
  return this._emptyTextStyle;
};


/**
 * Adjust feelers height if neccessary (if max height is > height of canvas)
 */
DvtTimelineSeries.prototype.adjustFeelers = function()
{
  if (this._isInverted)
    var durationSign = 1;
  else
  {
    durationSign = -1;
    if (this._maxOverflowValue > this.Height)
    {
      var heightDiff = this._maxOverflowValue - this.Height;
      for (var i = 0; i < this._blocks.length; i++)
      {
        var block = this._blocks[i];
        var feelers = block.feelers;
        if (feelers)
        {
          var count = feelers.getNumChildren();
          for (var j = 0; j < count; j++)
          {
            var feeler = feelers.getChildAt(j);
            feeler.setTranslateY(feeler.getTranslateY() + heightDiff);
          }
        }
      }
    }
  }
  for (i = 0; i < this._blocks.length; i++)
  {
    block = this._blocks[i];
    feelers = block.feelers;

    count = feelers.getNumChildren();
    for (j = 0; j < count; j++)
    {
      feeler = feelers.getChildAt(j);
      var durationSize = feeler._node.getDurationSize();
      if (durationSize)
        feeler.setY1(feeler.getY1() + (durationSize * durationSign));
    }
  }
};


/**
 * Adjust duration heights if neccessary (if max height is > height of canvas)
 */
DvtTimelineSeries.prototype.adjustDurations = function()
{
  if (this._maxOverflowValue > this._size)
    var sizeDiff = this._maxOverflowValue - this._size;
  else
    sizeDiff = 0;

  for (var i = 0; i < this._blocks.length; i++)
  {
    var block = this._blocks[i];
    var durations = block.durations;

    var count = durations.getNumChildren();
    for (var j = 0; j < count; j++)
    {
      var duration = durations.getChildAt(j);
      if (this._isVertical)
        duration.setTranslateX(sizeDiff);
      else
        duration.setTranslateY(sizeDiff);
    }
  }
};


/**
 * Adjust bubble positions if neccessary (if max height is > height of canvas)
 */
DvtTimelineSeries.prototype.adjustItems = function()
{
  if (this._maxOverflowValue > this._size)
  {
    var sizeDiff = this._maxOverflowValue - this._size;
    for (var i = 0; i < this._blocks.length; i++)
    {
      var block = this._blocks[i];
      var count = block.getNumChildren();
      for (var j = 2; j < count; j++)
      {
        var elem = block.getChildAt(j);
        if (this._isVertical)
          elem.setTranslateX(elem.getTranslateX() + sizeDiff);
        else
          elem.setTranslateY(elem.getTranslateY() + sizeDiff);
      }
    }
    if (this._isVertical)
      this.setHScrollPos(sizeDiff);
    else
      this.setVScrollPos(sizeDiff);
  }
};

DvtTimelineSeries.prototype.findItem = function(itemId)
{
  if (this._items != null)
  {
    for (var i = 0; i < this._items.length; i++)
    {
      var item = this._items[i];
      if (item.getId() == itemId)
        return item;
    }
  }
  return null;
};

DvtTimelineSeries.prototype.getStyle = function(key)
{
  var style = this._defaultStyles[key];
  if (style instanceof DvtCSSStyle)
    return style.clone();
  else
    return style;
};

DvtTimelineSeries.prototype.HandleItemAction = function(item)
{
  var action = item.getAction();
  if (action)
  {
    var event = new DvtTimelineSeriesActionEvent(action, item.getId());
    DvtEventDispatcher.dispatchEvent(this._callback, this._callbackObj, this, event);
  }
};
/*eries.zoom = function()
{

};

DvtTimelineSeries.prototype.updateItems = function(container, width)
{
    if (this._items != null)
    {
        var animator = new DvtAnimator(this.getCtx(), 0.5, 0, DvtEasing.linear);
        for (var i=0; i<this._items.length; i++)
        {
            var item = this._items[i];

            var x = DvtTimeUtils.getDatePosition(this._start, this._end, item.getTime(), width);
            item.setLoc(x);
            // reset it so that y gets calucalted again
            item.setSpacing(null);
            var y = this.calculateSpacing(item, i, false);
            item.setSpacing(y);

            var bubble = item.getBubble();
            var feeler = item.getFeeler();
            if (bubble != null && feeler != null)
            {
                animator.addProp(DvtAnimator.TYPE_NUMBER, bubble, bubble.getTranslateX, bubble.setTranslateX, x-DvtTimelineSeries.BUBBLE_OFFSET);
                animator.addProp(DvtAnimator.TYPE_NUMBER, bubble, bubble.getTranslateY, bubble.setTranslateY, y);
                animator.addProp(DvtAnimator.TYPE_NUMBER, feeler, feeler.getX1, feeler.setX1, x);
                animator.addProp(DvtAnimator.TYPE_NUMBER, feeler, feeler.getX2, feeler.setX2, x);
                animator.addProp(DvtAnimator.TYPE_NUMBER, feeler, feeler.getY1, feeler.setY1, y);
            }
            else
            {
                // bubble not rendered yet because it's outside of viewport.  If zoom makes this item in the viewport, we'll need to render it now
            }
        }

        // lastly, update current time
        if (this._currentLine != null)
        {
            x = DvtTimeUtils.getDatePosition(this._start, this._end, this._currentTime, width);
            animator.addProp(DvtAnimator.TYPE_NUMBER, this._currentLine, this._currentLine.getX1, this._currentLine.setX1, x);
            animator.addProp(DvtAnimator.TYPE_NUMBER, this._currentLine, this._currentLine.getX2, this._currentLine.setX2, x);
        }

        animator.play();

        this.adjustFeelers();
    }
}
*/
/**
 * Timeline Series action event.
 * @param action The action triggered
 * @param itemId The id of the node triggering the action event.
 * @class
 * @constructor
 * @export
 */
var DvtTimelineSeriesActionEvent = function(action, itemId)
{
  DvtTimelineSeriesActionEvent.superclass.constructor.call(this, DvtActionEvent.SUBTYPE_ACTION, action, itemId);
};

DvtObj.createSubclass(DvtTimelineSeriesActionEvent, DvtActionEvent, 'DvtTimelineSeriesActionEvent');

DvtTimelineSeries.prototype.isVertical = function()
{
  return this._isVertical;
};
/**
 * Creates an instance of DvtTimelineSeriesItem which extends DvtContainer with hover and selection feedback.
 * @extends {DvtContainer}
 * @param {DvtContext} context The rendering context
 * @param {string=} id The optional id for the corresponding DOM element.
 * @class
 * @constructor
 */
var DvtTimelineSeriesItem = function(context, styles, id)
{
  this.Init(context, styles, id);
};

DvtObj.createSubclass(DvtTimelineSeriesItem, DvtContainer, 'DvtTimelineSeriesItem');

// state
DvtTimelineSeriesItem.ENABLED_STATE_KEY = 'en';
DvtTimelineSeriesItem.SELECTED_STATE_KEY = 'sel';
DvtTimelineSeriesItem.ACTIVE_SELECTED_STATE_KEY = 'asel';
DvtTimelineSeriesItem.HOVER_STATE_KEY = 'hl';

/**
 * @param {DvtContext} context The rendering context
 * @param {string=} id The optional id for the corresponding DOM element
 * @protected
 */
DvtTimelineSeriesItem.prototype.Init = function(context, styles, id)
{
  DvtTimelineSeriesItem.superclass.Init.call(this, context, 'g', id);
  this._styles = styles;
};

/**
 * Sets whether the timeline series item is currently selected and shows the seleciton effect
 * @param {boolean} bSelected True if the currently selected
 */
DvtTimelineSeriesItem.prototype.setSelected = function(isSelected)
{
  if (this._isSelected == isSelected)
    return;

  this._isSelected = isSelected;

  if (isSelected)
  {
    if (this._isShowingHoverEffect)
      this.applyState(DvtTimelineSeriesItem.ACTIVE_SELECTED_STATE_KEY);
    else
      this.applyState(DvtTimelineSeriesItem.SELECTED_STATE_KEY);
  }
  else
    this.applyState(DvtTimelineSeriesItem.ENABLED_STATE_KEY);
};

/**
 * Shows the hover effect for the timeline series item
 */
DvtTimelineSeriesItem.prototype.showHoverEffect = function(isFocused)
{
  if (!this._isShowingHoverEffect)
  {
    this._isShowingHoverEffect = true;
    if (this._isSelected && isFocused)
      this.applyState(DvtTimelineSeriesItem.ACTIVE_SELECTED_STATE_KEY);
    else if (this._isSelected)
      this.applyState(DvtTimelineSeriesItem.SELECTED_STATE_KEY);
    else
      this.applyState(DvtTimelineSeriesItem.HOVER_STATE_KEY);
  }
};

/**
 * Hides the hover effect for the timeline series item
 */
DvtTimelineSeriesItem.prototype.hideHoverEffect = function(isFocused)
{
  if (this._isSelected && isFocused)
    this.applyState(DvtTimelineSeriesItem.ACTIVE_SELECTED_STATE_KEY);
  else if (this._isSelected)
    this.applyState(DvtTimelineSeriesItem.SELECTED_STATE_KEY);
  else
    this.applyState(DvtTimelineSeriesItem.ENABLED_STATE_KEY);
  this._isShowingHoverEffect = false;
};

DvtTimelineSeriesItem.prototype.applyState = function(state)
{
  var item = this._node;
  var itemElem = item.getBubble();
  // if it is null the item has not been render yet, this could happen when user
  // hovers over a marker that is not in the viewport
  if (itemElem == null)
    return;

  var bubble = itemElem.getChildAt(0);
  var bubbleInner = bubble.getChildAt(0);
  var duration = item.getDurationBar();

  bubble.setSolidFill(this.getStyle(state + DvtTimelineSeries.ITEM_FILL_COLOR_KEY));

  var bubbleStrokeColor = this.getStyle(state + DvtTimelineSeries.ITEM_STROKE_COLOR_KEY);
  var bubbleStrokeWidth = this.getStyle(state + DvtTimelineSeries.ITEM_STROKE_WIDTH_KEY);
  var bubbleStroke = new DvtSolidStroke(bubbleStrokeColor, 1, bubbleStrokeWidth);
  bubble.setStroke(bubbleStroke);

  var bubbleInnerStrokeColor = this.getStyle(state + DvtTimelineSeries.ITEM_INNER_STROKE_COLOR_KEY);
  var bubbleInnerStrokeWidth = this.getStyle(state + DvtTimelineSeries.ITEM_INNER_STROKE_WIDTH_KEY);
  var bubbleInnerStroke = new DvtSolidStroke(bubbleInnerStrokeColor, 1, bubbleInnerStrokeWidth);
  bubbleInner.setStroke(bubbleInnerStroke);

  var feelerWidth = this.getStyle(state + DvtTimelineSeries.FEELER_WIDTH_KEY);
  var feelerColor = this.getStyle(state + DvtTimelineSeries.FEELER_COLOR_KEY);
  var feelerStroke = new DvtSolidStroke(feelerColor, 1, feelerWidth);

  var feeler = item.getFeeler();
  if (feeler)
    feeler.setStroke(feelerStroke);

  if (duration)
    duration.setStroke(feelerStroke);
};

DvtTimelineSeriesItem.prototype.getStyle = function(key)
{
  var style = this._styles[key];
  if (style instanceof DvtCSSStyle)
    return style.clone();
  else
    return style;
};
/**
 * Class representing a TimelineSeries node.
 * @param {object} props The properties for the node.
 * @class
 * @constructor
 */
var DvtTimelineSeriesNode = function(timeline, series, props)
{
  this.Init(timeline, series, props);
};

DvtObj.createSubclass(DvtTimelineSeriesNode, DvtKeyboardNavigable, 'DvtTimelineSeriesNode');


/**
 * @param {object} props The properties for the node.
 * @protected
 */
DvtTimelineSeriesNode.prototype.Init = function(timeline, seriesIndex, props)
{
  this._timeline = timeline;
  this._seriesIndex = seriesIndex;
  this._series = timeline._series[seriesIndex];
  this._id = props.id;
  this._rowKey = props.rowKey;

  this._startTime = parseInt(props.startTime);
  if (props.endTime)
    this._endTime = parseInt(props.endTime);

  this._title = props.title;
  this._desc = props.desc;
  this._thumbnail = props.thumbnail;

  this._style = props.style;
  this._data = props.data;
  this._action = props.action;
  this._durationFillColor = props.durationFillColor;
};

DvtTimelineSeriesNode.prototype.getId = function()
{
  return this._id;
};

DvtTimelineSeriesNode.prototype.getSeries = function()
{
  return this._series;
};

DvtTimelineSeriesNode.prototype.getSeriesIndex = function()
{
  return this._seriesIndex;
};

DvtTimelineSeriesNode.prototype.getRowKey = function()
{
  return this._rowKey;
};

DvtTimelineSeriesNode.prototype.getStartTime = function()
{
  return this._startTime;
};

DvtTimelineSeriesNode.prototype.getEndTime = function()
{
  return this._endTime;
};

DvtTimelineSeriesNode.prototype.getTitle = function()
{
  return this._title;
};

DvtTimelineSeriesNode.prototype.getDescription = function()
{
  return this._desc;
};

DvtTimelineSeriesNode.prototype.getThumbnail = function()
{
  return this._thumbnail;
};

DvtTimelineSeriesNode.prototype.getStyle = function()
{
  return this._style;
};

DvtTimelineSeriesNode.prototype.getData = function()
{
  return this._data;
};

///////////////////// association of visual parts with node /////////////////////////

DvtTimelineSeriesNode.prototype.getBubble = function()
{
  return this._displayable;
};

DvtTimelineSeriesNode.prototype.setBubble = function(displayable)
{
  this._displayable = displayable;
};

DvtTimelineSeriesNode.prototype.getFeeler = function()
{
  return this._feeler;
};

DvtTimelineSeriesNode.prototype.setFeeler = function(feeler)
{
  this._feeler = feeler;
};

DvtTimelineSeriesNode.prototype.getDurationBar = function()
{
  return this._durationBar;
};

DvtTimelineSeriesNode.prototype.setDurationBar = function(durationBar)
{
  this._durationBar = durationBar;
};

DvtTimelineSeriesNode.prototype.getLoc = function()
{
  return this._loc;
};

DvtTimelineSeriesNode.prototype.setLoc = function(loc)
{
  this._loc = loc;
};

DvtTimelineSeriesNode.prototype.getSpacing = function()
{
  return this._spacing;
};

DvtTimelineSeriesNode.prototype.setSpacing = function(spacing)
{
  this._spacing = spacing;
};

DvtTimelineSeriesNode.prototype.getDurationLevel = function()
{
  return this._durationLevel;
};

DvtTimelineSeriesNode.prototype.setDurationLevel = function(durationLevel)
{
  this._durationLevel = durationLevel;
};

DvtTimelineSeriesNode.prototype.getDurationSize = function()
{
  return this._durationSize;
};

DvtTimelineSeriesNode.prototype.setDurationSize = function(durationSize)
{
  this._durationSize = durationSize;
};

DvtTimelineSeriesNode.prototype.getDurationFillColor = function()
{
  return this._durationFillColor;
};

DvtTimelineSeriesNode.prototype.setDurationFillColor = function(durationFillColor)
{
  this._durationFillColor = durationFillColor;
};

DvtTimelineSeriesNode.prototype.getLabel = function()
{
  if (this.getEndTime() != null)
    return 'Start Time: ' + new Date(this.getStartTime()).toLocaleString() + '; End Time: ' + new Date(this.getEndTime()).toLocaleString() + '; Title: ' +
        this.getTitle() + '; Description: ' + this.getDescription();
  else
    return 'Time: ' + new Date(this.getStartTime()).toLocaleString() + '; Title: ' + this.getTitle() + '; Description: ' + this.getDescription();
};

DvtTimelineSeriesNode.prototype.getWidth = function()
{
  return this._w;
};

DvtTimelineSeriesNode.prototype.setWidth = function(w)
{
  this._w = w;
};

DvtTimelineSeriesNode.prototype.getHeight = function()
{
  return this._h;
};

DvtTimelineSeriesNode.prototype.setHeight = function(h)
{
  this._h = h;
};

DvtTimelineSeriesNode.prototype.getAction = function()
{
  return this._action;
};

/**
 * Returns the next item to receive keyboard focus
 * @param {DvtBaseEvent} event
 * @return {Object} The next item to get keyboard focus
 */
DvtTimelineSeriesNode.prototype.getNextNavigable = function(event)
{
  var keyboardHandler = this._timeline.EventManager.getKeyboardHandler();
  if (event.type == DvtMouseEvent.CLICK || keyboardHandler.isMultiSelectEvent(event)) {
    return this;
  }
  else if (keyboardHandler.isNavigationEvent(event)) {
    var navigableItems = [];
    for (var i = 0; i < this._timeline._series.length; i++)
    {
      navigableItems.push(this._timeline._series[i]._items);
    }
    return DvtTimelineKeyboardHandler.getNextNavigable(this, event, navigableItems);
  }
  else {
    return null;
  }
};

/**
 * Returns the DOM Element that respresents this keyboard navigable
 * @return {Object} This keyboard navigable's DOM Element
 */
DvtTimelineSeriesNode.prototype.getTargetElem = function()
{
  return this._displayable.getElem();
};


/**
 * Returns the bounding box for this navigable displayable relative to the target coordinate space.  If the target
 * coordinate space is not specified, returns the bounds relative to this displayable.
 * @param {DvtDisplayable=} targetCoordinateSpace The displayable defining the target coordinate space
 * @return {DvtRectangle}
 */
DvtTimelineSeriesNode.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace)
{
  return this._displayable.getDimensions(targetCoordinateSpace);
};


/**
 * Show a visual effect to indicate if this DvtKeyboardNavigable has keyboard focus
 */
DvtTimelineSeriesNode.prototype.showKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = true;
  this.showHoverEffect();
  this._timeline.updateScrollForItemNavigation(this);
};


/**
 * Hide the visual effect to indicate if this DvtKeyboardNavigable has keyboard focus
 */
DvtTimelineSeriesNode.prototype.hideKeyboardFocusEffect = function()
{
  this._isShowingKeyboardFocusEffect = false;
  this.hideHoverEffect();
};


/**
 * Returns true if this navigable is showing its keyboard focus effect
 * @return {Boolean}
 */
DvtTimelineSeriesNode.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * Optional method to implement. Returns the location for where a context menu should appear.
 * @return {DvtPoint}
 */
DvtTimelineSeriesNode.prototype.getContextMenuLocation = function() {};

/**
 * Implemented for DvtLogicalObject
 * @override
 */
DvtTimelineSeriesNode.prototype.getDisplayables = function() {
  return [this._displayable];
};

/**
 * Implemented for DvtLogicalObject
 * @override
 */
DvtTimelineSeriesNode.prototype.getAriaLabel = function()
{
  var states = [];
  if (this.isSelectable())
    states.push(DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, this.isSelected() ? 'STATE_SELECTED' : 'STATE_UNSELECTED'));
  return DvtDisplayable.generateAriaLabel(this.getLabel(), states);
};

/**
 * Implemented for DvtSelectable
 * @override
 */
DvtTimelineSeriesNode.prototype.setSelectable = function(isSelectable)
{
  this._isSelectable = isSelectable;
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtTimelineSeriesNode.prototype.isSelectable = function()
{
  return this._isSelectable;
};

/**
 * Implemented for DvtSelectable
 * @override
 */
DvtTimelineSeriesNode.prototype.isSelected = function()
{
  return this._isSelected;
};

/**
 * Implemented for DvtSelectable
 * @override
 */
DvtTimelineSeriesNode.prototype.setSelected = function(isSelected)
{
  this._isSelected = isSelected;
  this._displayable.setSelected(isSelected);
  this._updateAriaLabel();
  if (this._timeline._hasOverview)
  {
    if (isSelected)
      this._timeline._overview.selSelectItem(this.getId());
    else
      this._timeline._overview.selUnselectItem(this.getId());
  }
};

/**
 * Implemented for DvtSelectable
 * @override
 */
DvtTimelineSeriesNode.prototype.showHoverEffect = function(ignoreOverview)
{
  var isFocused = this._timeline.EventManager.getFocus() == this;
  this._displayable.showHoverEffect(isFocused);
  if (!ignoreOverview && this._timeline._hasOverview)
    this._timeline._overview.highlightItem(this.getId());
  if (this._timeline._isVertical)
  {
    if (!this._index)
      this._index = this._series._blocks[0].getChildIndex(this.getBubble());
    this._series._blocks[0].addChild(this.getBubble());
  }
};

/**
 * Implemented for DvtSelectable
 * @override
 */
DvtTimelineSeriesNode.prototype.hideHoverEffect = function(ignoreOverview)
{
  var isFocused = this._timeline.EventManager.getFocus() == this;
  this._displayable.hideHoverEffect(isFocused);
  if (!ignoreOverview && this._timeline._hasOverview)
    this._timeline._overview.unhighlightItem(this.getId());
  if (this._timeline._isVertical && this._index && !this._isSelected)
    this._series._blocks[0].addChildAt(this.getBubble(), this._index);
};


/**
 * Updates the aria-label as needed. On desktop, we can defer the aria creation, and the aria-label will be updated
 * when the activeElement is set.
 * @private
 */
DvtTimelineSeriesNode.prototype._updateAriaLabel = function() {
  if (!DvtAgent.deferAriaCreation()) {
    this._displayable.setAriaProperty('label', this.getAriaLabel());
  }
};
/**
 * TimelineSeries JSON Parser
 * @param {DvtTimelineSeries} timelineSeries The owning timelineSeries component.
 * @class
 * @constructor
 * @extends {DvtObj}
 */
var DvtTimelineSeriesParser = function(timelineSeries)
{
  this.Init(timelineSeries);
};

DvtObj.createSubclass(DvtTimelineSeriesParser, DvtTimeComponentParser, 'DvtTimelineSeriesParser');

/**
 * Parses the specified XML String and returns the root node of the timelineSeries
 * @param {string} options The String containing XML describing the component.
 * @return {object} An object containing the parsed properties
 */
DvtTimelineSeriesParser.prototype.parse = function(options)
{
  // Parse the XML string and get the root node
  var _data = this.buildData(options);

  var ret = DvtTimelineSeriesParser.superclass.parse.call(this, options);
  ret.scale = options['scale'];
  ret.timeAxis = options['timeAxis'];
  ret.label = options['label'];
  ret.emptyText = options['emptyText'];

  ret.items = this._parseDataNode(options['timeline'], options['index'], _data.data);
  ret.rtl = 'false';

  // style info
  var defaultStyles = new Object();

  var itemEnabledFillColor = DvtTimelineSeries.DEFAULT_ITEM_ENABLED_FILL_COLOR;
  var itemSelectedFillColor = DvtTimelineSeries.DEFAULT_ITEM_SELECTED_FILL_COLOR;
  var itemActiveSelectedFillColor = DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_FILL_COLOR;
  var itemHighlightedFillColor = DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_FILL_COLOR;
  var itemEnabledStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_ENABLED_STROKE_COLOR;
  var itemSelectedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_SELECTED_STROKE_COLOR;
  var itemActiveSelectedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_STROKE_COLOR;
  var itemHighlightedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_STROKE_COLOR;
  var itemEnabledStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_ENABLED_STROKE_WIDTH;
  var itemSelectedStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_SELECTED_STROKE_WIDTH;
  var itemActiveSelectedStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_STROKE_WIDTH;
  var itemHighlightedStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_STROKE_WIDTH;
  var itemInnerEnabledStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_INNER_ENABLED_STROKE_COLOR;
  var itemInnerSelectedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_INNER_SELECTED_STROKE_COLOR;
  var itemInnerActiveSelectedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_INNER_ACTIVE_SELECTED_STROKE_COLOR;
  var itemInnerHighlightedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_INNER_HIGHLIGHTED_STROKE_COLOR;
  var itemInnerEnabledStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_INNER_ENABLED_STROKE_WIDTH;
  var itemInnerSelectedStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_INNER_SELECTED_STROKE_WIDTH;
  var itemInnerActiveSelectedStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_INNER_ACTIVE_SELECTED_STROKE_WIDTH;
  var itemInnerHighlightedStrokeWidth = DvtTimelineSeries.DEFAULT_ITEM_INNER_HIGHLIGHTED_STROKE_WIDTH;

  var feelerEnabledWidth = DvtTimelineSeries.DEFAULT_FEELER_ENABLED_WIDTH;
  var feelerSelectedWidth = DvtTimelineSeries.DEFAULT_FEELER_SELECTED_WIDTH;
  var feelerActiveSelectedWidth = DvtTimelineSeries.DEFAULT_FEELER_ACTIVE_SELECTED_WIDTH;
  var feelerHighlightedWidth = DvtTimelineSeries.DEFAULT_FEELER_HIGHLIGHTED_WIDTH;
  var feelerEnabledStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_ENABLED_STROKE_COLOR;
  var feelerSelectedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_SELECTED_STROKE_COLOR;
  var feelerActiveSelectedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_ACTIVE_SELECTED_STROKE_COLOR;
  var feelerHighlightedStrokeColor = DvtTimelineSeries.DEFAULT_ITEM_HIGHLIGHTED_STROKE_COLOR;

  var itemTitleStyle = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_ITEM_TITLE_STYLE);
  var itemDescriptionStyle = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_ITEM_DESCRIPTION_STYLE);
  var referenceObjectStyle = new DvtCSSStyle(DvtTimelineSeries.DEFAULT_REFERENCE_OBJECT_STYLE);

  var itemStyleDefaults = options['itemStyleDefaults'];
  if (itemStyleDefaults)
  {
    // item styles
    var style = itemStyleDefaults['backgroundColor'];
    if (style)
      itemEnabledFillColor = style;
    style = itemStyleDefaults['hoverBackgroundColor'];
    if (style)
      itemHighlightedFillColor = style;
    style = itemStyleDefaults['selectedBackgroundColor'];
    if (style)
    {
      itemSelectedFillColor = style;
      itemActiveSelectedFillColor = style;
    }
    style = itemStyleDefaults['borderColor'];
    if (style)
    {
      itemEnabledStrokeColor = style;
      feelerEnabledStrokeColor = style;
    }
    style = itemStyleDefaults['hoverBorderColor'];
    if (style)
    {
      itemHighlightedStrokeColor = style;
      feelerHighlightedStrokeColor = style;
    }
    style = itemStyleDefaults['selectedBorderColor'];
    if (style)
    {
      itemSelectedStrokeColor = style;
      itemActiveSelectedStrokeColor = style;
      feelerSelectedStrokeColor = style;
      feelerActiveSelectedStrokeColor = style;
    }

    // item text styles
    style = itemStyleDefaults['titleStyle'];
    if (style)
      itemTitleStyle.parseInlineStyle(style);
    style = itemStyleDefaults['descriptionStyle'];
    if (style)
      itemDescriptionStyle.parseInlineStyle(style);
  }

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.FEELER_WIDTH_KEY] = feelerEnabledWidth;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.FEELER_WIDTH_KEY] = feelerSelectedWidth;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.FEELER_WIDTH_KEY] = feelerActiveSelectedWidth;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.FEELER_WIDTH_KEY] = feelerHighlightedWidth;

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.FEELER_COLOR_KEY] = feelerEnabledStrokeColor;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.FEELER_COLOR_KEY] = feelerSelectedStrokeColor;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.FEELER_COLOR_KEY] = feelerActiveSelectedStrokeColor;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.FEELER_COLOR_KEY] = feelerHighlightedStrokeColor;

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_FILL_COLOR_KEY] = itemEnabledFillColor;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_FILL_COLOR_KEY] = itemSelectedFillColor;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_FILL_COLOR_KEY] = itemActiveSelectedFillColor;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.ITEM_FILL_COLOR_KEY] = itemHighlightedFillColor;

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_COLOR_KEY] = itemEnabledStrokeColor;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_COLOR_KEY] = itemSelectedStrokeColor;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_COLOR_KEY] = itemActiveSelectedStrokeColor;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_COLOR_KEY] = itemHighlightedStrokeColor;

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_WIDTH_KEY] = itemEnabledStrokeWidth;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_WIDTH_KEY] = itemSelectedStrokeWidth;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_WIDTH_KEY] = itemActiveSelectedStrokeWidth;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.ITEM_STROKE_WIDTH_KEY] = itemHighlightedStrokeWidth;

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_COLOR_KEY] = itemInnerEnabledStrokeColor;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_COLOR_KEY] = itemInnerSelectedStrokeColor;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_COLOR_KEY] = itemInnerActiveSelectedStrokeColor;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_COLOR_KEY] = itemInnerHighlightedStrokeColor;

  defaultStyles[DvtTimelineSeries.ENABLED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_WIDTH_KEY] = itemInnerEnabledStrokeWidth;
  defaultStyles[DvtTimelineSeries.SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_WIDTH_KEY] = itemInnerSelectedStrokeWidth;
  defaultStyles[DvtTimelineSeries.ACTIVE_SELECTED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_WIDTH_KEY] = itemInnerActiveSelectedStrokeWidth;
  defaultStyles[DvtTimelineSeries.HIGHLIGHTED_STATE_KEY + DvtTimelineSeries.ITEM_INNER_STROKE_WIDTH_KEY] = itemInnerHighlightedStrokeWidth;

  ret.itemTitleStyle = itemTitleStyle;
  ret.itemDescriptionStyle = itemDescriptionStyle;
  ret.referenceObjectStyle = referenceObjectStyle;
  ret.defaultStyles = defaultStyles;

  return ret;
};


/**
 * Constructs and returns the data array object.
 * @param {object} options The options object.
 * @protected
 */
DvtTimelineSeriesParser.prototype.buildData = function(options) {
  var data = {};

  var itemArray = [];
  var seriesItems = options['items'];
  if (seriesItems) {
    for (var j = 0; j < seriesItems.length; j++) {
      var item = seriesItems[j];
      itemArray.push(item);
    }
  }
  data.data = itemArray;
  return data;
};


/**
 * Parses the attributes on the root node.
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtTimelineSeriesParser.prototype.ParseRootAttributes = function()
{
  var ret = DvtTimelineSeriesParser.superclass.ParseRootAttributes.call(this);

  ret.start = this._startTime.getTime();
  ret.end = this._endTime.getTime();

  return ret;
};


/**
 * Recursively parses the XML nodes, creating tree component nodes.
 * @param {DvtXmlNode} xmlNode The XML node to parse.
 * @return {DvtBaseTreeNode} The resulting tree component node.
 * @private
 */
DvtTimelineSeriesParser.prototype._parseDataNode = function(timeline, seriesIndex, data)
{
  var treeNodes = new Array();
  if (data)
  {
    for (var i = 0; i < data.length; i++)
    {
      // parse the attributes and create the node
      var props = this.ParseNodeAttributes(data[i]);
      if (props)
      {
        var treeNode = new DvtTimelineSeriesNode(timeline, seriesIndex, props);
        treeNode.setSelectable(true);
        var startTime = treeNode.getStartTime();
        var add = true;
        for (var j = 0; j < treeNodes.length; j++)
        {
          // ensure items are sorted in ascending order
          if (startTime < treeNodes[j].getStartTime())
          {
            treeNodes.splice(j, 0, treeNode);
            add = false;
            break;
          }
        }
        if (add)
          treeNodes.push(treeNode);
      }
    }
  }
  return treeNodes;
};


/**
 * Parses the attributes on a tree node.
 * @param {DvtXmlNode} xmlNode The xml node defining the tree node
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtTimelineSeriesParser.prototype.ParseNodeAttributes = function(data)
{
  // The object that will be populated with parsed values and returned
  var ret = new Object();

  ret.id = data['id'];
  ret.rowKey = ret.id;

  ret.startTime = this.getDate(data['start']);
  ret.endTime = this.getDate(data['end']);

  // only return an object if at least part of the event is visible
  var checkTime = ret.endTime ? ret.endTime : ret.startTime;
  if (checkTime < this._startTime.getTime() || ret.startTime > this._endTime.getTime())
    return null;

  ret.title = data['title'];
  ret.desc = data['description'];
  ret.thumbnail = data['thumbnail'];

  ret.data = data;
  ret.style = data['style'];
  ret.action = data['action'];
  ret.durationFillColor = data['durationFillColor'];

  return ret;
};
/**
 * Timeline viewport change event.
 * @param {string} type
 * @param {number=} viewportStart The start value of the viewport.
 * @param {number=} viewportEnd The end value of the viewport.
 * @param {string=} minorAxisScale The scale value of the minor axis.
 * @class DvtTimelineViewportChangeEvent
 * @extends {DvtBaseComponentEvent}
 * @constructor
 * @export
 **/
var DvtTimelineViewportChangeEvent = function(type, viewportStart, viewportEnd, minorAxisScale)
{
  DvtTimelineViewportChangeEvent.superclass.Init.call(this, type);
  this._viewportStart = viewportStart;
  this._viewportEnd = viewportEnd;
  this._minorAxisScale = minorAxisScale;
};

DvtObj.createSubclass(DvtTimelineViewportChangeEvent, DvtBaseComponentEvent, 'DvtTimelineViewportChangeEvent');

/**
 * @export
 */
DvtTimelineViewportChangeEvent.TYPE = 'viewportChange';

/**
 * Returns the start value of the viewport.
 * @return {number} viewportStart.
 * @export
 */
DvtTimelineViewportChangeEvent.prototype.getViewportStart = function()
{
  return this._viewportStart;
};

/**
 * Returns the end value of the viewport.
 * @return {number} viewportEnd.
 * @export
 */
DvtTimelineViewportChangeEvent.prototype.getViewportEnd = function()
{
  return this._viewportEnd;
};

/**
 * Returns the scale value of the minor axis.
 * @return {string} minorAxisScale.
 * @export
 */
DvtTimelineViewportChangeEvent.prototype.getMinorAxisScale = function()
{
  return this._minorAxisScale;
};
  return D;
});