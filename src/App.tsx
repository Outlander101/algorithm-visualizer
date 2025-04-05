import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Controls from './components/Controls';
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  const [algorithm, setAlgorithm] = useState("bubblesort");

  return (
    <div>
    <div className="min-h-screen bg-gray-900 text-white flex items-top justify-center text-5xl font-bold">
      🎉 Tailwind CSS is working!
    </div>
      <Navbar onAlgorithmChange={setAlgorithm} />
      <Controls
        onPlay={() => console.log("play")}
        onPause={() => console.log("Pause")}
        onReset={() => console.log("Reset")}
      />
      <SortingVisualizer algorithm={algorithm} />
    </div>
  );
}

export default App;
