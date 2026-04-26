# Architecture Cleanup Patch

## Changed Files
- `src/types/visualizer.ts`
- `src/algorithms/sortingSteps.ts`
- `src/algorithms/dijkstraSteps.ts`
- `src/components/SortingVisualizer.tsx`
- `src/algorithm/BubbleSort.tsx`

## Notes
- Moved algorithm computation to pure, testable modules.
- Converted bubble visualizer into a lightweight wrapper around shared engine.
