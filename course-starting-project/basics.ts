// export {}; // with this redeclare issue is gone

const add = (
  n1: number,
  n2: number,
  shouldResultShow: boolean,
  text: string
) => {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   // non typescript way
  //   throw new Error("Incorrect input!");
  // }

  const result = n1 + n2;
  if (shouldResultShow) {
    console.log(text + result);
  } else {
    return n1 + n2;
  }
};

// const number1 = 5;
let number1: number; // 5.0 // when using let and not actually assign any value it is good practice to assign type to validate value that will be stored later on.
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultText = "Result is: ";

add(number1, number2, printResult, resultText);

// The core primitive types in TypeScript are all lowercase!
// i.e string & number NOT String & Number
