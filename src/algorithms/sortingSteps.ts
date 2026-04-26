import { SortOrder, SortStep } from "../types/visualizer";

const shouldSwap = (a: number, b: number, order: SortOrder) => {
  return order === "asc" ? a > b : a < b;
};

const finalSorted = (arr: number[]): SortStep => ({
  array: [...arr],
  current: null,
  next: null,
  sortedIndices: arr.map((_, idx) => idx),
});

export function bubbleSortSteps(input: number[], order: SortOrder): SortStep[] {
  const arr = [...input];
  const steps: SortStep[] = [];
  const sorted = new Set<number>();

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i - 1; j += 1) {
      if (shouldSwap(arr[j], arr[j + 1], order)) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      steps.push({
        array: [...arr],
        current: j,
        next: j + 1,
        sortedIndices: Array.from(sorted),
      });
    }
    sorted.add(arr.length - i - 1);
  }

  steps.push(finalSorted(arr));
  return steps;
}

function partition(
  arr: number[],
  low: number,
  high: number,
  order: SortOrder,
  steps: SortStep[],
): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j += 1) {
    if (!shouldSwap(arr[j], pivot, order)) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    steps.push({
      array: [...arr],
      current: j,
      next: high,
      sortedIndices: [],
    });
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  steps.push({
    array: [...arr],
    current: i + 1,
    next: high,
    sortedIndices: [],
  });
  return i + 1;
}

function quickSortRecursive(
  arr: number[],
  low: number,
  high: number,
  order: SortOrder,
  steps: SortStep[],
) {
  if (low < high) {
    const pi = partition(arr, low, high, order, steps);
    quickSortRecursive(arr, low, pi - 1, order, steps);
    quickSortRecursive(arr, pi + 1, high, order, steps);
  }
}

export function quickSortSteps(input: number[], order: SortOrder): SortStep[] {
  const arr = [...input];
  const steps: SortStep[] = [];

  quickSortRecursive(arr, 0, arr.length - 1, order, steps);
  steps.push(finalSorted(arr));

  return steps;
}

function merge(
  arr: number[],
  left: number,
  mid: number,
  right: number,
  order: SortOrder,
  steps: SortStep[],
) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArr.length && j < rightArr.length) {
    const leftValue = leftArr[i];
    const rightValue = rightArr[j];

    if (!shouldSwap(leftValue, rightValue, order)) {
      arr[k] = leftValue;
      i += 1;
    } else {
      arr[k] = rightValue;
      j += 1;
    }

    steps.push({
      array: [...arr],
      current: k,
      next: k + 1 <= right ? k + 1 : null,
      sortedIndices: [],
    });

    k += 1;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i += 1;
    steps.push({ array: [...arr], current: k, next: null, sortedIndices: [] });
    k += 1;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j += 1;
    steps.push({ array: [...arr], current: k, next: null, sortedIndices: [] });
    k += 1;
  }
}

function mergeSortRecursive(
  arr: number[],
  left: number,
  right: number,
  order: SortOrder,
  steps: SortStep[],
) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  mergeSortRecursive(arr, left, mid, order, steps);
  mergeSortRecursive(arr, mid + 1, right, order, steps);
  merge(arr, left, mid, right, order, steps);
}

export function mergeSortSteps(input: number[], order: SortOrder): SortStep[] {
  const arr = [...input];
  const steps: SortStep[] = [];

  mergeSortRecursive(arr, 0, arr.length - 1, order, steps);
  steps.push(finalSorted(arr));

  return steps;
}
