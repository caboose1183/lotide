const takeUntil = function(array, callback) {
  let finalArray = [];

  for (let item of array) {
    if (callback(item)) {
      return finalArray;


    } else {
      finalArray.push (item)
    }
  }
}

module.exports = takeUntil;