import React from "react";
import SortingVisualizer from "../components/SortingVisualizer";
import { quickSortSteps } from "../algorithms/sortingSteps";

export default function QuickSortVisualizer({ arraySize }: { arraySize: number }) {
  return <SortingVisualizer title="Quick Sort Visualizer" arraySize={arraySize} stepGenerator={quickSortSteps} />;
}
