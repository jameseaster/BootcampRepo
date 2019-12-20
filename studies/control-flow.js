/**
* CONTROL-FLOW:
*
* 0. The control flow is the order in which the computer executes
*    the code. Code is run in order from the first line to the last.
*    We can change the order of code or direct its flow with 
*    conditional statements (i.e. if, else-if, else, switch).
*    
*/

// 1. If //
/*
* If: used to specify a block of code to be executed only if the
* given condition is true. You can only have one `if` statement
* in an if-else chain because it begins the logic.
*/
    //an initialized variable with a value of true
    var jamesIsTired = true; 
    
    //if jamesIsTired is true, then the code block will execute
    if(jamesIsTired){
        console.log('Go to bed earlier');
    }
    //prints 'Go to bed earlier' because jamesIsTired is true


// 2. Else-if //
/*
* Else-If: specifies a new condition if the first condition is 
* false. If the else-if condition is met, its block of code will
* run. You can have as man `else-if` statements in an 'if-else'
* block chain as you need to complete you logic.
*/

    //timeOfDay is give the value 'afternoon'
    var timeOfDay = 'afternoon';
    
    //Because timeOfDay is not 'morning', if statement is skipped
    if(timeOfDay === 'morning'){
        console.log('Good morning');

    //timeOfDay is 'afternoon' so this block of code will execute
    } else if (timeOfDay === 'afternoon'){
        console.log('Good afternoon');
    
    //the conditional statement does not make it to 'else'
    } else {
        console.log('Good night');
    }


// 3. Else //
/*  
* Else: similar to a default condition. This runs if all previous
* condition(s) are false. Else does not have a conditional 
* statement and you can only have one of them at the end to
* properly function as a default statement.
*/
    
    //coffeeCup is given the string value of 'empty'
    var coffeeCup = 'empty';
    
    //coffeeCup does not equal 'full' so this code is skipped
    if(coffeeCup === 'full'){
        console.log('That\'s a good place to be');
    
    //coffeeCup does not equal 'half-full' so this code is skipped
    } else if(coffeeCup === 'half-full'){
        console.log('Your\'re good to go for a while');

    //else code is executed because the previous 
    //conditions were not met
    } else {
        console.log('Probably time for a refill');
    }


// 4. Switch //
/*
* Switch: used to perform different actions based on different
* conditions. These can create a more legible way of writing long 
* else-if statements. To write a switch statement you begin with
* the keyword `switch` then by your expression that is evaluated
* in parentheses followed by curly braces that hold the code
* block. Inside the code block each possible result starts with 
* the keyword `case` followed by a value and a semicolon. On the
* next line you give a statement to be executed if the case 
* matches the original conditional expression with a semicolon. 
* Finally, you the keyword `break` followed by a semicolon before
* you start your next `case` on the following line. This `break`
* breaks out of the code block so the other case's are not 
* evaluated or executed. To end the switch statement you can use
* the keyword default. Similar to the default behavior of an else
* statement, default will run when none of the cases match the 
* value of the original conditional expression.
*/   
    var hungerLevel = 4;
    
    //switch looks for hungerLevel
    switch(hungerLevel){
    
    //if hungerLevel is 1, the following code executes until
    //the keyword break, breaking out of the switch statement
      case 1:
        console.log('Food shmood. I\'m fine.');
        break;
        
    //the same is true for the following cases    
      case 2:
        console.log('A snack could be enjoyable');
        break;
        
    //hungerLevel is not 3 so it keeps going to the next case
      case 3:
        console.log('Time to make a plan for lunch');
        break;
        
    //hungerLevel is 4, so it executes the code until the
    //keyword break is encountered
      case 4:
        console.log('You can find me in the kitchen');
        break;
        
    //code does not get to case 5 because of the break
      case 5:
        console.log('H-angry is next, you better eat');
        break;
        
    //this is only executed if none of the cases were met
      default:
        console.log('Food is pretty necessary either way');
        
    }
