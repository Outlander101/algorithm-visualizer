import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Polyline, CircleMarker, useMap, Tooltip, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { CITY_GRAPHS } from "../constants/cityGraphs";
import { runRouting, RoutingStep } from "../algorithms/cityRouting";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

// Helper component to recenter map when city changes
function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function CityPathfinder() {
  const [cityIndex, setCityIndex] = useState(0);
  const [useAStar, setUseAStar] = useState(false);
  const [startNode, setStartNode] = useState<string>("");
  const [endNode, setEndNode] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [computeTimeMs, setComputeTimeMs] = useState(0);
  
  // Selection mode for clicking nodes
  const [selectMode, setSelectMode] = useState<"start" | "end">("start");
  
  // Slider maps 1 (slow) to 100 (fast). Delay = 1000ms / slider
  const [speedVal, setSpeedVal] = useState(50); 
  const speedRef = useRef(20);

  useEffect(() => {
    const delay = Math.max(10, 1010 - (speedVal * 10));
    speedRef.current = delay;
  }, [speedVal]);

  const defaultStepData: RoutingStep = { 
    visited: new Set(), frontier: new Set(), path: new Set(), currentNode: null, metrics: { nodesVisited: 0, currentCost: 0 } 
  };
  const [stepData, setStepData] = useState<RoutingStep>(defaultStepData);

  const abortControllerRef = useRef<AbortController | null>(null);

  const graph = CITY_GRAPHS[cityIndex];

  // Auto-select start and end nodes when city changes
  useEffect(() => {
    if (graph.nodes.length >= 2) {
      setStartNode(graph.nodes[0].id);
      setEndNode(graph.nodes[graph.nodes.length - 1].id);
      setStepData(defaultStepData);
      setComputeTimeMs(0);
    }
    // eslint-disable-next-line
  }, [cityIndex, graph]);
  
  // Clear map if algorithm parameters change
  useEffect(() => {
    if (!isRunning) {
      setStepData(defaultStepData);
      setComputeTimeMs(0);
    }
    // eslint-disable-next-line
  }, [useAStar, startNode, endNode]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const runVisualizer = async () => {
    if (isRunning || !startNode || !endNode || startNode === endNode) return;
    
    setIsRunning(true);
    setStepData(defaultStepData);
    setComputeTimeMs(0);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    let totalCompute = 0;
    let t0 = performance.now();
    const gen = runRouting(graph, startNode, endNode, useAStar);
    let result = gen.next();
    totalCompute += performance.now() - t0;
    setComputeTimeMs(totalCompute);

    while (!result.done) {
      if (signal.aborted) break;
      
      setStepData({ ...result.value });
      
      await new Promise<void>((resolve) => {
        const onAbort = () => {
          clearTimeout(timeout);
          resolve();
        };
        const timeout = setTimeout(() => {
          signal.removeEventListener("abort", onAbort);
          resolve();
        }, speedRef.current);
        
        signal.addEventListener("abort", onAbort, { once: true });
      });
      
      if (signal.aborted) break;
      
      t0 = performance.now();
      result = gen.next();
      totalCompute += performance.now() - t0;
      setComputeTimeMs(totalCompute);
    }
    
    setIsRunning(false);
  };

  const cancelVisualizer = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsRunning(false);
  };
  
  const clearBoard = () => {
    cancelVisualizer();
    setStepData(defaultStepData);
    setComputeTimeMs(0);
  };

  const handleNodeClick = (nodeId: string) => {
    if (isRunning) return;
    if (selectMode === "start") {
      setStartNode(nodeId);
      setSelectMode("end");
    } else {
      setEndNode(nodeId);
      setSelectMode("start");
    }
  };

  const getNodeCoords = (id: string): [number, number] => {
    const n = graph.nodes.find(n => n.id === id);
    return n ? [n.lat, n.lng] : [0, 0];
  };

  // Determine status
  let statusText = "Ready";
  if (isRunning) statusText = "Searching...";
  else if (stepData.path.size > 0) statusText = `Path Found in ${computeTimeMs.toFixed(1)}ms!`;
  else if (stepData.visited.size > 0) statusText = "Stopped / No Path";

  const costDisplay = stepData.metrics.currentCost === Infinity 
    ? "Unreachable" 
    : `${Math.round(stepData.metrics.currentCost)}m`;

  return (
    <div className="relative h-full w-full font-sans overflow-hidden bg-gray-50">
      
      {/* Floating Control Panel */}
      <div className="absolute top-4 left-4 right-4 z-[1000] pointer-events-none flex justify-center">
        <div className="bg-white/85 backdrop-blur-lg shadow-2xl rounded-full px-6 py-3 border border-white/50 pointer-events-auto flex flex-wrap gap-4 items-center transition-all duration-300">
          
          <select 
            value={cityIndex} 
            onChange={(e) => setCityIndex(Number(e.target.value))}
            disabled={isRunning}
            aria-label="Select City"
            className="px-4 py-2 bg-gray-100/80 border-transparent rounded-full text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-50 min-w-[140px]"
          >
            {CITY_GRAPHS.map((c, i) => (
              <option key={c.id} value={i}>{c.name}</option>
            ))}
          </select>

          <select 
            value={useAStar ? "astar" : "dijkstra"} 
            onChange={(e) => setUseAStar(e.target.value === "astar")}
            disabled={isRunning}
            aria-label="Select Algorithm"
            className="px-4 py-2 bg-gray-100/80 border-transparent rounded-full text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-50 min-w-[160px]"
          >
            <option value="dijkstra">Dijkstra's Algorithm</option>
            <option value="astar">A* Search</option>
          </select>
          
          <div className="w-px h-8 bg-gray-300 hidden md:block mx-2"></div>
          
          <div className="text-sm text-gray-600 hidden lg:block font-medium">
            Click map to set: <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">{selectMode === "start" ? "Start Node" : "End Target"}</span>
          </div>

          <div className="w-px h-8 bg-gray-300 hidden md:block mx-2"></div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Speed</span>
            <input 
              type="range" 
              min="1" 
              max="100" 
              value={speedVal} 
              onChange={(e) => setSpeedVal(Number(e.target.value))}
              className="w-24 accent-blue-500 cursor-pointer"
              aria-label="Animation Speed"
            />
          </div>

          <div className="flex gap-2 ml-2">
            {isRunning ? (
              <button 
                onClick={cancelVisualizer} 
                className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-red-500/30 transition-all transform hover:scale-105 active:scale-95"
              >
                Stop
              </button>
            ) : (
              <button 
                onClick={runVisualizer} 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none"
                disabled={startNode === endNode}
              >
                Visualize
              </button>
            )}
            
            <button 
              onClick={clearBoard} 
              disabled={isRunning || stepData.visited.size === 0}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Metrics HUD */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none w-11/12 max-w-4xl">
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-white/60 pointer-events-auto flex flex-col md:flex-row gap-4 items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Status</span>
                <span className={`font-semibold ${isRunning ? 'text-blue-500 animate-pulse' : (stepData.path.size > 0 ? 'text-green-600' : 'text-gray-800')}`}>
                  {statusText}
                </span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Visited</span>
                <span className="font-mono font-bold text-blue-600 text-lg leading-tight">{stepData.metrics.nodesVisited}</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Cost</span>
                <span className="font-mono font-bold text-emerald-600 text-lg leading-tight">{costDisplay}</span>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Compute</span>
                <span className="font-mono font-bold text-purple-600 text-lg leading-tight">{computeTimeMs.toFixed(2)} ms</span>
              </div>
          </div>
          <div className="text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:gap-6 bg-gray-50/80 px-4 py-2 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#2ecc71] rounded-full shadow-sm"></div>
                <span className="truncate max-w-[120px]" title={CITY_GRAPHS[cityIndex].nodes.find(n => n.id === startNode)?.label}>
                  {CITY_GRAPHS[cityIndex].nodes.find(n => n.id === startNode)?.label || "None"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon} alt="marker" className="w-3 h-4 object-contain opacity-80" />
                <span className="truncate max-w-[120px]" title={CITY_GRAPHS[cityIndex].nodes.find(n => n.id === endNode)?.label}>
                  {CITY_GRAPHS[cityIndex].nodes.find(n => n.id === endNode)?.label || "None"}
                </span>
              </div>
          </div>
        </div>
      </div>

      {/* Floating Legend */}
      <div className="absolute top-24 right-4 bg-white/85 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-[1000] text-sm pointer-events-none transition-all duration-300">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">Legend</h4>
        <div className="flex items-center gap-3 mb-2"><div className="w-4 h-4 bg-[#2ecc71] rounded-full shadow-sm ring-2 ring-white"></div> <span className="font-medium text-gray-700">Start Node</span></div>
        <div className="flex items-center gap-3 mb-2">
          <img src={icon} alt="marker" className="w-3 h-4 object-contain opacity-80 ml-0.5" /> <span className="font-medium text-gray-700">End Target</span>
        </div>
        <div className="flex items-center gap-3 mb-2"><div className="w-4 h-4 bg-[#f39c12] rounded-full shadow-sm ring-2 ring-white"></div> <span className="font-medium text-gray-700">Current</span></div>
        <div className="flex items-center gap-3 mb-2"><div className="w-4 h-4 bg-[#95a5a6] rounded-full opacity-70"></div> <span className="font-medium text-gray-700">Visited</span></div>
        <div className="flex items-center gap-3 mb-2"><div className="w-5 h-1.5 bg-[#3498db] rounded-full"></div> <span className="font-medium text-gray-700">Frontier</span></div>
        <div className="flex items-center gap-3"><div className="w-5 h-2 bg-[#27ae60] rounded-full shadow-sm"></div> <span className="font-medium text-gray-700">Path</span></div>
      </div>

      {/* Map View */}
      <div className="absolute inset-0 z-0">
        <MapContainer center={graph.center} zoom={graph.zoom} style={{ height: "100%", width: "100%" }} zoomControl={false}>
          <MapUpdater center={graph.center} zoom={graph.zoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <ZoomControl position="bottomright" />
          
          {/* Edges */}
          {graph.edges.map((edge, i) => {
            const p1 = getNodeCoords(edge.from);
            const p2 = getNodeCoords(edge.to);
            const edgeId = `${edge.from}-${edge.to}`;
            
            let color = "#bdc3c7"; // default light gray
            let weight = 2;
            let opacity = 0.5;

            if (stepData.path.has(edgeId)) {
              color = "#27ae60"; // Success Green
              weight = 6;
              opacity = 1;
            } else if (stepData.frontier.has(edgeId)) {
              color = "#3498db"; // Neutral Blue for searching
              weight = 4;
              opacity = 0.8;
            } else if (stepData.visited.has(edge.from) && stepData.visited.has(edge.to)) {
              color = "#95a5a6"; // Visited gray
              weight = 3;
              opacity = 0.6;
            }

            return (
              <Polyline key={i} positions={[p1, p2]} color={color} weight={weight} opacity={opacity} />
            );
          })}

          {/* Nodes */}
          {graph.nodes.map((node) => {
            if (node.id === endNode) {
               return (
                 <Marker 
                   key={node.id} 
                   position={[node.lat, node.lng]} 
                   icon={DefaultIcon} 
                   eventHandlers={{ click: () => handleNodeClick(node.id) }}
                 >
                   <Tooltip direction="top" offset={[0, -20]} opacity={1} className="!border-none !shadow-xl !rounded-lg !p-2 !bg-white/95 !backdrop-blur-sm">
                     <div className="font-bold text-gray-800">{node.label}</div>
                     <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-1">End Target</div>
                   </Tooltip>
                 </Marker>
               );
            }

            let color = "#bdc3c7";
            let radius = 6;
            
            if (node.id === startNode) { color = "#2ecc71"; radius = 10; }
            else if (node.id === stepData.currentNode) { color = "#f39c12"; radius = 8; }
            else if (stepData.visited.has(node.id)) { color = "#95a5a6"; radius = 5; }

            return (
              <CircleMarker 
                key={node.id} 
                center={[node.lat, node.lng]} 
                radius={radius}
                eventHandlers={{ click: () => handleNodeClick(node.id) }}
                pathOptions={{ color, fillColor: color, fillOpacity: 0.8, weight: 1 }}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={0.9} className="!border-none !shadow-lg !rounded-lg !px-3 !py-1.5 !bg-white/95 !backdrop-blur-sm">
                  <div className="font-semibold text-gray-800">{node.label}</div>
                  {node.id === startNode && <div className="text-xs text-emerald-600 font-bold uppercase tracking-wide mt-1">Start Node</div>}
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
