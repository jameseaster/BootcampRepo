////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2, step = 1) {
  
  // new array to hold the range
  const rangeArr = [];
  // return empty array if num1 === num2
  if(num1 === num2){
    return rangeArr;
    
  // return ascending range  
  } else if(num1 < num2){
    // increment must be positive
    if(step <= 0){
      return rangeArr;
    } else {
      // start at num1, increment by step to num2, push to rangeArr
      for(let i = num1; i <= num2; i += Math.abs(step)){
        rangeArr.push(i);
      }
    }
  } else {
    // decrement must be negative
    if(step >= 0){
      return rangeArr;
    } else { 
      // start at num1, decrement by step to num2, push to rangeArr
      for(let i = num1; i >= num2; i -= Math.abs(step)){
        rangeArr.push(i);
      }
    }
  }
  return rangeArr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {

  // return 0 if arr is empty, otherwise return the sum of elements from arr
  return (arr.length === 0 ? 0 : arr.reduce((acc, cur) => acc + cur));

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  //new array to push elements to in reverse
  const revArr = [];
  
  //argument must not be an empty array
  if(arr.length <= 0) return revArr;
  
  //unshift each num from arr to revArr
  for(let num of arr) revArr.unshift(num);
  
  return revArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  // half the length of arr, no need to access middle element
  let halfLength = Math.floor(arr.length/2);
  
  // loop over half of the array
  for(let i = 0; i < halfLength; i++){
    
    // a = element at i, be is the mirror image element
    let a = arr[i];
    let b = arr[arr.length-1-i]
    
    // swap first element with last, then repeat inwardly
    arr[i] = b;
    arr[arr.length-1-i] = a
  }
}

// How I first solved it until I read that EQJS thinks splice is cheating...
//
// function reverseArrayInPlace(arr) {
//   for(let i = 0; i < arr.length; i++){
//     myArr.splice(i, 0, myArr[myArr.length-1]);
//     myArr.pop(); 
//   }
// }


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  // creating a list backwards, begining with the value of null
  let list = null;
  
  // looping backwards over array argument
  for(let i = arr.length-1; i > -1; i--){
    
    // creating inner most object, then surrounding it with consecutive objects
    list = {value: arr[i], rest: list};
  }
  
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // array to hold values from list
  const listArr = [];
  
  // initiator: node starts as parent list (most outer list) 
  // condition: node must not equal null
  // increment: node === next sublist
  for(let node = list; node; node = node.rest) {
    
    // pushes value of current list to listArr
    listArr.push(node.value);
  }
  return listArr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  
  // creates a parent list with value of element
  list = {value: element, rest: list};
  return list;

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  // return undefined if num is less than 0
  if(num < 0) return undefined;
  
  // return value of list when num is 0
  if(num === 0) return list.value;
  
  // call nth() on sublist and decrement number until num === 0
  return nth(list.rest, num-1);

}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  // continue if a and b must be an object and not null
  if(typeof a === "object" && a !== null){
    
    // continue if both objects have the same property lengths
    if(Object.keys(a).length === Object.keys(b).length){
      
      // loop over properties of a
      for(let prop in a){
        
        // return false if b doesn't have a's property
        if(b.hasOwnProperty(prop) === false) return false;
        
        // call deepEqual on the value of objects properties
        return deepEqual(a[prop], b[prop]);

      }
      
      // return true if all values are found equal
      return true;
    }
    
    // return false if object property lengths are not equal
    return false;
  }
  
  // if not an object, striclty compare values
  else{
    return a === b;
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
