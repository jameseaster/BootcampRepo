// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

 _.identity = function(value) {
     return value;
 };

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // returns 'string' for a string 
    if(typeof value === 'string') return 'string';
    // returns 'number' for a number
    if(typeof value === 'number') return 'number';
    // returns 'array' for an array
    if(Array.isArray(value)) return 'array';
    // returns 'null' for a null value
    if(value === null) return 'null';
    // returns 'undefined' for an undefined value
    if(value === undefined) return 'undefined';
    // returns 'boolean' for a boolean value
    if(typeof value === 'boolean') return 'boolean';
    // returns 'function' for a function
    if(typeof value === 'function') return 'function';
    // returns 'object' for an object
    if(typeof value === 'object') return 'object';
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num) {
    // if arr is not an array or num is less than 0 return an empty array
    if(!Array.isArray(arr) || num < 0) return [];
    
    // if num is not given or not a number, return first element of arr
    if(typeof num !== 'number') return arr[0];
    
    // return the first num of items in arr
    return arr.slice(0, num);
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
    // if arr is not an array or num is less than 0 return an empty array
    if(!Array.isArray(arr) || num < 0) return [];
    
    // if num is not given or not a number, return last element of arr
    if(typeof num !== 'number') return arr[arr.length-1];
    
    // return the last num of items in arr, this also returns the whole
    // array if numerical argument is greater than the array's length
    return arr.slice(-num);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, val){
    // Returns the index of arr that is the first occurance of val
    for(let i = 0; i < arr.length; i++) if(arr[i] === val) return i;
    
    // If value is not present in arr, return -1
    return -1;
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, val){
    // copies values of arr that match val to trueArray
    let trueArray = arr.filter(x => x === val);
    
    // returns true if arr contains val, otherwise returns false
    return (trueArray.length > 0) ? true: false;
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    // if collection is an array
    if(Array.isArray(collection)){
        // call func on each element
        for(let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    // if collection is an object    
    } else if(typeof collection === 'object'){
        // call function on each property value
        for(let key in collection){
            func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(arr){
    // new array that will contain all elements of arr, without any duplicates
    let newArr = [arr[0]];
    
    // loop through arr and push unique values to newArr
    for(let i = 0; i < arr.length; i++){
        // if the element is not included in newArr, push that element to newArr
        if(!newArr.includes(arr[i])) newArr.push(arr[i]);
    }
    // return newArr which contains no duplicates
    return newArr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, func){
    // new array to push filtered values to
    const newArr = [];
 
    // each loops through collection - arr, and takes a callback function
    // the callback function gives acces to every element <e>, its index
    // <i>, and the array <a>. If the element of arr passes func as true,
    // push that element to new array
    _.each(arr, (e, i, a) => {if(func(e, i, a)) newArr.push(e)});

    return newArr;

}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(arr, action){
    // new array to push falsey values to
    const newArr = [];
    // Loops over array and performs action. If result of action is false, push
    // that element of array to newArr
    _.filter(arr, (e, i, a) =>{if(!action(e, i, a)) newArr.push(e)});
    // returing newArr
    return newArr;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action){
    // returns a new array containing an array of all values from given array that 
    // returned something truthy, and another array that returned something falsey
    // after calling action
    return [_.filter(array, action), _.reject(array, action)];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    // new array to save the return value of each func call
    const newArray = [];
    // calling func on each element and pushing result to newArray
    _.each(collection, (v, i, c) => {newArray.push(func(v, i, c))});
    // returning newArray
    return newArray;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop){
    // returning an array of values of prop from each object inside array
    return _.map(array, (v) => v[prop]);
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    // initialize answer with the value of true
    let answer = true;
    
    // if there is no function given, test if every element in collection is true
    if(!func){
        _.each(collection, (e, i, c) =>{if(e === false) answer = false});
        // return answer
        return answer;
    }

    // testArray is the values of collection past through func
    const testArray = _.map(collection, (e, i, c) => func(e, i, c));
    
    // if each any values of testArray are false, answer is assigned false
    _.each(testArray, (e, i, c) => {if(e === false) answer = false});

    // return answer
    return answer;

}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    // initialize answer with the value of false
    let answer = false;
    
    // if there is no function given, test if any element in collection is true
    if(!func){
        _.each(collection, (e, i, c) =>{if(e === true) answer = true});
        // return answer
        return answer;
    }

    // testArray is the values of collection past through func
    const testArray = _.map(collection, (e, i, c) => func(e, i, c));
    
    // if each any values of testArray are true, answer is assigned true
    _.each(testArray, (e, i, c) => {if(e === true) answer = true});

    // return answer
    return answer;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    // loop through the array and assign seed to the first index of array
    // if seed is undefined
    for(let i = 0; i < array.length; i++){
        if(seed === undefined) {seed = array[0];
        
        // if seed is defined call function on seed, element, and index
        // assign function return to seed (accumulator)        
        } else {seed = func(seed, array[i], i)}
    }
    // return seed (accumulator)
    return seed;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(obj1, obj2){
    // Return obj1 which is the first argument, after assigning it the properties of
    // the following object arguments
    return _.reduce(arguments, (obj1, nextObj) => obj1 = Object.assign(obj1, nextObj));
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
