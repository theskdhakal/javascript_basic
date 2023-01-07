var name = "shiva";
let address = "abcd";
const dob = "12/23/2022";

console.log(name);
console.log(address);
console.log(dob);

let ans = 7 + 2;

console.log(ans);

const val = Math.PI;
console.log(val);

const answer = Math.round(3.4);
console.log(answer);

const abc = Math.random(100);
console.log(abc);

let abcd = Math.random(100);
abcd = abcd * 100;
abcd = Math.round(abcd);
console.log(abcd);

// consitional statement

const age = 13;
const gender = "m";

// if (age > 18 && "m") {
//   console.log("here you go");
// } else {
//   console.log("sorry mate");
// }

age >= 18 && gender === "m"
  ? console.log("here you go")
  : console.log("sorry mate");

const pet = "cow";

if (pet === "dog") {
  console.log("woof");
} else {
  console.log("xyz");
}

switch (pet) {
  case "cat":
    console.log("meow");
    break;

  case "cow":
    console.log("moo");
    break;

  default:
    console.log("abcd");
}

// Error handling
try {
  //   const sum = 9 + 1;
  //   sum = sum + 1;
  //   console.log(sum);

  throw new Error("you made mistake");
} catch (error) {
  console.log(error);
}

// Time scheduling

let i = 10;
console.log("time before running settimeout");

// const int = setInterval(() => {
//   console.log(i--);
//   if (i === 1) {
//     clearInterval(int);
//   }
// }, 100);

const timer = setTimeout(() => {
  console.log("5 second wait");
}, 20);

setTimeout(() => {
  clearTimeout(timer);
}, 2);

// condition
console.log(" after runnign settimeout");

// function

// (create) => (call) => execute;
function add(a, b) {
  const ttl = a + b;
  return ttl;
}

const ant = add(5, 6);
const ans1 = add(12, 13);
const ans11 = add(5, 32);

console.log(ant, ans1, ans11);

const naam = "shiva";
const speaks = "hi there";

const say = naam + " " + speaks;

const amn = `${naam} would like to say`;

console.log(say);
console.log(amn);

// ES6

const sum = (a, b) => {
  return a + b;
};

// sum = (2, 3) => 2 + 3;

console.log(sum(1, 2));

const suma = (a, b) => a + b;

console.log(suma(2, 3));

const bio = (name, location) =>
  `hi k xa khabar. timile ${name} lai china xa ${location} basni`;

const shiva = bio("shiva", "kailash");
console.log(shiva);

const mobile = bio("mobile", "case");
console.log(mobile);
