# Algorithm Routing Patch

## Changed Files
- `src/constants/algorithms.ts`
- `src/App.tsx`
- `src/components/Sidebar.tsx`
- `src/components/MainPanel.tsx`

## Notes
- Added strongly typed `AlgorithmId`.
- Sidebar now stores selected algorithm by ID.
- Main panel now uses explicit route mapping per algorithm.
