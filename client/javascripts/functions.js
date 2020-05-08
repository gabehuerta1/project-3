// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let numArr = fillArray(1, 100, 1);

//log the array for inspection
console.log(numArr);

let bitBatBotOrNot = (n) => {
  let result = ""
  if(n % 3 == 0){
    result = `${result}Bit`;
  }
  if(n % 5 == 0){
    result = `${result}Bat`;
  }
  if(n % 7 == 0){
    result = `${result}Bot`;
   //your code goes here
}
  if(n % 7 != 0 && n % 5 != 0 && n % 3 != 0) {
    result = `Not`
  }
return result;
}

console.log(bitBatBotOrNot(105));
/*
let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
  18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,31,
  34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,
  52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,
  70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
  87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105];
*/

//let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,];
let findAllbitBatBotOrNots1 = (arr) => {
  let newArr = arr.map(x => x.toString() + ": " + bitBatBotOrNot(arr[x-1]));
  return newArr;
   //your code goes here
   //use map method
}
console.log(findAllbitBatBotOrNots1(numArr));

//let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,];
let findAllbitBatBotOrNots2 = (arr) => {
  let newArr2 = [];
  for (var i = 0; i < arr.length; i++) {
    let count = newArr2.push(`${arr[i]}: ${bitBatBotOrNot(arr[i])}`);
  }
   //your code goes here
   //use for statement
  return newArr2;
}
console.log(findAllbitBatBotOrNots2(numArr));

//let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,];

let findAllbitBatBotOrNots3 = (arr) => {
  let newArr3 = [];
  for (num of arr) {
    let update = newArr3.push(`${num}: ${bitBatBotOrNot(num)}`);
  }
  return newArr3;
   //your code goes here
   //use for..of statement
}
console.log(findAllbitBatBotOrNots3(numArr));

//let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,];
let findAllbitBatBotOrNots4 = (arr) => {
  let newArr4 = [];
  arr.forEach((num) => {
    let update = newArr4.push(`${num}: ${bitBatBotOrNot(num)}`);
  });
  return newArr4;
   //your code goes here
   //use forEach method
}
console.log(findAllbitBatBotOrNots4(numArr));

//let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,];

let findAllbitBatBotOrNotsXC = (arr) => {
  let newArr5 = [];
  for (num in arr){
    let update = newArr5.push(`${num}: ${bitBatBotOrNot(num)}`);
  }
  return newArr5;
}
console.log(findAllbitBatBotOrNotsXC(numArr));

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
