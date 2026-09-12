# AlgoVis: Interactive Algorithm Engine

An immersive, modern, and highly interactive algorithm visualizer. Built with **React.js**, **TypeScript**, **Tailwind CSS**, and **React Leaflet**.

AlgoVis provides a beautiful, fluid glassmorphism interface to explore how fundamental computer science algorithms work under the hood in real-time.

## Features

### City Pathfinding & Graph Routing
Visualize how GPS software finds the shortest path between landmarks using real-world geographic data.
- **Algorithms**: Dijkstra's Algorithm and A* Search.
- **Heuristics**: A* utilizes the mathematical Haversine formula to calculate great-circle distances.
- **Interactive Maps**: Features real interactive city layouts including New York, London, Tokyo, San Francisco, Venice, Paris, and Dubai.
- **Metrics**: Live tracking of execution time (compute speed), nodes visited, and total path cost.
- **Interactive UI**: Hover over map markers to see real locations (e.g. Times Square, Shinjuku Station).

### Sorting Algorithms
Visualize array sorting step-by-step.
- **Algorithms**: Bubble Sort, Quick Sort, and Merge Sort.
- **Controls**: Adjust the array size, sorting speed, and toggle between Ascending/Descending orders.

## Getting Started

### Prerequisites
Make sure you have Node.js installed (v14 or higher recommended).

### Installation
```bash
# Clone the repository
git clone https://github.com/Outlander101/algorithm-visualizer.git
cd algorithm-visualizer

# Install dependencies
npm install

# Start the development server
npm start
```
The app will automatically launch in your browser at `http://localhost:3000`.

## Tech Stack
- **Frontend**: React.js (v19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: React-Leaflet & CartoDB Maps
- **Testing**: React Testing Library + Jest
