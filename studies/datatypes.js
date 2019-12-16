/**
* DATATYPES:
* 
* 0. Datatypes are the types of values found in JS which include:
*    numbers, strings, booleans, arrays, objects, functions, 
*    undefined, null, NaN, and infinity / -infinity.
* 
* 1. Number - a primitive datatype of numeric data. A number can be
*    placed into equations and executed following the order of 
*    operations. A numeric expression is resolved before the line
*    of code continues to execute.
*
* 2. String - a character or more of textual data. Strings are
*    always placed inside of quotes (' ' or " "). They are zero-
*    base indexed like arrays and we can access individual 
*    characters with bracket notation. They can also be concatenated
*    with the + operator. 
*
* 3. Boolean - a true or false value. Booleans are very useful when
*    directing logic with conditional statements. Variables can also
*    be truthy or falsy.
*
* 4. Arrays - a collection of any datatype stored as a list in
*    a zero-base index system (index meaning the position of the
*    value in the array). They are complex because they hold other
*    values, including arrays, they can grow indefinitely. We access 
*    individual elements in an array with bracket notation, by 
*    placing the desired element's index in the brackets. Arrays are
*    considered a type of object in JS.
* 
* 5. Objects - a collection of key/value pairs. While objects are 
*    not indexed like arrays, the key of an object can be 
*    considered the position of the value. They can hold/ collect 
*    other values, including other objects. They are associative 
*    arrays, there should be an association between the key and the
*    value stored at that key. Keys of objects are always strings.
*    Values can be accessed with dot notation or bracket notation. 
*    Keys can be access with for-in loops.
*
* 6. Functions - a block of code designed to perform a particular 
*    task. These blocks of code are executed when invoked or
*    called. Functions are defined with the keyword function,
*    followed by a name and then parentheses. The parentheses can
*    include parameters separated by commas. The block of code is 
*    then placed inside curly brackets. The return statement will
*    stop the executing of the function's code and return the value
*    that follows the keyword return. Functions can take in new 
*    parameters and execute the code block as many times as
*    desired making logical processes more efficient.
* 
* 7. Undefined - a primitive data type that is a variable that has
*    not been assigned a value. A method or statement also returns
*    undefined if the variable that is being evaluated does not
*    have an assigned value. A function also returns undefined if 
*    a value was not returned.
* 
* 8. null - is a primitive value and is treated as falsy for boolean
*    operations. The value null represents the intentional absence
*    of any object value.
* 
* 9. NaN - a property value that is representing Not-A-Number. This
*    is the returned value when Math functions fail or when trying
*    to parse a number fails.
*
* 10. Infinity (and -Infinity) - a numeric value representing 
*     infinity. The value Infinity is greater than any other number.
*     Any positive number multiplied by Infinity equals Infinity.
*     Any number divided by Infinity equals 0.
* 
* 11. What is the difference between primitive/simple and complex 
*     data types? 
*   
*     Primitive datatypes consist of strings, numbers, booleans, 
*     NaN, undefined, and null. They are primitive (or simple)
*     because they do not aggregate or collect other values. 
*     Operations on simple values return new simple values.
* 
*     Complex datatypes consist of arrays, objects, and functions.
*     They do aggregate or collect other datatypes which allow them
*     to have the potential of an indefinite size.
* 
* 12. Primitive values are passed to a function BY COPY, complex 
*     values are BY REFERENCE. What does that mean, and how are 
*     they different?
*     
*     A variable has a fixed amount of memory. When a primitive
*     datatype is assigned to a variable it is actually held in 
*     that variable. If that variable is assigned to another 
*     variable the data is copied directly into the new variable.
*     
*     Because complex datatypes are potentially indefinite in size,
*     when they are assigned to a variable the new variable holds a
*     reference to the old variable. So if you change something in
*     the new variable the old variables data will change as well.
*     
*/


// 1. Number //

    var num1 = 10 + 5; // 15 is stored inside of num1 
    console.log(num1 + 5); // prints 20


// 2. String //

    var myCity = "New Orleans"; // "New Orleans" is stored in myCity
    console.log(myCity[5]); // prints "r"
    console.log(myCity + ", LA"); // prints "New Orleans, LA"


// 3. Boolean //

    var myBool = true; // storing true inside of myBool
    
    // prints "myBool is truthy"
    if(myBool){console.log("myBool is truthy")}
    
    myBool = false; // stores false inside of myBool
    
     // prints "myBool is truthy"
    if(!myBool){console.log("myBool is falsy")}


// 4. Array //

    // a grocery list stored as an array
    var shoppingList = ["coffee", "milk", "lettuce"];

    console.log(shoppingList[0]); // prints "coffee"


// 5. Object //

    // myMeals with key/value pairs of meals
    var myMeals = {
        breakfast: 'Coffee',
        lunch: 'PB&J', 
        dinner: 'Salmon'
    };
    
    console.log(myMeals.lunch); // prints 'PB&J'
    
    // prints keys as the for-in loop iterates over the myMeals
    for(let key in myMeals){console.log(key)}


// 6. Function //

    // initializes a function named add
    function add(a, b){return a + b}
    
    add(57, 49); // returns 106
    add(20, 38); // different arguments, executing same function


// 7. undefined //

    var x; // declaring a variable without assigning it a value
    
    // prints "x is undefined"
    if(x === undefined) {
        console.log("x is " + x);
    } else {
        console.log("x's value is: " + x);
    }


// 8. null //

    function howManyNumbers(str){
        const n = str.match(/\d/g);
        if(n === null){
            return "string has no numbers";
        }
        return "string has " + n.length + " numbers";
    }
    
    // returns "string has no numbers"
    howManyNumbers("How the Grinch Stole Christmas");


// 9. NaN //

    // returns NaN b/c you can't find the square root of a string
    Math.sqrt("hello");

    // returns NaN because "I'm a string" is not a number
    parseInt("I'm a string", 10);


// 10. Infinity (and -Infinity) //

    // examples of how Infinity functions mathematically in JS
    console.log(Infinity + 1); // Infinity
    console.log(Infinity * -1); // -Infinity
    console.log(1 / Infinity); // 0
    console.log(1 / 0); // Infinity


// 11. Primitive vs Complex Datatypes//
    
    // Primitive datatypes are stored directly to their variable
    // "string" is stored in str
    var str = "string"; 

    // Complex datatypes are stored by reference
    // myArray holds a reference to a memory address of this array
    var myArray = [1, 2, 3]; 

    
// 12. By Copy vs By Reference //
    
    // by copy //
    var num1 = 10;
    var num2 = num1; //the value of num1 is COPIED into num2
    num2 = 100; // changing num2 doesn't effect num1
    
    
    // by reference //
    // myName stores a reference to this object
    var myName = {first: 'James'}; 
    
    // the reference to obj in myName is copied to myFullName
    var myFullName = myName;
    
    // myFullName is manipulated which effects myName
    myFullName.last = 'Easter';
    
    // prints {first: 'James', last: 'Easter'};
    console.log(myName);
