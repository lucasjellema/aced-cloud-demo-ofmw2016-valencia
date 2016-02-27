/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'knockout'], function(oj, $, ko)
{
/*jslint browser: true, devel: true*/
/*global ComponentChangeTracker:true*/


/**
 * To create a custom binding,
 * use oj.ComponentBinding.create(). Using prototypal inheritance to extend
 * oj.ComponentBinding is not supported.
 * @export
 * @class oj.ComponentBinding 
 * @classdesc JQueryUI component binding for Knockout.js. 
 * @param {string|Array.<string>} name - the name of the binding or an
 * array of strings in case the binding needs to be registered under several names
 * @param {?(Object|string)=} options - property object
 * @see oj.ComponentBinding.create
 * @constructor
 */
oj.ComponentBinding = function(name, options)
{
  this.Init(name, options);
};

oj.Object.createSubclass(oj.ComponentBinding, oj.Object, "oj.ComponentBinding");


/**
 * Creates a binding instance and registers it with Knockout.js
 * @export
 * @param {string|Array.<string>} name - the name of the binding or an
 * array of strings in case the binding needs to be registered under several names
 * @param {?(Object|string)=} options - property object with the following fields:
 * <ul>
 *   <li>{string} 'componentName' - name of the component 
 *       Not specifying this parameter indicates that the binding should use the 'component' attribute 
 *       on itself to determine the constructor name
 *   </li>
 *   <li>{Function} 'afterCreate'- a callback invoked after the component instance has been created.
 *        The function will receive the following parameters:
 *        <ul>
 *           <li>{Element} element - DOM element associated with this binding</li>
 *           <li>{Function} widgetConstructor - constructor for the JQueryUI widget created
 *            by this binding. The constructor is already bound to the associated 
 *            JQuery element</li>
 *           <li>{Function} valueAccessor - a JavaScript function that you can call to 
 *           get a map of current binding attributes</li>
 *           <li>{Object} allBindings -  a JavaScript object that you can use to access all the model values bound 
 *           to this DOM element</li>
 *           <li>{Object} bindingContext -  an object that holds the binding context available to this element's bindings. 
 *           This object includes special properties including $parent, $parents, and $root that can be used to access
 *           data that is bound against ancestors of this context</li>
 *        </ul>
 *   </li>
 *   <li>{Function} 'beforeDestroy'- a callback invoked before the component instance is detroyed
 *        The function will receive the same parameters as the 'afterCreate' callback above.
 *   </li>
 * </ul>
 * When this parameter is specified as a string, it will be interpreted as a single 'componentName' option
 * @return {oj.ComponentBinding} binding instance
 */
oj.ComponentBinding.create = function(name, options)
{
  if (name == null)
  {
    throw "Binding name is required!";
  }
  
  var instance = new oj.ComponentBinding(name, options);
  
  var handlers = ko.bindingHandlers, i;
  var names = Array.isArray(name) ? name : [name];
  for (i=0; i<names.length; i++)
  {
    handlers[names[i]] = instance;
  }
  
  return instance;
};

/**
 * Retrieves the default componnet binding instance registered with Knockout.js
 * @return {oj.ComponentBinding} default binding instance
 * @export
 */
oj.ComponentBinding.getDefaultInstance = function()
{
  return oj.ComponentBinding._INSTANCE;
};

/**
 * Sets up custom handling for attributes that will be managed by this binding 
 * instance
 * @param {Object} opts - property object with the following fields:
 * <ul>
 *   <li>'attributes' - string array of attribue names</li>
 *   <li>{Function} 'init' - a function called when a managed attribute is initialized.
 *        The function will receive the following parameters:
 *        <ul>
 *           <li>{string} name - attribute name</li>
 *           <li>{Object} value - attribute value</li>
 *           <li>{Element} element - DOM element where this binding is being attached</li>
 *           <li>{Function} widgetConstructor - constructor for the JQueryUI widget created
 *            by this binding. The constructor is already bound to the associated 
 *            JQuery element</li>
 *           <li>{Function} valueAccessor - a JavaScript function that you can call to 
 *           get a map of current binding attributes</li>
 *           <li>{Object} allBindings -  a JavaScript object that you can use to access all the model values bound 
 *           to this DOM element</li>
 *           <li>{Object} bindingContext -  an object that holds the binding context available to this element's bindings. 
 *           This object includes special properties including $parent, $parents, and $root that can be used to access
 *           data that is bound against ancestors of this context</li>
 *        </ul>
 *        The optional return value of the function is a name-to-value map of
 *        properties that should be set on the component
 *   </li>
 *   <li>{Function} 'update' - a function called when a managed attribute is updated.
 *        The function will receive the same parameters as the 'init' callback above.
 *        The optional return value of the function is a name-to-value map of
 *        properties that should be set on the component at the time when other
 *        accumulated changes are delivered
 *   </li>
 *   <li>{Function} 'afterCreate'- a callback invoked after the component instance has been created.
 *        The function will receive the following parameters:
 *        <ul>
 *           <li>{string} name - attribute name</li>
 *           <li>{Element} element - DOM element associated with this binding</li>
 *           <li>{Function} widgetConstructor - constructor for the JQueryUI widget created
 *            by this binding. The constructor is already bound to the associated 
 *            JQuery element</li>
 *           <li>{Function} valueAccessor - a JavaScript function that you can call to 
 *           get a map of current binding attributes</li>
 *           <li>{Object} allBindings -  a JavaScript object that you can use to access all the model values bound 
 *           to this DOM element</li>
 *           <li>{Object} bindingContext -  an object that holds the binding context available to this element's bindings. 
 *           This object includes special properties including $parent, $parents, and $root that can be used to access
 *           data that is bound against ancestors of this context</li>
 *        </ul>
 *   </li>
 *   <li>{string} 'for' (optional) - a string representing component type or constructor 
 *        name restricting the applicability of these managed attributes
 *   </li>
 *   <li>{Array.<string>} 'use' (optional) - an string array of component types whose managed attribute behavior
 *       should be used for the component type specified with the 'for' attribute
 *   </li>
 *   <li>{Function} 'beforeDestroy'- a callback invoked before the component instance is detroyed
 *        The function will receive the same parameters as the 'afterCreate' callback above.
 *   </li>
 * </ul>
 * @export
 */
oj.ComponentBinding.prototype.setupManagedAttributes = function(opts)
{
  var forName = opts['for'];
  forName = forName == null ? '@global' : forName;
  
  var managers = this._managedAttrOptions[forName] || [];
  
  managers.push(opts);
  
  this._managedAttrOptions[forName] = managers;
};



/**
 * Delivers all accumulated component changes across all instances of this binding.
 * Calling this method is optional - the changes will be delivered after a 1ms timeout
 * if this method is never invoked. However, you may call this method to speed up
 * component updates when the aplication code is done updating the view models.
 * @export
 */
oj.ComponentBinding.deliverChanges = function()
{
  oj.ComponentBinding._changeQueue.deliverChanges();
};

/**
 * @private
 */
oj.ComponentBinding.prototype.Init = function(names, options)
{
  oj.ComponentBinding.superclass.Init.call(this);
  
  if (typeof options === "string")
  {
    options = {'componentName': options};
  }
  
  this._bindingOptions = options || {};
  
  
  this._bindingNames = Array.isArray(names) ? names : [names];
  
  this['init'] = oj.Object.createCallback(this, this._init);
  this['update'] = oj.Object.createCallback(this, this._update);
  
  this._managedAttrOptions = {};
};



/**
 * @private
 */
oj.ComponentBinding._NEEDS_JUIB_INIT = "_ojNeedsJUIBInit";


/**
 * @private
 */
oj.ComponentBinding.prototype._init = function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) 
{
  //Invoke child bindings first to allow on-the-fly generation of child content
  ko.applyBindingsToDescendants(bindingContext, element);
  
  // Store the flag on the DOM element indicating that this binding still needs to be initialized
  // We will delay initialiazation (including creation of the JQueryUI component until update()
  // because other bindings such as foreachcdelay their DOM manipulation until update(). 
  // We need the complete dom to support functions like buttonset() and menu() on containers
  
  $(element).data(oj.ComponentBinding._NEEDS_JUIB_INIT, true);
  
    
  return {'controlsDescendantBindings': true};
};


