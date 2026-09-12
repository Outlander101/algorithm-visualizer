const fs = require('fs');

const cities = [
  { id: 'new_york', name: 'New York (Manhattan)', center: [40.7580, -73.9855], type: 'grid' },
  { id: 'london', name: 'London', center: [51.5074, -0.1278], type: 'chaotic' },
  { id: 'tokyo', name: 'Tokyo', center: [35.6762, 139.6503], type: 'dense' },
  { id: 'san_francisco', name: 'San Francisco', center: [37.7749, -122.4194], type: 'coastal' },
  { id: 'venice', name: 'Venice', center: [45.4408, 12.3155], type: 'water' },
  { id: 'paris', name: 'Paris', center: [48.8566, 2.3522], type: 'radial' },
  { id: 'dubai', name: 'Dubai', center: [25.2048, 55.2708], type: 'highways' }
];

function dist(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const p1 = lat1 * Math.PI/180;
    const p2 = lat2 * Math.PI/180;
    const dp = (lat2-lat1) * Math.PI/180;
    const dl = (lon2-lon1) * Math.PI/180;
    const a = Math.sin(dp/2) * Math.sin(dp/2) +
              Math.cos(p1) * Math.cos(p2) *
              Math.sin(dl/2) * Math.sin(dl/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const cityData = cities.map(city => {
  const nodes = [];
  const edges = [];
  const numNodes = 30; // 30 nodes per city

  // Generate nodes around center
  for (let i = 0; i < numNodes; i++) {
    const angle = Math.random() * Math.PI * 2;
    // spread nodes within ~2km
    const radius = Math.random() * 0.02; 
    let lat = city.center[0] + Math.cos(angle) * radius;
    let lng = city.center[1] + Math.sin(angle) * radius;
    
    // Customize layout
    if (city.type === 'grid') {
      const gridX = (i % 6) * 0.005;
      const gridY = Math.floor(i / 6) * 0.004;
      lat = city.center[0] + gridY - 0.01;
      lng = city.center[1] + gridX - 0.015;
    } else if (city.type === 'radial') {
      const radLayer = Math.ceil((i+1)/8);
      const radAngle = ((i % 8) / 8) * Math.PI * 2;
      lat = city.center[0] + Math.cos(radAngle) * 0.005 * radLayer;
      lng = city.center[1] + Math.sin(radAngle) * 0.007 * radLayer;
    }

    nodes.push({
      id: `node_${i}`,
      lat,
      lng,
      label: `Point ${i}`
    });
  }

  // Generate edges
  for (let i = 0; i < numNodes; i++) {
    // Connect to 3 closest nodes
    const distances = nodes.map((n, idx) => ({ idx, d: dist(nodes[i].lat, nodes[i].lng, n.lat, n.lng) }))
                           .filter(n => n.idx !== i)
                           .sort((a, b) => a.d - b.d);
                           
    for(let j=0; j<3; j++) {
      if(distances[j]) {
        // Only add edge if it doesn't already exist to avoid exact duplicates
        const from = nodes[i].id;
        const to = nodes[distances[j].idx].id;
        edges.push({ from, to, weight: Math.round(distances[j].d) });
      }
    }
  }

  return {
    id: city.id,
    name: city.name,
    center: city.center,
    zoom: 14,
    nodes,
    edges
  };
});

const content = `// Auto-generated city graphs
export interface CityNode {
  id: string;
  lat: number;
  lng: number;
  label: string;
}

export interface CityEdge {
  from: string;
  to: string;
  weight: number;
}

export interface CityGraph {
  id: string;
  name: string;
  center: [number, number];
  zoom: number;
  nodes: CityNode[];
  edges: CityEdge[];
}

export const CITY_GRAPHS: CityGraph[] = ${JSON.stringify(cityData, null, 2)};
`;

fs.writeFileSync('../src/constants/cityGraphs.ts', content);
console.log("Done generating city graphs!");

