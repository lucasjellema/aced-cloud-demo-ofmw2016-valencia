/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
define(['ojs/ojcore', 'jquery'], function(oj, $)
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

/*jslint browser: true*/

/**
 * @export
 * @class oj.DataSource
 * @extends oj.EventSource
 * @classdesc Object representing data used by table and grid components
 * @property {Object} data data supported by the components
 * @param {Object} data data supported by the components
 * @constructor
 */
oj.DataSource = function(data)
{
    this.data = data;
    this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.DataSource, oj.EventSource, "oj.DataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.DataSource.prototype.Init = function()
{
    oj.DataSource.superclass.Init.call(this);
};

/**
 * Determines whether this DataSource supports the specified feature.
 * @param {string} feature the feature in which its capabilities is inquired. 
 * @return {string|null} the capability of the specified feature.  Returns null if the feature is not recognized.
 * @export
 */
oj.DataSource.prototype.getCapability = function(feature)
{
    return null;
};
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Base class for all tree structure DataSource
 * @param {Object} data data supported by the component
 * @export
 * @extends oj.DataSource
 * @constructor
 */
oj.TreeDataSource = function(data)
{
    oj.TreeDataSource.superclass.constructor.call(this, data);
};


// Subclass TreeDataSource to DataSource
oj.Object.createSubclass(oj.TreeDataSource, oj.DataSource, "oj.TreeDataSource");

/**
 * Returns the number of children for a specified parent.  If the value returned is not >= 0 then it is automatically assumed
 * that the child count is unknown.
 * @param {Object} parent the parent key.  Specify null if inquiring child count of the root.
 * @return {number} the number of children for the specified parent.
 * @export
 */
oj.TreeDataSource.prototype.getChildCount = function(parent)
{
    return -1;
};

/**
 * Fetch the children
 * @param {Object} parent the parent key.  Specify null if fetching children from the root.
 * @param {Object} range information about the range, it must contain the following properties: start, count.
 * @param {number} range.start the start index of the range in which the children are fetched.
 * @param {number} range.count the size of the range in which the children are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.NodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} options optional parameters for this operation.
 * @param {boolean=} options.queueOnly true if this fetch request is to be queued and not execute yet.  The implementation must maintain 
 *        the order of the fetch operations.  When queueOnly is false/null/undefined, any queued fetch operations are then
 *        flushed and executed in the order they are queued.  This flag is ignored if the datasource does not support batching.
 * @export
 */
oj.TreeDataSource.prototype.fetchChildren = function(parent, range, callbacks, options)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Fetch all children and their children recursively from a specified parent.
 * @param {Object} parent the parent key.  Specify null to fetch everything from the root (i.e. expand all)
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.NodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} options optional parameters for this operation.
 * @param {number=} options.start the index related to parent in which to begin fetching descendants from.  If this is not specified, then 
 * @param {number=} options.maxCount the maximum number of children to fetch.  If a non-positive number is specified, then the value is ignored and
 *        there is no maximum fetch count.
 * @export
 */
oj.TreeDataSource.prototype.fetchDescendants = function(parent, callbacks, options)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Performs a sort operation on the tree data.
 * @param {Object} criteria the sort criteria.  It must contain the following properties: key, direction
 * @param {Object} criteria.key the key identifying the attribute (column) to sort on
 *        {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @export
 */
oj.TreeDataSource.prototype.sort = function(criteria, callbacks)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Returns the current sort criteria of the tree data.
 * @return {Object} the current sort criteria.  It should contain the following properties: key, direction where
 *         criteria.key the key identifying the attribute (column) to sort on.  Value is null if it's not sorted.
 *         criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @export
 */
oj.TreeDataSource.prototype.getSortCriteria = function()
{
    return {'key': null, 'direction': 'none'};
};

/**
 * Moves a row from one location to another (different position within the same parent or a completely different parent)
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {number|string} position The position of the moved row relative to the reference row.  
 *        This can be a string: "before", "after", "inside", "first", "last", or the zero based index to position 
 *        the element at a specific point among the reference row's current children.
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @export
 */ 
oj.TreeDataSource.prototype.move = function(rowToMove, referenceRow, position, callbacks)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Checks whether a move operation is valid.
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {number|string} position The position of the moved row relative to the reference row.  
 *        This can be a string: "before", "after", "inside", "first", "last", or the zero based index to position 
 *        the element at a specific point among the reference row's current children.
 * @return {string} returns "valid" if the move is valid, "invalid" otherwise.
 * @export
 */ 
oj.TreeDataSource.prototype.moveOK = function(rowToMove, referenceRow, position)
{
    return "valid";
};

/**
 * Determines whether this TreeDataSource supports the specified feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the valid features "sort", 
 *        "move", "fetchDescendants", "batchFetch"
 * @return {string|null} the name of the feature.  Returns null if the feature is not recognized.
 *         For "sort", the valid return values are: "default", "none".  
 *         For "fetchDescendants", the valid return values are: "enable", "disable", "suboptimal".  
 *         For "move", the valid return values are: "default", "none".  
 *         For "batchFetch", the valid return values are: "enable", "disable".  
 * @export
 */
oj.TreeDataSource.prototype.getCapability = function(feature)
{
    return null;
};
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
//////////////////// _JsonTreeNodeDataSource ///////////////////////////////////

/**
 * Helper class to implement sort recursive features for tree.
 * @constructor
 * @private
 */
oj._JsonTreeNodeDataSource = function()
{
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.title = null;
    this.attr = null;
    this.leaf = null;
};

/**
 * Helper comparer method for ascending sort.
 * @private
 */
oj._JsonTreeNodeDataSource.prototype._ascending = function(key)
{
    return function(a, b) 
    {
        if (a.attr && b.attr) 
        {
            if (a.attr[key] && b.attr[key])
            {
                return a.attr[key] < b.attr[key] ? -1 : a.attr[key] === b.attr[key] ? 0 : 1;
            }
        }
        return a[key] < b[key] ? -1 : a[key] === b[key] ? 0 : 1;
    }
};

/**
 * Helper comparer method for descending sort.
 * @private
 */
oj._JsonTreeNodeDataSource.prototype._descending = function(key)
{
    return function(a, b) 
    {
        if (a.attr && b.attr) 
        {
            if (a.attr[key] && b.attr[key])
            {
                return a.attr[key] < b.attr[key] ? 1 : a.attr[key] === b.attr[key] ? 0 : -1;
            }
        }
        return a[key] < b[key] ? 1 : a[key] === b[key] ? 0 : -1;
    }
};

/**
 * Helper method for recursive sort.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key the key identifying the attribute to sort on
 *        {string} criteria.direction the sort direction, valid values are "ascending", "descending".
 * @private
 */
oj._JsonTreeNodeDataSource.prototype._sortRecursive = function(criteria)
{
    var key = criteria['key'];
    if (criteria['direction'] === 'ascending')
    {
        this.children.sort(this._ascending(key));
    }
    else if (criteria['direction'] === 'descending')
	{
		this.children.sort(this._descending(key));
	}
    for (var i = 0, l = this.children.length; i < l; i++)
    {
        this.children[i]._sortRecursive(criteria);
    }
    return this;
};

///////////// JsonTreeDataSource //////////////////   

/**
 * A json object based implementation of the TreeDataSource.
 * @param {Object} data the json object
 * @constructor
 * @export
 * @extends oj.TreeDataSource
 */
oj.JsonTreeDataSource = function(data)
{
    var tree;

    tree = new oj._JsonTreeNodeDataSource(); // that's the root node

    if (!data.id)
    {
        tree.id = "root";
    }

    this.data = this._createTreeDataSource({count:0}, tree, data);

    oj.JsonTreeDataSource.superclass.constructor.call(this, tree);
};

// Subclass from oj.TreeDataSource
oj.Object.createSubclass(oj.JsonTreeDataSource, oj.TreeDataSource, "oj.JsonTreeDataSource");

/**
 * Initial the json object based data source.
 * @export
 */
oj.JsonTreeDataSource.prototype.Init = function()
{
    // call super
    oj.JsonTreeDataSource.superclass.Init.call(this);
};

/**
 * Returns tree based structure/object from json data.
 * @param {Object} c an object to keep track of the count
 * @param {Object} target the final tree structure. 
 * @param {Object} source the json object.
 * @param {number=} depth used recursively for depth calculation.
 * @return target
 */
oj.JsonTreeDataSource.prototype._createTreeDataSource = function(c, target, source, depth)
{
    var children, node, child, prop, propr, prp, j;

    if (!depth)
    {
        depth = 0;
    }

    for (prop in source)
    {
        if (prop == "children" || (depth == 0 && source instanceof Array))
        {
            if (depth == 0 && source instanceof Array)
            {
                children = source;
            }
            else
            {
                children = source[prop];
            }

            depth++;
            for (j = 0; j < children.length; j++)
            {
                child = children[j];
                node = new oj._JsonTreeNodeDataSource();
                if (!child.id) 
                {
                    c.count++;
                    if (!child.attr) 
                    {
                        node.id = 'rid_' + c.count;
                    } 
                    else if (!child.attr.id) 
                    {
                        child.attr.id = 'rid_' + c.count;
                    }
                }
                for (propr in child)
                {
                    for (prp in node)
                    {
                        if (propr == prp && propr != "children")
                        {    
                            node[prp] = child[propr];
                        }
                        if (prp == "depth")
                        {
                            node[prp] = depth;
                        }
                    }
                }
                target.children.push(node);
                for (prp in child)
                {
                    if (prp == "children")
                    {
                        this._createTreeDataSource(c, target.children[j], child, depth);
                    }
                }
            }
        }
    }
    return target;
};

/**
 * Returns the number of children for a specified parent.  If the value returned is not >= 0 then it is automatically assumed
 * that the child count is unknown.
 * @param {Object} parentKey the parent key.  Specify null if inquiring child count of the root.
 * @return {number} the number of children for the specified parent.
 * @export
 */
oj.JsonTreeDataSource.prototype.getChildCount = function(parentKey)
{
    var parent;

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    if (parent.children)
    {
        return parent.children.length;
    }
    else
    {
        return 0;
    }
};

/**
 * Fetch the children
 * @param {Object} parentKey the parent key.  Specify null if fetching children from the root.
 * @param {Object} range information about the range, it must contain the following properties: start, count.
 * @param {number} range.start the start index of the range in which the children are fetched.
 * @param {number} range.count the size of the range in which the children are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.JsonNodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} options optional parameters for this operation.
 * @param {boolean=} options.queueOnly true if this fetch request is to be queued and not execute yet.  The implementation must maintain 
 *        the order of the fetch operations.  When queueOnly is false/null/undefined, any queued fetch operations are then
 *        flushed and executed in the order they are queued.  This flag is ignored if the datasource does not support batching.
 * @export
 */
oj.JsonTreeDataSource.prototype.fetchChildren = function(parentKey, range, callbacks, options)
{
    var i, childStart, childEnd, nodeSet, results, parent, node;

    childStart = 0;
    childEnd = 0;
    results = [];

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    if (!range)
    {
        range = [];
        range['start'] = 0;
        range['count'] = parent.children.length;
    }

    if (!range['count'])
    {
        range['count'] = parent.children.length;
    }

    if (!range['start'])
    {
        range['start'] = 0;
    }

    childStart = range['start'];
    childEnd = Math.min(parent.children.length, childStart + range['count']);

    // now populate results from data array
    for (i = childStart; i < childEnd; i += 1)
    {
        node = new oj._JsonTreeNodeDataSource();
        if(parent.children[i].attr)
        {
            node.attr = parent.children[i].attr;
        }
        if(parent.children[i].id)
        {
            node.id = parent.children[i].id;
        }
        if(parent.children[i].depth)
        {
            node.depth = parent.children[i].depth;
        }
        if(parent.children[i].title)
        {
            node.title = parent.children[i].title;
        }
        if(parent.children[i].parent)
        {
            node.parent = parent.children[i].parent;
        }
        if(parent.children[i].children.length > 0)
        {
            node.leaf = false;
        }
        else 
        {
            node.leaf = true;
        }
        results.push(node);
    }

    // invoke callback
    nodeSet = new oj.JsonNodeSet(childStart, childEnd, results, parentKey, parent.depth);

    // invoke original success callback
    if (callbacks != null && callbacks['success'] != null)
    {
        callbacks['success'].call(null, nodeSet);
    }
};

/**
 * Fetch all children and their children recursively from a specified parent.
 * @param {Object} parentKey the parent key.  Specify null to fetch everything from the root (i.e. expand all)
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.JsonNodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} maxCount the maximum number of children to fetch.  If a non-positive number is specified, then the value is ignored and
 *        there is no maximum fetch count.
 * @export
 */
oj.JsonTreeDataSource.prototype.fetchDescendants = function(parentKey, callbacks, maxCount)
{
    var range, i, childStart, childEnd, nodeSet, results, parent;

    childStart = 0;
    childEnd = 0;
    results = [];

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    range = [];
    range['start'] = 0;
    range['count'] = parent.children.length;

    childStart = range['start'];
    childEnd = Math.min(parent.children.length, childStart + range['count']);

    // now populate results from data array
    for (i = childStart; i < childEnd; i += 1)
    {       
	if(parent.children[i].children.length > 0)
        {
            parent.children[i].leaf = false;
        }
        else 
        {
            parent.children[i].leaf = true;
        }
        results.push(parent.children[i]); 
    }

    // invoke callback
    nodeSet = new oj.JsonNodeSet(0, results.length, results, parentKey, parent.depth);

    // invoke original success callback
    if (callbacks != null && callbacks['success'] != null)
    {
        callbacks['success'].call(null, nodeSet);
    }
};

/**
 * Moves a node from one location to another (different position within the same parent or a completely different parent)
 * @param {Object} nodeToMove the key of the node to move
 * @param {Object} referenceNode the key of the reference node which combined with position are used to determine 
 *        the destination of where the node should moved to.
 * @param {number|string} position The position of the moved node relative to the reference node.  
 *        This can be a string: "before", "after", "inside", "first", "last", or the zero based index to position 
 *        the element at a specific point among the reference node's current children.
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @export
 */
oj.JsonTreeDataSource.prototype.move = function(nodeToMove, referenceNode, position, callbacks)
{
    var moveNode, refNode, moveNodeKey, refNodeKey, pos, parent, index;

    pos = position;
    moveNodeKey = nodeToMove;
    refNodeKey = referenceNode;

    if ((!refNodeKey || refNodeKey == this.data.id))
    {
        if (pos != "inside")
        {
            oj.Logger.log("Error: root can not be the reference node if position equals to " + pos);
            return;
        }
        else
        {
            if (!refNodeKey)
            {
                refNodeKey = this.data.id;
            }
        }
    }

    //get node to move;
    moveNode = this._searchTreeById(null, moveNodeKey);
    //if the moveNode doesn't contain the reference node as its sub-tree the action is allowed
    if (!this._searchTreeById(moveNode, refNodeKey))
    {
        refNode = this._searchTreeById(null, refNodeKey);

        parent = this._getParentById(refNodeKey);
        //remove moveNode from the original position;
        this._removeFromTree(moveNode);
        if (pos == "inside")
        {
            this._updateDepth(moveNode, moveNode.depth - (refNode.depth + 1));
            refNode.children.push(moveNode);
        }
        else if (pos == "before")
        {
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            index = parent.children.indexOf(refNode);
            if (index > -1)
            {
                if (index != 0)
                {
                    parent.children.splice(index - 1, 0, moveNode);
                }
                else
                {
                    parent.children.unshift(moveNode);
                }
            }
        }
        else if (pos == "after")
        {
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            index = parent.children.indexOf(refNode);
            if (index > -1)
            {
                parent.children.splice(index, 0, moveNode);
            }
        }
        else if (pos == "first")
        {
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            parent.children.unshift(moveNode);
        }
        else if (pos == "last")
        {
            //update depth recursively
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            parent.children.push(moveNode);
        }

        // invoke original success callback
        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(null, this.data);
        }
    }
    else
    {
        oj.Logger.log("Error: the node to move contains the reference node as its sub-tree.");
    }
};

/**
 * Performs a sort operation on the tree data.
 * @param {Object} criteria the sort criteria.  It must contain the following properties: key, direction
 * @param {Object} criteria.key the key identifying the attribute (column) to sort on
 *        {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @export
 */
oj.JsonTreeDataSource.prototype.sort = function(criteria, callbacks)
{
    var parent, parentKey;

    parentKey = null;

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    parent._sortRecursive(criteria);

    // invoke original success callback
    if (callbacks != null && callbacks['success'] != null)
    {
        callbacks['success'].call(null, parent);
    }
};

/**
 * @param {string|number} refNodeKey
 * @param {Object=} currNode
 * @return {Object|null} the node with required key value.
 * @private
 */
oj.JsonTreeDataSource.prototype._getParentById = function(refNodeKey, currNode)
{
    var i, parent = null, parentIsFound = false;

    if ((refNodeKey == this.data.id))
    {
        return null;
    }

    if (!currNode)
    {
        currNode = this.data;
    }

    if (currNode.children && currNode.children.length > 0)
    {
        for (i = 0; i < currNode.children.length; i++)
        {
            if ((currNode.children[i].id && currNode.children[i].id == refNodeKey) || (currNode.children[i].attr && currNode.children[i].attr.id == refNodeKey))
            {
                parentIsFound = true;
                return currNode;
                break;
            }
        }
        if (!parentIsFound)
        {
            for (i = 0; i < currNode.children.length; i++)
            {
                parent = this._getParentById(refNodeKey, currNode.children[i]);
                if (parent)
                {
                    parentIsFound = true;
                    return parent;
                    break;
                }
            }

        }
    }
    return parent;
};

/**
 * Helper method to traverse through the tree and return the node with required key.
 * @param {Object|null} currChild the start tree node.
 * @param {Object|null} parentKey the node key for search.
 * @return {Object|null} the node with required key value.
 * @private
 */
oj.JsonTreeDataSource.prototype._searchTreeById = function(currChild, parentKey)
{
    var i, result = null;

    if (!currChild)
    {
        currChild = this.data;
    }

    if ((currChild.id && currChild.id == parentKey) || (currChild.attr && currChild.attr.id == parentKey))
    {
        return currChild;
    }
    else if (currChild.children != null)
    {
        for (i = 0; i < currChild.children.length; i++)
        {
            if (result)
            {
                return result;
                break;
            }
            if ((currChild.children[i].id && currChild.children[i].id == parentKey) || (currChild.children[i].attr && currChild.children[i].attr.id == parentKey))
            {
                result = currChild.children[i];
            }
            else
            {
                result = this._searchTreeById(currChild.children[i], parentKey);
            }
        }
        return result;
    }
    return result;
};

/**
 * Helper method to update the node's depth alongside with its children.
 * @param {Object} currChild the node to update.
 * @param {number} offset the difference between current and updated depth values.
 * @private
 */
oj.JsonTreeDataSource.prototype._updateDepth = function(currChild, offset)
{
    var i;

    currChild.depth = currChild.depth - offset;

    if (currChild.children && currChild.children.length != 0)
    {
        for (i = 0; i < currChild.children.length; i++)
        {
            this._updateDepth(currChild.children[i], offset);
        }
    }
};


/**
 * Helper method to remove node from the tree (based on depth value).
 * @param {Object} currChild the node to remove.
 * @private
 */
oj.JsonTreeDataSource.prototype._removeFromTree = function(currChild)
{
    var parent, index, key;

    if (currChild.id)
    {
        key = currChild.id;
    }
    else if (currChild.attr)
    {
        key = currChild.attr.id;
    }

    parent = this._getParentById(key);
    if (!parent)
    {
        parent = this.data;
    }
    index = parent.children.indexOf(currChild);
    if (index > -1)
    {
        parent.children.splice(index, 1);
    }
};

/**
 * Determines whether this TreeDataSource supports the specified feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the valid features "sort", 
 *        "move", "fetchDescendants", "batchFetch"
 * @return {string|null} the name of the feature.  Returns null if the feature is not recognized.
 *         For "sort", the valid return values are: "default", "none".  
 *         For "fetchDescendants", the valid return values are: "enable", "disable", "suboptimal".  
 *         For "move", the valid return values are: "default", "none".  
 *         For "batchFetch", the valid return values are: "enable", "disable".  
 * @export
 */
oj.JsonTreeDataSource.prototype.getCapability = function(feature)
{
    if (feature === 'fetchDescendants')
    {
        return "enable";
    }
    else if (feature === 'sort')
    {
        return "default";
    }
    else if (feature === 'batchFetch')
    {
        return "disable";
    }
    else if (feature === 'move')
    {
        return "full";
    }
    else
    {
        return null;
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
 * @export
 * @class oj.TableDataSource
 * @classdesc Abstract object representing data used by table component
 * @param {Object} data data supported by the components
 * @param {Object=} options Options for the TableDataSource
 * @constructor
 */
oj.TableDataSource = function(data, options)
{
  if (this.constructor == oj.TableDataSource)
  {
    // This should only be called by the constructors of the subclasses. If you need
    // to initialize a new TableDataSource then call the constructors of the subclasses such
    // as oj.ArrayTableDataSource or oj.CollectionTableDataSource.
    var errSummary = oj.TableDataSource._LOGGER_MSG._ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY;
    var errDetail = oj.TableDataSource._LOGGER_MSG._ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL;
    throw new Error(errSummary + '\n' + errDetail);
  }
  // Initialize
  this.data = data;
  this.options = options;
  this.isFetching = false;
  this._startIndex = 0;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.TableDataSource, oj.DataSource, "oj.TableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.Init = function()
{
  oj.TableDataSource.superclass.Init.call(this);
};

/**
 * Return the row data found at the given index.
 * 
 * @param {number} index Index for which to return the row data. 
 * @param {Object=} options Options to control the at.
 * @param {number} options.fetchSize fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
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
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.at = function(index, options)
{
  oj.Assert.failedInAbstractFunction();
  return Promise.reject();
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
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.fetch = function(options)
{
  oj.Assert.failedInAbstractFunction();
  return Promise.reject();
};

/**
 * Return the first row data whose id value is the given id
 * @param {string} id ID for which to return the row data, if found. 
 * @param {Object=} options Options to control the get.
 * @param {number} options.fetchSize fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
 * @return {Promise} Promise which resolves to a compound object which has the structure below where the id matches the given id. If none are found, resolves to null.<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>The raw row data</td></tr>
 * <tr><td><b>index</b></td><td>The index for the row</td></tr>
 * <tr><td><b>key</b></td><td>The key value for the row</td></tr>
 * </tbody>
 * </table>
 *  @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.get = function(id, options)
{
  oj.Assert.failedInAbstractFunction();
  return Promise.reject();
};

/**
 * Determines whether this TableDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.getCapability = function(feature)
{
    return null;
};

/**
 * Performs a sort on the data source. Null criteria clears the existing sort.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.sort = function(criteria)
{
  oj.Assert.failedInAbstractFunction();
  return Promise.reject();
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.totalSize = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.TableDataSource.EventType =
  {
    /** Triggered when a Row is added to a TableDataSource<p>
     * The event payload contains:<p>
     * <table cellspacing="0" style="border-collapse: collapse;">
     * <tbody>
     * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
     * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
     * <tr><td><b>indexes</b></td><td>An array of index values for the rows in post-insert sorted order</td></tr>
     * </tbody>
     * </table>
     */
    'ADD': "add",
    /** Triggered when a Row is removed from a TableDataSource<p>
     * The event payload contains:<p>
     * <table cellspacing="0" style="border-collapse: collapse;">
     * <tbody>
     * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
     * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
     * <tr><td><b>indexes</b></td><td>An array of index values for the rows in pre-remove sorted order</td></tr>
     * </tbody>
     * </table>
     */
    'REMOVE': "remove",
    /** Triggered when a TableDataSource is reset */
    'RESET': "reset",
    /** Triggered when a TableDataSource is refreshed */
    'REFRESH': "refresh",
    /** Triggered when a TableDataSource is sorted<p>
     * The event payload contains:<p>
     * <table cellspacing="0" style="border-collapse: collapse;">
     * <tbody>
     * <tr><td><b>header</b></td><td>the key of the header which was sorted on</td></tr>		 
     * <tr><td><b>direction</b></td><td>the direction of the sort ascending/descending</td></tr>
     * </tbody>
     * </table>
     */
    'SORT': "sort",
    /** Triggered when a Row's attributes are changed<p>
     * The event payload contains:<p>
     * <table cellspacing="0" style="border-collapse: collapse;">
     * <tbody>
     * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
     * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
     * <tr><td><b>indexes</b></td><td>An array of index values for the rows</td></tr>
     * </tbody>
     * </table>
     */
    'CHANGE': "change",
    /** Triggered when a TableDataSource has sent a fetch request
     * The event payload contains:<p>
     * <table cellspacing="0" style="border-collapse: collapse;">
     * <tbody>
     * <tr><td><b>startIndex</b></td><td>The start index at which the fetch was invoked</td></tr>
     * </tbody>
     * </table>
     */
    'REQUEST': "request",
    /** Triggered when a TableDataSource has been updated by a fetch<p>
     * The event payload contains:<p>
     * <table cellspacing="0" style="border-collapse: collapse;">
     * <tbody>
     * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
     * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
     * <tr><td><b>startIndex</b></td><td>The start index at which the fetch occurred</td></tr>
     * </tbody>
     * </table>
     */
    'SYNC': "sync",
    /** Triggered when an error occurred on the TableDataSource */
    'ERROR': "error"
  };

oj.TableDataSource._LOGGER_MSG =
  {
    '_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY': 'oj.TableDataSource constructor called.',
    '_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL':  'Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.',
    '_ERR_DATA_INVALID_TYPE_SUMMARY':             'Invalid data type.',
    '_ERR_DATA_INVALID_TYPE_DETAIL':              'Please specify the appropriate data type.'
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
 * @export
 * @class oj.ArrayTableDataSource
 * @extends oj.TableDataSource
 * @classdesc Object representing data used by table component
 * @param {Array|Object|function():Array} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.ArrayTableDataSource = function(data, options)
{
  // Initialize
  this.data = {};   // This was put in to keep closure happy...
  if (!(data instanceof Array) &&
      (typeof (data) != 'function' &&
       typeof (data.subscribe) != 'function'))
  {
    // we only support Array or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }
  
  if (options == null || options['idAttribute'] == null)
  {
    oj.Logger.info(oj.ArrayTableDataSource._LOGGER_MSG['_INFO_ARRAY_TABLE_DATASOURCE_IDATTR']);
  }

  oj.ArrayTableDataSource.superclass.constructor.call(this, data, options);

  this._eventHandlers = [];
  this._rows = [];

  if (data != null && data !== undefined)
  {
    this._idAttribute = null;
    if (options != null && options['idAttribute'] != null)
    {
      this._idAttribute = options['idAttribute'];
    }
    this._data = (data instanceof Array) ? data : (/** @type {Function} */(data))();
    this._rows = this._getRowArray(this._data);
    this._totalSize = this._data.length;
        
    if (!(data instanceof Array))
    {
      var self = this;
      // subscribe to observableArray arrayChange event to get individual updates
      (/** @type {{subscribe: Function}} */(data))['subscribe']
        (
          function(changes) 
          {
            var i, j;
            
            // do two passes, first for deletes and the second for adds
            var rowArray = [];
            var indexArray = [];
            for (i = 0; i < changes.length; i++)
            {
              if (changes[i]['status'] === 'deleted')
              {
                rowArray.push(changes[i].value);
              }
            }
            self._removeInternal(rowArray, null);
            
            rowArray = []; 
            indexArray = [];
            for (i = 0; i < changes.length; i++)
            {
              if (changes[i]['status'] === 'added')
              {
                rowArray.push(changes[i].value);
                indexArray.push(changes[i].index);
              }
            }
            self.add(rowArray, {'at': indexArray});
          }, null, 'arrayChange');
    }
  }

  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    this._startFetchEnabled = true;
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.ArrayTableDataSource, oj.TableDataSource, "oj.ArrayTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.Init = function()
{
  oj.ArrayTableDataSource.superclass.Init.call(this);
};

/**
 * Add a row (or array of rows) to the end
 * 
 * @param {Object} m Row object data (or array of rows) to add. These should be sets of attribute/values.
 * @param {Object=} options silent: if set, do not fire an add event<p>
 *                          at: splice the new row at the value given (at:index). If an array of rows then this should be an array of indexes <p>
 * @return {Promise} Promise object resolves to a compound object which contains an array of row data objects, an array of keys, and an array of indexes which were added triggering done when complete.<p>
 *         The structure of the resolved compound object is:<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
 * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
 * <tr><td><b>indexes</b></td><td>An array of index values for the rows</td></tr>
 * </tbody>
 * </table> 
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.add = function(m, options)
{
  options = options || {};
  var index = options['at'];

  return this._addToRowSet(m, index, options);
};

/**
 * Return the row data found at the given index.
 * 
 * @param {number} index Index for which to return the row data. 
 * @param {Object=} options Options to control the at.
 * @param {number} options.fetchSize fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
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
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.at = function(index, options)
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
 * Change a row (or array of rows), if found.
 * @param {Object} m Row object data (or array of rows) to change. These should be sets of attribute/values.
 * @param {Object=} options silent: if set, do not fire a change event<p>
 * @return {Promise} Promise object resolves to a compound object which contains an array of row data objects, an array of keys, and an array of indexes which were changed triggering done when complete.<p>
 *         The structure of the resolved compound object is:<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
 * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
 * <tr><td><b>indexes</b></td><td>An array of index values for the rows</td></tr>
 * </tbody>
 * </table> 
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.change = function(m, options)
{
  options = options || {};
  var silent = options['silent'];
  var i, row, key, changedRow, rowArray = {};
  rowArray['data'] = [];
  rowArray['keys'] = [];
  rowArray['indexes'] = [];
  
  if (!(m instanceof Array))
  {
    m = [m];
  }
  
  for (i = 0; i < m.length; i++)
  {
    row = m[i];
    
    if (row != null)
    {
      key = this._getId(row);
      changedRow = this._getInternal(key, null);
      rowArray['data'].push(row);
      rowArray['keys'].push(changedRow['key']);
      rowArray['indexes'].push(changedRow['index']);
      this._rows['data'][changedRow['index']] = row;
    }
  }
    
  if (!silent && rowArray['data'].length > 0)
  {
    oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['CHANGE'], rowArray);
  }
    
  return Promise.resolve(rowArray);
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
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  var fetchType = options['fetchType'];
  
  if (fetchType == 'init' && !this._startFetchEnabled)
  {
    return Promise.resolve();
  }
  
  return this._fetchInternal(options);
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
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.get = function(id, options)
{
  return Promise.resolve(this._getInternal(id, options));
};

/**
 * Determines whether this TableDataSource supports certain feature.
 * @override
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.getCapability = function(feature)
{
  return 'full';
};

/**
 * Remove a row (or array of rows), if found.
 * @param {Object}  m Row object data (or array of rows) to remove. These should be sets of attribute/values.
 * @param {Object=} options silent: if set, do not fire a remove event 
 * @return {Promise} Promise object resolves to a compound object which contains an array of row data objects, an array of keys, and an array of indexes which were removed triggering done when complete.<p>
 *         The structure of the resolved compound object is:<p>
 * <table>
 * <tbody>
 * <tr><td><b>data</b></td><td>An array of raw row data</td></tr>
 * <tr><td><b>keys</b></td><td>An array of key values for the rows</td></tr>
 * <tr><td><b>indexes</b></td><td>An array of index values for the rows</td></tr>
 * </tbody>
 * </table> 
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.remove = function(m, options)
{
  options = options || {};
  return this._removeInternal(m, options);
};

/**
 * Remove and replace the entire list of rows with a new set of rows, if provided. Otherwise, empty the datasource.
 * @param {Object=} data Array of row objects with which to replace the data. 
 * @param {Object=} options user options, passed to event
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.reset = function(data, options)
{
  var i;
  options = options || {};
  options['previousRows'] = this._rows;
  var silent = options['silent'];

  this._rows['data'] = [];
  this._rows['keys'] = [];
  this._rows['indexes'] = [];
  this._totalSize = 0;
    
  if (data != null)
  {
    this.add(data, {'silent' : true});
  }
  
  if (!silent)
  {
    oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['RESET'], null);
  }
  return Promise.resolve();
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
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.sort = function(criteria)
{
  if (criteria == null)
  {
    this['comparator'] = null;
    return Promise.resolve();
  }
  
  var key = criteria['key']; 
  var direction = criteria['direction'];
  var comparator = null;
  
  if (direction == 'ascending')
  {
    comparator = function(row) 
    {
      if ($.isFunction(row[key]))
      {
        return row[key]();
      }
      return row[key];
    };
  }
  else if (direction == 'descending')
  {
    comparator = function(rowA, rowB) {
      var a, b;
      if ($.isFunction(rowA[key]))
      {
        a = rowA[key]();
        b = rowB[key]();
      }
      else
      {
        a = rowA[key];
        b = rowB[key];
      }
      
      if (a === b)
      {
        return 0;
      }
      return a > b ? -1 : 1;
    };
  }
  this['comparator'] = comparator;
  this['direction'] = direction;
  var self = this;
  
  return new Promise(function(resolve, reject) {
    criteria = criteria || {};

    // Check for comparator
    if (!self._hasComparator())
    {
      return;
    }
    var comparator = self['comparator'];
    self._rows['data'].sort(function(a, b)
    {
      return oj.ArrayTableDataSource._sortFunc(a, b, comparator, self);
    });
    self._recreateKeyArray(self._rows);
    self._sorted = true;
    var result = {'header': criteria['key'], 'direction': criteria['direction']};
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SORT'], result);
    resolve(result);
  });
};

/**
 * Return the total size of data available, including server side if not local.
 * @override
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.totalSize = function()
{
  return this._totalSize;
};

oj.ArrayTableDataSource.prototype._addToRowSet = function(m, index, options)
{
  var i, j, row, key;
  options = options || {};
  var silent = options['silent'];
  var rowArray = {};
  rowArray['data'] = [];
  rowArray['keys'] = [];
  rowArray['indexes'] = [];
  
  if (!(m instanceof Array))
  {
    m = [m];
  }
  if (index != null && !(index instanceof Array))
  {
    index = [index];
  }
  
  for (i = 0; i < m.length; i++)
  {
    row = m[i];
    
    if (row != null)
    {
      key = this._getId(row);

      rowArray['data'].push(row);
      rowArray['keys'].push(key);

      if (this._sorted == true && this._rows['data'].length > 0)
      {
        var self = this;
        for (j = 0; j < this._rows['data'].length; j++)
        {
          if (oj.ArrayTableDataSource._sortFunc(row, this._rows['data'][j], this['comparator'], self) < 0)
          {
            this._rows['data'].splice(j, 0, row);
            this._rows['keys'].splice(j, 0, key);
            rowArray['indexes'].push(j);
            break;
          }
          else if (j == this._rows['data'].length - 1)
          {
            this._rows['data'].push(row);
            this._rows['keys'].push(key);
            rowArray['indexes'].push(j + 1);
            break;
          }
        }
      }
      else
      {
        if (index == null)
        { 
          this._rows['data'].push(row);
          this._rows['keys'].push(key);
          rowArray['indexes'].push(this._rows['data'].length - 1);
        }
        else
        {
          this._rows['data'].splice(index[i], 0, row);
          this._rows['keys'].splice(index[i], 0, key);
          rowArray['indexes'].push(index[i]);
        }
      }
      this._totalSize++;
      this._realignRowIndices();
    }
  }
  
  if (!silent && rowArray['data'].length > 0)
  {
    oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['ADD'], rowArray);
  }
  
  return Promise.resolve(rowArray);
}

oj.ArrayTableDataSource.prototype._fetchInternal = function(options)
{
  options = options || {};
  this._startFetch(options);
  var pageSize;
  try
  {
    pageSize = options['pageSize'] > 0 ? options['pageSize'] : -1;
    if (!this._startIndex)
    {
      this._startIndex = 0;
    }
    
    // re-load the rows if empty
    if (this._rows ==  null || this._rows.length == 0)
    {
      this._rows = this._getRowArray(this._data);
      this._totalSize = this._data.length;
    }
    
    this._startIndex = options['startIndex'] == null ? this._startIndex : options['startIndex'];
    var endIndex = oj.ArrayTableDataSource._getEndIndex(this._rows, this._startIndex, pageSize);
    var rowArray = [];
    var keyArray = [];
    var i;
    for (i = this._startIndex; i <= endIndex; i++)
    {
      rowArray[i - this._startIndex] = this._rows['data'][i];
      keyArray[i - this._startIndex] = this._rows['keys'][i];
    }
  }
  catch (err)
  {
    this._endFetch(options, null, err);
    return Promise.reject(err);
  }
  
  if (endIndex < this._startIndex)
  {
    // this means we have no more rows at the startIndex. So adjust our
    // startIndex down to indicate the last row
    this._startIndex = endIndex + 1;
  }
  options['pageSize'] = pageSize;
  options['startIndex'] = this._startIndex;
  options['refresh'] = true;
  var result = {'data': rowArray, 'keys': keyArray, 'startIndex': this._startIndex};
  this._endFetch(options, result, null);
  
  return Promise.resolve(result);
}

oj.ArrayTableDataSource.prototype._getInternal = function(id, options)
{
  options = options || {};
  var i, j, row, key;
  var result = null;
  for (i = 0; i < this._rows['data'].length; i++)
  {
    row = this._rows['data'][i];
    if (row !== undefined)
    {
      key = this._rows['keys'][i];
      if ($.isArray(key) && $.isArray(id))
      {
        if (key.length == id.length)
        {
          var equal = true;
          for (j = 0; j < id.length; j++)
          {
            if (key[j] != id[j])
            {
              equal = false;
              break;
            }
          }
          if (equal)
          {
            result = {'data': row, 'key': key, 'index': this._rows['indexes'][i]};
          }
        }
      }
      else if (key == id)
      {
        result = {'data': row, 'key': key, 'index': this._rows['indexes'][i]};
      }
    }
  }
  return result;
};

oj.ArrayTableDataSource.prototype._hasComparator = function()
{
  var comparator = this['comparator'];
  return comparator !== undefined && comparator !== null;
};

// Realign all the indices of the rows (after sort for example)
oj.ArrayTableDataSource.prototype._realignRowIndices = function()
{
  for (var i = 0; i < this._rows['data'].length; i++)
  {
    this._rows['indexes'][i] = i;
  }
};

oj.ArrayTableDataSource.prototype._recreateKeyArray = function(rows)
{
  var i;
  
  for (i = 0; i < rows['data'].length; i++)
  {
    rows['keys'][i] = this._getId(rows['data'][i]);
  }
};

oj.ArrayTableDataSource.prototype._removeInternal = function(m, options)
{
  var i, j, row, key, deletedRow;
  var self = this;
  options = options || {};
  var silent = options['silent'];
  var rowArray = [];
  rowArray['data'] = [];
  rowArray['keys'] = [];
  rowArray['indexes'] = [];
  
  if (!(m instanceof Array))
  {
    m = [m];
  }
  
  var sortedRowArray = [];
  for (i = 0; i < m.length; i++)
  {
    row = m[i];
    
    if (row != null)
    {
      key = this._getId(row);
      deletedRow = this._getInternal(key, null);
      sortedRowArray.push({'data': deletedRow['data'], 'key': deletedRow['key'], 'index': deletedRow['index']});
    }
  }
  sortedRowArray.sort(function(a, b) 
  {
    return a['index'] - b['index'];
  });
  
  for (i = 0; i < sortedRowArray.length; i++)
  {
    rowArray['data'].push(sortedRowArray[i]['data']);
    rowArray['keys'].push(sortedRowArray[i]['key']);
    rowArray['indexes'].push(sortedRowArray[i]['index']);
  }
  
  for (i = rowArray['indexes'].length - 1; i >=0; i--)
  {
    this._rows['data'].splice(rowArray['indexes'][i], 1);
    this._rows['keys'].splice(rowArray['indexes'][i], 1);
    this._rows['indexes'].splice(rowArray['indexes'][i], 1);
    this._totalSize--;
    this._realignRowIndices();
  }
  
  if (!silent && rowArray['data'].length > 0)
  {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REMOVE'], rowArray);
  }
      
  return Promise.resolve(rowArray);
};

oj.ArrayTableDataSource.prototype._setRow = function(index, row)
{
  this._rows[index] = row;
  row['index'] = index;
};

/**
 * Indicate starting fetch
 * @param {Object} options
 * @private
 */
oj.ArrayTableDataSource.prototype._startFetch = function(options)
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
oj.ArrayTableDataSource.prototype._endFetch = function(options, result, error)
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

oj.ArrayTableDataSource.prototype._handleRowChange = function(event)
{
  event['startIndex'] = this._startIndex;
  oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['CHANGE'], event);
};

oj.ArrayTableDataSource._compareKeys = function(keyA, keyB, direction)
{
  if (direction == 'descending')
  {
    if (keyA < keyB)
    {
      return 1;
    }
    if (keyB < keyA)
    {
      return -1;
    }
  }
  else
  {
    if (keyA > keyB)
    {
      return 1;
    }
    if (keyB > keyA)
    {
      return -1;
    }
  }
  return 0;
};

oj.ArrayTableDataSource._getEndIndex = function(rows, startIndex, pageSize)
{
  var endIndex = rows['data'].length - 1;
  
  if (pageSize > 0)
  {
    endIndex = startIndex + pageSize - 1;
    endIndex = endIndex > rows['data'].length - 1 ? rows['data'].length - 1 : endIndex;
  }
  
  return endIndex;
};

oj.ArrayTableDataSource._getKey = function(val, attr) {
  if ($.isFunction(val[attr])) {
    return val[attr]();
  }
  return val[attr];
};

oj.ArrayTableDataSource.prototype._getRowArray = function(values)
{
  var endIndex = values.length - 1;

  var rowArray = {}, i, prop;
  rowArray['data'] = [];
  rowArray['keys'] = [];
  rowArray['indexes'] = [];
  this._attributes = null;
  
  for (i = 0; i <= endIndex; i++)
  {
    var clonedRowValues = {};
    var rowValues = values[i];

    for (prop in rowValues)
    {
      if (rowValues.hasOwnProperty(prop))
      {
        clonedRowValues[prop] = rowValues[prop];
        if (i == 0)
        {
          if (this._attributes == null)
          {
            this._attributes = [];
          }
          this._attributes.push(prop);
        }
      }
    }
    rowArray['data'][i] = clonedRowValues;
    rowArray['keys'][i] = this._getId(clonedRowValues);
    rowArray['indexes'][i] = i;
  }

  return rowArray;
};

oj.ArrayTableDataSource.prototype._getId = function(row)
{
  var id;
  var idAttribute = this._getIdAttr();
  
  if ($.type(idAttribute) === 'string')
  {
    id = row[idAttribute];
  }
  else if ($.isArray(idAttribute))
  {
    var i;
    id = [];
    for (i = 0; i < idAttribute.length; i++)
    {
      id[i] =  row[idAttribute[i]];
    }
  }
  
  return id;
};

oj.ArrayTableDataSource.prototype._getIdAttr = function()
{
  if (this._idAttribute != null)
  {
    return this._idAttribute;
  }
  else
  {
    if (this._attributes.hasOwnProperty('id'))
    {
      return 'id';
    }
    else
    {
      return this._attributes;
    }
  }
};

oj.ArrayTableDataSource._sortFunc = function(a, b, comparator, self)
{
  var keyA, keyB, i, retVal;

  if ($.isFunction(comparator))
  {
    // How many args?
    if (comparator.length === 1)
    {
      // "sortBy" comparator option
      keyA = comparator.call(self, a);
      keyB = comparator.call(self, b);
      var attrs1 = oj.StringUtils.isString(keyA) ? keyA.split(",") : [keyA];
      var attrs2 = oj.StringUtils.isString(keyB) ? keyB.split(",") : [keyB];
      for (i = 0; i < attrs1.length; i++)
      {
        retVal = oj.ArrayTableDataSource._compareKeys(attrs1[i], attrs2[i], self['direction']);
        if (retVal !== 0)
        {
          return retVal;
        }
      }
      return 0;
    }
    // "sort" comparator option
    return comparator.call(self, a, b);
  }
  // String option
  if (oj.StringUtils.isString(comparator))
  {
    var attrs = comparator.split(",");

    for (i = 0; i < attrs.length; i++)
    {
      keyA = oj.ArrayTableDataSource._getKey(a, attrs[i]);
      keyB = oj.ArrayTableDataSource._getKey(b, attrs[i]);
      retVal = oj.ArrayTableDataSource._compareKeys(keyA, keyB, self['direction']);
      if (retVal !== 0)
      {
        return retVal;
      }
    }
  }
  return 0;
};

oj.ArrayTableDataSource._LOGGER_MSG =
  {
    '_INFO_ARRAY_TABLE_DATASOURCE_IDATTR': "idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields."
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
 * @export
 * @class oj.CollectionTableDataSource
 * @extends oj.TableDataSource
 * @classdesc Object representing data used by table component
 * @param {oj.Collection} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.CollectionTableDataSource = function(data, options)
{
  // Initialize
  this.data = {};   // This was put in to keep closure happy...
  if (!(data instanceof oj.Collection))
  {
    // we only support oj.Collection
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }
  
  oj.CollectionTableDataSource.superclass.constructor.call(this, data, options);

  this._collection = data;
  this._addCollectionEventListeners();
  
  this.Init();

  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    this._startFetchEnabled = true;
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.CollectionTableDataSource, oj.TableDataSource, "oj.CollectionTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.Init = function()
{
  oj.CollectionTableDataSource.superclass.Init.call(this);
};

/**
 * Return the row data found at the given index.
 * 
 * @param {number} index Index for which to return the row data. 
 * @param {Object=} options Options to control the at.
 * @param {number} options.fetchSize fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.at = function(index, options)
{
  options = options || {};
  options['deferred'] = true;
  var model = this._collection.at(index, options);
  var self = this;
  // the at() call can result in fetches
  self._isFetchingForAt = true;
  var row;
  return new Promise(function(resolve, reject) 
  {
    if (model != null)
    {
      model.then(function(resolvedModel)
      {
        self._isFetchingForAt = false;
        row = {'data': resolvedModel['attributes'], 'index': index, 'key': resolvedModel['id']};
        resolve(row);
      },
      function(e)
      {
        self._isFetchingForAt = false;
        oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ERROR'], e);
        reject(e);
      });
    }
    else
    {
      resolve(null);
    }
  });
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  var fetchType = options['fetchType'];
  
  if (fetchType == 'init' && !this._startFetchEnabled)
  {
    return Promise.resolve();
  }
  
  return this._fetchInternal(options);
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.get = function(id, options)
{
  options = options || {};
  options['deferred'] = true;
  var model = this._collection.get(id, options);
  
  var self = this;
  var row;
  return new Promise(function(resolve, reject) 
  {
    if (model != null)
    {
      model.then(function(resolvedModel)
      {
        row = {'data': resolvedModel['attributes'], 'index': resolvedModel['index'], 'key': resolvedModel['id']};
        resolve(row);
      },
      function(e)
      {
        oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ERROR'], e);
        reject(e);
      });
    }
    else
    {
      resolve(null);
    }
  });
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.sort = function(criteria)
{   
  if (criteria == null)
  {
    return Promise.resolve();
  }
  
  var self = this;
  return new Promise(function(resolve, reject) {
    self._setComparator(criteria);
    self._collection.sort(null);
    var result = {'header': criteria['key'], 'direction': criteria['direction']};
    resolve(result);
  });    
};

/**
 * Return the total size of data available, including server side if not local.
 * @override
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.totalSize = function()
{
  var totalSize = this._collection['totalResults'] >= 0 ? this._collection['totalResults'] : -1;
  
  if (totalSize > -1)
  {
    var size = this._collection.size();
    return size > totalSize ? size : totalSize;
  }
  else
  {
    if (this._fetchResultSize > 0)
    {
      totalSize = this._fetchResultSize;
    }
  }
  
  return totalSize;
};

/**
 * Add event listeners to the collection
 * @private
 */
oj.CollectionTableDataSource.prototype._addCollectionEventListeners = function()
{
  var self = this;
  this._collection.on(oj.Events.EventType['SYNC'], function(event) 
  {
    if (!(event instanceof oj.Collection))
    {
      return;
    }
    if (!self._isFetchingForAt && !self._isFetching)
    {
      var startIndex = event['offset'];
      var pageSize = event['lastFetchCount'];

      if (pageSize > 0)
      {
        self._startIndex = startIndex;
        self._pageSize = pageSize;
        
        // paged fetch
        self._isFetchingForAt = true;
        event.IterativeAt(startIndex, startIndex + pageSize).then(function(modelArray)
        {
          self._isFetchingForAt = false;
          var rowArray = [];
          var keyArray = [];
          var i;
          for (i = 0; i < modelArray.length; i++)
          {
            if (modelArray[i] != null)
            {
              rowArray.push(modelArray[i]['attributes']);
              keyArray.push(modelArray[i]['id']);
            }
          }
          var result = {'data': rowArray, 'keys': keyArray, 'startIndex': startIndex};
          self._endFetch.call(self, {'silent': false}, result, null);
        });
      }
      else
      {
        var result = self._getRowArray();
        self._endFetch.call(self, {'silent': false}, result, null);
      }
    }
  });
  this._collection.on(oj.Events.EventType['ALLADDED'], function(event, modelArray) {
    var rowArray = [];
    var keyArray = [];
    var indexArray = [];
    var i;
    for (i = 0; i < modelArray.length; i++)
    {
      rowArray.push(modelArray[i]['attributes']);
      keyArray.push(modelArray[i]['id']);
      indexArray.push(modelArray[i]['index']);
    }
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ADD'], {'data': rowArray, 'keys': keyArray, 'indexes': indexArray});
  });
  this._collection.on(oj.Events.EventType['ALLREMOVED'], function(event, modelArray) {
    var rowArray = [];
    var keyArray = [];
    var indexArray = [];
    var i;
    for (i = 0; i < modelArray.length; i++)
    {
      rowArray.push(modelArray[i]['attributes']);
      keyArray.push(modelArray[i]['id']);
      indexArray.push(modelArray[i]['index']);
    }
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REMOVE'], {'data': rowArray, 'keys': keyArray, 'indexes': indexArray});
  });
  this._collection.on(oj.Events.EventType['RESET'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['RESET'], event);
  });
  this._collection.on(oj.Events.EventType['SORT'], function(event, eventOpts) {
    if (eventOpts == null || !eventOpts['add'])
    {
      oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SORT'], event);
    }
  });
  this._collection.on(oj.Events.EventType['CHANGE'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['CHANGE'], {'data': [event['attributes']], 'keys': [event['id']], 'indexes': [event['index']]});
  });
  this._collection.on(oj.Events.EventType['DESTROY'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['DESTROY'], event);
  });
  this._collection.on(oj.Events.EventType['REFRESH'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REFRESH'], event);
  });
  this._collection.on(oj.Events.EventType['ERROR'], function(collection, xhr, options) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ERROR'], collection, xhr, options);
  });
};

oj.CollectionTableDataSource.prototype._fetchInternal = function(options)
{
  this._startFetch(options);
  options = options || {};
  var self = this;
  this._isPaged =  options['pageSize'] > 0 ? true : false;
  this._startIndex = options['startIndex'] == null ? this._startIndex : options['startIndex'];
  this._initFetch = true;
  this._pageSize = options['pageSize'] > 0 ? options['pageSize'] : -1;
  options['pageSize'] = this._pageSize;
  options['startIndex'] = this._startIndex;
  options['refresh'] = true;

  return new Promise(function (resolve, reject)
  {
    if (self._isPaged)
    {
      self._collection.setRangeLocal(self._startIndex, self._pageSize).then(function(actual) 
        {
          var rowArray = [];
          var keyArray = [];
          var i;
          for (i = 0; i < actual['models'].length; i++)
          {
            rowArray[i] = actual['models'][i]['attributes'];
            keyArray[i] = actual['models'][i]['id'];
          }
          var result = {'data': rowArray, 'keys': keyArray, 'startIndex': self._startIndex};
          
          if (actual['models'].length < self._pageSize)
          {
            // it returned less than a page of data so we're at the end
            // set the totalSize if unknown
            if (self.totalSize() < 0)
            {
              self._fetchResultSize = self._startIndex + actual['models'].length;
            }
          }
          else
          {
            self._fetchResultSize = null;
          }
          
          self._endFetch.call(self, options, result, null);
          resolve(result);
        },
        function(error) 
        {
          self._endFetch.call(self, options, null, error);
          reject(error);
        });
    }
    else
    {
      if (self._collection.size() > 0)
      {
         var result = self._getRowArray();
         self._endFetch.call(self, options, result, null);
         resolve(result);
      }
      else
      {
        self._collection.fetch({
          'success': function(collection, response, opts) 
          {
            self._collection = collection;
            var result = self._getRowArray();
            self._endFetch.call(self, options, result, null);
            resolve(result);
          },
          'error': function(collection, e, opts) 
          {
            self._collection = collection;
            self._endFetch.call(self, options, null, e);
            reject(e);
          }
        });
      }
    }
  });
};

/**
 * Indicate starting fetch
 * @param {Object} options
 * @private
 */
oj.CollectionTableDataSource.prototype._startFetch = function(options)
{
  this._isFetching = true;
  if (!options['silent'])
  {
    oj.TableDataSource.superclass.handleEvent.call(this, oj.TableDataSource.EventType['REQUEST'], {'startIndex' : options['startIndex']});
  }
};

/**
 * Indicate ending fetch
 * @param {Object} options
 * @param {Object} result Result object
 * @param {*} error Error
 * @private
 */
oj.CollectionTableDataSource.prototype._endFetch = function(options, result, error)
{
  this._isFetching = false;
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

oj.CollectionTableDataSource.prototype._setComparator = function(criteria) {
  
  if (criteria == null)
  {
    this._collection['comparator'] = null;
    return;
  }
  
  var key = criteria['key']; 
  var direction = criteria['direction'];
  var comparator = null;
  
  if (this._collection.IsVirtual()) {
      // Only strings are supported for virtual sorts
      this._collection['comparator'] = key;
      this._collection['sortDirection'] = direction === 'ascending' ? 1 : -1;
      return;
  }
  
  if (direction == 'ascending')
  {
    comparator = function(row) {
      if ($.isFunction(row.get))
      {
        return row.get(key);
      }
      else
      {
        return row[key]();
      }
    };
  }
  else if (direction == 'descending')
  {
    comparator = function(rowA, rowB) {
      var a, b;
      if ($.isFunction(rowA.get))
      {
        a = rowA.get(key);
        b = rowB.get(key);
      }
      else
      {
        a = rowA[key]();
        b = rowB[key]();
      }
      if (a === b)
      {
        return 0;
      }
      return a > b ? -1 : 1;
    };
  }
  this._collection['comparator'] = comparator;
};

oj.CollectionTableDataSource.prototype._getRowArray = function()
{
  var endIndex = this._collection.size() - 1;
  var rowArray = [];
  var keyArray = [];
  var i;
  for (i = 0; i <= endIndex; i++)
  {
    rowArray[i] = this._collection.at(i)['attributes'];
    keyArray[i] = this._collection.at(i)['id'];
  }
  return {'data': rowArray, 'keys': keyArray, 'startIndex': this._startIndex};
};
/*jslint browser: true*/
/*
** Copyright (c) 2004, 2012, Oracle and/or its affiliates. All rights reserved.
*/

/**
 * @ignore
 * @class oj.DomScroller
 * @classdesc Adds implicit highwatermark scrolling to DOM element
 * @param {Object} element Scrollable DOM element
 * @param {Object} datasource Instance of the TableDataSource
 * @param {Object=} options Options for the DomScroller<p>
 *                  <b>success</b>: a user callback called when a fetch has completed successfully after scroll to bottom. Also called with maxCount information if maxCount is reached after scroll to bottom.<br>
 *                  <b>error</b>: a user callback function called if the fetch fails. The callback is called with the failed fetch content.<br>
 *                  <b>fetchSize</b>: the fetch size. Default is 25.<br>
 *                  <b>maxCount</b>: max row count. DomScroller will not exceed this max count. Default is 500.<br>
 * @constructor
 */
oj.DomScroller = function(element, datasource, options)
{
  options = options || {};
  this._data = datasource;
  this._element = element;
  this._fetchSize = options['fetchSize'];
  this._fetchSize = this._fetchSize > 0 ? this._fetchSize : 25;
  this._maxCount = options['maxCount'];
  this._maxCount = this._maxCount > 0 ? this._maxCount : 500;
  this._rowCount = 0;
  this._successCallback = options['success'];
  this._errorCallback = options['error'];
  this._registerDataSourceEventListeners();
  
  $(this._element).on('scroll.domscroller', function(event) {
    var scrollTop = $(event.target).scrollTop();
    var maxScrollTop = $(event.target)[0].scrollHeight - $(event.target)[0].clientHeight;

    if (maxScrollTop > 0)
    {
      this._handleScrollerScrollTop(scrollTop, maxScrollTop);
    }
  }.bind(this));
};

/**
 * Destroys the dom scroller, unregister any event handlers.
 * @export
 * @expose
 * @memberof! oj.DomScroller
 * @instance
 */ 
oj.DomScroller.prototype.destroy = function()
{
  this._unregisterDataSourceEventListeners();
  $(this._element).off('scroll.domscroller');
};

/**
 * Check the viewport to see if a fetch needs to be done to fill it. Fetch if it does.
 * @return {Promise} Return a Promise which contains either the content of the fetch
 *                   or maxCount information if it has reached maxCount. Promise resolves to null if no fetch was done.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.DomScroller
 * @instance
 */
oj.DomScroller.prototype.checkViewport = function()
{
  if (this._element[0].clientHeight > 0 && 
      !this._checkOverflow())
  {
    return this._fetchMoreRows();
  }
  return Promise.resolve(null);
};

/**
 * Handle scrollTop on scroller
 * @private	
 */
oj.DomScroller.prototype._handleScrollerScrollTop = function(scrollTop, maxScrollTop)
{
  if (maxScrollTop - scrollTop <= 1)
  {
    var self = this;
    this._fetchMoreRows().then(function(result) 
    {
      if (self._successCallback != null )
      {
        self._successCallback(result);
      }
    }, this._errorCallback);
  }
};

/**
 * Check whether the scroll DOM has overflowed
 * @private	
 */
oj.DomScroller.prototype._checkOverflow = function()
{
  var element = this._element;
  
  if (element[0].scrollHeight > element[0].clientHeight)
  {
    return true;
  }
  return false;
};

/**
 * Try to fetch more rows
 * @private	
 */
oj.DomScroller.prototype._fetchMoreRows = function()
{
  if (!this._fetchPromise)
  {
    // make sure we don't exceed maxCount
    var remainingCount = this._maxCount - this._rowCount;
    if (remainingCount > 0)
    {
      var pageSize = this._fetchSize;
      var self = this;
      if (remainingCount < this._fetchSize)
      {
        pageSize = remainingCount;
      }
      var fetchPromise = this._fetchNext({'pageSize': pageSize});

      this._fetchPromise = new Promise(function(resolve, reject)
      {
        fetchPromise.then(function(result)
        {
          self._fetchPromise = null;
          
          if (result != null)
          {
            self._rowCount = result['data'].length + result['startIndex'];
            
            if (remainingCount < self._fetchSize)
            {
              result['maxCount'] = self._maxCount;
              result['maxCountLimit'] = true;
            }
          }
          resolve(result);
        });
      });
      
      return this._fetchPromise;
    }
     // we need to indicate that we've hit maxCount
    return Promise.resolve({'maxCount': this._maxCount, 'maxCountLimit': true});
  }
  else
  {
    return this._fetchPromise;
  }
};

oj.DomScroller.prototype._fetchNext = function(options)
{ 
  options = options || {};
  var pageSize = options['pageSize'];
  
  if (!this._currentStartIndex)
  {
    this._currentStartIndex = pageSize;
  }
  else
  {
    this._currentStartIndex = this._currentStartIndex + pageSize;
  }
    
  if (this._data.totalSize() == -1 || this._data.totalSize() > this._currentStartIndex)
  {
    var self = this;
    return new Promise(function(resolve, reject)
    {
      self._data.fetch({'startIndex': self._currentStartIndex, 'pageSize': pageSize}).then(function(result)
      {
        resolve(result);
      }, function (error)
      {
        reject(null);  
      });
    });
  }
  return Promise.resolve();
};

oj.DomScroller.prototype._handleDataReset = function()
{
  this._currentStartIndex = null;
  this._rowCount = 0;
}

oj.DomScroller.prototype._handleDataSync = function(event)
{
  this._currentStartIndex = event['startIndex'];
  this._rowCount = event['data'].length + this._currentStartIndex;
}

/**
 * Register event listeners which need to be registered datasource. 
 * @private
 */
oj.DomScroller.prototype._registerDataSourceEventListeners = function()
{
  // register the listeners on the datasource
  var data = this._data;
  if (data != null)
  {
    this._unregisterDataSourceEventListeners();

    this._dataSourceEventHandlers = [];
    this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['SORT'], 'eventHandler': this._handleDataReset.bind(this)});
    this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['REFRESH'], 'eventHandler': this._handleDataReset.bind(this)});
    this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['RESET'], 'eventHandler': this._handleDataReset.bind(this)});
    this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['SYNC'], 'eventHandler': this._handleDataSync.bind(this)});

    var i;
    var ev;
    for (i = 0; i < this._dataSourceEventHandlers.length; i++) {
      ev = data.on(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
      if (ev) {
          this._dataSourceEventHandlers[i]['eventHandler'] = ev;
      }
    }
  }
};

