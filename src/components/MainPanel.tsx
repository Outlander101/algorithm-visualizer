import BubbleSortVisualizer from "../algorithm/BubbleSort";
import MergeSortVisualizer from "../algorithm/MergeSort";
import QuickSortVisualizer from "../algorithm/QuickSort";
import { AlgorithmId } from "../constants/algorithms";
import GraphVisualizer from "./GraphVisualizer";

interface MainPanelProps {
  selectedAlgorithm: AlgorithmId | null;
  arraySize: number;
}

export default function MainPanel({ selectedAlgorithm, arraySize }: MainPanelProps) {
  if (!selectedAlgorithm) {
    return (
      <div className="flex flex-1 items-center justify-center p-5 text-lg text-black">
        Select an algorithm
      </div>
    );
  }

  if (selectedAlgorithm === "bubble") return <BubbleSortVisualizer arraySize={arraySize} />;
  if (selectedAlgorithm === "quick") return <QuickSortVisualizer arraySize={arraySize} />;
  if (selectedAlgorithm === "merge") return <MergeSortVisualizer arraySize={arraySize} />;
  if (selectedAlgorithm === "dijkstra") return <GraphVisualizer />;

  return <div className="flex flex-1 items-center justify-center p-5 text-lg text-black">Unsupported algorithm</div>;
}
