import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import { ALGORITHMS, AlgorithmId } from "./constants/algorithms";

export default function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmId | null>(null);
  const [arraySize, setArraySize] = useState(25);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu automatically when an algorithm is selected (only if it's not the first load)
  const handleSelectAlgorithm = (algo: AlgorithmId) => {
    setSelectedAlgorithm(algo);
    setIsMenuOpen(false);
  };

  return (
    <div 
      className="relative h-screen w-screen overflow-hidden text-gray-800 font-sans"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Background Glass Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      {/* Menu Hamburger Button */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="absolute top-5 left-5 z-[2000] bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/60 hover:bg-white hover:scale-105 hover:shadow-xl transition-all group"
        aria-label="Open Menu"
      >
        <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>

      {/* Sliding Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[2010] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
      
      {/* Sidebar Content Panel */}
      <div className={`fixed top-0 left-0 h-full w-[320px] bg-white/80 backdrop-blur-2xl shadow-2xl z-[2020] border-r border-white/60 transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors z-50"
        >
           <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <Sidebar
          selected={selectedAlgorithm}
          setSelected={handleSelectAlgorithm}
          algorithms={ALGORITHMS}
          arraySize={arraySize}
          setArraySize={setArraySize}
        />
      </div>

      {/* Main Visualizer Content */}
      <main className="relative z-[10] h-full w-full flex">
        <MainPanel selectedAlgorithm={selectedAlgorithm} arraySize={arraySize} />
      </main>
    </div>
  );
}