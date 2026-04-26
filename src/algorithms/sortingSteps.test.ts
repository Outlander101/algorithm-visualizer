import { bubbleSortSteps, mergeSortSteps, quickSortSteps } from "./sortingSteps";

const lastArray = (steps: { array: number[] }[]) => steps[steps.length - 1].array;

describe("sorting step generators", () => {
  const input = [7, 2, 9, 1, 4];

  test("bubble sort asc/desc end states are correct", () => {
    expect(lastArray(bubbleSortSteps(input, "asc"))).toEqual([1, 2, 4, 7, 9]);
    expect(lastArray(bubbleSortSteps(input, "desc"))).toEqual([9, 7, 4, 2, 1]);
  });

  test("quick sort asc/desc end states are correct", () => {
    expect(lastArray(quickSortSteps(input, "asc"))).toEqual([1, 2, 4, 7, 9]);
    expect(lastArray(quickSortSteps(input, "desc"))).toEqual([9, 7, 4, 2, 1]);
  });

  test("merge sort asc/desc end states are correct", () => {
    expect(lastArray(mergeSortSteps(input, "asc"))).toEqual([1, 2, 4, 7, 9]);
    expect(lastArray(mergeSortSteps(input, "desc"))).toEqual([9, 7, 4, 2, 1]);
  });
});
