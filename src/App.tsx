import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";

const algorithm = [
  "Bubble Sort",
  "Quick Sort",
  "Merge Sort",
  "Dijkstra's Algorithm",
];

export default function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [arraySize, setArraySize] = useState(25); // default size


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          selected={selectedAlgorithm}
          setSelected={setSelectedAlgorithm}
          algorithms={algorithm}
          arraySize={arraySize}
          setArraySize={setArraySize}
        />
        <MainPanel selectedAlgorithm={selectedAlgorithm} arraySize={arraySize} />
      </div>
    </div>
  );
}