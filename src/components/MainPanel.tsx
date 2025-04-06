import BubbleSortVisualizer from "../algorithm/BubbleSort";

interface MainPanelProps {
  selectedAlgorithm: string;
  arraySize: number;
}

export default function MainPanel({ selectedAlgorithm, arraySize }: MainPanelProps) {
  const isSortingAlgo = selectedAlgorithm.includes("Sort");

  return (
    <div className="flex-1 p-5 flex items-center justify-center text-gray-500 text-lg">
      {selectedAlgorithm ? (
        isSortingAlgo ? (
          <BubbleSortVisualizer arraySize={arraySize} />
        ) : (
          <p className="text-black text-lg">
            {selectedAlgorithm} visualization coming soon...
          </p>
        )
      ) : (
        <p className="text-black text-lg">Select an algorithm</p>
      )}
    </div>
  );
}
