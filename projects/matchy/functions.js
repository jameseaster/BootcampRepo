/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    
    // Looks through the animals array
    for(let i = 0; i < animals.length; i++){
        // returns the animal's Object if an animal with that name exists
        if(animals[i]['name'] === name){
            return animals[i];
        }
    }
    // Returns null if no animal with that name exists
        return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){

    // Loops through the animals Array
    for(let i = 0; i < animals.length; i++){
        // replaces `name` with `replacement` via splice method
        if(animals[i]['name'] === name){
            animals.splice(animals[i], 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    // Looks through the animals array
    for(let i = 0; i < animals.length; i++){
        // Removes `name` from array
        if(animals[i]['name'] === name){
            animals.splice(animals[i], 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    
    //animal must have a name and a species
    if(animal.name.length > 0 && animal.species.length > 0){
        
        //loops through animals array to compare objects name with animal
        for(let i = 0; i < animals.length; i++){
            
            //if an object exists with the same name, don't add animal
            if(animals[i].name === animal.name){
                return;
            }
        }
        
        //if animal has a species and a unique name, add animal to animals
        animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
