import { dijkstraSteps } from "./dijkstraSteps";
import { DIJKSTRA_SOURCE, DIJKSTRA_TARGET, SAMPLE_GRAPH } from "../components/graph";

describe("dijkstra step generator", () => {
  test("finds expected shortest path and target distance", () => {
    const steps = dijkstraSteps(SAMPLE_GRAPH, DIJKSTRA_SOURCE, DIJKSTRA_TARGET);
    const finalStep = steps[steps.length - 1];

    expect(finalStep.path).toEqual(["A", "C", "D", "F"]);
    expect(finalStep.distances.F).toBe(8);
  });
});
