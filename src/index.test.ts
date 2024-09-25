import {
  mean,
  median,
  mode,
  binarySearch,
  orderSmallToBigger,
  bubbleSort,
  selectionSort,
} from "./index";

describe("Mean ", () => {
  test("Mean should be 6", () => {
    expect(mean([2, 3, 9, 10])).toBe(6);
  });
  test("Mean empty array, should be No elements in the list", () => {
    expect(mean([])).toBe("No elements in the list");
  });
});

describe("Median", () => {
  test("Median for [1,2,3,4,5] should be 3", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  test("Median for [1,2,4,5] should be 3", () => {
    expect(median([1, 2, 4, 5])).toBe(3);
  });

  test("Median no arguments, should return no valid arguments", () => {
    expect(median([])).toBe("Not a valid argument");
  });
});

describe("Mode", () => {
  test("Mode [1,2,3,1], should return 1", () => {
    expect(mode([1, 2, 3, 1])).toBe(1);
  });
  test("Mode [2,2,3,1], should return 2", () => {
    expect(mode([2, 2, 3, 1])).toBe(2);
  });
  test("Mode no arguments, should return no valid arguments", () => {
    expect(mode([])).toBe("Not a valid argument");
  });
});

describe("Binary search", () => {
  test("Search for 2 in [1, 2, 3, 1] should be index 2", () => {
    expect(binarySearch(orderSmallToBigger([1, 2, 3, 1]), 2)).toBe(2);
  });
  test("Search for 7 in [1, 2, 3, 1] should be  -1", () => {
    expect(binarySearch(orderSmallToBigger([1, 2, 3, 1]), 7)).toBe(-1);
  });
  test("Search for 9 in [9, 0, 3, 1] should be 3", () => {
    expect(binarySearch(orderSmallToBigger([9, 0, 3, 1]), 9)).toBe(3);
  });
  test("Search for 7 in [1, 2, 3, 1,7,3,2,13,4] should be 7", () => {
    expect(
      binarySearch(orderSmallToBigger([1, 2, 3, 1, 7, 3, 2, 13, 4]), 7)
    ).toBe(7);
  });
});

describe("Bubble sort", () => {
  test("Sort list", () => {
    expect(bubbleSort([-2, 2, 5, 1])).toStrictEqual([-2, 1, 2, 5]);
  });
  test("Sort list 2", () => {
    expect(bubbleSort([-2, -3, 2, 5, 1, 9])).toStrictEqual([
      -3, -2, 1, 2, 5, 9,
    ]);
  });

  describe("Selection sort", () => {
    test("Sort list with selection", () => {
      expect(selectionSort([3, 20, 1, 0, 9, 23, 12])).toStrictEqual([
        0, 1, 3, 9, 12, 20, 23,
      ]);
    });
    test("Sort list with selection", () => {
      expect(selectionSort([9, 8, 7, 6, 1])).toStrictEqual([1, 6, 7, 8, 9]);
    });
  });
});
