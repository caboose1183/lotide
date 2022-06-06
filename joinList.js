const joinList = function(array) {
  let list = '';

  for (let i = 0; i < array.length; i++) {
    list += array[i];

    if (i !== array.length - 1) {
      list += ', ';
    }
  }
  return list;
};

module.exports = joinList;