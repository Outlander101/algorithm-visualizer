export const ALGORITHMS = [
  { id: "bubble", name: "Bubble Sort", requiresArraySize: true },
  { id: "quick", name: "Quick Sort", requiresArraySize: true },
  { id: "merge", name: "Merge Sort", requiresArraySize: true },
  { id: "heap", name: "Heap Sort", requiresArraySize: true },
  { id: "insertion", name: "Insertion Sort", requiresArraySize: true },
  { id: "dijkstra", name: "Dijkstra's Algorithm", requiresArraySize: false },
  { id: "city_dijkstra", name: "City Map Route (Dijkstra/A*)", requiresArraySize: false },
] as const;

export type AlgorithmId = (typeof ALGORITHMS)[number]["id"];