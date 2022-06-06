
const findKeyByValue = function (object, value) {
  let keys = Object.keys (object);
  let values = Object.values (object);

  for (let i in values) {
    if (values[i] === value) {
      return keys[i]
    }
  }

  return undefined;
}

module.exports = findKeyByValue;