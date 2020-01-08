// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jameseaster");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    // create an array of male customers filtered out of the customers array
    let arrayOfMales = _.filter(array, (customerObj, i, a) => {
        return customerObj.gender === 'male'});
    
    // return the length of array to calculate the number of male customers
    return arrayOfMales.length;
};

var femaleCount = function(array){
    // using reduce, find the number of female customers
    return _.reduce(array, (seed, currentObj, i) => {
        
        // increment seed if gender === female
        if(currentObj.gender === 'female') seed = seed + 1;
        
        // always return the seed so we don't get undefined
        return seed;
        
    }, 0);
};

var oldestCustomer = function(array){
    // reduce customer array to return the oldest customer
    const oldestObj = _.reduce(array, (oldestCustomer, current, i) => {
        
        // if the current customer is older, current customer is oldestCustomer
        if(oldestCustomer.age < current.age) oldestCustomer = current;
        
        // return oldestCustomer 
        return oldestCustomer;
    });
    
    // return the name of the oldest customer object
    return oldestObj.name;
};

var youngestCustomer = function(array){
    // reduce customer array to return the youngest customer
    const youngestObj = _.reduce(array, (youngestCustomer, current, i) => {
        
        // if the current customer is younger, current customer is youngestCustomer
        if(youngestCustomer.age > current.age) youngestCustomer = current;
        
        // return youngestCustomer 
        return youngestCustomer;
    });
    
    // return the name of the youngest customer object
    return youngestObj.name;
};

var averageBalance = function(array){
    // create an array with all of the customers balances
    let balances = _.map(array, (customerObj, i, a) => {
        if(customerObj.balance) return customerObj.balance;
    });
    
    // use a regular expression to remove the $ and , character in the balance string
    let regex = /\$|,/g;
    
    // remove characters and convert to an integer
    balances = balances.map(x => x.replace(regex, '')*1);    
    
    // return the average by adding them together and dividing by the length of balances
    return _.reduce(balances, (preValue, current, i) => {
        preValue = preValue + current;
        return preValue;
    }) / balances.length;
    
};

var firstLetterCount = function(array, letter){
    // Find how many customer's names begin with a given letter
    // Make an array of customers names
    let names = _.map(array, (customerObj, i, a) => {
        if(customerObj.name) return customerObj.name;
    });
    
    // return how many names start with letter
    return _.reduce(names, (seed, current, index) => {
        if(current[0].toLowerCase() === letter.toLowerCase()) seed = seed + 1;
        return seed;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
    // Find how many friends of a given customer have names that start with a given letter
    // extract the customer object from array with customer's name <customer>
    const customerObj = _.filter(array, (e, i, a) => e.name === customer);
    
    // return first letter count of customerObj's friends array
    return firstLetterCount(customerObj[0]['friends'], letter);
};

var friendsCount = function(array, name){
    // Find the customers' names that have a given customer's name in their friends list
    //An array of customersNames who have the friend <name>
    let customersNames = [];
    
    // If <name> is not given, return an empty array
    if(!name) return customersNames;
    
    // Extract a friendList from each customerObj
    _.map(array, (customerObj, index, collection) => {
        let friendList = _.pluck(customerObj.friends, 'name');
        
        // if that friendList contains name, push customerObj name to customersNames
        if(_.contains(friendList, name)){
            customersNames.push(customerObj.name);
        }
    });
    
    // return an array of customers's names who have <name> in their friendList
    return customersNames;
};

var topThreeTags = function(array){
    // Create an array containing each tags array
    const arrOfTagArrays = _.map(array, (customerObj, i, c) => customerObj['tags']);
    
    // Make one giant array of all tags
    const allTags = _.reduce(arrOfTagArrays, (seed, current, index) => seed.concat(current), []);
    
    // create key/value pairs of each tag and their number of occurrences
    const tagCountObject = _.reduce(allTags, (acc, tag, i) => {
        if(acc[tag]) acc[tag]++;
        else acc[tag] = 1;
        return acc;
    }, {});
    
    // Convert tagCountObject into an array containing arrays of each key/value pair
    const tagCountArray = [];
    for(let key in tagCountObject) tagCountArray.push([key, tagCountObject[key]]);
    
    // Sort tagCountArray by the number of occurrences
    tagCountArray.sort((a, b) => b[1] - a[1]);

    //return the top three highest occurrences 
    return [tagCountArray[0][0], tagCountArray[1][0], tagCountArray[2][0]];
};

var genderCount = function(array){
    // create an array of all of the customers's gender values
    const genderArr = _.map(array, (customerObj, i, c) => customerObj['gender']);

    // return an object with the key value pairs {`gender`: `occurrences`}
    return _.reduce(genderArr, (acc, current, index) => {
        // if obj has the gender as a key, increment its occurrences
        if(acc[current]) acc[current]++;
        // if obj does not have current gender as a key, create one with a value of 1
        else acc[current] = 1;
        // return the obj
        return acc;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
