function pigLatinTrans (string) {
  let pigWord = '';

  for (let i = 1; i < string.length; i++) {
    pigWord += string[i];
  } 
  pigWord += string[0];
  pigWord += 'ay';

  return pigWord;
}

for (let j = 2; j < process.argv.length; j++) {
  console.log(pigLatinTrans (process.argv[j]));
}
