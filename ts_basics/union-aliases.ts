//!union
const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Smith");
console.log(combinedNames);

//!literal type////////////
// Function that only accepts specific days of the week
function logDay(
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"
) {
  console.log(`Today is ${day}`);
}

logDay("Monday"); // Valid
// logDay("Saturday"); // Error: Argument of type '"Saturday"' is not assignable to parameter of type '"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"'

//!
// Object with a literal type property
type Car = {
  brand: "Toyota" | "Honda" | "Ford";
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

// const anotherCar: Car = { brand: "Chevrolet", model: "Malibu", year: 2023 }; // Error: Type '{ brand: "Chevrolet"; model: "Malibu"; year: 2023; }' is not assignable to type 'Car'. Object literal may only specify known properties, and 'brand' does not exist in type 'Car'.

//!
// Union type with literals
type Result = "success" | "error" | "loading";

function handleResult(result: Result) {
  switch (result) {
    case "success":
      console.log("Operation succeeded!");
      break;
    case "error":
      console.log("An error occurred.");
      break;
    case "loading":
      console.log("Loading...");
      break;
  }
}

handleResult("success"); // Valid
// handleResult("warning"); // Error: Argument of type '"warning"' is not assignable to parameter of type 'Result'.

//!type aliases

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!