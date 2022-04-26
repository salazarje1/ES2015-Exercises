// ES5 Global constants 
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global constants
const PI = 3.14; 
PI = 42; // TypeError: Assignment to constant variable.


// 1. What is the difference between var and let?
        // var is the old way of declaring variable. It is function scoped and can be redeclared. 
        // let is the new way. It is block scoped, can be reassigne but can not be redeclared. 

// 2. What is the difference between var and const?
        // const can not be redeclared or reassigned like var. 
        // var is hoisted and const is not.

// 3. What is the difference between let and const?
        // let can be declared before assigning a value, const can not. 
        // let can be reassigned, const can not. 

// 4. What is hoisting?
        // hoisting is when variables are declared in a file before it is assigned or the rest of the code runs. 
        // so it seems like the variable is being pulled to the top of the file. 


