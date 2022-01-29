//https://www.educative.io/blog/typescript-tutorial
//https://www.javatpoint.com/typescript-vs-es6
//https://www.greycampus.com/blog/programming/java-script-versions
//https://www.typescriptlang.org/play

//TYpescript = ES6 + some additional functionalities
//Typescript - transpiler, static typing , has interfaces , supports optional parameters

			//static type - you declare variable type   let num: number = 20;  --> catches compile time errors
			//dynamic type - don't declare variable type like num=20    --> runtime errors
				//Javascript is dynamic type so you get run time errors, while TS is static type (you declar)
					// Transpiling allows you to generate ECMAScript to support in all browsers
					// supports inclusion of other libraries like Jquery or anything JS. 

//********************************   
//let varaibleName: typeScriptType = value;

let num: number = 23;
let hex: number = 0xbeeff;
let yes: boolean = true;
let no: boolean = false;

//********************************    TYpe Script array - You can also assign multiple types to one array using the | operator or create a multidimensional array to save one array into another array using the [ ] operator.
const arr3: (Date| String[])[] = [new Date(),new Date(),["1","dgsg"]];

//********************************   TUple 
let numberTuple: [number, number, number];

//String  ${expression}
let w = "Value1";
let x= "test"+w;
let z= `tis is test ${w}`;
console.log(w,x,z);


//********************************   Step 3: Basics of variables - var, let, and const
	//var - fucntion scope , i.e global scope in the function.
	// let - is restrictive to block scrope where it is declared similar to java 
	// cannot have $ @ or start with numbers

function funTestVar() 
	{
	    var dataX = 10; //Globally available inside funTestVarction funTestVar()
	 
	    if(true) 
	    {
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
function funTestLet() 
{
    let dataX = 10; 
 
    if(true) 
    {
        let dataY = 20; 
 
        console.log(dataX); //Output 10
        console.log(dataY); //Output 20
    }
     
    console.log(dataX); //Output 10
    //console.log(dataY); //dataY is 'undefined'
}
 
funTestLet();

// All vars by default assigned to undefined, let will throw error if used before acccessing similar to java.
function funTestVarLEt() 
{
    console.log(x);     //Output 'undefined'
    //console.log(y);     //Error - "Uncaught ReferenceError: y is not defined"
     
    var x = 10;
    let y = 11;
}
funTestVarLEt();

//COnstant
const PI = "3.14";
 
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

class  class_Name{
	field;
	method;
}

class Person{
	name;
}
// ABove class will get exported or converted as belo
var Person1=(function(){
	function Person1(){

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
class Dog{
	name: string;
	constructor(data: string){
		this.name = data;
	}
}

let dogvikki = new Dog('Vikki');
if(dogvikki instanceof Dog){
	console.log(`${dogvikki.name} is a dog`);
}

//typeof
let obj1= {name:"test"};
let obj2: typeof obj1;
obj2={name:"test2"};
type printType = typeof obj2;

// AS or <>   -- to cast some variables as datatypes
let str: any = 'this is string';
let srlength=(str as string ).length;

// or
let srlength2 = (<string> str).length;    // similar to java


