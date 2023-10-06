function binarySearch(orderArray: Number[], needle: Number): boolean {
  // remember this is an order array of numbers
  let low = 0;
  let high = orderArray.length;
  console.log("needle", needle);
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

function bubbleSort(unorderArray: Number[]) {
  for (let i = 0; i < unorderArray.length; i++) {
    // will go till the end of the array
    for (let j = 0; j < unorderArray.length - 1 - i; j++) {
      if (unorderArray[j] > unorderArray[j + 1]) {
        //save and swap
        const temp = unorderArray[j];
        unorderArray[j] = unorderArray[j + 1];
        unorderArray[j + 1] = temp;
      }
    }
  }

  return unorderArray;
}
export { binarySearch, bubbleSort };
