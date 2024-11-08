const { resolve } = require("dns");

console.log("[polyfill of the filter");

let arr = [2, 4, 5, 6];
let arr2 = arr.filter((val, index, array) => val < 5);

console.log(arr);
console.log(arr2);

Array.prototype.filter = null;

//polyfill of the filter

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const arr3 = arr.myFilter((val, indexedDB, array) => val < 5);
console.log(arr3);
//************************************************//
console.log("polyfill of map");
//always return a new array
//logic for loop

let arrr = [2, 4, 6];

let arrr2 = arrr.map((val) => val * 2);

console.log(arrr);
console.log(arrr2);

Array.prototype.mymap = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};

let arrr4 = arrr.mymap((val, index, array) => val * 4);
console.log(arrr4);

// ****************************************
console.log("polyfill for reduce");
//initial value can be provided
//reduce the value to a particuler element at each step with the result form the previus step
//logic for the loop
//always get a previous value on which next computation to be perfirmed(accumulator))

let arrrr = [2, 4, 6, 7, 8, 9];

const sumArr = arrrr.reduce((prevVal, currentVal) => prevVal + currentVal);

console.log(sumArr);

Array.prototype.reduce = null;

Array.prototype.myReduce = function(callback, intialVal = null) {
    let accumator = intialVal;
    for (let i = 0; i < this.length; i++) {
        accumator = callback(accumator, this[i], i, this);
    }
    return accumator;
};

const sumarr2 = arrrr.myReduce((prevVal, currentVal) => prevVal + currentVal);
console.log(sumarr2);

// ********************************************

console.log("polyfil for promis.all");

//state of promises
//1. fullfilled
//2. rejected,
//3. pending

const promise1 = new Promise((resolve, reject) => {
    resolve("TID success");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("TID failed");
    }, 1000);
});

Promise.all([promise1, promise2])
    .then((result) => console.log(result))
    .catch((e) => console.error(e));

Promise.myAll = (arrOfPromises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        let counter = 0;
        for (let i = 0; i < arrOfPromises.length; i++) {
            arrOfPromises[i].then((data) => {
                result[i] = data;
                counter++;
                if (counter == arrOfPromises.length) resolve(result);
            }).catch((e) => {
                reject(e);
            })
        }
    })
}

Promise.myAll([promise1, promise2])
    .then((result) => console.log(result))
    .catch((e) => console.error(e));

Promise.any([promise1, promise2])
    .then((result) => console.log(result))
    .catch((e) => console.error(e))

Promise.myAny = (arrOfPromises) => {
    return new Promise((resolve, reject) = {

    })
    const result = []
    let Scounter = 0;
    for (let i = 0; i < arrOfPromises.length; i++) {
        Promise.arrOfPromises[i].then((data) => {
            result[i] = data;
            Scounter++;
            if (Scounter == arrOfPromises.length) {
                resolve(result);
            }
        }).catch((e) => {
            if (Scounter == 0) {
                console.error(e)
            }
        })
    }
}
Promise.myAny([promise1, promise2])
    .then((result) => console.log(result))
    .catch((e) => console.error(e))


// *************************************************

console.log("polyfill for promise.race")

const promise3 = 10;

Promise.race([promise3, promise2, promise1])
    .then((data) => console.log(data))
    .catch((e) => console.error(e))

Promise.myrace = (arrOfPromises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arrOfPromises.length; i++) {
            Promise.resolve(arrOfPromises[i]).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e)
            })
        }
    })
}

Promise.myrace([promise3, promise2, promise1])
    .then((data) => console.log(data))
    .catch((e) => console.error(e))