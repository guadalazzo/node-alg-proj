function swap(items, leftIndex, rightIndex) {
  [items[leftIndex], items[rightIndex]] = [items[rightIndex], items[leftIndex]];
}

//Big 0 = O(log n) logaritmic
function binarySearch(orderArray: number[], needle: number): number {
  // remember this is an ordered array of numbers
  let left = 0; // start index of the array
  let right = orderArray.length - 1; // end index of the array
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (orderArray[middle] === needle) return middle; // if in the middle position.
    if (needle < orderArray[middle]) {
      // the number is smaller than the value in the middle
      right = middle - 1; // The position moves back 1
    } else {
      left = middle + 1; // The position moves foward 1
    }
  }
  return -1;
}

//Big 0 = O(n^2) polynormial
function bubbleSort(unorderArray: number[]): number[] {
  // Shallow copy makes it pure:
  const arr = unorderArray.slice();
  for (let i = 0; i < arr.length; i++) {
    // will go till the end of the array
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Check that the current is bigger than the next one,
      // this means we need to swap positions.
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
//Big 0 = O(n^2) polynormial
function selectionSort(unorderArray: number[]): number[] {
  // Shallow copy to make the function pure:
  const arr = unorderArray.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = i; // index of the minimum
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        // the first element that finds that is
        // LOWER than the current minimun value
        minimum = j; //new minimum position
      }
    }
    if (minimum !== i) {
      // if minimum swap
      swap(arr, i, minimum);
    }
  }
  return arr;
}
// Big O = O(n log (n))
// Recursive, divide and conquer.
function quickSort(unorderArray: number[]): number[] {
  if (unorderArray.length <= 1) {
    return unorderArray;
  }
  const pivot = unorderArray[0];
  const leftArr = [];
  const rightArr = [];
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

function sumOfList(list: number[]) {
  const sumOfListAux = list.reduce((accumulator, currentValue) => {
    const sum = accumulator + currentValue;
    return sum;
  }, 0);
  return sumOfListAux;
}

function mean(listOfNumbers: number[]) {
  return listOfNumbers?.length
    ? sumOfList(listOfNumbers) / listOfNumbers.length
    : "No elements in the list";
}

function orderSmallToBigger(list: number[]) {
  return list?.sort((a, b) => a - b);
}

function isEven(number: number) {
  return number % 2 === 0;
}
function median(listOfNumbers) {
  if (!listOfNumbers || !listOfNumbers?.length) {
    return "Not a valid argument";
  }
  // If repited numbers. would be a good idea to use new Set
  const orderedList = orderSmallToBigger(listOfNumbers);
  const middleIndex = Math.floor(orderedList?.length / 2);

  return !isEven(orderedList.length)
    ? orderedList[middleIndex]
    : mean([orderedList[middleIndex - 1], orderedList[middleIndex]]);
}

function mode(list) {
  // one mode per input , returns the first with more numbers.
  // if other repited would show only the first.
  if (!list || !list?.length) {
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
    } else {
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

export {
  binarySearch,
  bubbleSort,
  selectionSort,
  quickSort,
  mean,
  median,
  mode,
  orderSmallToBigger,
};
