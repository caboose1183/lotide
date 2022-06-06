function without (source, itemsToRemove) {
  let newArray = [];

  for (let item of source) {
    if (!itemsToRemove.includes (item)) {
      newArray.push (item);
    }
  }
  console.log (newArray);
  return newArray;
}

module.exports = without;