function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function binarySearch(orderArray: Number[], needle: Number): boolean {
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

function bubbleSort(unorderArray: number[]): number[] {
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

function selectionSort(unorderArray: number[]): number[] {
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
function quickSort(unorderArray: number[]): number[] {
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
    } else {
      rightArr.push(unorderArray[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
export { binarySearch, bubbleSort, selectionSort, quickSort };
