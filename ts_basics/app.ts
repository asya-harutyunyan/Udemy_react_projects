//!void
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result " + num);
};
//void- if function does not return anything
printResult(add(5, 12));

//!function type

//let combineValues: Function;//ete senc grenq cankacac function karanq es popoxakani mej dnenq

let combineValues: (a: number, b: number) => number; // ays tarberakov asum enq vor 2 parametr e unenalu, 2nel number ev return ani number

combineValues = add;
//combineValues = 5; //Type 'number' is not assignable to type 'Function'.

console.log(combineValues(8, 8));

//!
const addHandler = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addHandler(10, 20, (result) => {
  console.log(result);
});

//!unknown

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

//if we won't check with if statement userName=userInput will give an error, when using unknown type, but if we use any- it won't give an error

//!never
//The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

/////////////////////////////////
//No Type Checking: With any, TypeScript essentially turns off type checking for that particular variable or expression. You can assign any value to a variable of type any, and TypeScript won't complain.

any: let variable1: any = 42;
variable1 = "Hello, TypeScript!";
//No Type Inference: When you use any, TypeScript doesn't provide any type inference. It essentially treats the variable as having the most lenient type.

let variable2: any;
variable2 = 42; // OK
variable2 = "Hello"; // OK

//!
//Type Checking Required: Unlike any, with unknown, TypeScript still enforces type checking. You cannot perform arbitrary operations on values of type unknown without first narrowing the type.

unknown: let variable3: unknown = 42;
// let result: number = variable3; // Error: Type 'unknown' is not assignable to type 'number'.
//Type Inference: When you have a value of type unknown, TypeScript will infer the most specific type that still allows the value to conform to the unknown type.

let variable4: unknown;
variable4 = 42; // OK, TypeScript infers variable4: number
variable4 = "Hello"; // OK, TypeScript infers variable4: string
//Type Narrowing: To work with values of type unknown, you typically need to narrow the type using type assertions, type guards, or other mechanisms.

let variable5: unknown = "Hello, TypeScript!";
if (typeof variable5 === "string") {
  let length: number = variable5.length; // Type narrowing, OK
}

////////////////////////////////////////
//!Spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person }; //we created a new object, a copy of person object

//!Rest parameters
const add2 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add2(5, 10, 2, 4, 9);
console.log(addNumbers);
