// Merging 3 arrays
const arr1 = [1, 2];
const arra2 = [3, 4];
const array3 = [5, 6];

let merge = (...arraysToMerge) => {
  return arraysToMerge;
};

console.log(`The combined array is ${merge(arr1, arra2, array3)}`);

// Accept integer numbers and return their sum

let sumOfNumbers = (...numbers) => {
  var sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(`Sum of given values is ${sumOfNumbers(1, 4, 7, 2)}`);
