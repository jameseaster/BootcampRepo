/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Variable named animal, assigned it to an empty object
var animal = {};

// creating property 'species' with value of 'whales' - dot notation
animal.species = 'whales';

// creating property 'name' with value 'Willy' in bracket notation
animal['name'] = 'Willy';

// creating a noises property and assigning it an empty array
animal.noises = [];

// Printing animal to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// created a variable noises and assigned it an empty array
var noises = [];

// assigned the first noise to noises in bracket notation 
noises[0] = 'oowowoowowowoow';

// pushed another noise to noises array
noises.push('weeewwweeeewwweee');

// added a new noise with the unshift method
noises.unshift('wiwiwiwwwiiiiiiwii');

// used bracket notation to add another noise to the end of noises
noises[noises.length] = ('waaaaawwaaawaawa');

// logged the length of noises
console.log(noises.length);

// logged the last element in noises
console.log(noises[noises.length-1]);

// printing the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Assigning the noises property on animal noises array
animal['noises'] = noises;

// Adding another noise to the noises property on animal
animal.noises.push('wwuuuuuwuuuwuuu');

// printing animal
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 *      Through dot notation and bracket notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 *      You can use bracket notation, not dot notation.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  assigned animals to empty array
var animals = [];

// pushed animal to animals array
animals.push(animal);

// printed animals to console
console.log(animals);

// initialized duck with object
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// pushed duck to animals array
animals.push(duck);

// printed animals to console
console.log(animals);

// created dog and bird and assigned them an object
var dog = { species: 'dog', name: 'Sparky', noises: ['woof', 'bark', 'howl', 'ruff'] };
var bird = { species: 'bird', name: 'Twitter', noises: ['tweet', 'kahw', 'chirp', 'whistle'] };

// Added dog and bird to animals
animals.push(dog, bird);

// printed animals to console
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declared friends and assigned it an empty array
// ***this array can hold the strings of the names of the friends***
var friends = [];

// returns the index of a random element from arr
function getRandom(arr){
    // returns an element at a random index of arr
    return arr[Math.floor(Math.random() * arr.length)];
}

// Pushed a random animal's name to friends.
friends.push(getRandom(animals).name);

// Printed friends to the console
console.log(friends);

// Added friends as a property named friends on a random animal in animals
getRandom(animals).friends = friends;

// log animals to console
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