/**
 * @private
 */
oj.ComponentBinding.prototype._update = function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
{
  var jelem = $(element);
  
  if (!jelem.data(oj.ComponentBinding._NEEDS_JUIB_INIT))
  {
    return;
  }
  
  jelem.removeData(oj.ComponentBinding._NEEDS_JUIB_INIT);
  
  
  this._initComponent(element, jelem, valueAccessor, allBindingsAccessor, bindingContext);
};


/**
 * @private
 */
oj.ComponentBinding.prototype._initComponent = function(element, jelem, valueAccessor, allBindingsAccessor, bindingContext)
{
  var options = valueAccessor();
  var roleAttrName = null;
  var disposed = false;
  var registeredListers = [];
  var tracker = null;
  var comp = null;
  var roleListener = null;
  
  var bindingMap = oj.ComponentBinding._getBindingValueMap(this._bindingNames, element, bindingContext);
  var managedAttrMap = {};
  var specifiedManagedAttrs = {};
  
  var binding = this;
  
  var stage = 0; // init
  
  var attributeEvaluatorCache = {};
  
  var componentName = this._bindingOptions['componentName'];
  
  if (componentName == null)
  {
    roleAttrName = 'component';    
      
    if (!bindingMap[roleAttrName])
    {
      // Try the deprecated 'role' attribute
      roleAttrName = 'role';
      
      if (!bindingMap[roleAttrName])
      {
        oj.Logger.error("component attribute is required for the ojComponent binding");
        return;
      }
    }
  
    var role = options[roleAttrName];
    
    if (role == null)
    {
      oj.Logger.error("non-null component attribute is required for the ojComponent binding");
      return;
    }
    
    
    // Use ko.computed to track changes to the 'component' attribute
    roleListener = ko.computed(
        function()
        { 
          // evaluate full property expression to ensure that Knockout adds subscriptions to any computed observables that
          // may be in the chain
          oj.ComponentBinding._evaluatePropertyExpression(bindingMap[roleAttrName], roleAttrName, attributeEvaluatorCache, 
                                                          bindingContext, false);
          if (stage == 0)
          {
            componentName = ko.utils.unwrapObservable(role);
          }
          else
          {
            bindingMap = null;
            
            if (comp)
            {
              comp("destroy");
            }
            else
            {
              roleListener['dispose']();
              roleListener = null;
            }
              
            this._initComponent(element, jelem, valueAccessor, allBindingsAccessor, bindingContext);
          }
          return null;
        },
        this/* 'this' object for the 'read' function*/,
        {'disposeWhenNodeIsRemoved' : element});
  }
  
  if (componentName != null)
  {
    comp = jelem[componentName];
      
    if ((typeof comp) === "function")
    {
      comp = comp.bind(jelem);
      
      jelem.on("ojdestroy" + oj.ComponentBinding._HANDLER_NAMESPACE,
        function(evt)
        {
          if (evt.target && evt.target == element)
          {
            var destroyCallback = binding._bindingOptions['beforeDestroy'];
            if (destroyCallback)
            {
              destroyCallback(element, comp, valueAccessor, allBindingsAccessor, bindingContext);
            }
            
            oj.ComponentBinding._deliverCreateDestroyEventToManagedProps(false, 
                          specifiedManagedAttrs, element, comp, valueAccessor, 
                          allBindingsAccessor, bindingContext);
            
            // Cleanup on component destroy
            disposed = true;
            bindingMap = null;
            binding = null;
            
            tracker.dispose();
            tracker = null;
            
            attributeEvaluatorCache = null;
            managedAttrMap = null;
            specifiedManagedAttrs = null;
              
            oj.ComponentBinding._unregisterEventListeners(jelem);
              
            comp = null;
            
            // Unregister observable change listeners
            var l;
            for (l=0; l<registeredListers.length; l++)
            {
              registeredListers[l]['dispose']();
            }
            registeredListers = null;
          }
          if (roleListener != null)
          {
            roleListener['dispose']();
            roleListener = null;
          }
        }
      );
      
      managedAttrMap = oj.ComponentBinding._resolveManagedAttributes(this._managedAttrOptions, bindingMap, componentName);
      
      // Always use managed attribute behavior from the default instance
      var defaultInstance = oj.ComponentBinding.getDefaultInstance();
      if (this !== defaultInstance)
      {
        var defaultManagedMap = defaultInstance._getManagedAttributes(bindingMap, componentName);
        // Override default managed attribute map with values from this binding's map.
        // Note that there is no need to clone defaultManagedMap because a new instance gets created
        // every time _getManagedAttributes() is called
        oj.CollectionUtils.copyInto(defaultManagedMap, managedAttrMap);
        managedAttrMap = defaultManagedMap;
      }
      
      var propertyMap = {};
      tracker = new ComponentChangeTracker(comp, element, oj.ComponentBinding._changeQueue);
      
      var writablePropMap = 
      {
        '^slider$' : [{'event': 'slidechange', 'getter': _extractValueFromChangeEvent}],
        '^oj*': [{'event': 'ojoptionchange', 'getter': _extractOptionChange}]
      };    
      
      
      var handler = function()
        {
          var prop = this._property;
          
          // evaluate full property expression to ensure that Knockout adds subscriptions to any computed observables that
          // may be in the chain
          var exp = bindingMap[prop];
          
          if (!exp)
          {
            throw "Binding expression for property " + prop + " is not found";
          }
          
         
          var currentVal = oj.ComponentBinding._evaluatePropertyExpression(exp, prop, attributeEvaluatorCache, 
                      bindingContext, stage !== 0 && !disposed);

          
          if (stage === 0) // init, no change
          {
            var val = options[prop];
            var value = oj.ComponentBinding._toJS(val);
          
            var managedPropEntry = managedAttrMap[prop];
            if (managedPropEntry != null)
            {
              specifiedManagedAttrs[prop] = managedPropEntry;
              var initFunc = managedPropEntry.init;
              if (initFunc != null)
              {
                var initProps = initFunc(prop, value, element, comp, valueAccessor, 
                                         allBindingsAccessor, bindingContext) || {};
                oj.CollectionUtils.copyInto(propertyMap, initProps);
              }
            }
            else
            {
              propertyMap[prop] = value;
            }
          }
          // this is a real change
          else if (!disposed)
          {
            var v = oj.ComponentBinding._toJS(currentVal);
            
            if (managedAttrMap[prop] != null)
            {
              var updateFunc = managedAttrMap[prop].update;
              if (updateFunc != null) 
              {
                var updateProps = updateFunc(prop, v, element, comp, valueAccessor, 
                                              allBindingsAccessor, bindingContext) || {};
                
                var updateKeys = Object.keys(updateProps);
                
                for (var k = 0; k<updateKeys.length; k++)            
                {
                  var p = updateKeys[k]; 
                  tracker.addChange(p, updateProps[p]);
                }
              }
            }
            else
            {
            
              tracker.addChange(prop, v);
            }
          }
          
          return null;
        };
      
      var p;
      var optionKeys = Object.keys(options);
      for (var k=0; k<optionKeys.length; k++)
      {
        p = optionKeys[k];
        if (p !== roleAttrName)
        {
          // ko.computed is used to set up dependency tracking for the bindings's attribute
          // Any observable evaulated during the initial invocation of the function is going to be treated as a dependency
          // by Knockout. Once that dependency changes, the fuction below will be called again, in which case we will know
          // to deliver the change
          registeredListers.push(
              ko.computed(handler, {_property: p}/* 'this' object for the 'read' function*/,
                  {'disposeWhenNodeIsRemoved' : element}));
        }
      }
      
      oj.ComponentBinding._registerWritebacks(jelem, componentName, writablePropMap, 
                                              bindingMap, tracker,
                                              bindingContext, attributeEvaluatorCache);
      
      var mutationOptions = oj.ComponentBinding._extractDotNotationOptions(propertyMap);
      
      comp(propertyMap);
      
      for (var mo in mutationOptions)
      {
        comp('option', mo, mutationOptions[mo]);
      }
      
      var createCallback = this._bindingOptions['afterCreate'];
      if (createCallback)
      {
        createCallback(element, comp, valueAccessor, allBindingsAccessor, bindingContext);
      }
      
      oj.ComponentBinding._deliverCreateDestroyEventToManagedProps(true, specifiedManagedAttrs, 
                  element, comp, valueAccessor, allBindingsAccessor, bindingContext);
      
      
      propertyMap = null;
    }
    else
    {
      oj.Logger.error("Component %s is not found", componentName);
    }
  }
  
  stage = 1; // after init
};