/**
 * Unregister event listeners which are registered on datasource. 
 * @private
 */
oj.DomScroller.prototype._unregisterDataSourceEventListeners = function()
{
  var data = this._data;
  // unregister the listeners on the datasource
  if (this._dataSourceEventHandlers != null && data != null)
  {
    var i;
    for (i = 0; i < this._dataSourceEventHandlers.length; i++)
      data.off(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
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
 * The interface for oj.PagingModel which should be implemented by all object instances
 * bound to the data parameter for oj.PagingControl. oj.PagingModel implementations should
 * also support event subscription by extending oj.EventSource or oj.DataSource.
 * @export
 * @interface
 */
oj.PagingModel = function()
{
};

/**
 * Get the current page
 * @return {number} The current page
 * @export
 * @expose
 * @memberof! oj.PagingModel
 * @instance
 */
oj.PagingModel.prototype.getPage = function()
{
};

/**
 * Set the current page
 * @param {number} value The current page
 * @param {Object=} options Options<p>
 *                  pageSize: The page size.<p>
 * @return {Promise} promise object triggering done when complete..
 * @export
 * @expose
 * @memberof! oj.PagingModel
 * @instance
 */
oj.PagingModel.prototype.setPage = function(value, options)
{
};

/**
 * Get the current page start index
 * @return {number} The current page start index
 * @export
 * @expose
 * @memberof! oj.PagingModel
 * @instance
 */
oj.PagingModel.prototype.getStartItemIndex = function()
{
};

/**
 * Get the current page end index
 * @return {number} The current page end index
 * @export
 * @expose
 * @memberof! oj.PagingModel
 * @instance
 */
oj.PagingModel.prototype.getEndItemIndex = function()
{
};

/**
 * Get the page count
 * @return {number} The total number of pages
 * @export
 * @expose
 * @memberof! oj.PagingModel
 * @instance
 */
oj.PagingModel.prototype.getPageCount = function()
{
};

/**
 * @export
 * Return the total number of items. Returns -1 if unknown.
 * @returns {number} total number of items
 * @expose
 * @memberof! oj.PagingModel
 * @instance
 */
oj.PagingModel.prototype.totalSize = function()
{
};

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.PagingModel.EventType =
  {
    /** Triggered before the current page has changed. <p>
     * This event is vetoable.<p>
     * The event payload contains:<p>
     * <b>page</b> The new current page
     * <b>previousPage</b> The old current page
     */
    'BEFOREPAGE': "beforePage",
    /** Triggered when the current page has changed<p>
     * The event payload contains:<p>
     * <b>page</b> The new current page
     * <b>previousPage</b> The old current page
     */
    'PAGE': "page",
    /** Triggered when the page count has changed<p>
     * The event payload contains:<p>
     * <b>pageCount</b> The new page count
     * <b>previousPageCount</b> The old page count
     */
    'PAGECOUNT': "pageCount"
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
 * @export
 * @class oj.PagingTableDataSource
 * @classdesc Object representing data used by the paging component
 * @extends oj.TableDataSource
 * @implements oj.PagingModel
 * @param {Object} dataSource
 * @param {Object|null} options Array of options for the PagingControlDataSource
 * @constructor
 */
oj.PagingTableDataSource = function(dataSource, options)
{
  // Initialize
  options = options || {};
  
  if (!(dataSource instanceof oj.TableDataSource))
  {
    // we only support Array, oj.Collection, or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }
  this.dataSource = dataSource;
  this._startIndex = 0;
  this._endIndex = 0;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.PagingTableDataSource, oj.TableDataSource, "oj.PagingTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.Init = function()
{
  oj.PagingTableDataSource.superclass.Init.call(this);
};

/**
 * Retrieves the underlying DataSource.
 * @return {Object} the underlying oj.DataSource.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getWrappedDataSource = function()
{
    return this.dataSource;
};

/**
 * Get the current page
 * @return {number} The current page
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getPage = function()
{
  if (this._fetchType == 'loadMore')
  {
    return 0;
  }
  return this._getPageFromStartIndex();
};

/**
 * Set the current page
 * @param {number} value The current page
 * @param {Object=} options Options<p>
 *                  pageSize: The page size.<p>
 * @return {Promise} promise object triggering done when complete..
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.setPage = function(value, options)
{
  options = options || {};
  value = parseInt(value, 10);
  
  try 
  {
    oj.PagingTableDataSource.superclass.handleEvent.call(this, oj.PagingModel.EventType['BEFOREPAGE'], {'page' : value, 'previousPage' : this._getPageFromStartIndex()});
  }
  catch (err)
  {
    return Promise.reject(null);
  }
  var previousPage = this._getPageFromStartIndex();
  this._pageSize = options['pageSize'] != null ? options['pageSize'] : this._pageSize;
  options['pageSize'] = this._pageSize;
  options['startIndex'] = value * this._pageSize;
  this._startIndex = options['startIndex'] == null ? this._startIndex : options['startIndex'];
  this._fetchType = 'page';
  var self = this;
  return new Promise(function(resolve, reject) 
  {
    // we only support paged fetches
    if (self._pageSize > 0)
    {
      self.dataSource.fetch(options).then(function(result)
      {
        result['startIndex'] = 0;
        self._updateEndIndex();
        oj.PagingTableDataSource.superclass.handleEvent.call(self, oj.PagingModel.EventType['PAGE'], {'page' : self._getPageFromStartIndex(), 'previousPage' : previousPage});
        resolve(null);
      },
      function(e)
      {
        self._startIndex = previousPage * self._pageSize;
        reject(null); 
      });
    }
    else
    {
      resolve(null);
    }
  });
};

/**
 * Get the current page start index
 * @return {number} The current page start index
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getStartItemIndex = function()
{
  if (this._fetchType == 'loadMore')
  {
    return 0;
  }
  return this._startIndex;
};

/**
 * Get the current page end index
 * @return {number} The current page end index
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getEndItemIndex = function()
{
  return this._endIndex;
};

/**
 * Get the page count
 * @return {number} The total number of pages
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getPageCount = function()
{
  var totalSize = this.totalSize();
  return totalSize == -1 ? -1 : Math.ceil(totalSize / this._pageSize);
};

/**** start delegated functions ****/

/**
 * Return the row data found at the given index.
 * 
 * @param {number} index Index for which to return the row data. 
 * @param {Object=} options Options to control the at.
 * @param {number} options.fetchSize fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
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
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.at = function(index, options)
{
  return this.dataSource.at(index, options);
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
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  if (options['startIndex'] == null)
  {
    // this is just a refresh call from ojTable. So treat it as a paged fetch
    return this.setPage(this.getPage());
  }
  else
  {
    this._fetchType = 'loadMore';
  }
  this._startIndex = options['startIndex'] == null ? this._startIndex : options['startIndex'];
  var pageSize = options['pageSize'] != null ? options['pageSize'] : this._pageSize;
  options['pageSize'] = pageSize;
  options['startIndex'] = this._startIndex;
  
  var self = this;
  return new Promise(function(resolve, reject) 
  {
    // we only support paged fetches
    if (pageSize > 0)
    {
      self.dataSource.fetch(options).then(function(result)
      {
        self._updateEndIndex();
        resolve(result);
      },
      function(e)
      {
        reject(e);
      });
    }
    else
    {
      resolve(null);
    }
  });
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
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.get = function(id, options)
{
  return this.dataSource.get(id, options);
};

/**
 * Determines whether this TableDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getCapability = function(feature)
{
  return this.dataSource.getCapability(feature);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @return {function(Object)} the event handler function attached to the event 
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.on = function(eventType, eventHandler)
{
  var self = this;
  var dataSource = (/** @type {{on: Function}} */ (this.dataSource));
  
  if (eventType == oj.TableDataSource.EventType['SYNC'])
  {
    var ev = function(event){self._handleSyncEvent(event, eventHandler);}
    dataSource.on(eventType, ev);
    return ev;
  }
  else if (eventType == oj.TableDataSource.EventType['ADD'] ||
           eventType == oj.TableDataSource.EventType['REMOVE'] ||
           eventType == oj.TableDataSource.EventType['CHANGE'])
  {
    var ev = function(event){self._handleRowEvent(event, eventHandler);}
    dataSource.on(eventType, ev);
    return ev;
  }
  else if (eventType == oj.TableDataSource.EventType['REFRESH'] ||
           eventType == oj.TableDataSource.EventType['RESET'])
  {
    var ev = function(event){
      self._startIndex = 0;
      eventHandler(event);
    }
    dataSource.on(eventType, ev);
    return ev;
  }
  else if (eventType == oj.PagingModel.EventType['PAGE'] ||
           eventType == oj.PagingModel.EventType['PAGECOUNT'])
  {
    oj.PagingTableDataSource.superclass.on.call(this, eventType, eventHandler);
    return eventHandler;
  }
  else
  {
    dataSource.on(eventType, eventHandler);
    return eventHandler;
  }
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.off = function(eventType, eventHandler)
{
  if (eventType == oj.PagingModel.EventType['PAGE'] ||
      eventType == oj.PagingModel.EventType['PAGECOUNT'])
  {
    oj.PagingTableDataSource.superclass.off.call(this, eventType, eventHandler);
    return eventHandler;
  }
  var dataSource = (/** @type {{off: Function}} */ (this.dataSource));
  return dataSource.off(eventType, eventHandler);
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.sort = function(criteria)
{
  return this.dataSource.sort(criteria);
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.totalSize = function()
{
  return this.dataSource.totalSize();
};

/**** end delegated functions ****/

oj.PagingTableDataSource.prototype._getPageFromStartIndex = function()
{
  if (this._pageSize > 0)
  {
    return Math.floor(this._startIndex / this._pageSize);
  }
  return 0;
}

oj.PagingTableDataSource.prototype._handleRowEvent = function(event, eventHandler)
{
  var ignoreRows = [];
  var i;
  for (i = 0; i < event['indexes'].length; i++)
  {
    var rowIdx = event['indexes'][i];
    if (rowIdx !== undefined) 
    {
      // adjust by startIndex
      rowIdx = rowIdx - this._startIndex;
      
      if (rowIdx < 0 || rowIdx >= this._startIndex + this._pageSize)
      {
        // ignore if it's not in our page range
        ignoreRows.push(i);
      }
    }
  }
  
  if (ignoreRows.length > 0)
  {
    ignoreRows.sort(function(a, b) 
    { 
      return a - b;
    });
    
    for (i = ignoreRows.length - 1; i >= 0; i--)
    {
      event['data'].splice(ignoreRows[i], 1);
      event['indexes'].splice(ignoreRows[i], 1);
      event['keys'].splice(ignoreRows[i], 1);
    }
  }
  
  this._updateEndIndex();
  
  event['startIndex'] = this._startIndex;
  eventHandler(event);
};

oj.PagingTableDataSource.prototype._handleSyncEvent = function(event, eventHandler)
{
  var eventStartIndex = event['startIndex'];
  
  if (eventStartIndex != this._startIndex)
  {
    this._startIndex = event['startIndex'];
  }
  this._updateEndIndex();
  
  if (this._fetchType == 'page')
  {
    // For paged fetches, reset the startIndex to zero since we always render
    // starting at 0
    var clonedEvent = {};
    oj.CollectionUtils.copyInto(clonedEvent, event);
    clonedEvent['startIndex'] = 0;
    eventHandler(clonedEvent);
  }
  else
  {
    eventHandler(event);
  }
};

oj.PagingTableDataSource.prototype._updateEndIndex = function()
{
  var totalSize = this.totalSize();
  this._endIndex = this._startIndex + this._pageSize - 1;
  
  if (totalSize > 0)
  {
    this._endIndex = this._endIndex > totalSize - 1 ? totalSize - 1 : this._endIndex;
  }
};

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.PagingTableDataSource.EventType =
  {
    /** Triggered when a Row is added to a PagingDataSource */
    'ADD': "add",
    /** Triggered when a Row is removed from a PagingDataSource */
    'REMOVE': "remove",
    /** Triggered when a PagingDataSource is reset */
    'RESET': "reset",
    /** Triggered when a PagingDataSource has been updated by a fetch */
    'SYNC': "sync",
    /** Triggered when a PagingDataSource has been refreshed */
    'REFRESH': "refresh",
    /** Triggered when a PagingDataSource has been sorted */
    'SORT': "sort"
  };
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * The base class for DataGridDataSource.  
 * @export
 * @extends oj.DataSource
 * @constructor
 */
oj.DataGridDataSource = function(data)
{
    // oj.DataSource would calls Init
    oj.DataGridDataSource.superclass.constructor.call(this, data);
};

// Subclass DataGridDataSource to DataSource
oj.Object.createSubclass(oj.DataGridDataSource, oj.DataSource, "oj.DataGridDataSource");

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.DataGridDataSource.prototype.getCount = function(axis)
{
    return 0;
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "exact" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "exact".
 * @export
 */
oj.DataGridDataSource.prototype.getCountPrecision = function(axis)
{
    return "exact";
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.DataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRange Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRange.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRange.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRange.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.DataGridDataSource.prototype.fetchCells = function(cellRange, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object} a Promise object which when resolved returns an object containing the keys for each axis
 * @export
 */
oj.DataGridDataSource.prototype.keys = function(indexes)
{
    oj.Assert.failedInAbstractFunction();
    return null;
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object} a Promise object which when resolved returns an object containing the index for each axis
 * @export
 */
oj.DataGridDataSource.prototype.indexes = function(keys)
{
    oj.Assert.failedInAbstractFunction();
    return null;
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.  Specifies null to reset sort state.
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.DataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Moves a row from one location to another.
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {string} position The position of the moved row relative to the reference row.  
 *        Valid values are: "before", "after" 
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */ 
oj.DataGridDataSource.prototype.move = function(rowToMove, referenceRow, position, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Checks whether a move operation is valid.
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {string} position The position of the moved row relative to the reference row.  
 *        Valid values are: "before", "after".
 * @return {string} returns "valid" if the move is valid, "invalid" otherwise.
 * @export
 */ 
oj.DataGridDataSource.prototype.moveOK = function(rowToMove, referenceRow, position)
{
    return "valid";
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none", "row", "column".  
 *         For "move", the valid return values are: "row", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 */
oj.DataGridDataSource.prototype.getCapability = function(feature)
{
    return null;
};
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * A JsonNodeSet represents a collection of nodes.  The JsonNodeSet is an object returned by the success callback
 * of the fetchChildren method on TreeDataSource.  
 * @constructor
 * @export
 */
oj.JsonNodeSet = function(startNode, endNode, data, currKey, depth)
{
    // assert startNode/endNode are number
    oj.Assert.assertNumber(startNode, null);
    oj.Assert.assertNumber(endNode, null);

    this.m_depth = depth;
    this.m_key = currKey;
    this.m_startNode = startNode;
    this.m_endNode = endNode;
    this.m_nodes = data;
};

/**
 * Gets the parent key for this result set.  
 * @return {Object} the parent key for this result set. 
 * @export
 */
oj.JsonNodeSet.prototype.getParent = function()
{
    return this.m_key;
};

/**
 * Gets the start index of the result set.  
 * @return {number} the start index of the result set.
 * @export	
 */
oj.JsonNodeSet.prototype.getStart = function()
{
    return this.m_startNode;
};

/**
 * Gets the actual count of the result set.  
 * @return {number} the actual count of the result set.
 * @export	
 */
oj.JsonNodeSet.prototype.getCount = function()
{
    return Math.max(0, this.m_endNode - this.m_startNode);
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the node/row in which we want to retrieve the data from.  
 * @return {Object} the data for the specified index.  oj.RowData should be returned for data that represents a row
 *         with a number of columns.
 * @export
 */
oj.JsonNodeSet.prototype.getData = function(index)
{
    // make sure index are valid
    oj.Assert.assert(index <= this.m_endNode && index >= this.m_startNode);

    // adjust to relative index
    index = index - this.m_startNode;

    if (this.m_nodes[index])
        return this.m_nodes[index].attr;
    else
        return null;
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source must return are:
 *  1) key - Object, the key of the node/row.
 *  2) leaf - boolean, true if it's a leaf, false otherwise. 
 *  3) depth - number, the depth of the node/row. 
 * @param {number} index the index of the node/row in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.JsonNodeSet.prototype.getMetadata = function(index)
{
    var metadata = [];

    // make sure index are valid
    oj.Assert.assert(index <= this.m_endNode && index >= this.m_startNode);

    // adjust to relative index
    index = index - this.m_startNode;

    metadata["key"] = this.m_nodes[index].id ? this.m_nodes[index].id : this.m_nodes[index].attr.id;
    metadata["leaf"] = this.m_nodes[index].leaf;
    metadata["depth"] = this.m_nodes[index].depth;

    if(metadata["leaf"] == null)
    {
        if (this.m_nodes[index].children && this.m_nodes[index].children.length > 0)
        {
            metadata["leaf"] = false;
        }
        else
        {
            metadata["leaf"] = true;
        }
    }

    return metadata;
};

/**
 * Helper method to update the node's depth recursively with its children.
 * @param {Object} currChild the node to update.
 * @param {number} offset the difference between current and updated depth values.
 * @private
 */
oj.JsonNodeSet.prototype._updateDepth = function (currChild, offset)
{
    var i;

    offset++;
    currChild.depth = offset;

    if (currChild.children && currChild.children.length != 0)
    {
        for (i = 0; i < currChild.children.length; i++)
	{
            this._updateDepth(currChild.children[i], offset);
	}
    }
};

/**
 * Gets the node set child of the specified index.
 * @param {number} index the index of the node/row in which we want to retrieve the child node set
 * @return {oj.JsonNodeSet|null} the child node set representing the child tree data.
 * @export
 */
oj.JsonNodeSet.prototype.getChildNodeSet = function(index) {

    var results, key, depth, i;

    // make sure index are valid
    oj.Assert.assert(index <= this.m_endNode && index >= this.m_startNode);

    // adjust to relative index
    index = index - this.m_startNode;

    depth = this.m_nodes[index].depth;
    results = this.m_nodes[index].children;
    if(results.length == 0)
    {
        return null;
    }
    key = this.m_nodes[index].id ? this.m_nodes[index].id : this.m_nodes[index].attr.id;
    for(i = 0; i < results.length; i++)
    {
        this._updateDepth(results[i], depth);
    }

    return new oj.JsonNodeSet(0, results.length, results, key, 0);
};
});
