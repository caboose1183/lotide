function reverse (string) {
  let backwardString = '';

  for (let i = string.length - 1; i > -1; i--) {
    backwardString += string[i];
  } 

  return backwardString;
}

for (let j = 2; j < process.argv.length; j++) {
  console.log(reverse (process.argv[j]));
}


module.exports = reverse;