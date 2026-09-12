import { CityGraph, CityNode, CityEdge } from "../constants/cityGraphs";

export interface RoutingStep {
  visited: Set<string>;
  frontier: Set<string>;
  path: Set<string>;
  currentNode: string | null;
  metrics: {
    nodesVisited: number;
    currentCost: number;
  };
}

// Haversine distance in meters
function heuristic(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // meters
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const dp = ((lat2 - lat1) * Math.PI) / 180;
  const dl = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dp / 2) * Math.sin(dp / 2) +
    Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) * Math.sin(dl / 2);
  const c = 2 * Math.atan2(Math.sqrt(Math.max(0, a)), Math.sqrt(Math.max(0, 1 - a)));
  return R * c;
}

class MinHeap {
  private heap: [string, number, number][] = [];
  
  push(val: [string, number, number]) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  
  pop(): [string, number, number] | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);
    return top;
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }

  private compare(a: [string, number, number], b: [string, number, number]) {
    if (a[1] === b[1]) return b[2] - a[2]; // Tie-break: higher gScore wins
    return a[1] - b[1];
  }
  
  private bubbleUp(idx: number) {
    const el = this.heap[idx];
    while (idx > 0) {
      const pIdx = Math.floor((idx - 1) / 2);
      const p = this.heap[pIdx];
      if (this.compare(el, p) >= 0) break;
      this.heap[idx] = p;
      this.heap[pIdx] = el;
      idx = pIdx;
    }
  }
  
  private sinkDown(idx: number) {
    const len = this.heap.length;
    const el = this.heap[idx];
    while (true) {
      let lIdx = 2 * idx + 1;
      let rIdx = 2 * idx + 2;
      let l, r;
      let swap = null;
      if (lIdx < len) {
        l = this.heap[lIdx];
        if (this.compare(l, el) < 0) swap = lIdx;
      }
      if (rIdx < len) {
        r = this.heap[rIdx];
        if ((swap === null && this.compare(r, el) < 0) || (swap !== null && l && this.compare(r, l) < 0)) {
          swap = rIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = el;
      idx = swap;
    }
  }
}

export function* runRouting(
  graph: CityGraph,
  startId: string,
  endId: string,
  useAStar: boolean
): Generator<RoutingStep, void, unknown> {
  const nodeMap = new Map<string, CityNode>();
  graph.nodes.forEach(n => nodeMap.set(n.id, n));

  const endNode = nodeMap.get(endId);
  if (!endNode) return;

  // Build Deduplicated Adjacency List
  const adjList = new Map<string, CityEdge[]>();
  graph.nodes.forEach(n => adjList.set(n.id, []));
  
  // Track seen edges to prevent double counting if graph has bidirectional pairs
  const seenEdges = new Set<string>();
  
  graph.edges.forEach(e => {
    const key1 = `${e.from}-${e.to}`;
    const key2 = `${e.to}-${e.from}`;
    if (!seenEdges.has(key1) && !seenEdges.has(key2)) {
      seenEdges.add(key1);
      adjList.get(e.from)?.push(e);
      adjList.get(e.to)?.push(e);
    }
  });

  const dist = new Map<string, number>();
  const prev = new Map<string, string>();
  const visited = new Set<string>();
  const frontierEdges = new Set<string>();

  const pq = new MinHeap();
  
  graph.nodes.forEach(n => dist.set(n.id, Infinity));
  dist.set(startId, 0);
  pq.push([startId, 0, 0]);

  let nodesVisited = 0;

  while (!pq.isEmpty()) {
    const top = pq.pop();
    if (!top) break;
    const [currId, _fScore, _gScore] = top;

    if (visited.has(currId)) continue;
    visited.add(currId);
    nodesVisited++;

    yield {
      visited,
      frontier: frontierEdges,
      path: new Set(),
      currentNode: currId,
      metrics: { nodesVisited, currentCost: dist.get(currId)! }
    };

    if (currId === endId) {
      break;
    }

    const currNode = nodeMap.get(currId);
    if (!currNode) continue;

    const edges = adjList.get(currId) || [];
    
    for (const edge of edges) {
      const neighborId = edge.from === currId ? edge.to : edge.from;
      
      const edgeIdFwd = `${currId}-${neighborId}`;
      const edgeIdRev = `${neighborId}-${currId}`;

      if (visited.has(neighborId)) {
        frontierEdges.delete(edgeIdFwd);
        frontierEdges.delete(edgeIdRev);
        continue;
      }

      const alt = dist.get(currId)! + edge.weight;
      if (alt < dist.get(neighborId)!) {
        dist.set(neighborId, alt);
        prev.set(neighborId, currId);
        
        // Add both to match UI instantly
        frontierEdges.add(edgeIdFwd);
        frontierEdges.add(edgeIdRev);

        const neighborNode = nodeMap.get(neighborId)!;
        const h = useAStar ? heuristic(neighborNode.lat, neighborNode.lng, endNode.lat, endNode.lng) : 0;
        
        pq.push([neighborId, alt + h, alt]);
      }
    }
  }

  // Reconstruct path
  const pathNodes: string[] = [];
  let curr = endId;
  while (curr) {
    pathNodes.push(curr);
    curr = prev.get(curr)!;
  }
  pathNodes.reverse();

  const pathEdges = new Set<string>();
  for (let i = 0; i < pathNodes.length - 1; i++) {
    pathEdges.add(`${pathNodes[i]}-${pathNodes[i+1]}`);
    pathEdges.add(`${pathNodes[i+1]}-${pathNodes[i]}`); 
  }

  yield {
    visited,
    frontier: new Set(),
    path: pathEdges,
    currentNode: null,
    metrics: { nodesVisited, currentCost: dist.get(endId)! }
  };
}
