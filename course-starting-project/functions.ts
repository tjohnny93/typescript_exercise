// function return types && "void"
// function add2(n1: number, n2: number): number {
//   return n1 + n2;
// }

const add2 = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult2 = (num: number): void => {
  // function can only have undefined return type if it has return but won't return any value;
  console.log("result: " + num);
  // since this function is not returning anything it has void return type
};

let someValue: undefined;

printResult2(add2(5, 12));

// let combinedValues;
let combinedValues: (a: number, b: number) => number;

combinedValues = add2;
// combinedValues = 5; // now it will throw error;
// combinedValues = printResult2;

console.log(combinedValues(8, 8)); // this will run and will throw error at runtime;

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
