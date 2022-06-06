function check(number) {
  let array = number.toString().split('')
  array = array.map(Number)

  let total = 0;

  for (let i in array) {
    //checks if number at index 0 if * 2 is double digits
    if (i === 0) {
      if ((array[i] * 2) > 9) {
        total += ((array[i] * 2) - 9)
      } else {
        total += array[i]
      }
    }
    //doubles the even index numbers, checks for double digits
    if (i % 2 === 0) {
      if ((array[i] * 2) > 9) {
        total += ((array[i] * 2) - 9)
      } else {
        total += array[i] * 2
      }
    }
    //simply adds odd index numbers
    if (i % 2 !== 0) {
      total += array[i]
    }
  }

  if (total % 10 === 0) {
    return true
  } else {
    return false
  }
}


console.log(check(1756234397))