// Returns a map of the custom binding's properties. Each key is the property name,
// and each value is a string representation of the property expression
/**
 * @private
 */
oj.ComponentBinding._getBindingValueMap = function(names, elem, bindingContext) 
{
  var map = {},
      bindingValue = null,
      provider = ko.bindingProvider.instance,
      keyValueArray, n, e,
      selfVal = null, i, keyValueEntry;

  
  var trim = function(str)
  {
    return ((str == null) ? null: str.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, '')); 
  }
  
  if (provider.getBindingsString) 
  {
    bindingValue = provider.getBindingsString(elem, bindingContext);  
  }
  else
  {
    bindingValue = elem.getAttribute("data-bind");
  }
  
  if (!bindingValue) {
    return map;
  }
  
  keyValueArray = ko.jsonExpressionRewriting.parseObjectLiteral(bindingValue);
  
  
  for (i=0; i<keyValueArray.length; i++) 
  {
    keyValueEntry = keyValueArray[i];
    
    var bindingKey = trim(keyValueEntry['key']);
      
    if (names.indexOf(bindingKey) >= 0) 
    {
      selfVal = keyValueEntry['value'];
      break;
    }
  }
  
  if (!selfVal) {
    return map;
  }
  
  // now parse this binding's key/value pairs
  keyValueArray = ko.jsonExpressionRewriting.parseObjectLiteral(selfVal);
  
  
  for (n=0; n<keyValueArray.length; n++) 
  {
    e = keyValueArray[n];
    var key = e['key'];
    
    if (key != null)
    {
      map[trim(key)] = trim(e['value']);  
    }
  }
  
  return map;
};


// Evaluates an individual custom binding property expression
/**
 * @private
 */
oj.ComponentBinding._evaluatePropertyExpression = function(expOrCallback, key, cache, bindingContext, evalSimpleExpr) 
{
  var info = cache[key];
  
  var isNew = (info === undefined);
  
  if ( isNew || (info.evaluator === null && info.simple && evalSimpleExpr))
  {
    info = _createEvaluator(expOrCallback, evalSimpleExpr, isNew);
    
    cache[key] = info;
  }
  
  return (info.evaluator && (evalSimpleExpr || !info.simple)) ? info.evaluator(bindingContext) : null;
};

/**
 * @private
 */
function _createEvaluator(expOrCallback, evalSimpleExpr, isNew)
{
  if (typeof expOrCallback !== "string")
  {
    expOrCallback = expOrCallback();
  }
  
  var evaluator = null;
  var isSimple = false;
  
  if (expOrCallback !== null)
  {
    if (isNew)
    {
      var first = expOrCallback.charAt(0);
      
      // Check whether the expression is a string literal (starts with a quote) and whether it contains any function calls
      if (first === "'" || first === "\"" || expOrCallback.indexOf("(") <= 0)
      {
        isSimple = true;
      }
    }
    else // if we have already processed this expression, but the evaluator has not been created, the expression must be simple
    {
      isSimple = true;
    }

    // Performance fix: avoid expsive eval when we know that the expression is not referencing any observables or functions
    if (!isSimple || evalSimpleExpr)
    {
      /*jslint evil:true */
      evaluator = new Function("$context", "with($context){with($data||{}){return " + expOrCallback + ";}}");
    }
  }
  
  return {evaluator: evaluator, simple: isSimple};
};

/**
 * @private 
 */
function _extractValueFromChangeEvent(event, eventData) 
{
  var prop = 'value';
  var nameVal = {};
  nameVal[prop] = eventData[prop];
  return nameVal;
};

/**
 * @private 
 */
function _extractOptionChange(event, eventData)
{
  var nameVal = {};
  var metadata = eventData['optionMetadata'];
  var shouldWrite = metadata ? "shouldWrite" === metadata['writeback']: false;
  if (shouldWrite)
  {
    nameVal[eventData['option']] = eventData['value'];  
  }
  return nameVal;
};

/**
 * @private
 */
oj.ComponentBinding.prototype._getManagedAttributes = function(bindingMap, componentName)
{
  return oj.ComponentBinding._resolveManagedAttributes(this._managedAttrOptions, bindingMap, componentName);
}

/**
 * @private
 */
oj.ComponentBinding._resolveManagedAttributes = function(optionMap, bindingMap, componentName)
{
  var managedAttrMap = {};
  
  var applicableOptions = [];
  
  var attrs_field = 'attributes';
  
  var traverseOptions = function(name, followLinks)
  {
    var managers = optionMap[name];
    if (managers != null)
    {
      for (var n=managers.length-1; n>=0; n--)
      {
        var opt = managers[n];
        
        if (opt[attrs_field] != null)
        {
          applicableOptions.push(opt);
        }
        if (followLinks)
        {
          var parents = opt['use'];
          if (parents != null)
          {
            parents = Array.isArray(parents) ? parents : [parents];
            for (var i=0; i<parents.length; i++)
            {
              traverseOptions(parents[i], true);
            }
          }
        }
      }
    }
  };
  
  traverseOptions(componentName, true);
  
  // If this is a JET component, check managed options registered for the ancestors
  var ojNamespace = 'oj';
  var widgetClass = $[ojNamespace][componentName];
  
  if (widgetClass != null)
  {
    var proto = Object.getPrototypeOf(widgetClass.prototype);
    while (proto != null && ojNamespace === proto['namespace'])
    {
      traverseOptions(proto['widgetName'], true)
      proto = Object.getPrototypeOf(proto);
    }
  }
  
  traverseOptions('@global', false);
  
  if (applicableOptions.length > 0)
  {
    var attrs = Object.keys(bindingMap);
    
    for (var k=0; k<attrs.length; k++)
    {
      var attr = attrs[k];
   
      for (var l=0; l<applicableOptions.length; l++)
      {
        var opts  = applicableOptions[l];
        
        var attributes = opts[attrs_field];
        
        if (attributes.indexOf(attr) >= 0)
        {
          managedAttrMap[attr] = {init: opts['init'], update:opts['update'], 
                                  afterCreate:opts['afterCreate'], beforeDestroy:opts['beforeDestroy']};
          break;
        }
      }
    }
  }
  
  return managedAttrMap;
};

/**
 * @private
 */
oj.ComponentBinding._HANDLER_NAMESPACE = ".oj_ko";

/**
 * @private
 */
oj.ComponentBinding._unregisterEventListeners = function(jelem)
{
  if (jelem)
  {
    jelem.off(oj.ComponentBinding._HANDLER_NAMESPACE);
  }
}

/**
 * @private
 */
oj.ComponentBinding._registerWritebacks = function(jelem, componentName, writablePropMap, 
                                                   bindingMap, tracker,
                                                   bindingContext,
                                                   attributeEvaluatorCache)
{
  var cachedPropertyExpressionWriters = {};
  
  for (var pattern in writablePropMap)
  {
    if (componentName.match(pattern))
    {
      var eventInfos = writablePropMap[pattern];
      for (var i=0; i<eventInfos.length; i++)
      {
        var info = eventInfos[i];
        
        jelem.on(
          info['event'] + oj.ComponentBinding._HANDLER_NAMESPACE,
          { //JQuery will pass this object as event.data
            getter: info['getter']
          },
          function(evt, data)
          {
            // Prevent bubbling to parent DOM elements. Other event handlers will still be called
            evt.stopPropagation();
            
            var nameValues = evt.data.getter(evt, data);
            
            tracker.suspend();
            
            try
            {
              for (var name in nameValues)
              {
                var expr = bindingMap[name];
                
                if (expr)
                {
                  var target = oj.ComponentBinding._evaluatePropertyExpression(bindingMap[name], name, attributeEvaluatorCache, 
                                                            bindingContext, true);
                  
                  oj.ComponentBinding._writeValueToProperty(name, 
                                                            target, 
                                                            nameValues[name],
                                                            bindingMap[name],
                                                            bindingContext,
                                                            cachedPropertyExpressionWriters);
                }
              }
            }
            finally
            {
              tracker.resume();
            }
          }
        );
      }
      
      break;  
    }
  }
      
};

