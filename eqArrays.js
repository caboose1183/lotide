const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function eqArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i in array1) {
    let item1 = array1[i];
    let item2 = array2[i];

    let array1Check = Array.isArray (item1);
    let array2Check = Array.isArray (item2);
    let bothArrayCheck = array1Check && array2Check;

    if (bothArrayCheck === false && item1 !== item2
      ||
      bothArrayCheck === true && !eqArrays (item1, item2)) {
        return false
      } 
  }

  return true;
}

console.log (eqArrays ( ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]],  ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]]))