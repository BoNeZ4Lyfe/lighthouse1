// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed: ' + actual + ' === ' + expected);
  }
  if (actual !== expected) {
    console.log('Assertion Failed: ' + actual + ' !== ' + expected);
  }

};

// TEST CODE
assertEqual("Mahad", "Mahad");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(3, 3);
assertEqual(4, 9);