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