/**
 * @private
 */
oj.ComponentBinding._getPropertyWriterExpression = function(expression)
{ 
  var reserveddWords = ["true", "false", "null", "undefined"];
  
  if (expression == null || reserveddWords.indexOf(expression) >= 0)
  {
    return null;
  }

  // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
  // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
  // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
  var assignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

  var match = expression.match(assignmentTarget);
  
  if (match === null)
  {
    return null;
  }
  
  var target = match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
  
  return 'function(v){' + target + '=v;}';
};

/**
 * @private
 */
oj.ComponentBinding._writeValueToProperty = function(name, property, value,
                                                     propertyExpression,
                                                     bindingContext, 
                                                     cachedPropertyExpressionWriters)
{  
  if (property == null || !ko.isObservable(property))
  {    
    var func = oj.ComponentBinding._evaluatePropertyExpression(
      function()
      {
        return oj.ComponentBinding._getPropertyWriterExpression(propertyExpression);
      },
      name, 
      cachedPropertyExpressionWriters, 
      bindingContext,
      true);
    
    if (func)
    {
      func(value);
    }
  
  }
  else if (ko.isWriteableObservable(property))
  {
    property(value);
  }
};


/**
 * @private
 */
oj.ComponentBinding._toJS = function(prop) 
{
  // ko.toJS creates a cloned object for both plain javascript objects and Object subclasses. We need to avoid it
  // for the latter case to ensure that complex Model objects can be used as binding properties without being cloned
  
  prop = ko.utils.unwrapObservable(prop);
  
  if ((Array.isArray(prop) || oj.CollectionUtils.isPlainObject(prop)) && prop['ojConvertToJS'])
  {
    prop = ko.toJS(prop);
  }

  return prop;
};

/**
 * @private
 */
oj.ComponentBinding._extractDotNotationOptions = function(options)
{
  var mutationOptions = {};
  
  for (var opt in options)
  {
    if (opt.indexOf('.') >= 0)
    {
      mutationOptions[opt] = options[opt];
    }
  }
  
  for (var mo in mutationOptions)
  {
    delete options[mo];
  }
  
  return mutationOptions;
};

/**
 * @private
 */
oj.ComponentBinding._deliverCreateDestroyEventToManagedProps = function(isCreate, 
                    managedAttrMap, element, comp, valueAccessor, allBindingsAccessor, bindingContext)
{
  var props = Object.keys(managedAttrMap);
  for (var i=0; i<props.length; i++)
  {
    var prop = props[i];
    var entry = managedAttrMap[prop];
    var callback = isCreate ? entry.afterCreate : entry.beforeDestroy;
    
    if (callback)
    {
      callback(prop, element, comp, valueAccessor, allBindingsAccessor, bindingContext);
    }
  }
  
};

/**
 * @private
 */
oj.ComponentBinding.__getKnockoutVersion = function() {
    if (oj.__isAmdLoaderPresent() && ko) {
        return ko.version;
    };
    return "";
};

/**
 * @private
 * @constructor
 * Global Change Queue Implementation
 * The queue is used to delay component updates until all model changes have been propagated
 * This is a private class that does not need to be xported
 */
function GlobalChangeQueue()
{
  this.Init();
}

// Subclass from oj.Object 
oj.Object.createSubclass(GlobalChangeQueue, oj.Object, "ComponentBinding.GlobalChangeQueue");

GlobalChangeQueue.prototype.Init = function()
{
  GlobalChangeQueue.superclass.Init.call(this);
  this._trackers = [];
  this._queue = [];
};

GlobalChangeQueue.prototype.registerComponentChanges = function(tracker)
{
  if (this._trackers.indexOf(tracker) === -1)
  {
    this._trackers.push(tracker);
    if (!this._delayTimer)
    {
      this._delayTimer = setTimeout(oj.Object.createCallback(this, this._deliverChangesImpl), 1);
    }
  }
};

GlobalChangeQueue.prototype.removeComponentChanges = function(tracker)
{
  var index = this._trackers.indexOf(tracker);
  if (index >= 0)
  {
    this._trackers.splice(index, 1);
  }
};

GlobalChangeQueue.prototype.deliverChanges = function()
{
  if (this._delayTimer)
  {
    clearTimeout(this._delayTimer);
  }
  this._deliverChangesImpl();
};

GlobalChangeQueue.prototype._deliverChangesImpl = function()
{
  var i;
  this._delayTimer = null;
  var trackers = this._trackers;
  this._trackers = [];
  
 
  for (i=0; i<trackers.length; i++)
  {
    var tracker = trackers[i];
    this._queue.push({tracker: tracker, changes: tracker.flushChanges()});
  }
  
  while (this._queue.length > 0)
  {
    var record = this._queue.shift();
    record.tracker.applyChanges(record.changes);
  }
};

/**
 * @private
 * @constructor
 * Keeps track of changes for a single component
 */
function ComponentChangeTracker(component, element, queue)
{
  this.Init(component, element, queue);
}

// Subclass from oj.Object 
oj.Object.createSubclass(ComponentChangeTracker, oj.Object, "ComponentBinding.ComponentChangeTracker");

/**
 * @param {Function} component
 * @param {Element} element
 * @param {Object} queue
 */
ComponentChangeTracker.prototype.Init = function(component, element, queue)
{
  ComponentChangeTracker.superclass.Init.call(this);
  this._component = component;
  this._element = element;
  this._queue = queue;
  this._changes = {};
  this._suspendCount = 0;
};


ComponentChangeTracker.prototype.addChange = function(property, value)
{
  if (this._isSuspended() || this._disposed)
  {
    return;
  }
  this._changes[property] = value;
  this._queue.registerComponentChanges(this);
};

ComponentChangeTracker.prototype.dispose = function()
{
  this._queue.removeComponentChanges(this);
  this._disposed = true;
};

ComponentChangeTracker.prototype.resume = function()
{
  oj.Assert.assert(this._suspendCount > 0, "ComponentChangeTracker._suspendCount underflow");
  this._suspendCount -= 1;
};

ComponentChangeTracker.prototype.suspend = function()
{
  this._suspendCount += 1;
};

ComponentChangeTracker.prototype.applyChanges = function(changes)
{
  // Check if the component is still "alive"
  if (oj.Components.getWidgetConstructor(this._element) != null)
  {
    
    var mutationOptions = oj.ComponentBinding._extractDotNotationOptions(changes);
    
    var flags = {'changed' : true}; // indicates that the callee does not need to diff the value
    
    this._component("option", changes, flags); 
    for (var mo in mutationOptions)
    {
      this._component("option", mo, mutationOptions[mo], flags);
    }
  }
};

ComponentChangeTracker.prototype.flushChanges = function()
{
  var changes = this._changes;
  this._changes = {};
  return changes;
};


ComponentChangeTracker.prototype._isSuspended = function()
{
  return (this._suspendCount >= 1);
};


/**
 * @private
 */
oj.ComponentBinding._changeQueue = new GlobalChangeQueue();

/**
 * @private
 */
oj.ComponentBinding._INSTANCE = oj.ComponentBinding.create(["ojComponent", "jqueryUI"]);

