
function tail(array) {
  if (array.length === 1 || array[0] === []) {
    return [];
  } else {
    return array.slice(1);
  }
}

module.exports = tail;