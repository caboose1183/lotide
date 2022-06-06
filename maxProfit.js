const array = [45, 24, 35, 31, 40, 36, 11];

const maxProfit = function (list) {
  let biggestProffit = 0;
  let buyPrice = 0;
  let sellPrice = 0;

  array.forEach((num, ind) => {

    for (let i = ind; i < list.length; i++) {

      if ((list[ind + i] - num) > biggestProffit) {
        biggestProffit = (list[ind + i] - num);
        buyPrice = num;
        sellPrice = list[ind + i];
      } 
    }
  })

  return `The biggest profit obtainable is $${biggestProffit} when bought at ${buyPrice} and sold at ${sellPrice}`
}

console.log(maxProfit(array))
//while loop?

// let list = [45, 24, 35, 31, 40, 38, 11];

// let splice = list.splice (0 + 1)

// let min = Math.min.apply (Math, splice)

// console.log (min)