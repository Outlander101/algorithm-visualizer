import React from "react";

interface SortingVisualizerProps {
	algorithm: string;
}

const SortingVisualizer: React.FC<SortingVisualizerProps> = ({ algorithm }) => {
	return (
		<div>
			<h3>Sorting Algorithm: {algorithm}</h3>	
			<div>Sorting Animation Coming Soon!</div>
		</div>
	);
};

export default SortingVisualizer;
