/**
* LOOPS:
* 
* 1. There are three main types of loops that we've studied so far
*    in JS: while, for, and for-in loops.
* 
*    while: these loops iterate through a block of code as long as
*    their condition statement is true. They will run forever if 
*    their conditional statement is not met. This is usually done
*    by declaring an incrementer variable outside of the while loop.
*    Then at the end of the while loop's block of code, incrementing
*    the incrementer so that it moves itself closer to the 
*    conditional statement.
* 
*    for: loops that execute a block of code a specific number of
*    times. A for loop has three statements within it: the initialize,
*    the condition, and the incrementer. In the initialize part holds
*    the variable used to iterate throughout your block of code. The
*    condition is the code that has to be met in order for the loop
*    to run. The incrementer changes iterator so that it gets
*    closer to the conditional statement (preventing an infinite 
*    loop).
* 
*    for-in: similar to for loops these use a 'key' to iterate over
*    an object. First you have your declared variable 'key'
*    representing the keys you are going to iterate over. Then the 
*    keyword 'in', and then the name of the object. For-in loops
*    will look at each key of the object and execute the code
*    within its curly braces.
*
*/


// 1. Anatomy of while, for, and for-in loops //

  //while loops //
    var myArray = [1,2,3,4,5];

    //while loop incrementer, declared outside while loop
    let x = myArray.length - 1; 
    
    while(x > -1){              //conditional statement
      myArray.push(myArray[x]); //block of code
      myArray.splice(x, 1);     //block of code
      x--;                      //altering incrementer
    }
    console.log(myArray); // prints [5,4,3,2,1,]
    
    
  //for loops //
    var myArray2 = [5,6,7,8,9];
    
    //for(initialize, condition, incrementer)
    for(let i = 0; i < myArray2.length; i++){
        
        //executes while condition is true
        myArray2[i] = myArray2[i] + 1;       
    
    }
     console.log(myArray2); //prints [6,7,8,9,10]
    
    
  //for-in loops //
    var favObj = {color: 'blue', food: 'pizza', drink: 'coffee'};
    
    //iterates over every key in favObj
    //no conditional statement is needed
    for(let key in favObj){
        
        //prints the value at favObj[key]
        console.log(favObj[key]);
    }
    //prints the following:
    //blue
    //pizza
    //coffee


// 2. Be able to loop any number of times, forward counting up to 
//    some limit, backward counting down to 0 //
    
      //countUp will count from a start num to an end num
      function countUp(start, end){
          let countArr = [];
          while(start <= end){
              countArr.push(start);
              start++;
          }
          return countArr; 
      } 
      const countArr = countUp(4, 8); // [4,5,6,7,8]
     
     //this prints the elements of countArr in reverse order
      for(let i = countArr.length-1; i>-1; i--){
          console.log(countArr[i]);
      }
             

// 3. Loop over an Array, forwards and backwards //
      
      //prints the elements of alphabet from left to right
      const alphabet = ['a','b','c','d','e'];
      for(let i = 0; i < alphabet.length; i++){
          console.log(alphabet[i]);
      }

      //prints the elements of alphabet from right to left
      for(let i = alphabet.length-1; i>-1; i--){
          console.log(alphabet[i]);
      }


// 4. Loop over an Object //

      var myDog = {name: 'Copper', color:'red', age: 5};
      
      //loop through myDog, prints each key/value pair
      for(let key in myDog){
          console.log(`${key}: ${myDog[key]}`);
      }
      
      //name: Copper
      //color: red
      //age: 5
