// **
// ** MultiValue class for Node.JS
// **
//. source: http://docs.oracle.com/en/cloud/paas/app-container-cloud/cache/using-rest-api-node-js-application.html

/*
 * Utility functions for MultiValue 
 */

// Given an integer (assumed 32-bits unsigned) ... convert it to a string
// 0th string element is hi byte
function intToBinaryString(theInt)
{
    var theStr = String.fromCharCode((theInt >>> 24) & 255 );
    theStr += String.fromCharCode((theInt >>> 16) & 255 );
    theStr += String.fromCharCode((theInt >>> 8) & 255 );
    theStr += String.fromCharCode(theInt & 255);
    return(theStr);
}

// Given a 4-character binary string, returns the encoded 4-byte integer
function binaryStringToInt(theStr)
{
    var theInt = 0;
    for(var i=0; i<4; i++)
    {
        theInt = theInt << 8;
        theInt += theStr.charCodeAt(i);
    }
    return theInt;
}

// Converts a string to a MultiValue element -- which is a string preceded
// by a 4-byte encoded unsigned integer.
function stringToMultiValueElement(theStr)
{
    // Get the length of the string and encode it.
    var slenStr = intToBinaryString(theStr.length);
    
    // Return their concatenation
    return slenStr+theStr;
}

/* 
 * MultiValue
 * This is a simple MultiValue class implementation for use with the CCS server's
 * replaceValue operation.
 * The members of a MultiValue object are assumed to be strings. 
 */
var MultiValue = function()
{
    // members is an array of strings
    this.members = [];
}

// Append a string to the MultiVal object.
MultiValue.prototype.append = function(val)
{
    this.members.push(val);
};

// Clear the members array
MultiValue.prototype.clearMembers = function()
{
    this.members = [];
};

// Encode a MultiValue as a binary string.
MultiValue.prototype.encode = function()
{
    var theStr = "";        // The encoded string
    
    // Encode the number of elements.
    theStr+=intToBinaryString(this.members.length);
    
    // Step through the array, encoding each string
    for(var i=0; i<this.members.length; i++)
    {
        theStr+=stringToMultiValueElement(this.members[i]);
    }
    
    // Return the result
    return theStr;
};

// Decode a string into the current MultiValue object
MultiValue.prototype.decode = function(theStr)
{
    // Start with an empty array
    this.members = [];
    
    // Determine the number of elements
    var numElems = binaryStringToInt(theStr);
    
    // Loop through the string, peeling out the elements
    var offset = 4;                 // Start past the first encoded int
    var currLen = 0;                // Length of current string
    for(var i = 0; i < numElems; i++)
    {
        currLen = binaryStringToInt(theStr.substring(offset, offset+4));
        offset += 4;                // Advance to start of string
        this.members[i] = theStr.substring(offset, offset+currLen);     // Get the string
        offset += currLen;          // Advance to next encoded string length
    }
    
    return;
};

/*
 * Exported method for creating a new MultiValue object.
 */
exports.makeMultiValue = function()
{
	return new MultiValue();
}
