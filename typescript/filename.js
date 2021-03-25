//https://www.educative.io/blog/typescript-tutorial
//https://www.javatpoint.com/typescript-vs-es6
//TYpescript = ES6 + some additional functionalities
//Typescript - transpiler, static typing , has interfaces , supports optional parameters
//static type - you declare variable type   let num: number = 20;  --> catches compile time errors
//dynamic type - don't declare variable type like num=20    --> runtime errors
//Javascript is dynamic type so you get run time errors, while TS is static type (you declar)
// Transpiling allows you to generate ECMAScript to support in all browsers
// supports inclusion of other libraries like Jquery or anything JS. 
//********************************   
//let varaibleName: typeScriptType = value;
var num = 23;
var hex = 0xbeeff;
var yes = true;
var no = false;
//********************************    TYpe Script array - You can also assign multiple types to one array using the | operator or create a multidimensional array to save one array into another array using the [ ] operator.
var arr3 = [new Date(), new Date(), ["1", "dgsg"]];
//********************************   TUple 
var numberTuple;
//String  ${expression}
var w = "Value1";
var x = "test" + w;
var z = "tis is test " + w;
console.log(w, x, z);
//********************************   Step 3: Basics of variables - var, let, and const
//var - fucntion scope , i.e global scope in the function.
// let - is restrictive to block scrope where it is declared similar to java 
// cannot have $ @ or start with numbers
function funTestVar() {
    var dataX = 10; //Globally available inside funTestVarction funTestVar()
    if (true) {
        var dataY = 20; //Globally available inside funTestVarction funTestVar() 
        console.log(dataX); //Output 10
        console.log(dataY); //Output 20
    }
    console.log(dataX); //Output 10
    console.log(dataY); //Output 20
}
funTestVar();
//console.log(dataX); //Not available outside function; dataX is undefined
//console.log(dataY); //Not available outside function; dataY is undefined
//Let scoping 
function funTestLet() {
    var dataX = 10;
    if (true) {
        var dataY = 20;
        console.log(dataX); //Output 10
        console.log(dataY); //Output 20
    }
    console.log(dataX); //Output 10
    //console.log(dataY); //dataY is 'undefined'
}
funTestLet();
// All vars by default assigned to undefined, let will throw error if used before acccessing similar to java.
function funTestVarLEt() {
    console.log(x); //Output 'undefined'
    //console.log(y);     //Error - "Uncaught ReferenceError: y is not defined"
    var x = 10;
    var y = 11;
}
funTestVarLEt();
//COnstant
var PI = "3.14";
//PI = 12;    //Uncaught TypeError: Assignment to constant variable.
//****************** Step 5: Type Inference
// compiler infers the types based on return types  / initialization done / default vars are set. 
//****************** Step 6: Typescript Functions
// functions Expressions
// function declarations 
//****************** Step 7: Mapped Type  --> helps to create new types from existing types
// different mapping functions in Typescript: 
// 		partial, 
// 		nullable, pick, omit, record, extract, exclude, 
// 		 ReturnType.
// ******************  Step 8: Objects and OOP  -- class keyword
var class_Name = /** @class */ (function () {
    function class_Name() {
    }
    return class_Name;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// ABove class will get exported or converted as belo
var Person1 = (function () {
    function Person1() {
    }
    return Person1;
});
//There are many different object types in Typescript: 
//Object, object, and {object}
//**************** Step 9: Type Checking and Assertions
// Type checking done by
// 	1. Instanceof   --> can check for custom types yo define like classes 
// 	2. TypeOf       --> check for basic data types
// instanceof
var Dog = /** @class */ (function () {
    function Dog(data) {
        this.name = data;
    }
    return Dog;
}());
var dogvikki = new Dog('Vikki');
if (dogvikki instanceof Dog) {
    console.log(dogvikki.name + " is a dog");
}
//typeof
var obj1 = { name: "test" };
var obj2;
obj2 = { name: "test2" };
// AS or <>   -- to cast some variables as datatypes
var str = 'this is string';
var srlength = str.length;
// or
var srlength2 = str.length; // similar to java
