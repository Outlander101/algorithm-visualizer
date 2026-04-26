export const ALGORITHMS = [
  { id: "bubble", name: "Bubble Sort" },
  { id: "quick", name: "Quick Sort" },
  { id: "merge", name: "Merge Sort" },
  { id: "dijkstra", name: "Dijkstra's Algorithm" },
] as const;

export type AlgorithmId = (typeof ALGORITHMS)[number]["id"];