/**
 * Redefine ko.removeNode, so that JET components can implement custom _destroy() behavior when
 * the cmponent's nore is being removed (see bug #19639907).
 * @private
 */
 (function()
 {
    var name = 'removeNode';
    var wrapped = ko[name];
    
    ko[name]  = function(node) 
    {
      // This module doe snot have an explicit dependency on ojcomponentcore,
      // so check for the oj.Components instance dynamically
      var ojComponents = oj.Components;
      if (ojComponents)
      {
        oj.DomUtils.setInKoRemoveNode(node);
      }
      try
      {
        wrapped(node);
      }
      finally
      {
        if (ojComponents)
        {
          oj.DomUtils.setInKoRemoveNode(null);
        }
      }
    };
 
 })();

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true, devel: true*/

// TODO: do we have JSDoc / API doc for bindings?  (Latest answer: no for now, just doc it briefly in baseComponent's contextMenu option for now.)
// TODO: split up init and update so get from DOM on init only, and update only sets it on DOM.  That way, 
//       can update observable to null, without having to additionally clear DOM attr to avoid having it restored from DOM attr.
//       Vet with Max first.
// TODO: keep binding and DOM in synch, a la disabled option in JQUI, similar to todo for contextMenu feature on JET base class.
// TODO: share code with baseComponent._setupContextMenu?  Should this have any of the configurability of that method?
//       where would shared code live?
ko.bindingHandlers['ojContextMenu'] = 
{
  'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) 
  {
    var eventNamespace = ".ojContextMenu";
    var $element = $(element);
    
    // lazily inited.  Always use the 2 getter methods, not these ivars directly.  These 2 ivars should be set and cleared in lockstep.
    var $menu; // JQ obj containing the menu element
    var _menu; // the menu component 
    
    var pressHoldTimer;
    var pressHoldThreshold = 750; // per UX spec.  Point of reference: JQ Mobile uses 750ms by default.
    var isPressHold = false; // to prevent pressHold from generating a click

    var touchInProgress = false;

    var doubleOpenTimer; // to prevent double open.  see usage below.
    var doubleOpenThreshold = 300; // made up this number.  TBD: Tweak as needed to make all platforms happy.
    var doubleOpenType = null; // "touchstart" or "contextmenu"
    
    var clickListener;

    $element
      .off( eventNamespace )
      .removeClass("oj-menu-context-menu-launcher")
      [0].removeEventListener("click", clickListener, true);
      
    $menu && $menu.off( eventNamespace );
    
    clearTimeout(pressHoldTimer);
    
    // set/unset these ivars in lockstep
    _menu = undefined;
    $menu = undefined;

    // selector like "#myMenuId", or null, else malformed
    var menuSelector = ko.utils.unwrapObservable(valueAccessor());

    if ($.type(menuSelector) !== "string")
    {
      menuSelector = element.getAttribute("contextmenu");
      if (menuSelector)
        menuSelector = "#" + menuSelector;
    }

    // Bug 19826589: lazily init the menu variables in case the Menu component is inited after the ojContextMenu binding is applied to launcher.
    // This method should be called only by getContextMenu() and getContextMenuNode().
    var setContextMenuIvars = function()
    {
      // JQ obj containing the menu element.  Empty if no element found.
      $menu = $(menuSelector).first();

      // Menu component.  undefined if $menu empty, or if its one node has no JET Menu.
      _menu = $menu.data( "oj-ojMenu" );

      if (!_menu) 
        throw new Error('"contextMenu" set to "' + menuSelector + '", which does not reference a valid JET Menu.');

      $menu.on( "oj__dismiss" + eventNamespace , function( event, ui ) {
        document.removeEventListener("keyup", preventKeyUpEventIfMenuOpen);
      });
    };
  
    var getContextMenu = function()
    {
      if (!_menu)
        setContextMenuIvars();

      return _menu;
    };
  
    var getContextMenuNode = function()
    {
      if (!$menu)
        setContextMenuIvars();
      
      return $menu;
    };

    //Bug 18745622, on Chrome preventDefault on "keyup" will avoid triggering contextmenu event 
    //which will display native contextmenu.This also need to be added on document as event target is not menu launcher.
    var preventKeyUpEventIfMenuOpen = function(event){
      if (event.which == 121 && event.shiftKey) // Shift-F10
      {
        if (getContextMenuNode().is(":visible"))
          event.preventDefault();
      }
    };

    var launch = function(event, eventType, pressHold) {
//        alert("launch() setting isPressHold to: " + pressHold);

        // ensure that pressHold doesn't result in a click.  Set this before the bailouts below.
        isPressHold = pressHold;

        var menu = getContextMenu();

        // In Mobile Safari only, mousedown fires *after* the touchend, which causes at least 2 problems:
        // 1) CM launches after 750ms (good), then disappears when lift finger (bad), because touchend --> 
        // mousedown, which calls Menu's "clikAway" mousedown listener, which dismisses Menu.  
        // 2) The isPressHold logic needs to reset the isPressHold ivar on any event that can start a click, 
        // including mousedown.  This problem causes the mousedown listener to incorrectly clear the ivar 
        // after a pressHold, which broke the whole mechanism.
        // SOLUTION FOR 1-2:  On each launch (at 750ms), set a one-time touchend listener that will set a 
        // var and clear it 50ms later.  While the var is set, both mousedown listeners can disregard the 
        // mousedown.  Make the var a static var in Menu, since Menu's listener is static, and since this 
        // launcher component can get/set it via an (effectively static) menu method.
        // NON-SOLUTIONS:  Cancelling touchstart or touchend, via pD() and sP(), doesn't cancel iPad's mousedown.  
        // Cancelling mousedown from here doesn't work even if capture phase, since ojMenu's listener is capture phase.
        // TIMING: The following block should be before the doubleOpen bailout.
        if (isPressHold)
        {
            $element.one( "touchend" + eventNamespace, function( event ) {
                var touchendMousedownThreshold = 50; // 50ms.  Make as small as possible to prevent unwanted side effects.
                menu.__contextMenuPressHoldJustEnded(true);
                setTimeout(function() { 
                    menu.__contextMenuPressHoldJustEnded(false);
                }, touchendMousedownThreshold);
            });
        }

        // On platforms like Android Chrome where long presses already fire the contextmenu event, the pressHold 
        // logic causes the menu to open twice, once for the pressHold, once for the contextmenu.  There's no 
        // guarantee which will happen first, but as long as they happen within doubleOpenThreshold ms 
        // of each other, this logic should prevent the double open.
        // Note: Another option is a platform-specific solution where we only use pressHold for platforms that need 
        // it (that don't already fire a contextmenu event for pressHold), but architectural preference is to avoid 
        // platform-specific solutions if possible.
        if ((doubleOpenType === "touchstart" && event.type === "contextmenu")
                || (doubleOpenType === "contextmenu" && event.type === "touchstart")) 
        {
            doubleOpenType = null;
            clearTimeout(doubleOpenTimer);
            return;
        }
        
        // if a nested element or component already showed a JET context menu for this event, don't replace it with ours.
        if (event.isDefaultPrevented()) 
          return;
        
        var position = {
          "mouse": {
            "my": "start top", 
            "at": "start bottom", 
            "of": event 
          }, 
          "touch": {
            "my": "start>40 center", 
            "at": "start bottom", 
            "of": event,
            "collision": "flipfit"
          }, 
          "keyboard": {
            "my": "start top", 
            "at": "start bottom", 
            "of": "launcher"
          }
        };

        var openOptions = {"launcher": $element, "initialFocus": "menu", "position": position[eventType]};

        menu.__openingContextMenu = true; // Hack.  See todo on this ivar in Menu.open().
        menu.open(event, openOptions);
        menu.__openingContextMenu = false;
        
        // if the launch wasn't cancelled by a beforeOpen listener
        if (getContextMenuNode().is(":visible"))
        {  
          event.preventDefault(); // don't show native context menu
          document.addEventListener("keyup", preventKeyUpEventIfMenuOpen);
          
          // see double-open comments above
          if (event.type === "touchstart" || event.type === "contextmenu")
          {
            doubleOpenType = event.type;
            doubleOpenTimer = setTimeout(function(){ 
              doubleOpenType = null;
            }, doubleOpenThreshold);
          }
        }
    };
    
    // At least some of the time, the pressHold gesture also fires a click event same as a short tap.  Prevent that here.
    clickListener = function( event ) {
        if (isPressHold) {
            // For Mobile Safari capture phase at least, returning false doesn't work; must use pD() and sP() explicitly.
            // Since it's wonky, do both for good measure.
            event.preventDefault();
            event.stopPropagation();
            isPressHold = false;
            return false;
        }
    };

    // Use capture phase to make sure we cancel it before any regular bubble listeners hear it.
    element.addEventListener("click", clickListener, true);

    $element
        .on( "touchstart" + eventNamespace + " " + 
             "mousedown" + eventNamespace + " " +  
             "keydown" + eventNamespace + " ", function( event ) {
            // for mousedown-after-touchend Mobile Safari issue explained above where __contextMenuPressHoldJustEnded is set.
            if (event.type === "mousedown" && getContextMenu().__contextMenuPressHoldJustEnded())
                return;

            // reset isPressHold flag for all events that can start a click.  
            isPressHold = false;

            // start a pressHold timer on touchstart.  If not cancelled before 750ms by touchend/etc., will launch the CM.
            if (event.type === "touchstart") {
                touchInProgress = true;
                pressHoldTimer = setTimeout(launch.bind(undefined, event, "touch", true), pressHoldThreshold);
            }

            return true;
        })

        // if the touch ends before the 750ms is up, it's not a long enough tap-and-hold to show the CM
        .on( "touchend" + eventNamespace + " " + 
             "touchcancel" + eventNamespace, function( event ) {
            touchInProgress = false;
            clearTimeout(pressHoldTimer);
            return true;
        })
        .on( "keydown" + eventNamespace + " " + 
             "contextmenu" + eventNamespace, function( event ) {
            if (event.type === "contextmenu" // right-click.  pressHold for Android but not iOS
                    || (event.which == 121 && event.shiftKey)) // Shift-F10
            {
                var eventType = touchInProgress ? "touch" : event.type === "keydown" ? "keyboard" : "mouse";
                launch(event, eventType, false);
            }

            return true;
        })

        // Does 2 things: 
        // 1) Prevents native context menu / callout from appearing in Mobile Safari.  E.g. for links, native CM has "Open in New Tab".
        // 2) In Mobile Safari and Android Chrome, prevents tap-hold from selecting the text and showing the selection handles and (in Safari) the Copy/Define callout.
        // In UX discussion, we decided to prevent both of these things for now.  App can theme directly if they have specific needs.
        // Per comments in scss file, this suppression has issues in specific versions of Mobile Safari.
        .addClass("oj-menu-context-menu-launcher");
        
//  if (!menu)
      // TODO: Max suggested logging a warning if menu is null.  Since setting null is the way you would turn off the ContextMenu functionality, 
      // should we really log?  If so, warning or just info?
  }
};

