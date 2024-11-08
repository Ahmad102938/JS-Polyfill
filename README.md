# JavaScript Polyfills for Array Methods and Promise Handling

This repository provides custom polyfills for JavaScript's array methods (`filter`, `map`, and `reduce`) and promise handling methods (`Promise.all`, `Promise.any`, and `Promise.race`). These polyfills recreate the functionalities of native JavaScript methods, offering insights into their core logic and utility in environments that may lack these methods.

## Features and Implementations

### Array Method Polyfills
1. **`Array.prototype.myFilter`**:
   - Implements the functionality of the `filter` method, returning a new array containing elements that pass a specified test function.

2. **`Array.prototype.myMap`**:
   - Replicates the `map` method, returning a new array with the results of a provided function applied to each element.

3. **`Array.prototype.myReduce`**:
   - Mimics `reduce`, applying a function to accumulate values in an array into a single output, with an optional initial value for the accumulator.

### Promise Method Polyfills
1. **`Promise.myAll`**:
   - A polyfill for `Promise.all`, which resolves when all promises in an array resolve, or rejects as soon as one promise rejects.

2. **`Promise.myAny`**:
   - Implements `Promise.any`, resolving as soon as one promise resolves or rejecting if all promises fail.

3. **`Promise.myRace`**:
   - A custom version of `Promise.race`, which resolves or rejects as soon as any of the promises settle (whether fulfilled or rejected).

## Usage Examples

### Array and Promise Method Examples
```javascript
let arr = [1, 2, 3, 4];
let filteredArr = arr.myFilter((val) => val > 2);
console.log(filteredArr);

let mappedArr = arr.myMap((val) => val * 2);
console.log(mappedArr);

let reducedVal = arr.myReduce((acc, val) => acc + val, 0);
console.log(reducedVal);

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'Success'));

Promise.myAll([promise1, promise3])
  .then((results) => console.log(results)) 
  .catch((error) => console.log(error));

Promise.myAny([promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

Promise.myRace([promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
