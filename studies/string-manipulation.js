/**
* STRING-MANIPULATION:
* 
* 0. Javascript allows for primitive datatypes like strings to have
*    methods and properties because JS treats simple value as objects
*    when executing methods and properties. This gives us many ways
*    to manipulate string values, making them an even more dynamic
*    datatype. Below are two examples of different ways to manipulate
*    strings: with operators and with methods.
* 
*/

// 1. With operators //
/*
* With operators - Joining multiple strings together is known as
* concatenation. To do this we can us the addition operator
* which will join the two strings together. We can also use the 
* assignment operator and the addition operator for shorthand
* string concatenation and assignment (+=)
*/
    // The addition operator joins the two strings together
    console.log('Good' + ' day!'); // 'Good day!'
    
    var questionPart1 = "How are ";     // string # 1
    var questionPart2 = "you doing?";  // string # 1

    questionPart1 += questionPart2; // concatenating and assigning
    console.log(questionPart1);     // prints "How are you doing?"
    

// 2. With string methods //
/*
* With string methods - When you store a string inside of a
* variable you can then use string methods and properties to 
* further manipulate the string. There many different string 
* methods that allow you to manipulate any given string. Below are
* some examples of common and very useful string methods.
*/

    // Example # 1 //
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    /* 
    * .slice() does not alter the original string but copies the
    * specified values into a new string. It takes two parameters,
    * the starting index (inclusive) and the ending index 
    * (exclusive) and copies the values between the two indexes.
    */
    console.log(alphabet.slice(5, 7)); // fgh
    
    
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
    * indexed. indexOf() can also take a second argument which is
    * the index from which you would like it to begin its search.
    * .indexOf() is case sensitive and returns -1 if value is not
    * present in string.
    */
    
    // returns 9
    console.log(alphabet.indexOf("JK"));
    
    
    // Example # 4 //
     /*
    * .search() is very similar to indexOf() but has a few functional
    * differences. First, it can only take one argument, it can not
    * begin its search from a specified index like indexOf() can. 
    * However, it is able to take regular expressions as an argument,
    * making it a very powerful method.
    */
    
    // returns 9
    console.log(alphabet.search(/JKL/));
    
    
    // Example # 5 //
     /*
    * .trim() is a method that removes white space from both sides
    * of a given string.
    */
    var extraSpace = '  James Easter   ';
    
    // 'James Easter'
    var name = extraSpace.trim();
    console.log(name);
    
    
    // Example # 6 //
     /*
    * .split() is a method splits a string into an array of 
    * substrings and returns the new array. If an empty string ('')
    * is used as the separator (.split()'s parameter) then the
    * string is split between each character.
    */
    
    // ['James', 'Easter']
    console.log(name.split(" "));
    