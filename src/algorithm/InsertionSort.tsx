import React from "react";
import SortingVisualizer from "../components/SortingVisualizer";
import { insertionSortSteps } from "../algorithms/sortingSteps";

export default function InsertionSortVisualizer({ arraySize }: { arraySize: number }) {
  return <SortingVisualizer title="Insertion Sort" arraySize={arraySize} stepGenerator={insertionSortSteps} />;
}
