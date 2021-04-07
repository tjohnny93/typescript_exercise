// Type Aliases / Custom Types
type Combinable = number | string;
type resultTypes = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  // resultAs: string
  resultAs: resultTypes // by using literal types ts will notify if we mistype : good since we only have 2 types for this example
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultAs === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultAs === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("John", "Jay", "as-text");
console.log(combinedNames);

//Type Aliases & Object Types
type User = { name: string; age: number };
const user1: User = { name: "Johnny", age: 28 };
