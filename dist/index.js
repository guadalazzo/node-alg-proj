"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;
exports.quickSort = quickSort;
exports.mean = mean;
exports.median = median;
exports.mode = mode;
exports.orderSmallToBigger = orderSmallToBigger;
function swap(items, leftIndex, rightIndex) {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function binarySearch(orderArray, needle) {
    // remember this is an ordered array of numbers
    let left = 0; // start index of the array
    let right = orderArray.length - 1; // end index of the array
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (orderArray[middle] === needle)
            return middle; // if in the middle position.
        if (needle < orderArray[middle]) { // the number is smaller than the value in the middle
            right = middle - 1; // The position moves back 1 
        }
        else {
            left = middle + 1; // The position moves foward 1 
        }
    }
    return -1;
}
function bubbleSort(unorderArray) {
    for (let i = 0; i < unorderArray.length; i++) {
        // will go till the end of the array
        for (let j = 0; j < unorderArray.length - 1 - i; j++) {
            if (unorderArray[j] > unorderArray[j + 1]) {
                //save and swap
                swap(unorderArray, j, j + 1);
            }
        }
    }
    return unorderArray;
}
function selectionSort(unorderArray) {
    for (let i = 0; i < unorderArray.length; i++) {
        let lowest = i; // index of the lowest
        for (let j = i + 1; j < unorderArray.length; j++) {
            if (unorderArray[j] < unorderArray[lowest]) {
                lowest = j; //new lowest position
            }
        }
        if (lowest !== i) {
            // if lowest swap
            swap(unorderArray, i, lowest);
        }
    }
    return unorderArray;
}
function quickSort(unorderArray) {
    if (unorderArray.length <= 1) {
        return unorderArray;
    }
    let pivot = unorderArray[0]; //
    let leftArr = [];
    let rightArr = [];
    // array starts from position 1 as the one i'm using as a pivot is the 0
    for (let i = 1; i < unorderArray.length; i++) {
        if (unorderArray[i] < pivot) {
            leftArr.push(unorderArray[i]);
        }
        else {
            rightArr.push(unorderArray[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
function sumOfList(list) {
    const sumOfListAux = list.reduce((accumulator, currentValue) => {
        const sum = accumulator + currentValue;
        return sum;
    }, 0);
    return sumOfListAux;
}
function mean(listOfNumbers) {
    return (listOfNumbers === null || listOfNumbers === void 0 ? void 0 : listOfNumbers.length)
        ? sumOfList(listOfNumbers) / listOfNumbers.length
        : "No elements in the list";
}
function orderSmallToBigger(list) {
    return list === null || list === void 0 ? void 0 : list.sort((a, b) => a - b);
}
function isEven(number) {
    return number % 2 === 0;
}
function median(listOfNumbers) {
    if (!listOfNumbers || !(listOfNumbers === null || listOfNumbers === void 0 ? void 0 : listOfNumbers.length)) {
        return "Not a valid argument";
    }
    // If repited numbers. would be a good idea to use new Set
    const orderedList = orderSmallToBigger(listOfNumbers);
    const middleIndex = Math.floor((orderedList === null || orderedList === void 0 ? void 0 : orderedList.length) / 2);
    return !isEven(orderedList.length)
        ? orderedList[middleIndex]
        : mean([orderedList[middleIndex - 1], orderedList[middleIndex]]);
}
function mode(list) {
    // one mode per input , returns the first with more numbers.
    // if other repited would show only the first.
    if (!list || !(list === null || list === void 0 ? void 0 : list.length)) {
        return "Not a valid argument";
    }
    let bestStreak = 1;
    let currentStreak = 1;
    let bestElem = list[0];
    let currentElem = list[0];
    const orderList = orderSmallToBigger(list);
    for (let i = 0; i < orderList.length; i++) {
        const element = orderList[i];
        const prevElem = orderList[i - 1];
        if (element === prevElem) {
            // increment the currentStreak
            currentStreak++;
        }
        else {
            currentStreak = 1;
            currentElem = element;
        }
        if (currentStreak > bestStreak) {
            // beat the best streak till now
            bestStreak = currentStreak;
            bestElem = currentElem;
        }
    }
    return bestElem;
}
//# sourceMappingURL=index.js.map