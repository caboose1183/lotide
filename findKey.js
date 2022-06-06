const findKey = function (object, callback) {
  let keys = Object.keys (object);

  for (let i of keys) {

    if (callback(object[i])) {
      return i
    }
  }

  return undefined
}

module.exports = findKey;