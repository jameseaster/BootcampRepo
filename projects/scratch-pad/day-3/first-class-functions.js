// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // returns a function checks if the given 
    // value is greater than the base case
    return function compare(givenValue){
        return givenValue > base;
    }

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // returns a function checks if the given 
    // value is less than the base case
    return function compare(givenValue){
        return givenValue < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // returns a function that takes the first letter of a string
    // and compares it with startsWith (case-insensitive)
    return function firstLetter(string){
        string = string.toLowerCase();
        startsWith = startsWith.toLowerCase();
        return startsWith === string[0];
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // returns a function that takes the last letter of a string
    // and compares it with startsWith (case-insensitive)
    return function lastLetter(string){
        string = string.toLowerCase();
        endsWith = endsWith.toLowerCase();
        return endsWith === string[string.length-1];
    }
    
 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // initialized a new array to push modified elements to
    let newArray = [];
    
    // loop over strings array and pass into modify funtion
    // then push the modified string to newArray
    for(let i = 0; i < strings.length; i++){
        newArray.push(modify(strings[i]));
    }
    
    // return newArray
    return newArray;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // initialized a new array to push tested elements to
    let trueArray = [];
    
    // loop over strings array and pass into test function
    // then push the tested string to trueArray
    for(let i = 0; i < strings.length; i++){
        
        if(test(strings[i])){
            trueArray.push(strings[i]);
        } else{
            return false;
        }
        
    }
    
    // return true if all strings passed test
    return true;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}