// ******************  DIFFERENT WAYS to write function ******************************************************
 // https://www.youtube.com/watch?v=3qBXWUpoPHo
// Functions  - WAY 1
    // (num1:number,num2:number) --> input types are defined --> similar to Java method signature Input type
    // : number --> return type  --> similar to Java method signature return type
function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log('First Way :'+add(2,3));

// Functions - WAY 2  --- 
//Using Arrow function
// Just removes function keyworkd
// can be converted as below 

const  sub = (num1:number,num2:number):number => num1-num2;

console.log('WAY 2- SUB '+sub(10,4));

// Function -- WAY 3 
// Adding anonymous function
const  mult = function (num1:number,num2:number):number {
 return num1 * num2;
};
console.log('WAY 3 - MULT '+mult(10,4));

// ***************** *******************************************************
//  Optional PARAMETERS  

//  Required PARAMETERS  

//  Rest PARAMETERS  