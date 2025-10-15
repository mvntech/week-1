// === old: "variables declaration" ===
var oldName = "Muntaha";
var oldAge = 17;
var oldCity;

// === new: "variables declaration" ===
const newName = "Muntaha";
let newAge = 17;
let newCity;

// === old: "arrow functions" ===
function oldGreet(name){
    return console.log("Hello " + name + "!\n");
}

// === new: "arrow functions" ===
const newGreet = (name) => console.log(`Hello ${name}!\n`);

// === old: "template literals" ===
const myName = "Muntaha";
const myDesignation = "Developer";
console.log("Hello, i'm " + myName + " & my designation is " + myDesignation + ".\n");

// === new: "template literals" ===
const empName = "Aima";
const empNumber = "03264488907";
console.log(`The employee is ${empName} & the phone number is ${empNumber}.\n`);

const user = {
    name: "Muntaha",
    age: "17",
    city: "Karachi",
    designation: "Developer"
};
// === old: "destructuring" ===
const oldUserName = user.name;
const oldUserAge = user.age;
const oldUserCity = user.city;
const oldUserDesignation = user.designation;

// === new: "destructuring" ===
const { name, age, city, designation } = user;
console.log(`${name} is a ${designation} of ${age} years old and lives in ${city}.`);