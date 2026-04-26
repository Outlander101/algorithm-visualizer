import React, { useMemo, useState } from "react";
import { dijkstraSteps } from "../algorithms/dijkstraSteps";
import { DIJKSTRA_SOURCE, DIJKSTRA_TARGET, SAMPLE_GRAPH } from "./graph";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function GraphVisualizer() {
  const [speed, setSpeed] = useState(1);
  const [running, setRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [visited, setVisited] = useState<string[]>([]);
  const [currentNode, setCurrentNode] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const [distances, setDistances] = useState<Record<string, number>>({});

  const steps = useMemo(
    () => dijkstraSteps(SAMPLE_GRAPH, DIJKSTRA_SOURCE, DIJKSTRA_TARGET),
    [],
  );

  const start = async () => {
    setRunning(true);
    setStepIndex(0);
    setVisited([]);
    setCurrentNode(null);
    setPath([]);

    for (let i = 0; i < steps.length; i += 1) {
      const step = steps[i];
      setStepIndex(i);
      setVisited(step.visited);
      setCurrentNode(step.currentNode);
      setPath(step.path);
      setDistances(step.distances);
      await sleep(350 / speed);
    }

    setRunning(false);
  };

  const reset = () => {
    if (running) return;
    setStepIndex(0);
    setVisited([]);
    setCurrentNode(null);
    setPath([]);
    setDistances({});
  };

  return (
    <div className="flex w-full flex-col gap-4 p-6">
      <h1 className="text-3xl font-black">Dijkstra Visualizer</h1>
      <p className="text-sm text-gray-700">
        Source: {DIJKSTRA_SOURCE} | Target: {DIJKSTRA_TARGET} | Step: {stepIndex + 1}/{steps.length}
      </p>

      <div className="relative h-96 w-full rounded border bg-white">
        {SAMPLE_GRAPH.flatMap((node) =>
          node.edges.map((edge) => {
            const toNode = SAMPLE_GRAPH.find((n) => n.id === edge.to);
            if (!toNode) return null;
            const midX = (node.x + toNode.x) / 2;
            const midY = (node.y + toNode.y) / 2;

            return (
              <React.Fragment key={`${node.id}-${edge.to}`}>
                <svg className="absolute left-0 top-0 h-full w-full">
                  <line x1={node.x} y1={node.y} x2={toNode.x} y2={toNode.y} stroke="#94a3b8" strokeWidth="2" />
                </svg>
                <span className="absolute text-xs text-gray-700" style={{ left: midX, top: midY }}>
                  {edge.weight}
                </span>
              </React.Fragment>
            );
          }),
        )}

        {SAMPLE_GRAPH.map((node) => {
          const isVisited = visited.includes(node.id);
          const isCurrent = currentNode === node.id;
          const isPath = path.includes(node.id);
          const distance = distances[node.id];

          let bg = "bg-sky-500";
          if (isPath) bg = "bg-green-600";
          if (isVisited) bg = "bg-yellow-500";
          if (isCurrent) bg = "bg-red-600";

          return (
            <div key={node.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: node.x, top: node.y }}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${bg}`}>
                {node.id}
              </div>
              <div className="mt-1 text-center text-xs text-gray-800">
                {Number.isFinite(distance) ? distance : "inf"}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={start}
          disabled={running}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
        >
          Start
        </button>
        <button
          onClick={reset}
          disabled={running}
          className="rounded bg-gray-700 px-4 py-2 text-white disabled:opacity-60"
        >
          Reset
        </button>
      </div>

      <label className="max-w-sm font-semibold">
        Speed: {speed}x
        <input
          type="range"
          min={1}
          max={8}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="block w-full"
        />
      </label>
    </div>
  );
}
