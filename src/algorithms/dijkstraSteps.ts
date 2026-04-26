import { DijkstraStep, GraphNode } from "../types/visualizer";

const INF = Number.POSITIVE_INFINITY;

function reconstructPath(previous: Record<string, string | null>, target: string) {
  const path: string[] = [];
  let current: string | null = target;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }
  return path;
}

export function dijkstraSteps(graph: GraphNode[], source: string, target: string): DijkstraStep[] {
  const nodeIds = graph.map((node) => node.id);
  const distances: Record<string, number> = Object.fromEntries(nodeIds.map((id) => [id, INF]));
  const previous: Record<string, string | null> = Object.fromEntries(nodeIds.map((id) => [id, null]));
  const visited = new Set<string>();
  const steps: DijkstraStep[] = [];

  distances[source] = 0;

  while (visited.size < graph.length) {
    let currentNode: string | null = null;
    let minDistance = INF;

    for (const nodeId of nodeIds) {
      if (!visited.has(nodeId) && distances[nodeId] < minDistance) {
        minDistance = distances[nodeId];
        currentNode = nodeId;
      }
    }

    if (!currentNode) break;

    visited.add(currentNode);
    const node = graph.find((item) => item.id === currentNode);
    if (!node) continue;

    for (const edge of node.edges) {
      const candidateDistance = distances[currentNode] + edge.weight;
      if (candidateDistance < distances[edge.to]) {
        distances[edge.to] = candidateDistance;
        previous[edge.to] = currentNode;
      }
    }

    steps.push({
      currentNode,
      visited: Array.from(visited),
      distances: { ...distances },
      path: previous[target] || currentNode === target ? reconstructPath(previous, target) : [],
    });
  }

  steps.push({
    currentNode: null,
    visited: Array.from(visited),
    distances: { ...distances },
    path: reconstructPath(previous, target),
  });

  return steps;
}
