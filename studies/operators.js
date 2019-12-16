/**
* OPERATORS:
* 
* 0. Operators are used in JS to assign values, compare values, 
*    perform arithmetic operations, and more.
* 
* 1. Assignment operator (=) - used to assign values to variables.
*    It can also be used with an arithmetic operator to perform
*    arithmetic and assign in the same step
*
* 2. Arithmetic operators - used to perform arithmetic between 
*    variables and/or values. These include: + (addition), -
*    (subtraction), * (multiplication), / (division), % (modulus),
*    ++ (increment), -- (decrement)
*
* 3. Comparison operators - used in logical statements to determine
*    equality or difference between variables and/or values. These
*    include: == (equal to), === (strictly equal to), != (not equal
*    to), !== (strictly not equal to), > (greater than), < (less
*    than), >= (greater than or equal to), <= (less than or equal 
*    to)
* 
* 4. Logical operators - used to determine logic between variables
*    and/or values. This set of operators include: && (and), ||
*    (or), ! (not)
* 
* 5. Unary operators (!, typeOf, -) - A unary operator is one that
*    takes a single operand/argument and performs an operation.
*    Some of these include: ! (not), typeOf (type of), - (negation)
* 
* 6. Ternary operator (a ? b : c) - This operator is often used as
*    a shortcut for an if statement. It takes three operands: 1.
*    a condition, followed by a question mark (?), 2. an expression
*    to execute if the condition is truthy, followed by a colon (:),
*    3. an expression to execute if the condition is falsy.
* 
*/


// 1. Assignment operators //
     // the assignment operator assigns the value 30 to age
    var age = 30;
    
    /*
    * Plus equals uses the assignment operator to add the value to
    * the right of the equation to the value of age and then assign
    * age the new value.
    */
    age+= 1;    // 31
    age-= 2;    // 29
    age*= 4;    // 116
    age/= 2;    // 58
    age%= 5;    // 3


// 2. Arithmetic operators //
    var x = 10;
    var y = 30;
    
    // performing arithmetic between variables and/or values
    console.log(x + y);     // 40
    console.log(x - y);     // -20
    console.log(y / x);     // 3
    console.log(x * y);     // 300
    console.log(y % x);     // 0
    
    /*
    * NOTE: ++ and -- are also unary operators, they increase or
    * decrease the value by 1
    */
    y++; // 30
    x--; // 9
    

// 3. Comparison operators //
    var a = 'apple';
    
    //comparing two strings, yielding a boolean value
    a == 'Apple'; // true
    a != 'Banana'; // true
    a === 'Apple'; // false
    a !== 'apple'; // false
    
    var num = 3;
    
    //comparing two numbers, also resulting in a boolean value
    num < 5; // true
    num > 5; // false
    num <= 3; // true
    num >= 10; // false
    

// 4. Logical operators //

    // Example #1
    var weather = 'sunny';
    var noHomework = true;
    
    /*
    * Both conditions have to be true in order to execute the
    * code inside the if statement because of the && 
    */
    if(weather === 'sunny' && noHomework === true){
        console.log('Time to go outside and play!');
    }

    // Example #2
    var weather = 'raining';
    var sleepy = true;
    
    /*
    * Either one of the conditions have to be true in order
    * to execute the code inside the if statement because 
    * of the || 
    */
    if(weather === 'raining' || sleepy === true){
        console.log('I feel like taking a nap.');
    }
    
    // Example #3
    var weather = 'raining'
    var flood = false;
    
    /* 
    * The not operator (!) is used to determine that the value of
    * flood has to be not true in order to print the following
    * string to the console
    */
    if(weather === 'raining' && flood === !true){
        console.log('I\'m glad we aren\'t getting too much rain');
    }
    

// 5. Unary operators (!, typeOf, -) //
    /*
    *These operators perform an operation on a single operand
    */
    
    // ! changes the truthy of falsy value to the opposite
    console.log(!true);         // false
    
    //the keyword typeof prints what kind of value it is given
    console.log(typeof 'test'); // string
    
    // - tries to convert the operand into a number and negates 
    var x = 5;
    console.log(-x);            // -5
    
    // -- is a decrement by the value of -1
    var y = 4
    y--;                        // -6
    
    // ++ is an increment by the value of +1
    var z = 6
    z++;                        // 7


// 6. Ternary operator (a ? b : c) //
    /*
    * canDrive accepts an age as an argument and then determines
    * if someone is old enough to drive via a boolean value. It
    * does this by using a ternary operator instead of an if
    * statement. This makes for a cleaner line of code.
    */ 
    function canDrive(age){
        return (age >= 16 ? true : false);
    }
    
    canDrive(20); // returns true
