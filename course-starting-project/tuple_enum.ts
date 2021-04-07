// object, array, tuple

// const person: {
//   name: string;
//   age: number;
// } = { // bad Practice
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple : can only have numeric id, single role must state limited type(+length);
// } = {
//   name: "Johnny Tae",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "student"],
// };

// person.role.push("front-end"); // push is exception that is allowed in tuple
// person.role[1] = 10; // will not work since we specified that second element in role must be string but we are ordering it to be num
// person.role = [0, 'admin', 'user']; // will not work

// ENUM

// const ADMIN = 0; // works fine but lets try using enum!
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN, // ADMIN = 5  then it will change it to { 5, 6, 7 } || ADMING = 'ADMIN'
  READ_ONLY,
  AUTHOR,
} // === { 0, 1, 2 }

const person = {
  name: "Johnny Tae",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// if (person.role === "READ-ONLY-USER") {
if (person.role === Role.ADMIN) {
  // problem with this is that String must be exactly same
  console.log("is read only");
}

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Games"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // able to auto-complete .toUpperCase() method because ts knows hobby is string type
  // console.log(hobby.map()); // throws error since typescript already sees that hobby is string type
}

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
