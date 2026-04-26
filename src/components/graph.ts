import { GraphNode } from "../types/visualizer";

export const SAMPLE_GRAPH: GraphNode[] = [
  { id: "A", x: 70, y: 70, edges: [{ to: "B", weight: 4 }, { to: "C", weight: 2 }] },
  { id: "B", x: 230, y: 50, edges: [{ to: "D", weight: 3 }, { to: "E", weight: 5 }] },
  { id: "C", x: 120, y: 200, edges: [{ to: "D", weight: 4 }, { to: "E", weight: 8 }] },
  { id: "D", x: 300, y: 180, edges: [{ to: "F", weight: 2 }] },
  { id: "E", x: 220, y: 290, edges: [{ to: "F", weight: 1 }] },
  { id: "F", x: 390, y: 230, edges: [] },
];

export const DIJKSTRA_SOURCE = "A";
export const DIJKSTRA_TARGET = "F";
