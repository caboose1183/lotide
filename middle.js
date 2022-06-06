
// function eqArrays(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function assertArraysEqual(array1, array2) {
//   if (middle(array1)) {
//     console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
//   }
// }

function middle(array) {
  let newArray = [];

  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 !== 0) {
    let index = Math.ceil(array.length / 2)

    newArray.push(array[index - 1]);

    return newArray;
  }

  if (array.length % 2 === 0) {
    let indexLow = (array.length / 2) - 1
    let indexHigh = array.length / 2

    newArray.push(array[indexLow]);
    newArray.push(array[indexHigh]);

    return newArray;
  }
}

module.exports = middle;