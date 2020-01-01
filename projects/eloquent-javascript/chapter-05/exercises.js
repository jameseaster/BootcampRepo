// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  
  // returns an array that was reduced from an array of arrays
  // by concatenating them together
  return array.reduce((a, b) => a.concat(b));
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function loop(value, testFunc, updateFunc, bodyFunc) {
  
  // for loop takes value as initilizer, conditional statement is
  // the testFunc, and then updates value with updateFunc
  // the body executes bodyFunc for each iteration
  for(let i = value; testFunc(i); i = updateFunc(i)){
    bodyFunc(i);
  }
  
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, testFunc) {
  
  // passedTest is an array consisting of the elements that passed testFunc
  const passedTest = array.filter(a => testFunc(a));
  
  // returns true if passedTest is the same length as array
  // which concludes that all elements passed the test
  return passedTest.length === array.length ? true : false;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  /* 
  Finding how much of each script is in the text.
  
  countBy counts the characters that belong to each script and filters
  the results to create an array consisting of the scripts that the
  text belongs to.
  */
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");


  /* 
  total is the total number of characters that were counted from 
  the scripts that were found in the text
  */
  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";
  
  
  /*  
  nameAndCount is an array of arrays consisting of the relevant
  scripts and the percentage of their characters in text
  */  
  let nameAndCount = scripts.map(({name, count}) => {
    return [name, Math.round(count * 100 / total)];
    }); //  [ [ 'Latin', 25 ], [ 'Arabic', 75 ] ]


  /* 
  domScriptName is the name of the script that has the most characters
  present in the given text. If there is only one name in the nameAndCount
  array, then that is the domScriptName. If there are multiple names indexes
  in the nameAndCount then the name with the largest count is assigned to
  domScriptName.
  */
  let domScriptName;

  nameAndCount.length === 1 ? domScriptName = nameAndCount[0][0] :
  domScriptName = nameAndCount.reduce((a, b) => a[1] > b[1] ? a[0] : b[0]);
 
   
  /*
  Returns the direction of domScriptName from SCRIPTS
  */
  return SCRIPTS.find(a => a.name === domScriptName).direction;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
