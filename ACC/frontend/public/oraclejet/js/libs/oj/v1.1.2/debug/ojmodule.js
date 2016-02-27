/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'knockout', 'promise'], function(oj, ko)
{

/*
** Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.
**
**34567890123456789012345678901234567890123456789012345678901234567890123456789
*/


/**
 * ojModule Conventions
 * @namespace
 */
oj.ModuleBinding = {};

/**
 * Default configuration values
 * ojModule binding's conventions may be overridden for the entire application after the ojs/ojmodule
 * module is loaded. For example:
 * <p><code class="prettyprint">
 * oj.ModuleBinding.defaults.modelPath = 'models/';
 * </code></p>
 * Note that the default names of the {@link oj.ModuleBinding.ConventionMethods optional lifecycle methods} 
 * on the ViewModel are different from their counterparts on the {@link ojModule.LifecycleListener LifecycleListener} 
 * interface
 * @property {string} viewPath default View path. Defaults to 'text!views/'
 * @property {string} viewSuffix default View suffix. Defaults to '.html'
 * @property {string} modelPath default Model suffix. Defaults to 'viewModels/'
 * @property {string} initializeMethod name of the initialialization method
 * (see {@link oj.ModuleBinding.ConventionMethods#initialize definition})
 * @property {string} disposeMethod name of the dispose method 
 * (see {@link oj.ModuleBinding.ConventionMethods#dispose definition})
 * @property {string} activatedHandler name of the 'activated' event handler
 * (see {@link oj.ModuleBinding.ConventionMethods#handleActivated definition})
 * @property {string} attachedHandler name of the 'attached' event handler 
 * (see {@link oj.ModuleBinding.ConventionMethods#handleAttached definition})
 * @property {string} detachedHandler name of the 'detached' event handler
 * (see {@link oj.ModuleBinding.ConventionMethods#handleDetached definition})
 * @property {string} bindingsAppliedHandler name of the 'bindingsApplied' event handler
 * (see {@link oj.ModuleBinding.ConventionMethods#handleBindingsApplied definition})
 * @property {string} deactivatedHandler name of the 'deactivated' event handler
 * (see {@link oj.ModuleBinding.ConventionMethods#handleDeactivated definition})
 * @export
 * @memberof oj.ModuleBinding
 */
oj.ModuleBinding.defaults = 
{
  'viewPath': 'text!views/',
  'viewSuffix': '.html',
  'modelPath': 'viewModels/',
  'initializeMethod': 'initialize',
  'disposeMethod': 'dispose',
  'activatedHandler': 'handleActivated',
  'attachedHandler': 'handleAttached',
  'detachedHandler': 'handleDetached',
  'bindingsAppliedHandler': 'handleBindingsApplied',
  'deactivatedHandler': 'handleDeactivated'
};


(function ()
{
  ko['bindingHandlers']['ojModule'] = 
  {
    'init' : function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
    {
      var currentViewModel;
      var cache = {};
      var currentCacheKey;
      var pendingViewId = -1;
      var cacheHolder;


      var invokeModelDispose = function(model)
      {
        _invokeViewModelMethod(model, 'disposeMethod', [element, valueAccessor]);
      };
      
      var disposeAssociatedComponentViewModel = function ()
      {
        invokeModelDispose(currentViewModel);
      };
      
      var nodeDispose = function()
      {
        disposeAssociatedComponentViewModel();
        
        // call dispose() on cached models
        var keys = Object.keys(cache);
        for (var i=0; i<keys.length; i++)
        {
          var model = cache[keys[i]].model;
          invokeModelDispose(model);
        }
        
        // Knockout will call ko.cleanNode on all child nodes including the cacheHolder 
      };

      ko.utils.domNodeDisposal.addDisposeCallback(element, nodeDispose);
      
      // This function is used to interrupt Promise chains when the new view/viewModel combination is being loaded
      var checkPeningId = function(id)
      {
        if (id != pendingViewId)
        {
          throw new Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      };
      
      var initCacheHolder = function()
      {
        if (!cacheHolder)
        {
          cacheHolder = document.createElement('div');
          cacheHolder.className = "oj-helper-module-cache";
          element.appendChild(cacheHolder);
        }
      };

      ko.computed(function ()
      {
        pendingViewId++;
        var value = ko.utils.unwrapObservable(valueAccessor());

        var moduleName;
        var viewName;
        var params;
        var modelFactory;
        var viewFunction;
        var cacheKey;
        var lifecycleListener;        

        if (typeof value === 'string')
        {
          moduleName = value;
        }
        else 
        {
          moduleName = ko.utils.unwrapObservable(value['name']);
          viewName = ko.utils.unwrapObservable(value['viewName']);

          params = ko.utils.unwrapObservable(value['params']);
          
          modelFactory = ko.utils.unwrapObservable(value['viewModelFactory']);
          viewFunction = ko.utils.unwrapObservable(value['createViewFunction']);
          cacheKey = ko.utils.unwrapObservable(value['cacheKey']);
          lifecycleListener = ko.utils.unwrapObservable(value['lifecycleListener']);
        }
        
        var attachPromise = _invokeLifecycleListener(lifecycleListener, 'activated', [element, valueAccessor]);
        
        var viewPromise;
        var modelPromise;
        
        
        var cached = cacheKey == null ? null : cache[cacheKey];
        
        if (cached != null)
        {
          delete cache[cacheKey];
          viewPromise = Promise.resolve(cached.view);
          modelPromise = Promise.resolve(cached.model);
        }
        else
        {
          if (modelFactory != null)
          {
            modelPromise = ko.ignoreDependencies(modelFactory['createViewModel'], modelFactory, [params, valueAccessor]); 
          }
          
          if (modelPromise == null && moduleName != null)
          {
            modelPromise = _getRequirePromise(oj.ModuleBinding.defaults['modelPath'] + moduleName);
          }
          
          if (modelPromise != null)
          {
            // Wrap model promise to perform initialization
            modelPromise = modelPromise.then(
              function(id, viewModel)
              {
                checkPeningId(id);
                
                if (typeof viewModel === 'function')
                {
                  viewModel = new viewModel(params);
                }
                else 
                {
                  // If the function returns a value, use it as the new model instance
                  viewModel = _invokeViewModelMethod(viewModel, 'initializeMethod', [element, valueAccessor]) || viewModel;
                }
                
                return viewModel;
              }.bind(null, pendingViewId)
            );
            
            // Handle the case where the Model is responsible for creating a View
            if (viewFunction != null)
            {
              viewPromise = modelPromise.then(
                function(id, model)
                {
                  checkPeningId(id);
                  
                  var viewMethod = (model == null) ? null : model[viewFunction];
                  return (viewMethod == null ? null : viewMethod());
                }.bind(null, pendingViewId)
              ); 
            }  

          }
          if (viewPromise == null)
          {
            viewName = viewName == null ? moduleName : viewName;
            if (viewName != null)
            {
              viewPromise = _getRequirePromise(oj.ModuleBinding.defaults['viewPath'] + viewName + 
                                                                      oj.ModuleBinding.defaults['viewSuffix']);
            }
            else
            {
              throw new Error('View name must be specified');
            }
          }
          
        }
        
        if (viewPromise == null)
        {
          throw new Error('ojModule is missing a View');
        }
        
        var modelAttachPromise;
        
        if (modelPromise != null)
        {
          modelAttachPromise = modelPromise.then(
              function(id, viewModel)
              {
                checkPeningId(id);
                return _invokeViewModelMethod(viewModel, 'activatedHandler', [element, valueAccessor]);
                
              }.bind(null, pendingViewId)
          );
          
        }
       
        var masterPromise = Promise.all([viewPromise, modelPromise, attachPromise, modelAttachPromise]);
        
        masterPromise.then(
          function(id, values)
          {
            if (id != pendingViewId)
            {
              return;
            }
            
            var nodes = _getDomNodes(values[0]);
            var model = values[1];
            
            var saveInCache = false;
            var cachedNodeArray;
            
            
            if (currentCacheKey != null)
            {
              saveInCache = true;
              cachedNodeArray = [];
              initCacheHolder();
            }
            
            _removeAndPossiblyCacheChildren(element, cachedNodeArray, cacheHolder, !saveInCache);           
            
            if (pendingViewId > 0) // ensure that this is not the very first view displayed by the binding
            {
              _invokeLifecycleListener(lifecycleListener, 'detached', [element, valueAccessor, currentViewModel, cachedNodeArray]);
              _invokeViewModelMethod(currentViewModel, 'detachedHandler', [element, valueAccessor, cachedNodeArray]);
              
              _invokeLifecycleListener(lifecycleListener, 'deactivated', [element, valueAccessor, currentViewModel]);
              _invokeViewModelMethod(currentViewModel, 'deactivatedHandler', [element, valueAccessor]);
            }
            
            if (saveInCache)
            {
              _propagateSubtreeVisibilityToComponents(cachedNodeArray, false);
              cache[currentCacheKey] = {model: currentViewModel, view: cachedNodeArray};
            }
            else
            {
              disposeAssociatedComponentViewModel();
            }
  
            currentViewModel = model;
            currentCacheKey = cacheKey;
            
            // Insert new child nodes
            for (var i=0, j=nodes.length; i<j; i++)
            {
              if (!cacheHolder)
              {
                element.appendChild(nodes[i]);
              }
              else
              {
                element.insertBefore(nodes[i], cacheHolder);
              }
            }
            
            var fromCache = cached != null;
            
            if (fromCache)
            {
              _propagateSubtreeVisibilityToComponents(nodes, true);
            }
            
            _invokeLifecycleListener(lifecycleListener, 'attached', [element, valueAccessor, currentViewModel, fromCache]);
            _invokeViewModelMethod(currentViewModel, 'attachedHandler', [element, valueAccessor, fromCache]);
  
            if (!fromCache)
            {
              var childBindingContext = bindingContext['createChildContext'](model,
              undefined, function (ctx)
              {
                ctx['$module'] = model;
              });
    
              // Bug 21070137: instead of calling applyBindingsToDescendants(element), we have to activate
              // bindings only on the nodes we just inserted. This will avoid applying bindings to the hidden cached
              // views
              for (var n=0, l=nodes.length; n<l; n++)
              {
                var node = nodes[n];
                var type = node.nodeType;
                if (type == 1/*element*/ || type == 8/*comment*/)
                {
                  ko.applyBindings(childBindingContext, node);
                }
              }
              
              _invokeLifecycleListener(lifecycleListener, 'bindingsApplied', [element, valueAccessor, model]);
              _invokeViewModelMethod(model, 'bindingsAppliedHandler', [element, valueAccessor]);
            }
             
          }.bind(null, pendingViewId),
          
          /* reject callback */
          function(id, reason)
          {
            if (id != pendingViewId)
            {
              return;
            }
            
            oj.Logger.error(reason);
            
          }.bind(null, pendingViewId)
        
        );
        
      },
      null, 
      {disposeWhenNodeIsRemoved : element}
      );

      return {'controlsDescendantBindings' : true};
    }
  };

  /**
   * @ignore
   */
  function _isDocumentFragment(content) 
  {
    if (window['DocumentFragment'])
    {
      return content instanceof DocumentFragment;
    } 
    else 
    {
      return content && content.nodeType === 11;
    }
  };
  
  /**
   * @ignore
   */
  function _invokeLifecycleListener(listener, method, params)
  {
    if (listener && listener[method])
    {
      var data = {'element': params[0], 'valueAccessor': params[1]};
      if (params.length > 2)
      {
        data['viewModel'] = params[2];
        if (params.length > 3)
        {
          data[typeof params[3] === 'boolean' ? 'fromCache': 'cachedNodes'] = params[3];
        }
      }
      // bug 21172738: suspend dependency detection while listeners are invoked
      var ret = ko.ignoreDependencies(listener[method], listener, [data]); 
  
      return ret;
    }
  };
  
  /**
   * @ignore
   * @param {?Object} model 
   * @param {string} key 
   * @param {Array=} params
   * @return {Object|undefined}
   */
  function _invokeViewModelMethod(model, key, params)
  {
    if (model == null)
    {
      return;
    }
    var name = oj.ModuleBinding.defaults[key];
    if (name != null && model)
    {
      var handler = model[name];
      if (typeof handler === 'function')
      {
        
        var data = undefined;
        if (params)
        {
          data = {'element': params[0], 'valueAccessor': params[1]};
          if (params.length > 2)
          {
            data[typeof params[2] === 'boolean' ? 'fromCache': 'cachedNodes'] = params[2];
          }
        }
        // bug 21172738: suspend dependency detection while listeners are invoked
        var ret = ko.ignoreDependencies(handler, model, [data]);
        return ret;
      }
    }
  };
  
  /**
   * @ignore
   */
  function _removeAndPossiblyCacheChildren(node, cacheArray, cacheHolder, needsClean)
  {
    // 'Virtual' (comment) elements are not currently supported for this binding
    var child = node.firstChild;
    while (child)
    {
      var next = child.nextSibling;
      // Skip the special 'cache holder' element
      if (child !== cacheHolder)
      {       
        if (needsClean)
        {
          ko.cleanNode(child);
        }
             
        if (cacheArray) // nodes are being cached
        {
          cacheArray.push(child);
          cacheHolder.appendChild(child);
        }
        else
        {
          node.removeChild(child);
        }
      }
   
      child = next;
    }
  }
  
  
  
  /**
   * @ignore
   */
  function _propagateSubtreeVisibilityToComponents(nodeArray, visible)
  {
    if (oj.Components != null)
    {
      for (var i = 0; i<nodeArray.length; i++)
      {
        if (visible)
        {
          oj.Components.subtreeShown(nodeArray[i]);
        }
        else
        {
          oj.Components.subtreeHidden(nodeArray[i]);
        }
      }
    }
  }
  
  /**
   * @ignore 
   */
  function _getDomNodes(content)
  {
    if (typeof content === 'string')
    {
      content = ko.utils.parseHtmlFragment(content);
    }
    else if (_isDocumentFragment(content))
    {
      content = ko.utils.arrayPushAll([], content.childNodes);
    }
    else
    {
      content = ko.utils.arrayPushAll([], content);
    }
    return content;
  }
  
  /**
   * @ignore
   */
  function _getRequirePromise(module)
  {
    return new Promise(
      function(resolve, reject)
      {
        require([module],
          function(loaded)
          {
            resolve(loaded);
          },
          function()
          {
            throw new Error("ojModule failed to load " + module);
          }
        
        );
      }
    );
  };
  

})();

/**
 * A duck-typing interface that defines optional ViewModel methods that the ojModule binding will invoke by convention
 * @interface ConventionMethods
 * @memberof oj.ModuleBinding
 */

/**
 * This method may be implemented on the ViewModel to perform initialization tasks. The method will be invoked only
 * if the ViewModel factory or the AMD module returns a ViewModel instance (as opposed to a constructor function).
 * Note that this method will be invoked only once when the ViewModel is created, i.e. it will not be called when the
 * View is being brought from cache
 * 
 * @method initialize
 * @instance
 * @param {Object} info  - an object with the following key-value pairs:
 * <ul>
 * <li>'element' - DOM element where the binding is attached</li>
 * <li>'valueAccessor' - binding's value accessor</li>
 * </ul>
 * To retrieve the object passed as the 'params' option on the binding, use  
 * <code>ko.utils.unwrapObservable(info.valueAccessor()).params</code> if the entire binding value is an observable or
 * <code>ko.utils.unwrapObservable(info.valueAccessor().params)</code> if the bidning value is a plain object literal. 
 * @return {Object|undefined} - optional return value that will be used as the new ViewModel instance
 * @memberof oj.ModuleBinding.ConventionMethods
 */

/**
 * This method may be implemented by the ViewModel to perform cleanup tasks. Note that this method will be invoked only 
 * once before all binding's refernces to the ViewModel are released.
 * @method dispose
 * @instance
 * @param {Object} info  - an object with the following key-value pairs:
 * <ul>
 * <li>'element' - DOM element where the binding is attached</li>
 * <li>'valueAccessor' - binding's value accessor</li>
 * </ul>
 * @memberof oj.ModuleBinding.ConventionMethods
 */
 
/**
  * Optional ViewModel method invoked when this ViewModel is about to be used for the View transition
  * @method handleActivated
  * @instance
  * @param {Object} info  - an object with the following key-value pairs:
  * <ul>
  * <li>'element' - DOM element where the binding is attached</li>
  * <li>'valueAccessor' - binding's value accessor</li>
  * </ul>
  * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
  * the promise is resolved
  * @memberof oj.ModuleBinding.ConventionMethods
  */
 
 /**
  * Optional ViewModel method invoked after the View is inserted into the document DOM
  * @method handleAttached
  * @instance
  * @param {Object} info  - an object with the following key-value pairs:
  * <ul>
  * <li>'element' - DOM element where the binding is attached</li>
  * <li>'valueAccessor' - binding's value accessor</li>
  * <li>'fromCache ' - a boolean indicating whether the module was retrieved from cache</li>
  * </ul>
  * @memberof oj.ModuleBinding.ConventionMethods
  */
 
 /**
  * Optional ViewModel method invoked after the bidnings are applied on this View. 
  * If the current View is retrieved from cache, the bindings will not be re-applied, 
  * and this callback will not be invoked.
  * @method handleBindingsApplied
  * @instance
  * @param {Object} info  - an object with the following key-value pairs:
  * <ul>
  * <li>'element' - DOM element where the binding is attached</li>
  * <li>'valueAccessor' - binding's value accessor</li>
  * </ul>
  * @memberof oj.ModuleBinding.ConventionMethods
  */

 /**
  * Optional ViewModel method invoked after the View is removed from the document DOM
  * @method handleDetached
  * @instance
  * @param {Object} info  - an object with the following key-value pairs:
  * <ul>
  * <li>'element' - DOM element where the binding is attached</li>
  * <li>'valueAccessor' - binding's value accessor</li>
  * <li>'cachedNodes' - an Array containing cached nodes for the View (if the cache is enabled)</li>
  * </ul>
  *  @memberof oj.ModuleBinding.ConventionMethods
  */

 /**
  * Optional ViewModel method invoked when the View/ViewModel combination becomes inactive
  * @method handleDeactivated
  * @instance
  * @param {Object} info  - an object with the following key-value pairs:
  * <ul>
  * <li>'element' - DOM element where the binding is attached</li>
  * <li>'valueAccessor' - binding's value accessor</li>
  * </ul>
  * @memberof oj.ModuleBinding.ConventionMethods
  */
  
  /**
   * <p>ojModule binding for Knockout.js manages content replacement within a particular region of the page. The binding 
   * can be used to implement navigation within a region of a single-page application.</p>
   * 
   * <p>
   * <h2>Terminology</h2>
   * <ul>
   * <li>View - the HTML markup to be displayed within the page fragment. The markup can contain Knockout bindings, which 
   * will be automatically activated after the View is attached to its container.</li>
   * <li>ViewModel - optional ViewModel that will be applied by Knockout to the View</li>
   * <li>Module - a combination of View and ViewModel</li>
   * </ul>
   * </p>
   * 
   * <p>
   * <h2>Supported Features</h2>
   * <ul>
   * <li>ViewModel and View definitions loaded using require.js</li>
   * <li>Ability to provide a ViewModel by supplying a factory instance</li>
   * <li>View Caching</li>
   * <li>Ability for a ViewModel to create a View</li>
   * <li>Notifications about the lifecycle events (Module activation and deactivation, attaching and detaching DOM, 
   * applying bindings)</li>
   * </ul>
   * </p>
   * 
   * <p>
   * <h2>Examples</h2>
   * <pre class="prettyprint">
   * &lt;!-- Simple module binding with the currentCenter observable containing the name of the ViewModel, 
   *      which is also used as the name of the View -->
   * &lt;div data-bind="ojModule: currentCenter">&lt;/div>
   *
   * &lt;!-- Module binding with a LifecycleListener -->
   * &lt;div data-bind="ojModule: {name: currentCenter, lifecycleListener: moduleLifecycle}">&lt;/div>
   *
   * &lt;!-- Module binding with caching -->
   * &lt;div data-bind="ojModule: {name: currentName, cacheKey: currentName}">&lt;/div>
   * 
   * &lt;!-- View-only module binding -->
   * &lt;div data-bind="ojModule: {viewName: currentName}">&lt;/div>
   * </pre>
   * </p>
   * 
   * <p>
   * <h2>Conventions</h2>
   * <ul>
   * <li>ViewModel modules will have .js extension, and Views will have .html extension</li>
   * <li>ViewModel modules are expected to be found under the 'viewModels/' folder, and Views are expected to be found 
   * under the 'views/' folder. Both viewModels and /views folders are expected to be in the 'base' RequireJs folder 
   * (usually js/)</li>
   * <li>Optional 'initialize' and 'dispose' functions will be invoked on the ViewModel after it is created or before 
   * it is destroyed respectively. See {@link oj.ModuleBinding.ConventionMethods ConventionMethods} for method definitions</li>
   * <li>Optional lifecycle event handlers can be implemented by the ViewModel as well. 
   * See {@link oj.ModuleBinding.ConventionMethods  ConventionMethods} for method definitions</li>.
   * </ul>
   * For information to modifying the convention defaults see {@link oj.ModuleBinding}
   * </p>
   * 
   * <p>
   * <h2>ViewModel's Lifecycle</h2>
   * The instance of the ViewModel is established as follows:
   * <ol>
   * <li>If the viewModelFactory is provided, the 'starter' object is determined by resolving a Promise returned 
   * by the factory's createViewModel() method. Otherwise, the 'starter' object will be assigned the return value 
   * of the AMD module specified by the 'name' option on the binding (if present)</li>
   * <li>If the 'starter' object is a function, it will be treated as a constructor that will be invoked to create the 
   * ViewModel instance, and the 'params' object specified by the binding's 'params' option will be passed into the constructor 
   * function as a parameter. Otherwise, the {@link oj.ModuleBinding.ConventionMethods#initialize initialize convention method}
   * will be invoked on the 'starter' instance. If the method does not return anything, the 'starter' object will be treated
   * as the ViewModel instance. Otherwise, the return value will become the ViewModel instance.</li>
   * </ol>
   * ViewModel's {@link oj.ModuleBinding.ConventionMethods#dispose dispose convention method} will be invoked before binding's
   * references to the ViewModel instance are released.
   * The following lifecycle listeners are supported on a ViewModel instance as convention methods (listed in the order
   * they will be fired):
   * <ul>
   * <li>{@link oj.ModuleBinding.ConventionMethods#handleActivated handleActivated}</li>
   * <li>{@link oj.ModuleBinding.ConventionMethods#handleAttached handleAttached}</li>
   * <li>{@link oj.ModuleBinding.ConventionMethods#handleBindingsApplied handleBindingsApplied}</li>
   * <li>{@link oj.ModuleBinding.ConventionMethods#handleDetached handleDetached}</li>
   * <li>{@link oj.ModuleBinding.ConventionMethods#handleDeactivated handleDeactivated}</li>
   * </ul>
   * </p>
   * 
   * <p>
   * <h2>Acessing ViewModel Data</h2>
   * The instance of the ViewModel will be applied to the View, i.e. it will serve as View's default data object. The same
   * instance will also be available as $module (this may be useful for accessing module's ViewModel in foreach iterators).
   * For the View-only modules, the default data object will be null. Parent ViewModel will be available as $parent. 
   * </p>
   * 
   * <p>
   * <h2>Avoiding Mutiple re-renders</h2>
   * This binding keeps track of changes to each of its options. If an observable holding an option value is mutated,
   * the view will be re-rendered. One of the following approaches may be used to avoid unnecessary re-renders:
   * <ul>
   * <li>Use a single observable to store the entire binding value with all attributes:
   * <p>
   * <pre class="prettyprint">
   * this.moduleValue = ko.observable({name: 'acc_details', cacheKey:'acc'});
   * ...
   * &lt;div data-bind="ojModule: moduleValue">&lt;/div>
   * </pre>
   * </p>
   * </li>
   * <li>Use the same observable for the name and cacheKey attributes:
   * <p>
   * <pre class="prettyprint">
   * this.moduleName = ko.observable('acc_details');
   * ...
   * &lt;div data-bind="ojModule: {name: moduleName, cacheKey: moduleName}}">&lt;/div> 
   * </pre>
   * </p>
   * </li>
   * <li>Use rate-limiting for the observables referenced by the binding:
   * <p>
   * <pre class="prettyprint">
   * this.moduleName = ko.observable('acc_details').extend({ rateLimit: 1 });
   * this.cKey = ko.observable('acc').extend({ rateLimit: 1 });
   * this.vName = ko.observable('accView').extend({ rateLimit: 1 });
   * ...
   * &lt;div data-bind="ojModule: {name: moduleName, cacheKey: cKey, viewName: vName}}">&lt;/div>
   * ...
   * // Mutating multiple observables independently is OK when they use a rate limit extender
   * this.moduleName('preferences');
   * this.cKey('prefs');
   * this.vName('prefsView);
   * </pre>
   * </p>
   * </li>
   * </ul>
   * </p>
   * 
   * <p>
   * <h2>Using ojModule with Require.js</h2>
   * Request <code>ojs/ojmodule</code> module before Knockout bindings are applied
   * </p>
   * 
   * @namespace
   * @name ojModule
   */
 
   /**
   * @name Options
   * @property {string} name ViewModel name. Required if viewModelFactory parameter is not specified. The name will be
   * used to load an AMD module containing the definition of the ViewModel. If the module returns a function, it will be used
   * as a ViewModel constructor, and any other return value (including null) will be treated as a ViewModel instance.
   * If the entire binding's value is a string, it will be treated as a 'name' option.
   * If you need to create a view-only module, use the <code>viewName</code> option
   * @property {string} viewName View name. If omitted, the name of the View is assumed to be the same as the name of the 
   * VewModel.
   * @property {Object} viewModelFactory instance of the factory that implements <code>createViewModel(params, valueAccessor)</code> 
   * method. The method has to a return a Promise that will resolve to the ViewModel instance or constructor.
   * @property {Object} params object that will be passed into the ViewModel constructor or the
   * createViewModel method of the View Model factory as a parameter.
   * @property {string} createViewFunction name of the ViewModel function used to create a View. If this parameter is 
   * specified, the ViewModel will be responsible for providing the definition of the View. The function has to return 
   * a Promise that will be resolved to document fragment, an array of DOM nodes or a string containing the HTML
   * @property {string} cacheKey The key used to cache the View after it is no longer displayed. Setting this parameter will 
   * enable View caching. When the View is about t be cached, its Knockout bindings will not be deactivated when 
   * the View is removed from DOM tree. The cache will be discarded after when the window object is destroyed or 
   * when the ojModule binding instance is deactivated. Since changes to any binding option will re-render the view, 
   * it is very important that cacheKey and the rest of the options are applied atomically. Failure to do so will result in
   * a wrong cached view being retrieved. See the 'Avoiding Multiple Re-renders' section above.
   * @property {Object} lifecycleListener An instance of the object implementing one or more methods defined by the
   * {@link ojModule.LifecycleListener LifecycleListener} duck-typing interface
   * 
   * @instance
   * @memberof ojModule
   */
   
   /**
   * A duck-typing interface that defines methods for the ojModule binding's lifecycle listener. 
   * Use 'lifecycleListener' option on the ojModule binding to set the listener.
   * @interface
   * @name LifecycleListener 
   * @memberof ojModule
   */
  
   /**
    * Invoked when the binding starts loading a new View and ViewModel
    * @function activated
    * @param {Object} info  - an object with the following key-value pairs:
    * <ul>
    * <li>'element' - DOM element where the binding is attached</li>
    * <li>'valueAccessor' - binding's value accessor</li>
    * </ul>
    * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
    * the promise is resolved
    * @memberof ojModule.LifecycleListener
    * @instance
    */
    
  
   
   /**
    * Invoked after the View is inserted into the document DOM
    * @method attached
    * @param {Object} info  - an object with the following key-value pairs:
    * <ul>
    * <li>'element' - DOM element where the binding is attached</li>
    * <li>'valueAccessor' - binding's value accessor</li>
    * <li>'viewModel' - ViewModel for the View being attached</li>
    * <li>'fromCache' - a boolean indicating the view was retrieved from cache</li>
    * </ul>
    * @memberof ojModule.LifecycleListener
    * @instance
    */
  
   /**
    * Invoked after the bidnings are applied on this View. If the current View is retrieved from cache,
    * the bindings will not be re-applied, and this callback will not be invoked.
    * @method bindingsApplied
    * @param {Object} info  - an object with the following key-value pairs:
    * <ul>
    * <li>'element' - DOM element where the binding is attached</li>
    * <li>'valueAccessor' - binding's value accessor</li>
    * <li>'viewModel' - ViewModel for the View being attached</li>
    * </ul>
    * @memberof ojModule.LifecycleListener
    * @instance
    */
  
   /**
    * Invoked after the View is removed from the document DOM
    * @method detached
    * @param {Object} info  - an object with the following key-value pairs:
    * <ul>
    * <li>'element' - DOM element where the binding is attached</li>
    * <li>'valueAccessor' - binding's value accessor</li>
    * <li>'viewModel' - ViewModel for the View being detached</li>
    * <li>'cachedNodes' - an Array containing cached nodes for the View (if the cache is enabled)</li>
    * </ul>
    * @memberof ojModule.LifecycleListener
    * @instance
    */
 
   /**
    * Invoked when the View/ViewModel combination becomes inactive
    * @method deactivated
    * @param {Object} info  - an object with the following key-value pairs:
    * <ul>
    * <li>'element' - DOM element where the binding is attached</li>
    * <li>'valueAccessor' - binding's value accessor</li>
    * <li>'viewModel' - ViewModel being deactivated</li>
    * </ul>
    * @memberof ojModule.LifecycleListener
    * @instance
    */
   
   
   
  

});
