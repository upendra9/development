let lname: string;
let age:number;
let isValid:boolean =false;

let empList:string[]; //Array
let numList : Array<number>;  //Generics

numList=[1,2,3,4,5];
empList=["dd","dgkd"];
lname= 'John';

let newName = lname.toUpperCase();

age=25;


let results = numList.filter((num)=> num%2==0) ;

let sum = numList.reduce((acc,num)=>acc+num);
console.log(results);
console.log(`sum ${sum}`);

//lname=10;


//Enum : 
enum Color {
    Red,
    Blue,
    Orange
}

let col = Color.Orange;
// "const enum" ---> does not put equivalent in JS . eg: Just  let const2 = 1;
const enum Color2 {
    Pink,Yellow
}
let const2 = Color2.Yellow;

//Tuples
let SwapnNum:[number,number];
function SwapnNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1];
}


//Any Data type 
    //JS doesnot have any 
    // Avoid using Any Datatype
let department : any;
department = "11";
department = 123;



// void


// never 


