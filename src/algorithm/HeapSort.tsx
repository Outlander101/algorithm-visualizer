import React from "react";
import SortingVisualizer from "../components/SortingVisualizer";
import { heapSortSteps } from "../algorithms/sortingSteps";

export default function HeapSortVisualizer({ arraySize }: { arraySize: number }) {
  return <SortingVisualizer title="Heap Sort" arraySize={arraySize} stepGenerator={heapSortSteps} />;
}
