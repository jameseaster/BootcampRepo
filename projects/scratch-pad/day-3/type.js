// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // using the array method isArray to decipher if value is an array
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // testing to see if value is null
    if (value === null) {
        return false;
        
    // returning false if value is a Date
    } else if (value instanceof Date === true) {
        return false;
        
    // returning false if value is an Array
    } else if (Array.isArray(value) === true) {
        return false;
        
    // returning true if value is an Object
    } else if (typeof value === 'object') {
        return true;
        
    // returning false if value is anything else
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // returning false if value is null or a Date
    if (value === null || value instanceof Date === true) {
        return false;
        
    // returning true if value is an Array or an Object
    } else if (Array.isArray(value) === true || typeof value === 'object') {
        return true;
 
    // returning false if value is anything else
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // testing for string
    if(typeof value === 'string'){
        return 'string';
    
    // testing for array
    } else if (Array.isArray(value) === true) {
        return 'array';
    
    // testing for undefined    
    } else if (value === undefined){
        return 'undefined';
    
    // testing for number    
    } else if (typeof value === 'number'){
        return 'number';
    
    // testing for boolean    
    } else if (typeof value === 'boolean'){
        return 'boolean';
        
    }// testing for null
    else if (value === null) {
        return 'null';
        
    // testing for date
    } else if (value instanceof Date === true) {
        return 'date';
        
    // testing for function
    } else if (typeof value === 'function') {
        return 'function';
        
    // testing for object
    } else if (typeof value === 'object') {
        return 'object';
        
    // returning false if value is anything else
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
