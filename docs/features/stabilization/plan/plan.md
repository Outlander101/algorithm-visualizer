# Stabilization Plan

## Goals
- Fix startup command so contributors can run the app immediately.
- Fix sorting bar-height control behavior to match UI input.

## Implementation
- Update `package.json` `dev` script to use `react-scripts start`.
- Ensure sorting visualizer regenerates array with selected max bar height.

## Acceptance Criteria
- `npm run dev` starts the app successfully.
- Changing max bar height visibly changes generated bar value range.
