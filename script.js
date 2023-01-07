// var name = "shiva";
// let address = "abcd";
// const dob = "12/23/2022";

// console.log(name);
// console.log(address);
// console.log(dob);

// let ans = 7 + 2;

// console.log(ans);

// const val = Math.PI;
// console.log(val);

// const answer = Math.round(3.4);
// console.log(answer);

// const abc = Math.random(100);
// console.log(abc);

// let abcd = Math.random(100);
// abcd = abcd * 100;
// abcd = Math.round(abcd);
// console.log(abcd);

// // consitional statement

// const age = 13;
// const gender = "m";

// // if (age > 18 && "m") {
// //   console.log("here you go");
// // } else {
// //   console.log("sorry mate");
// // }

// age >= 18 && gender === "m"
//   ? console.log("here you go")
//   : console.log("sorry mate");

// const pet = "cow";

// if (pet === "dog") {
//   console.log("woof");
// } else {
//   console.log("xyz");
// }

// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;

//   case "cow":
//     console.log("moo");
//     break;

//   default:
//     console.log("abcd");
// }

// // Error handling
// try {
//   //   const sum = 9 + 1;
//   //   sum = sum + 1;
//   //   console.log(sum);

//   throw new Error("you made mistake");
// } catch (error) {
//   console.log(error);
// }

// // Time scheduling

// let i = 10;
// console.log("time before running settimeout");

// // const int = setInterval(() => {
// //   console.log(i--);
// //   if (i === 1) {
// //     clearInterval(int);
// //   }
// // }, 100);

// const timer = setTimeout(() => {
//   console.log("5 second wait");
// }, 20);

// setTimeout(() => {
//   clearTimeout(timer);
// }, 2);

// // condition
// console.log(" after runnign settimeout");

// // function

// // (create) => (call) => execute;
// function add(a, b) {
//   const ttl = a + b;
//   return ttl;
// }

// const ant = add(5, 6);
// const ans1 = add(12, 13);
// const ans11 = add(5, 32);

// console.log(ant, ans1, ans11);

// const naam = "shiva";
// const speaks = "hi there";

// const say = naam + " " + speaks;

// const amn = `${naam} would like to say`;

// console.log(say);
// console.log(amn);

// // ES6

// const sum = (a, b) => {
//   return a + b;
// };

// // sum = (2, 3) => 2 + 3;

// console.log(sum(1, 2));

// const suma = (a, b) => a + b;

// console.log(suma(2, 3));

// const bio = (name, location) =>
//   `hi k xa khabar. timile ${name} lai china xa ${location} basni`;

// const shiva = bio("shiva", "kailash");
// console.log(shiva);

// const mobile = bio("mobile", "case");
// console.log(mobile);

// // loop

// // for loop
// cars = ["toyota", "volkswagan", "mazda", "a", "ab"];
// for (i = 3; i < cars.length; i++) {
//   console.log("cars");
// }

// // while loop
// let x = 0;
// while (x < 40) {
//   console.log(x);
//   x++;
// }

// // do while loop
// let a = 0;
// do {
//   if (a == 60) {
//     console.log("BREAK");
//   }
//   a++;

//   if (a % 2 == 0) {
//     continue;
//   }
//   console.log(a);
// } while (a < 100);

// // JS-data manipulation

// const f = 4_345_434_235_432;
// console.log(f);

// const q = "45.634f";
// console.log(isNaN(q));
// const utr = Number(q);
// const tr = +q;

// console.log(utr);
// console.log(tr);

// const dent = parseInt(q);
// const ed = parseFloat(q);
// console.log(dent, ed, typeof ed);

// // string and index;

// const str =
//   'Dented code Academy is located in Rockdale,Sydney and it opens "seven" days a week';

// const length = str.length;
// console.log(length);

// console.log(str.toUpperCase());
// console.log(str.includes("shiva"));
// console.log(str.split(","));
// console.log(str.trim());
// console.log(str.search("code"));
// console.log(str + " " + "going home");
// console.log(str.charAt(3));

// // Array

// const fruits = ["apple", "banana", "orange", "tomatoes"];

// // fruits.push("mango");
// // console.log(fruits);

// // fruits.unshift("tomatoes");
// // console.log(fruits);

// // const extr = fruits.shift();
// // console.log(extr);

// // const intra = fruits.pop();
// // console.log(intra);

// // const splice = fruits.splice(1, 3);
// // console.log(splice);

// const old = fruits.toString();
// const of = fruits.indexOf("banana");
// console.log(old);
// console.log(of);

// console.log(fruits.join("-").split("-"));

// const numb = [23, 1, 45, 2345, 984654];
// console.log(numb.sort((a, b) => b - a));

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const newArg = fruits.map((item, i) => {
//   console.log(item, i);
//   return "fresh-" + item.toUpperCase();
// });

// console.log(newArg);

// const oldArg = fruits.filter((item, i) => item.includes("n"));

// console.log(oldArg);

// const bank = [223, 54365, 123653, 22, 98700];
// const total = bank.reduce((subttl, item) => {
//   return subttl + item;
// });
// console.log(total);

// challange 1:
// // 1. Create an arry of 50 random numbers range between 1 to 100 programmatically

let Array = [];
for (i = 0; i < 50; i++) {
  rand = Math.ceil(Math.random(100) * 100);

  Array.push(rand);
}
console.log(Array);

// 2. sort the array in descending order.

Array.sort((a, b) => b - a);
console.log(Array);

// //3. get the total value of the array
const Total = Array.reduce((subTtl, item) => {
  return subTtl + item;
});
console.log(Total);

// //4.create array for odd and even number sets out out of the original array.

// let even = [];

// for (item in array) {
// }

const even = Array.filter((item) => item % 2 === 0);
console.log(even);

const odd = Array.filter((item) => item % 2 === 1);

console.log(odd);

// //5. remove the duplicate values from array

// // using filter function
function Duplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(Duplicates(Array));

// // Using forEach functions
function removeDuplicate(array) {
  let x = {};

  array.forEach(function (i) {
    if (!x[i]) {
      x[i] = true;
    }
  });
  return Object.keys(x);
}
console.log(removeDuplicate(Array));

// using map function
function rndup(array) {
  let a = [];

  array.map((x) => (!a.includes(x) ? a.push(x) : ""));
  return a;
}
console.log(rndup(Array));

// challange 2:
// 1. Create an array of 50 unique random numbers range between 1 to 100 programmatically

let Arrey = [];

for (i = 0; i < 50; i++) {
  value = Math.random(100) * 100;

  unique = Math.round(value);

  function repeat(unique) {
    return unique.filter((item, index) => unique.indexOf(item) === index);
  }

  Arrey.push(unique);
}
console.log(Arrey);
