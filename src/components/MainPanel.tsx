import BubbleSortVisualizer from "../algorithm/BubbleSort";
import MergeSortVisualizer from "../algorithm/MergeSort";
import QuickSortVisualizer from "../algorithm/QuickSort";
import { AlgorithmId } from "../constants/algorithms";
import GraphVisualizer from "./GraphVisualizer";
import CityPathfinder from "./CityPathfinder";

interface MainPanelProps {
  selectedAlgorithm: AlgorithmId | null;
  arraySize: number;
}

export default function MainPanel({ selectedAlgorithm, arraySize }: MainPanelProps) {
  if (!selectedAlgorithm) {
    return (
      <div className="flex flex-1 items-center justify-center p-5">
        <div className="bg-white/60 backdrop-blur-xl px-12 py-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 flex flex-col items-center gap-4">
          <svg className="w-16 h-16 text-blue-500/80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          <h2 className="text-2xl font-bold text-gray-800">Welcome to AlgoVis</h2>
          <p className="text-gray-500 font-medium">Open the menu to select an algorithm to visualize.</p>
        </div>
      </div>
    );
  }

  if (selectedAlgorithm === "bubble") return <BubbleSortVisualizer arraySize={arraySize} />;
  if (selectedAlgorithm === "quick") return <QuickSortVisualizer arraySize={arraySize} />;
  if (selectedAlgorithm === "merge") return <MergeSortVisualizer arraySize={arraySize} />;
  if (selectedAlgorithm === "dijkstra") return <GraphVisualizer />;
  if (selectedAlgorithm === "city_dijkstra") return <CityPathfinder />;

  return <div className="flex flex-1 items-center justify-center p-5 text-lg text-black">Unsupported algorithm</div>;
}
