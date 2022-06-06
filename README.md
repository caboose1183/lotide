# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @caboose1183/lotide`

**Require it:**

`const _ = require('@caboose1183/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `asserArraysEqual(array1, array2)`: asserts if the 2 arrays given are the equal or not
* `asserEqual(actual, expected)`: asserts if the 2 values given are equal or not
* `assertObjectsEqual(object1, object2)`: asserts if the 2 objects given are equal or not
* `countLetters(string)`: counts the letters in a string and gives back an object showing the letters in the string and the number of times it shows up, accounts for upper and lower case and ignores spaces
* `countOnly(array, item)`: given an array and item to count, will return an object with how many times the item was counted in the array
* `eqArrays(array1, array2)`: given 2 arrays, returns true if the 2 arrays are exactly the same, accounts for nested arrays and exacted index and value
* `eqObjects(object1, object2)`: given 2 objects, returns true if the objects keys and key-value are the same, accounts for nested objects
* `findKey(object, callback)`: given an object and a value or function, it will return the key with that value
* `flatten(array)`: given a nested aray, will return a new array with all values in one array
* `head(array) `: given an array, will return the first value of the array, if empty will return undefined
* `joinList(array)`: given an array, will return the items joined together into a string divided by a , and a space (', ')
* `letterPositions(sentence)`: given a string, will return an object listing which letters show up and at what index position they show up, ignores space
* `map(array, callback)`: given an array and item or function, will return a new array where the callback function affects each element in the array
* `middle(array)`: given an array, will return the middle item of the array, if even it will return the 2 middle item
* `min(numbers)`: given an array, it will return the lowest number within the array
* `reverse(string)`: given a string, it will return a string with the reverse order of the original
* `tail(array)`: given an array, will return a new array with the first item removed, if array is empty or has one item it will return an empty array
* `takeUntil(array, callback)`: given an array and item or function, will return an arary of items until the one specified
* `without(array, itemsToRemove)`: given an array and items you want removed, will return a new array with the items from the original array removed