"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("Mean ", () => {
    test("Mean should be 6", () => {
        expect((0, index_1.mean)([2, 3, 9, 10])).toBe(6);
    });
    test("Mean empty array, should be No elements in the list", () => {
        expect((0, index_1.mean)([])).toBe("No elements in the list");
    });
});
describe("Median", () => {
    test("Median for [1,2,3,4,5] should be 3", () => {
        expect((0, index_1.median)([1, 2, 3, 4, 5])).toBe(3);
    });
    test("Median for [1,2,4,5] should be 3", () => {
        expect((0, index_1.median)([1, 2, 4, 5])).toBe(3);
    });
    test("Median no arguments, should return no valid arguments", () => {
        expect((0, index_1.median)([])).toBe("Not a valid argument");
    });
});
describe("Mode", () => {
    test("Mode [1,2,3,1], should return 1", () => {
        expect((0, index_1.mode)([1, 2, 3, 1])).toBe(1);
    });
    test("Mode [2,2,3,1], should return 2", () => {
        expect((0, index_1.mode)([2, 2, 3, 1])).toBe(2);
    });
    test("Mode no arguments, should return no valid arguments", () => {
        expect((0, index_1.mode)([])).toBe("Not a valid argument");
    });
});
describe("Binary search", () => {
    test("Search for 2 in [1, 2, 3, 1] should be index 2", () => {
        expect((0, index_1.binarySearch)((0, index_1.orderSmallToBigger)([1, 2, 3, 1]), 2)).toBe(2);
    });
    test("Search for 7 in [1, 2, 3, 1] should be  -1", () => {
        expect((0, index_1.binarySearch)((0, index_1.orderSmallToBigger)([1, 2, 3, 1]), 7)).toBe(-1);
    });
    test("Search for 9 in [9, 0, 3, 1] should be 3", () => {
        expect((0, index_1.binarySearch)((0, index_1.orderSmallToBigger)([9, 0, 3, 1]), 9)).toBe(3);
    });
    test("Search for 7 in [1, 2, 3, 1,7,3,2,13,4] should be 7", () => {
        expect((0, index_1.binarySearch)((0, index_1.orderSmallToBigger)([1, 2, 3, 1, 7, 3, 2, 13, 4]), 7)).toBe(7);
    });
});
//# sourceMappingURL=index.test.js.map