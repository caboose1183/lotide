function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
}

function flatten(nested) {
  let finalArray = [];

  for (let item of nested) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        finalArray.push(item[i]);
      }
    } else {
      finalArray.push(item);
    }
  }

  return finalArray;
}

// console.log (flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]