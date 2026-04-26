# Architecture Cleanup Plan

## Goals
- Separate algorithm logic from UI animation/state handling.
- Reuse one visualizer engine across sorting algorithms.

## Implementation
- Introduce shared types in `src/types/visualizer.ts`.
- Introduce pure step generators in `src/algorithms/*`.
- Add reusable `src/components/SortingVisualizer.tsx`.

## Acceptance Criteria
- Bubble/Quick/Merge visualizers share one control/animation engine.
