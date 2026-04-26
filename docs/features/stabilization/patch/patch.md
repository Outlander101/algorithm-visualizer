# Stabilization Patch

## Changed Files
- `package.json`
- `src/components/SortingVisualizer.tsx`
- `src/algorithm/BubbleSort.tsx`

## Notes
- Replaced invalid `dev` script with a valid React Scripts command.
- Consolidated bubble controls into shared sorting visualizer that correctly applies max bar height.

## Verification
- Run `npm run dev`.
- Change max bar height and reset array to validate range changes.