/**
 * Returns a header renderer function executes the template specified in the binding attribute.
 * (for example, a knockout template).
 * @param {Object} bindingContext the ko binding context
 * @param {string} template the name of the template
 * @return {Function} the renderer function
 * @private
 */
function _getDataGridHeaderRenderer(bindingContext, template)
{
    return function(context)
    {
        var parent, childContext;

        parent = context['parentElement'];
        // runs the template
        // runs the template
        childContext = bindingContext['createChildContext'](context['data'], null, 
                           function(binding)
                           {
                               binding['$key'] = context['key'];
                               binding['$metadata'] = context['metadata'];
                               binding['$headerContext'] = context;
                           }
                       );
        ko['renderTemplate'](template, childContext, null, parent);

        // tell the datagrid not to do anything
        return null;
    };
}

/**
 * Returns a cell renderer function executes the template specified in the binding attribute.
 * (for example, a knockout template).
 * @param {Object} bindingContext the ko binding context
 * @param {string} template the name of the template
 * @return {Function} the renderer function
 * @private
 */
function _getDataGridCellRenderer(bindingContext, template)
{
    return function(context)
    {
        var parent, childContext;

        parent = context['parentElement'];
        // runs the template
        childContext = bindingContext['createChildContext'](context['data'], null, 
                           function(binding)
                           {
                               binding['$keys'] = context['keys'];
                               binding['$metadata'] = context['metadata'];
                               binding['$cellContext'] = context;
                           }
                       );
        ko['renderTemplate'](template, childContext, null, parent);

        // tell the datagrid not to do anything
        return null;
    };
}

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'attributes': ["header", "cell"],
  'init': function(name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext)
  {
    var row, rowTemplate, column, columnTemplate, cellTemplate;
    if (name === "header")
    {
        // find row template and creates a renderer
        row = value['row'];
        if (row != null)
        {
            rowTemplate = row['template'];
            if (rowTemplate != null)
            {
                row['renderer'] = _getDataGridHeaderRenderer(bindingContext, rowTemplate);
            }
        }

        // find column template and creates a renderer
        column = value['column'];
        if (column != null)
        {
            columnTemplate = column['template'];
            if (columnTemplate != null)
            {
                column['renderer'] = _getDataGridHeaderRenderer(bindingContext, columnTemplate);
            }
        }

        return {'header': value};
    }
    else if (name === "cell")
    {
        // find the cell template and creates a renderer
        cellTemplate = value['template'];
        if (cellTemplate != null)
        {
            value['renderer'] = _getDataGridCellRenderer(bindingContext, cellTemplate);
        }
        return {'cell': value};
    }
  },
  'update': function(name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext)
  {
    var row, rowTemplate, column, columnTemplate, cellTemplate;
    if (name === "header")
    {
        // find row template and creates a renderer
        row = value['row'];
        if (row != null)
        {
            rowTemplate = row['template'];
            if (rowTemplate != null)
            {
                row['renderer'] = _getDataGridHeaderRenderer(bindingContext, rowTemplate);
            }
        }

        // find column template and creates a renderer
        column = value['column'];
        if (column != null)
        {
            columnTemplate = column['template'];
            if (columnTemplate != null)
            {
                column['renderer'] = _getDataGridHeaderRenderer(bindingContext, columnTemplate);
            }
        }

        return {'header': value};
    }
    else if (name === "cell")
    {
        // find the cell template and creates a renderer
        cellTemplate = value['template'];
        if (cellTemplate != null)
        {
            value['renderer'] = _getDataGridCellRenderer(bindingContext, cellTemplate);
        }
        return {'cell': value};
    }
    return null;
  },
      
  'for': 'ojDataGrid'
});

function _getDiagramNodeRenderer(bindingContext, template) {
  return function (context) {
    // runs the template
    var model = bindingContext['createChildContext'](context['data']);
    ko['renderTemplate'](template, model, null, context['parentElement']);
    return null;
  };
};

function _handleManagedDiagramAttributes(name, value, bindingContext) {
  if (name === "template") {
    return {'_templateFunction': _getDiagramNodeRenderer(bindingContext, value)};
  }
  return null;
};

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes({
  'attributes': ['template'],
  'init': function (name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext) {
    return _handleManagedDiagramAttributes(name, value, bindingContext);
  },
  'update': function (name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext) {
    return _handleManagedDiagramAttributes(name, value, bindingContext);
  },
  'for': 'ojDiagram'
});
//
// Define a template source that allows the use of a knockout array (ko[])
// to provide storage for a template string.
//
// This simplifies template assignment and template usage for the user, as shown in the following example:
//
// Template Assignment:
//
//   ko.templates["myKey"] = templateText;
//
// Template Usage:
//
//   <div data-bind="template: {name: myKey}">
//
/*jslint browser: true*/

/**
 * @export
 */
oj.koStringTemplateEngine = {};

/**
 * @export
 */
