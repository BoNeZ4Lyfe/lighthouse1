// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let x = 0; x < arr1.length; x++) {
      if(arr1[x] === arr2[x]) {
        return true;
      }
    }
  }

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
