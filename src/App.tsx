import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import BubbleSortVisualizer from "./algorithm/BubbleSort";

const algorithm = [
  "Bubble Sort",
  "Quick Sort",
  "Merge Sort",
  "Dijkstra's Algorithm",
];

export default function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("");
  const dummyArray = [20, 90, 55, 30, 70, 10, 45];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-lg font-bold">Algorithm Visualizer</div>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 p-4">
          <h2 className="font-semibold mb-4">Algorithm</h2>
          <ul>
            {algorithm.map((algo) => (
              <li
                key={algo}
                className={`cursor-pointer mb-2 ${
                  selectedAlgorithm === algo ? "font-bold text-blue-600" : ""
                }`}
                onClick={() => setSelectedAlgorithm(algo)}
              >
                {algo}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Panel */}
        <div className="flex-1 p-6 flex items-center justify-center text-gray-600 text-lg">
          {selectedAlgorithm ? (
            selectedAlgorithm === "Bubble Sort" ? (
              <BubbleSortVisualizer />
            ) : (
              <p className="text-black text-lg">{selectedAlgorithm} visualization coming soon...</p>
            )
          ) : (
            <p className="text-black text-lg">Select an algorithm</p>
          )}
        </div>
      </div>
    </div>
  );
}