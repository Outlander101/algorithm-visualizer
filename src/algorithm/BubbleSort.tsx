import React, { useEffect, useState } from 'react';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateRandomArray = (length: number, max: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
};

export default function BubbleSortVisualizer({ arraySize }: { arraySize: number }) {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  const [next, setNext] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState(100);
  const [speed, setSpeed] = useState(1);
  const [sortOrder, setsortOrder] = useState<'asc' | 'desc'>('asc');


  useEffect(() => {
    setArray(generateRandomArray(arraySize, 100));
  }, [arraySize]);

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setCurrent(j);
        setNext(j + 1);

        const swap =
          sortOrder === 'asc' ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
        if (swap) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
        }

        await sleep(500/speed);
      }
    }

    setCurrent(null);
    setNext(null);
    setIsSorting(false);
  };

  const resetArray = () => {
    if (!isSorting) {
      setArray(generateRandomArray(arraySize, maxValue));
    }
  };

  return (
    <div className="flex flex-col items-left gap-5 p-6">
      <h1 className="text-3xl font-black">Bubble Sort Visualizer</h1>

      <div className="flex items-end h-full w-full max-w-4xl border p-2">
        {array.map((value, idx) => (
          <div
            key={idx}
            className={`mx-0.5 w-5 rounded-t ${
              idx === current || idx === next
                ? 'bg-red-500'
                : 'bg-sky-400'
            }`}
            style={{ height: `${value * 2}px` }}
          ></div>
        ))}
      </div>

      <div className="flex gap-5">
        <button
          onClick={bubbleSort}
          disabled={isSorting}
          className="bg-green-600 text-white px-5 py-4 rounded disabled:opacity-60"
        >
          Start Sorting
        </button>

        <button
          onClick={resetArray}
          disabled={isSorting}
          className="bg-gray-700 text-white px-5 py-4 rounded disabled:opacity-60"
        >
          Reset Array
        </button>
      </div>

      <div className='w-full  max-w-2xl flex flex-col gap-2'>
        <label className="font-black">Sort Order: </label>
        <select
          value={sortOrder}
          onChange={(e) => setsortOrder(e.target.value as 'asc' | 'desc')}
          disabled={isSorting}
          className="border px-3 py-2 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="mt-2">
        <label className="font-black">Sorting Speed: {speed}x</label>
        <input
          type="range"
          min="1"
          max="8"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-2">
      <label className="font-semibold">Max Bar Height: {maxValue}</label>
      <input
        type="range"
        min={10}
        max={300}
        step={10}
        value={maxValue}
        disabled={isSorting}
        onChange={(e) => setMaxValue(Number(e.target.value))}
        className="w-full"
      />
      </div>
    </div>
  );
}
