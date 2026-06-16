const greet = function sayHello() {
  console.log("Hello");
};

greet();

console.log("---------------");

const add = (a, b) => {
  const sum = a + b;
  return sum;
};

let result = add(3, 5);

console.log(result);

console.log("---------------");

setTimeout(function () {
  console.log("Dhruv Patel");
}, 2000); // it run after 3s ( Delay )

const add1 = (a, b) => a + b;
console.log(add1(5, 5));

console.log("---------------");

const square = (x) => x * x;
console.log(square(3));

console.log("---------------");

function show(...items) {
  console.log(Array.isArray(items)); // true
}

show(1, 2, 3);

console.log("---------------");

function show1(...items) {
  console.log(items); // [1,2,3]
}

show1(1, 2, 3);

console.log("---------------");

function show2(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

show2(10, 20, 30, 40, 50);

console.log("---------------");

let studentName = ["Dhruv", "Patel"];

for (let value in studentName) {
  console.log(value, studentName[value]);
}

console.log("---------------");

let crr = [10, 20, 30, 40];

let srr = [...crr];

srr.push(90);

console.log(srr); // [10,20,30,40,90]
console.log(crr); // [10,20,30,40]

console.log("---------------");

let name = "Dhruv Patel";

let arr = [...name];

console.log(arr);

console.log("---------------");

let user = {
  name: "Dhruv",
  address: {
    city: "Ahmedabad",
  },
};

let copy = { ...user };

console.log(copy);

copy.name = "Surat";

console.log(copy);

console.log(user);

console.log("---------------");

copy.age = 20;

console.log(copy);

console.log(user);

console.log("---------------");

copy.address.pincode = 382421;

console.log(copy);

console.log(user);

console.log("---------------");

// Store in a variable
const sayHi = function () {
  console.log("Hi");
};

// Pass as argument
function callTwice(fn) {
  fn();
  fn();
}
callTwice(sayHi); // Hi  Hi

console.log("---------------");

// callback function

function processUser(name, callback) {
    console.log("Processing user: " + name);
    callback(name);
}

function welcome(name) {
    console.log("Welcome, " + name);
}

processUser("Aman", welcome);

// Processing user: Aman
// Welcome, Aman
