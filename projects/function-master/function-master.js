//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    // returns an array of the values
    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    // returns the keys of an object to an array, then makes them a string separated by ' '
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // created a new array
    const newArr = [];
    
    // iterating over an object
    for(let key in object){
        
        // if the value is a string, push value to newArr
        if(typeof object[key] === 'string'){
            newArr.push(object[key]);
        }
    }
    
    // return newArr as a string joined by ' '
    return newArr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    // return 'array' if true, 'object' if false
    return (Array.isArray(collection) ? 'array' : 'object');
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    // capitalize first letter
    const firstLet = string[0].toUpperCase();
    
    // separate the end of the word from the first letter
    const end = string.slice(1, string.length);
    
    // add them together
    return firstLet + end;
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    // array for capitalized words
    const capArr = [];
    
    // array for current string
    const strArr = string.split(' ');

    // looping through strArr
    for(let i = 0; i < strArr.length; i++){

        // capitalize first letter of word
        let firstLet = strArr[i][0].toUpperCase();
  
        // separate the end of the word from the first letter
        const end = strArr[i].slice(1, strArr[i].length);
  
        // add them together to create a capitalized word
        let capWord = firstLet + end;
        
        // pushing capitalized word to capArr
        capArr.push(capWord);
    }  
    
    // return words from capArr as a string separated by a space
    return capArr.join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    // returning a greeting with the name of an object capitalized
    return `Welcome ${capitalizeWord(object.name)}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    // returning the name value plus the species value
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    // if object.noises is an array and has a length greater than 0
    if(Array.isArray(object.noises) && object.noises.length > 0){
        
        // return the noises as a string separated by a ' '
        return object.noises.join(' ');
        
    } else {
        
        // return there are no noises
        return 'there are no noises';
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    // creating a regular expression from word
    let test = new RegExp(word);
    
    // if the regex matches in string return true, otherwise return false
    return (string.match(test) ? true : false);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    // add name to object's friend array
    object.friends.push(name);
    
    // return the object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    // checks to see if object has a friends array with friends
    if(Array.isArray(object.friends) && object.friends.length > 0){

        // iterates over friends array and compares friends with name
        for(let i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                
                // returns true if name is a friend
                return true;
            }
        }
    }
    
    // returns false if friend is not a friend
    return false;
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function nonFriends(n, array) {
    // list of all names that n is not friends with
    const list = [];
    
    // loops through array of people
    for(let i = 0; i < array.length; i++){
        
        /*  
        if n is not the same person as in array
        and if the person in the array does not have n as a friend
        push person in array to list
        */
        if(n !== array[i].name && !isFriend(n, array[i])){
            list.push(array[i].name);
        }
    }
    
    // return the list of nameas that n is not friends with
    return list;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function updateObject(object, key, value) {
    
    // update and/or create key on object with value
    object[key] = value;
    
    // return updated object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
    // loop through array
    for(let index of array){
        
        // compare index of array with object's properties
        if(object.hasOwnProperty(index)){
            
            // remove properties that match array's index
            delete object[index];
        }
    }
    
    // return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    /* 
    returning a new array of elements that pass the test of the provided function
    if the index of current element (e) from array (a) equals the current index (i),
    add element to new array. Each unique element can only be added once.
    */
    
    return array.filter((e, i, a) => a.indexOf(e) === i);

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}