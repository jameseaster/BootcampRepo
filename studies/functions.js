/**
* FUNCTIONS:
* 
* 1. The two phases to using functions: First we must ___? Next we 
*    can execute (or two other words for executing a function?) a
*    function by?
* 
*    In order to use a function we first have to declare/define the
*    function. This is done by writing the code that you want your 
*    function to execute once it is called. A function is defined 
*    with the function keyword, followed by a name, followed by 
*    parentheses. Then you place the code you want to execute within
*    curly brackets.
*
*    Next, we invoke or call a function by using parentheses.
*    Accessing a function without () will return the function 
*    definition instead of executing the functions code.
*
* 
* 2. What’s the difference between a function’s parameters and
*    arguments PASSED to a function?
* 
*    A functions parameters are listed inside the parentheses in
*    the function declaration. These spots that are held to receive
*    values(arguments) that are manipulated within the functions
*    code block.
* 
*    Arguments are the values received by the function when it is
*    invoked. Inside the function, the arguments behave as local
*    variables. Parameters are like a car's car seats, while 
*    arguments are like the car's actual passengers.
* 
* 
* 3. What’s the syntax for a NAMED function?
*    
*    // Named function syntax //
*    function add(numOne, numTwo) {
*        return numOne + numTwo;
*    }
* 
*    A function is defined with the function keyword,
*    followed by a name, followed by parentheses. Then you place
*    the code you want to execute within curly brackets.
*
* 
* 4. How do we assign a function to a variable?
*    
*    We can assign a function to a variable with the assignment
*    operator. Then we can use the function as a variable. When we
*    assign an anonymous function to a variable it is called a 
*    function expression.
*
* 
* 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a 
*    single value. How do we specify inputs, and how do we specify 
*    outputs? //
* 
*    We can specify a functions inputs by declaring a function with
*    a specified amount of parameters.
* 
*    We can specify a functions outputs within the code block where
*    we write out what we want the function to do with the arguments.
*    The return statement is also a way to break out of the code
*    block. We can use the return keyword to return the desired
*    output while simultaneously breaking out of the functions code
*    block.
*
* 
* 6. Scope: Functions can see and modify variables in parent or 
*    global scopes. The inverse is NOT true.
* 
*    Functions can reference and modify variables that are outside
*    of their code block (parent or global variables). However, 
*    variables that are listed inside of the functions code block 
*    have a local scope, meaning they cannot be modified from 
*    outside of the function.
*
* 
* 7. Closures: Functions form closures around the data they house.
*    If an object returned from the Function and is held in memory
*    somewhere (referenced), that closure stays ALIVE, and data can
*    continue to exist in these closures! (See: our meeting-room
*    app for an example!)
*
*/


// 1. Two phases to using a function // 
    // Declaring/Defining a function
    function subtraction(a, b) {return a - b}
    
    // Invoking the function
    subtraction(89, 12); // returns the number 77


// 2. Parameters vs Arguments //
    // subtraction()'s parameters are a and b
    function subtraction(a, b) {return a - b}
    
    // subtraction()'s arguments are 89 and 12
    subtraction(89, 12); // returns the number 77


// 3. Syntax for a NAMED function //
    function allCaps(string){       // keyword: function
        return string.toUpperCase();// name: allCaps
                                    // parameter: string
    }                               // Code within curly braces


// 4. Assign a function to a variable//
    var x = allCaps('dat!'); // assigning allCaps to x
    console.log('Who ' + x); // prints 'Who DAT!'


// 5. Inputs & Outputs//
    // subtraction takes two inputs -> a and b
        // subtraction then returns one output value,
        // which is the difference of a and b
    function subtraction(a, b) {return a - b}
    
    subtraction(12, 21); // returns the number -9


// 6. Scope of a function//
   var exerciseMinutes = 0; //variable declared globally
    
    function exerciseCalculator(daysSinceLastWorkout){
        
        // local variables only used within the function's scope
        const workoutTime = 15 * daysSinceLastWorkout;
        const newTime = workoutTime + exerciseMinutes;
        
        return `Exercise for ${newTime} minutes.`;
    }

    exerciseCalculator(4); // returns "Exercise for 60 minutes.
    
  /* 
  * (commented out for grading):
  *
  * console.log(newTime); // returns a ReferenceError
  *
  */


// 7. Closure//
    /* 
    * The inner function can utilize the outer function's 
    * parameters and variables.
    */ 

    function closureMaker(outerParam){
        var outerVariable = 5;
        
        return function(innerParam) {
            return outerParam + outerVariable + innerParam;
        };
    }
    
    closureMaker(10)(3); // returns 18
    