import React from "react";
import SortingVisualizer from "../components/SortingVisualizer";
import { bubbleSortSteps } from "../algorithms/sortingSteps";

export default function BubbleSortVisualizer({ arraySize }: { arraySize: number }) {
  return <SortingVisualizer title="Bubble Sort Visualizer" arraySize={arraySize} stepGenerator={bubbleSortSteps} />;
}
