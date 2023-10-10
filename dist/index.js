"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort =
  exports.selectionSort =
  exports.bubbleSort =
  exports.binarySearch =
    void 0;
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function binarySearch(orderArray, needle) {
  // remember this is an order array of numbers
  let low = 0;
  let high = orderArray.length;
  do {
    const medium = Math.floor(low + (high - low) / 2);
    const value = orderArray[medium];
    if (value === needle) {
      return true; // in first instance the medium was the value.
    } else if (value > needle) {
      // the medium is higher than the one we are looking for
      high = medium; // as its lower the maximum point to look changes to the medium
    } else {
      low = medium + 1; // as it's bigger than the medium i should change the lowest to the medium + 1
    }
  } while (low < high); // stop before the end of list
  return false;
}
exports.binarySearch = binarySearch;
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
exports.bubbleSort = bubbleSort;
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
exports.selectionSort = selectionSort;
function quickSort(unorderArray) {
  if (unorderArray.length <= 1) {
    return unorderArray;
  }
  let pivot = unorderArray[0]; //[1,0,9,2,3] 1
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < unorderArray.length; i++) {
    if (unorderArray[i] < pivot) {
      //[1,0,9,2,3] < 1
      leftArr.push(unorderArray[i]); //0
    } else {
      rightArr.push(unorderArray[i]); //[9,2,3]
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
exports.quickSort = quickSort;
//# sourceMappingURL=index.js.map