oj.koStringTemplateEngine.install = function() 
{
    //define a template source that tries to key into an object first to find a template string

    if (ko.templates) return;

    var _templateText = {}; // Stores the text property for the template object.
    var _templateData = {}; // Stores the data property for the template object.

    // data = {},
    var _engine = new ko['nativeTemplateEngine']();

    /**
     *  @constructor
     *  @private
     */

    var StringTemplate = function(template) {

        this._templateName = template;

        this.text = function(value) 
	{
	    // When passed no parameters, return the template object.
            if (!value)
	    {
                return _templateText[this._templateName];
            }

            _templateText[this._templateName] = value;
        };

        this.data = function(key, value)
	{

            if (!_templateData[this._templateName]) {
		_templateData[this._templateName] = {};
            }

            if (arguments.length === 1) {
                return _templateData[this._templateName][key];
            }

            _templateData[this._templateName][key] = value;
        };
    };

    //
    // Override knockout's makeTemplateSource(), returning the new stringTemplate 
    //
    _engine['makeTemplateSource'] = function(template, templateDocument)
    {
	if (typeof template == "string") 
	{
            templateDocument = templateDocument || document;
            var elem = templateDocument.getElementById(template);

            if (elem) 
	    {
		return new ko['templateSources']['domElement'](elem);
	    }
            return new StringTemplate(template);
	}
        if ((template && (template.nodeType == 1)) || (template.nodeType == 8)) 
	{
            return new ko['templateSources']['anonymousTemplate'](template);
        }
    };

    //make the templates accessible
    // ko.templates = _templateText;
    ko.templates = _templateText;

    //make this new template engine our default engine
    ko['setTemplateEngine'](_engine);
};


/**
 * Returns a renderer function executes the template specified in the binding attribute.
 * (for example, a knockout template).
 * @param {Object} bindingContext the ko binding context
 * @param {string} template the name of the template
 * @return {Function} the renderer function
 * @private
 */
function _getListViewItemRenderer(bindingContext, template)
{
    return function(context)
    {
        var parent, childContext;

        parent = context['parentElement'];
        // runs the template
        childContext = bindingContext['createChildContext'](context['data'], null, 
                           function(binding)
                           {
                               binding['$itemContext'] = context;
                           }
                       );
        ko['renderTemplate'](template, childContext, null, parent, "replaceNode");

        // tell the listview not to do anything
        return null;
    };
}

/**
 * Common method to handle managed attributes for both init and update
 * @param {string} name the name of the attribute
 * @param {Object} value the value of the attribute
 * @param {Object} bindingContext the ko binding context
 * @return {Object} the modified attribute
 * @private
 */
function _handleListViewManagedAttributes(name, value, bindingContext)
{
    if (name == "item")
    {
      // find the cell template and creates a renderer
      var template = value['template'];
      if (template != null)
      {
        value['renderer'] = _getListViewItemRenderer(bindingContext, template);
      }

      return {'item': value};
    }

    return null;
}

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'attributes': ["item"],
  'init': function(name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext)
  {
    var result = _handleListViewManagedAttributes(name, value, bindingContext);
    if (result != null)
        return result;
  },
  'update': function(name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext)
  {
    return _handleListViewManagedAttributes(name, value, bindingContext);
  },
      
  'for': 'ojListViewRenderer'
});

/**
 * Default declaration for ojListView
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojListView',
  'use': 'ojListViewRenderer'
});

/**
 * Default declaration for ojListView
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojNavigationList',
  'use': 'ojListViewRenderer'
});


/*jslint browser: true*/
/*
** Copyright (c) 2014, Oracle and/or its affiliates. All rights reserved.
*/


/**
 * @class Utilities for creating knockout observable to implement responsive pages.
 * @since 1.1.0
 * @expose
 */
oj.ResponsiveKnockoutUtils = {};



/**
 * <p>creates an observable that 
 * returns true or false based on a media query string.</p>
 * 
 * <p>Example:</p>
 * <pre class="prettyprint">
 * <code>
 *    var customQuery = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(
 *                                         '(min-width: 400px)');
 * </code></pre>
 * 
 * @param {string} queryString media query string, for example '(min-width: 400px)'
 * @return a knockout observable  that 
 *              returns true or false based on a media query string.
 * @expose
 * @static
 */
oj.ResponsiveKnockoutUtils.createMediaQueryObservable = function(queryString)
{

  if (queryString == null)
  {
    throw new Error("oj.ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");
  }

  var query = window.matchMedia(queryString);

  var observable = ko.observable(query.matches);

  // add a listener for future changes
  query.addListener(function(query) {
      observable(query.matches);
      //console.log("query listener called! query.matches = " + query.matches + ", size = " + (document.outerWidth || document.body.clientWidth));
  });


 
  // There is a major bug in webkit, tested on ios 7 going from
  // landscape to portrait.
  //    https://bugs.webkit.org/show_bug.cgi?id=123293
  // 
  // Basically if you use a media query in css
  // then the js matchmedia call won't work! 
  //
  // According to the bug this is known to be on webkit 538.4,
  // but I see it on 537.51 as well which is earlier, so 
  // assume the problem exists generally on safari.
  // Chrome now uses blink instead of webkit, but chrome
  // still has webkit in their user agent string, however they
  // now only change the number after "Chrome".
  
  if (navigator.userAgent.indexOf("WebKit") != -1 && 
      navigator.userAgent.indexOf("Chrome") == -1) 
  {
    $(window).resize(function() {
      //console.log("Resize called! Size = " + (document.outerWidth || document.body.clientWidth));

      // Somehow if I change some text in the dom on resize 
      // the query listener is called
      var selector = "oj-webkit-bug-123293";

      if($('body').has("." + selector).length === 0) 
      {
        // setting display: none doesn't work, so using 
        // oj-helper-hidden-accessible because this visually 
        // hides the content without using display:none. 
        // However we don't want screen readers to read 
        // this so setting aria-hidden to true.
        // @HTMLUpdateOK trusted string
        $('body').append('<div aria-hidden="true" class="oj-helper-hidden-accessible ' + selector + '">');
      }

      // @HTMLUpdateOK trusted string
      $("." + selector).text((new Date().getMilliseconds()).toString());
    });
  }
  
  return observable;
}


/**
 * This function creates a computed observable, the 
 * value of which is one of the {@link oj.ResponsiveUtils.SCREEN_RANGE} constants. 
 * For example when the width is in the 
 * range defined by the sass variable $mediumScreenRange then 
 * the observable returns <code>oj.ResponsiveUtils.SCREEN_RANGE.MD</code>, 
 * but if it's in the range defined by $largeScreenRange then 
 * it returns <code>oj.ResponsiveUtils.SCREEN_RANGE.LG</code>, etc. 
 * 
 * 
 * 
 * <p>Example:</p>
 * <pre class="prettyprint">
 * <code>
 *        // create an observable which returns the current screen range
 *        self.screenRange = oj.ResponsiveKnockoutUtils.createScreenRangeObservable();
 *
 *        self.label2 = ko.computed(function() {
 *          var range = self.screenRange();
 * 
 *          if ( oj.ResponsiveUtils.compare( 
 *                       range, oj.ResponsiveUtils.SCREEN_RANGE.MD) <= 0)
 *          {
 *            // code for when screen is in small or medium range
 *          }
 *          else if (range == oj.ResponsiveUtils.SCREEN_RANGE.XL)
 *          {
 *            // code for when screen is in XL range
 *          }
 *        });
 * </code></pre>
 *
 * @return a knockout observable the value of which is one of the
 *  screen range constants, for example oj.ResponsiveUtils.SCREEN_RANGE.MD
 * @expose
 * @static
 */
