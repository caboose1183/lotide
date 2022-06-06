const args = process.argv[2]

const findTotalBottles = function (money) {
  let boughtBottles = money / 2;
  let bottlesFromRecycle = 0;
  let bottlesFromCaps = 0;


  let totalBottles = boughtBottles;
  let currentCaps = boughtBottles;
  let emptyBottles = boughtBottles;

  while (emptyBottles > 1 || currentCaps > 3) {

    while (emptyBottles > 1) {
      emptyBottles -= 1;    //not -2, since you get 1 new bottle which counts to empty

      totalBottles += 1;
      currentCaps += 1;

      bottlesFromRecycle += 1;
    }

    while (currentCaps > 3) {
      currentCaps -= 3;     //not -4, since the new bottle adds 1 cap,

      totalBottles += 1;
      emptyBottles += 1;

      bottlesFromCaps += 1;
    }
  }

  return `TOTAL BOTTLES: ${totalBottles}
  REMAINING BOTTLES: ${emptyBottles}
  REMAINING CAPS: ${currentCaps}
  
  TOTAL EARNED:
  FROM BOTTLE RECYCLING: ${bottlesFromRecycle}
  FROM CAP RECYCLING ${bottlesFromCaps}`
}

console.log (findTotalBottles (args))