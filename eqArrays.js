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

module.exports = eqArrays;