// console.log("hello");
// console.error("error");
// console.warn("Warning");

console.log("5" * 2); // 10
console.log("5" + 2 + 3); //523

console.log(typeof NaN); // number
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true


console.log(null instanceof Object); // false bcz null is not actually an object. Only typeof reports "object" because of the historical bug.
console.log(typeof null === "object"); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(5 !== "5"); // true
console.log(5 != "5"); // flase

console.log(true + true); // 2
console.log(false == 0);  // true

console.log([] == false); //true
console.log([] === false); //false


let user = null;

console.log(user);         // null
console.log(typeof user);  // "object"


console.log(parseInt("12.99")); // 12
console.log(Number("12.99"));  // 12.99

console.log(parseInt("123px")); // 123
console.log(Number("123px"));  // NaN

console.log(parseInt("px123")); //NaN  Because conversion cannot start from "p".
console.log(Number("px123"));  // NaN Because conversion cannot start from "string".

console.log(parseInt("")); //NaN
console.log(Number(""));  // 0

console.log(parseInt(true)); // NaN
console.log(Number(true));  // 1
console.log(Number(false));  // 0


// let value = prompt("Enter name"); check ok and click

// console.log(value);
// console.log(typeof value);

// console.log(0 === false); false 



function footPath(){
    console.log('I am main footpath');
}


function mainRoad(a){
    console.log('I am main road');
    // console.log(a);
    a();
    
    
}

mainRoad(footPath);



