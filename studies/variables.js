/**
* VARIABLES:
*
* 0. Variables are containers for storing data values. They store
*    or point to values of data types (e.g strings, numbers, 
*    objects, etc). They share the life-cycle of the program, are
*    called throughout the program, and can change values.
*
*/

// 1. declaration and assignment //
/*
* To create a variable you use the keyword var and then are able
* to assign it a value. Putting these two steps together is
* called initialization. 
*/

    var num; // num is declared as a variable

    num = 1; // num is assigned the value of one


// 2. var //
/*
* var is a keyword that is used in declaring a variable. It is
* hoisted and it is reassignable. Var is not block-scoped.
*/

    var num = 1; // using the keyword var to initialize a variable

    num = 11; // reassignable


// 3. let //
/* 
* let - a keyword that is used in declaring a variable. Let is
* reassignable values and it is hoisted to its code block,
* however it is not available until the line of code they are
* declared on is executed. Let can be very helpful when using 
* an incrementer. Let is block-scoped.
*/
    let num2 = 2; // using the keyword let to initialize a variable
    
    num2 = 4; // reassignable, similar to var
    
    
// 4. const //
/* 
* const - is also a keyword that is used when declaring a 
* variable. They must be assigned immediately, they cannot be 
* left unassigned or undefined. They are block-scoped (pinned 
* to the block in which they were initialized). They are 
* hoisted to the top of their inclosing block however they are 
* not available until the line of code they are declared on is
* executed. Use these when you plan on never reassigning your
* variable.
*/

    const num3 = 3; // initialize a variable with keyword const
    
  /* 
  * (commented out for grading):
  *
  * num3 = 6; // will throw a TypeError, const is not reassignable
  *
  */
  
// 5. Hoisting //
/*
* Hoisting is a mechanism in JS where variables and function
* declarations are hoisted to the top of their scope before the
* code is executed. Var, let, and const all have slightly 
* different hoisting attributes. This is important to remember
* to note when it is most appropriate to use one over the other.
*/

    // Even though add() is called before add() is declared, it
    // is still able to execute the code because named functions
    // are hoisted to the top of the global scope.
    
    add(5, 12)      // returns 17
    
    function add(num1, num2){
        return num1 + num2;
    }
    