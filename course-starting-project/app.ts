// Unknown type
let userInput: unknown; // bettern than : any because it requires extra verification
let userName: string;

userInput = 5;
userInput = "Johnny";
if (typeof userInput === "string") {
  // need extra step check if unknown is used
  userName = userInput;
}

// Never type

const generateError = (message: string, code: number): never => {
  // this never returns anything
  throw { message: message, errorCode: code };
  // while (true) {} // infinite loop
};

generateError("An error occurred!", 500);
