import React from "react";
import SortingVisualizer from "../components/SortingVisualizer";
import { mergeSortSteps } from "../algorithms/sortingSteps";

export default function MergeSortVisualizer({ arraySize }: { arraySize: number }) {
  return <SortingVisualizer title="Merge Sort Visualizer" arraySize={arraySize} stepGenerator={mergeSortSteps} />;
}
