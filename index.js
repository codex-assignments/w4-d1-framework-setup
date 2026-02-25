"use strict";

console.log("Hello!");

const someNums = [10, 15, 6, 14, 111, 100];

//to iterate over an array, or to access one at a time

//* let i = 0
//* i < 6
//* i ++

for (let i = 0; i < 6; i++) {
  console.log(someNums[i]);
}

someNums.forEach(function (num) {
  console.log(num);
});

const coconut = someNums.map((item) => {
  return "Hello";
  console.log(item);
});

