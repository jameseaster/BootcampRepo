/**
* STRING-MANIPULATION:
*
* 1. With operators - Joining multiple strings together is known as
*    concatenation. To do this we can us the addition operator
*    which will join the two strings together. We can also use the 
*    assignment operator and the addition operator for shorthand
*    string concatenation and assignment (+=)
*
* 2. With string methods - When you store a string inside of a
*   variable you can then use string methods and properties to 
*   further manipulate the string. There many different string 
*   methods that allow you to manipulate any given string. Below are
*   some examples of common and very useful string methods.
*
*/


// 1. With operators //
    // The addition operator joins the two strings together
    console.log('Good' + ' day!'); // 'Good day!'
    
    var questionPart1 = "How are ";     // string # 1
    var questionPart2 = "you doing?";  // string # 1

    questionPart1 += questionPart2; // concatenating and assigning
    console.log(questionPart1);     // prints "How are you doing?"
    

// 2. With string methods //

    // Example # 1 //
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    /* 
    * .length is an extremely useful string property. It
    * calculates the number of elements in a string and/or array.
    * This is different than the index of the same element because
    * strings and arrays are zero-based index.
    */
    console.log(alphabet.length); // 26
    
    
    // Example # 2 //
    /*
    * .toLowerCase() is a method that takes a string and returns a
    * string in all lower case. It does not change the original 
    * string
    */
    
    // returns 'abcdefghijklmnopqrstuvwxyz'
    console.log(alphabet.toLowerCase());
    

    // Example # 3 //
     /*
    * .indexOf() is a case sensitive method returns the position of
    * the first occurrence of a specified value in a string. It is
    * important to remember that strings and arrays are zero-base
    * indexed
    */
    
    // returns 9
    console.log(alphabet.indexOf("J"));
    
    
    // Example # 4 //
     /*
    * .trim() is a method that removes white space from both sides
    * of a given string.
    */
    var extraSpace = '  James Easter   ';
    
    // 'James Easter'
    var name = extraSpace.trim();
    console.log(name);
    
    
    // Example # 5 //
     /*
    * .split() is a method splits a string into an array of 
    * substrings and returns the new array. If an empty string ('')
    * is used as the separator (.split()'s parameter) then the
    * string is split between each character.
    */
    
    // ['James', 'Easter']
    console.log(name.split(" "));
    