oj.ResponsiveKnockoutUtils.createScreenRangeObservable = function()
{
  // queryies
  var xxlQuery = oj.ResponsiveUtils.getFrameworkQuery(
                                oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XXL_UP);

  var xlQuery = oj.ResponsiveUtils.getFrameworkQuery(
                                oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XL_UP);

  var lgQuery = oj.ResponsiveUtils.getFrameworkQuery(
                                oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP);

  var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(
                                oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);

  var smQuery = oj.ResponsiveUtils.getFrameworkQuery(
                                oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_UP);



  // observables
  var xxlObservable = xxlQuery == null ? 
                      null : 
                      oj.ResponsiveKnockoutUtils.createMediaQueryObservable(xxlQuery);

  var xlObservable = xlQuery == null ? 
                     null : 
                     oj.ResponsiveKnockoutUtils.createMediaQueryObservable(xlQuery);

  var lgObservable = lgQuery == null ? 
                     null : 
                     oj.ResponsiveKnockoutUtils.createMediaQueryObservable(lgQuery);

  var mdObservable = mdQuery == null ? 
                     null : 
                     oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

  var smObservable = smQuery == null ? 
                     null : 
                     oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);


  return ko.computed(function() {
    if (xxlObservable && xxlObservable())
      return oj.ResponsiveUtils.SCREEN_RANGE.XXL; 

    if (xlObservable && xlObservable())
      return oj.ResponsiveUtils.SCREEN_RANGE.XL; 

    if (lgObservable && lgObservable())
      return oj.ResponsiveUtils.SCREEN_RANGE.LG; 

    if (mdObservable && mdObservable())
      return oj.ResponsiveUtils.SCREEN_RANGE.MD; 

    if (smObservable && smObservable())
      return oj.ResponsiveUtils.SCREEN_RANGE.SM; 

    throw new Error(" NO MATCH in oj.ResponsiveKnockoutUtils.createScreenRangeObservable");

  });
}

/*jslint browser: true, devel: true*/

/** 
 * @private
 * @const
 */
var _COLUMNS_ATTR = 'columns';

/** 
 * @private
 * @const
 */
var _COLUMNS_DEFAULT_ATTR = 'columnsDefault';

/** 
 * The row template will be used to render the row elements. 
 * The row, status, and component objects will be available 
 * in the template context.
 * @private
 * @const
 */
var _ROW_TEMPLATE_ATTR = 'rowTemplate';

/**
 * Create and return a renderer which the component will call. That renderer
 * will render the template.
 * @param {Object} bindingContext  Binding Context
 * @param {string} type  'cell' or 'header' or 'row'
 * @param {string} template  template name
 * @return {Object} Renderer
 * @private
 */
function _getTableColumnTemplateRenderer(bindingContext, type, template)
{
  var rendererOption = {};
  (function(template, type) {
    rendererOption = function(params) {
      var childContext = null;
      var parentElement = null;
      if (type == 'header')
      {
        // calling bindingContext.extend() creates a context with 
        // new properties without adding extra level to the parent hierarchy
        childContext = bindingContext['extend']({'$columnIndex': params['columnIndex'],
                                                 '$headerContext': params['headerContext'],
                                                 '$data': params['data']});
        parentElement = params['headerContext']['parentElement'];
      }
      else if (type == 'cell')
      {
        var childData = params['row'];
        childContext = bindingContext['createChildContext'](childData, null,
          function(binding)
          {
            binding['$columnIndex'] = params['columnIndex'];
            binding['$cellContext'] = params['cellContext'];
          }
        );
        parentElement = params['cellContext']['parentElement'];
      }
      if (type == 'footer')
      {
        // calling bindingContext.extend() creates a context with 
        // new properties without adding extra level to the parent hierarchy
        childContext = bindingContext['extend']({'$columnIndex': params['columnIndex'],
                                                 '$footerContext': params['footerContext']});
        parentElement = params['footerContext']['parentElement'];
      }
      ko['renderTemplate'](template, childContext, null, parentElement, 'replaceNode');
    };
  }(template, type));

  return rendererOption;
}

/**
 * Create and return a renderer which the component will call. That renderer
 * will render the template.
 * @param {string} template  template name
 * @return {Object} Renderer
 * @private
 */
function _getTableRowTemplateRenderer(bindingContext, template)
{
  return function(params) {
    var childData = params['row'];
    var childContext = bindingContext['createChildContext'](childData, null,
      function(binding)
      {
        binding['$rowContext'] = params['rowContext'];
      }
    );
    ko['renderTemplate'](template, childContext, null, params['rowContext']['parentElement'], 'replaceNode');
  };
}

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
  {
    'attributes': [_COLUMNS_ATTR, _COLUMNS_DEFAULT_ATTR, _ROW_TEMPLATE_ATTR],
    'init': function(name, value, element, widgetConstructor, valueAccessor,
      allBindingsAccessor, bindingContext)
    {
      if (name == _COLUMNS_ATTR || name == _COLUMNS_DEFAULT_ATTR)
      {
        var i, template, footerTemplate, headerTemplate;
        for (i = 0; i < value.length; i++)
        {
          var column = value[i];
          template = column['template'];
          footerTemplate = column['footerTemplate'];
          headerTemplate = column['headerTemplate'];

          if (template != null)
          {
            column['renderer'] = _getTableColumnTemplateRenderer(bindingContext, 'cell', template);
          }
          if (footerTemplate != null)
          {
            column['footerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'footer', footerTemplate);
          }
          if (headerTemplate != null)
          {
            column['headerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'header', headerTemplate);
          }
        }
        if (name == _COLUMNS_ATTR)
        {
          return {'columns': value};
        }
        else
        {
          return {'columnsDefault': value};
        }
      }
      else if (name == _ROW_TEMPLATE_ATTR)
      {
        return {'rowRenderer': _getTableRowTemplateRenderer(bindingContext, value)};
      }
    },
    'update': function(name, value, element, widgetConstructor, valueAccessor,
      allBindingsAccessor, bindingContext)
    {
      if (name == _COLUMNS_ATTR || name == _COLUMNS_DEFAULT_ATTR)
      {
        var i, template, footerTemplate, headerTemplate;
        for (i = 0; i < value.length; i++)
        {
          var column = value[i];
          template = column['template'];
          footerTemplate = column['footerTemplate'];
          headerTemplate = column['headerTemplate'];

          if (template != null)
          {
            column['renderer'] = _getTableColumnTemplateRenderer(bindingContext, 'cell', template);
          }
          if (footerTemplate != null)
          {
            column['footerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'footer', footerTemplate);
          }
          if (headerTemplate != null)
          {
            column['headerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'header', headerTemplate);
          }
        }
        if (name == _COLUMNS_ATTR)
        {
          widgetConstructor({'columns': value});
        }
        else
        {
          widgetConstructor({'columnsDefault': value});
        }
      }
      else if (name == _ROW_TEMPLATE_ATTR)
      {
        return {'rowRenderer': _getTableRowTemplateRenderer(bindingContext, value)};
      }
      return null;
    },
    'for': 'ojTable'
  });

/**
 * Returns a data layer renderer function and executes the template specified in 
 * the binding attribute. (for example, a knockout template).
 * @param {Object} bindingContext the ko binding context
 * @param {string} template the name of the template
 * @return {Function} the renderer function
 * @private
 */
function _getDataLayerRenderer(bindingContext, template) {
  return function (context) {
    // runs the template
    var model = bindingContext['createChildContext'](context['data']);
    ko['renderTemplate'](template, model, null, context['parentElement']);
    return null;
  };
}

/**
 * Common method to handle managed attributes for both init and update
 * @param {string} name the name of the attribute
 * @param {Object} value the value of the attribute
 * @param {Object} bindingContext the ko binding context
 * @return {Object} the modified attribute
 * @private
 */
function _handleManagedAttributes(name, value, bindingContext) {
  if (name === "areaLayers") {
    for (var i = 0; i < value.length; i++) {
      var areaDataLayer = value[i]['areaDataLayer'];
      if (areaDataLayer) {
        var template = areaDataLayer['template'];
        if (template != null) {
          areaDataLayer['_templateRenderer'] = _getDataLayerRenderer(bindingContext, template);
        }
      }
    }
    return {'areaLayers': value};
  }
  else if (name === "pointDataLayers") {
    for (var i = 0; i < value.length; i++) {
      var template = value[i]['template'];
      if (template != null) {
        value[i]['_templateRenderer'] = _getDataLayerRenderer(bindingContext, template);
      }
    }
    return {'pointDataLayers': value};
  }
  return null;
}

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes({
  'attributes': ["areaLayers", "pointDataLayers"],
  'init': function (name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext) {
    return _handleManagedAttributes(name, value, bindingContext);
  },
  'update': function (name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext) {
    return _handleManagedAttributes(name, value, bindingContext);
  },
  'for': 'ojThematicMap'
});

});
