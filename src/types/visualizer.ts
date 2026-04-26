export type SortOrder = "asc" | "desc";

export interface SortStep {
  array: number[];
  current: number | null;
  next: number | null;
  sortedIndices: number[];
}

export interface GraphEdge {
  to: string;
  weight: number;
}

export interface GraphNode {
  id: string;
  x: number;
  y: number;
  edges: GraphEdge[];
}

export interface DijkstraStep {
  currentNode: string | null;
  visited: string[];
  distances: Record<string, number>;
  path: string[];
}
