# Algorithm Routing Plan

## Goals
- Replace string matching with stable algorithm IDs.
- Render the correct visualizer for each selected algorithm.

## Implementation
- Use `ALGORITHMS` IDs from `src/constants/algorithms.ts`.
- Update `App`, `Sidebar`, and `MainPanel` to pass and consume typed IDs.

## Acceptance Criteria
- Selecting Bubble/Quick/Merge/Dijkstra renders distinct visualizers.
- No substring-based dispatch remains in routing path.
