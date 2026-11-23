"use strict";

// 1. Algorythm. Get intersection of 2 arrays
const getRandomArray = (size = 10, from = 0, to = 100) =>
  Array.from({ length: size }, () => from + Math.round(Math.random() * (to - from)));

const arr1 = getRandomArray(50);
const arr2 = getRandomArray(40);

const getIntersectionOfTwoArrays = (arr1, arr2) =>[...new Set(arr1.filter((el) => arr2.includes(el)))];

console.log(getIntersectionOfTwoArrays(arr1, arr2));


// 2. Euqlid algorythm
const getEuqlidNumberLoop = (a, b) => {while (b) [a, b] = [b, a % b]; return a};

const getEuqlidNumberRecursive = (a, b) => function euqlid (x, y) {return (!y ? x : euqlid(y, x % y))}(a, b)

console.log(getEuqlidNumberLoop(88, 16));
console.log(getEuqlidNumberRecursive(16, 88));