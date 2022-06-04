const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

// const eqObjects = function (object1, object2) {
//   let key1 = Object.keys(object1);
//   let key2 = Object.keys(object2);


//   if (key1.length !== key2.length) {
//     return false
//   }

//   for (let key of key1) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false
//       }


//     } else {
//       if ((object1[key] !== object2[key])) {
//         return false
//       }
//     }
//   }
//   return true
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true


// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false)


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);


  if (key1.length !== key2.length) {
    return false;
  }


  for (let key of key1) {
    let item1 = object1[key];
    let item2 = object2[key];

    let object1Check = Array.isArray (item1) === false && typeof item1 == 'object';
    let object2Check = Array.isArray (item2) === false && typeof item2 == 'object';
    let bothObjectCheck = object1Check && object2Check;

    if (bothObjectCheck === false && item1 !== item2
      ||
      bothObjectCheck === true && !eqObjects (item1, item2)) {
      return false
    }
  }

  return true;
};

const ob = { a: 1, b: 2 };

const obb = { b: 2, a: 1 };

const ob1 = { a: { z: 1 }, b: 2 };

const ob2 = { a: { z: 3 }, b: 2 };

// let a = true
// let b = false
// let c = a && b

// console.log (c)
console.log (eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log (eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false