import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import { ALGORITHMS, AlgorithmId } from "./constants/algorithms";

export default function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmId | null>(null);
  const [arraySize, setArraySize] = useState(25);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          selected={selectedAlgorithm}
          setSelected={setSelectedAlgorithm}
          algorithms={ALGORITHMS}
          arraySize={arraySize}
          setArraySize={setArraySize}
        />
        <MainPanel selectedAlgorithm={selectedAlgorithm} arraySize={arraySize} />
      </div>
    </div>
  );
}