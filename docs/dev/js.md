---
id: js 
title: Javascript Exercise Reference 
sidebar_label: Javascript 
---

## Data Structures and Manipulation

### Find longest word

Take a string input, calculate the longest word in numerical length, return the result as an integer.

```js
function findLongestWordLength(str) {
  let arr = str.split(" "); // split words into array
  var newarr = []; // declare new array for loop
  for (var i = 0; i < arr.length; i++) {
    var result = arr[i].length; // loop through array and send length to results
    newarr.push(result); // push result into new array for each iteration
  }
  console.log("Length of passed words: " + newarr); // debug step
  return Math.max(...newarr); // use Math.max function to grab highest value in array
}

// test function
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
```

### Title case string

Take a case insensitive string input, UPPER first letter of every word, return the joined and cased string.

```js
function titleCase(str) {
  console.log("input = " + str); // check input
  let lowercase = str.toLowerCase(); // lowercase all
  let arr = lowercase.split(" "); // split sentence to array
  console.log(arr); // check array
  let outputarr = []; // define output array
  for (let i = 0; i < arr.length; i++) {
    // loop through array
    outputarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1)); // push upper first character + slice the remainder starting from index 1 to output array
    console.log(outputarr); // debug loop output
  }
  let stringerz = outputarr.join(" "); // meme another string to join output back to a sentence
  return stringerz;
}

// test function
console.log(titleCase("I'm a little tea pot"));
```

### Splice Splice Baby

Take three inputs: two arrays and one integer. Insert the first array, into the second array, at the index specified by the integer input.

```js
function frankenSplice(arr1, arr2, n) {
  let sliced = arr2.slice(" "); // copy arr2
  console.log(sliced); // debug
  sliced.splice(n, 0, ...arr1); // splice from n index, remove 0, insert the *spread* array arr1
  console.log(sliced); // debug
  console.log("arr1 = " + arr1); // debug
  console.log("arr2 = " + arr2); // debug
  return sliced;
}

// test function
frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

### Chunky Monkey

Take an array input, along with an integer. Break the array into chunks defined by the integer input, return multiple arrays.

```js
function chunkArrayInGroups(arr, size) {
  let count = arr.length / size; // set count limit for loop

  let pusharr = []; // create blank array for output

  for (var i = 0; i < count; i++) {
    let newarr = arr.splice(0, size); // create new array with slice()
    pusharr.push(newarr); // push newarr outside of loop
  }

  return pusharr;
}

// test functions
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // returns [["a", "b"],["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // returns [[0, 1, 2, 3],[4, 5]]
```