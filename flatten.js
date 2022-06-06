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

module.exports = flatten;