
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  
  // building blocks of the triangle
  let x = '#';
  // incrementer
  let i = 1;

  while(i <= num){
    // prints the body of the triangle
    console.log(x);
    // adds the next level to the triangle
    x += '#';
    // increments
    i++;
  }

}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Write a program that uses console.log to print all the numbers from 1 to 100, 
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers 
// that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
// divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a 
// significant percentage of programmer candidates. So if you solved it, your labor 
// market value just went up.)

function fizzBuzz() {
  // for loop that prints numbers 1 - 15
  for(let i = 1; i <= 15; i++){
    
    // prints fizzbuzz if i is divisible by both 5 and 3
    if(i % 5 === 0 && i % 3 === 0) console.log("fizzbuzz");
    
    // prints buzz if i is divisible 5   
    else if(i % 5 === 0) console.log("buzz");
    
    // prints fizz if i is divisible by 3
    else if(i % 3 === 0) console.log("fizz");
    
    // prints i  
    else console.log(i);
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function drawChessboard(num = 8) {

  // black and white squares of chessboard
  const white = ' ';
  const black = '#';
  
  // rows to fill with black and white squares
  let row1 = [];
  let row2 = [];
  
  // final chessboard
  const chessboard = [];

  // filling row1 and row2 with alternating white and black squares
  for(let i = 0; i < num; i++){
    row1.push(black);
    row2.push(white);
    i++;
    if(i < num){
      row1.push(white);
      row2.push(black);
    } 
  }

  // pushing the appropriate amount of rows to chessboard
  for(let i = 0; i < num; i++){
    if(i % 2 === 1) chessboard.push(row1.join(''));
    else chessboard.push(row2.join(''));
  }

  // extra \n on the end of the answer...? //
  chessboard.push('');

  // print chessboard as a string separating rows with '\n'
  console.log(chessboard.join('\n'));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
