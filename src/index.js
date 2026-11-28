"use strict";

// 1. Algorythm. Get intersection of 2 arrays
const getRandomArray = (size = 10, from = 0, to = 100) =>
  Array.from({ length: size }, () => from + Math.round(Math.random() * (to - from)));

const arr1 = getRandomArray(50);
const arr2 = getRandomArray(40);

function getIntersectionOfTwoArrays(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(set2.has, set2))];
}

console.log(getIntersectionOfTwoArrays(arr1, arr2));


// 2. Euqlid algorythm
const getEuqlidNumberLoop = (a, b) => {while (b) [a, b] = [b, a % b]; return a};

const getEuqlidNumberRecursive = (a, b) => (b ? getEuqlidNumberRecursive(b, a % b) : a);

console.log(getEuqlidNumberLoop(88, 16));
console.log(getEuqlidNumberRecursive(16, 88));