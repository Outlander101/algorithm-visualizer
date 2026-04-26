import React, { useEffect, useMemo, useRef, useState } from "react";
import { SortOrder, SortStep } from "../types/visualizer";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const generateRandomArray = (length: number, max: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * max));

interface SortingVisualizerProps {
  title: string;
  arraySize: number;
  stepGenerator: (input: number[], order: SortOrder) => SortStep[];
}

export default function SortingVisualizer({ title, arraySize, stepGenerator }: SortingVisualizerProps) {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  const [next, setNext] = useState<number | null>(null);
  const [sortedIndices, setSortedIndices] = useState<Set<number>>(new Set());
  const [maxValue, setMaxValue] = useState(100);
  const [speed, setSpeed] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const pauseResolverRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setArray(generateRandomArray(arraySize, maxValue));
    setSortedIndices(new Set());
  }, [arraySize, maxValue]);

  const waitIfPaused = () => {
    if (!isPaused) return Promise.resolve();
    return new Promise<void>((resolve) => {
      pauseResolverRef.current = resolve;
    });
  };

  const steps = useMemo(() => stepGenerator(array, sortOrder), [array, sortOrder, stepGenerator]);

  const runVisualization = async () => {
    setIsSorting(true);
    setIsPaused(false);

    for (const step of steps) {
      setArray(step.array);
      setCurrent(step.current);
      setNext(step.next);
      setSortedIndices(new Set(step.sortedIndices));
      await sleep(220 / speed);
      await waitIfPaused();
    }

    setCurrent(null);
    setNext(null);
    setIsSorting(false);
  };

  const pauseOrResume = () => {
    if (!isSorting) return;
    if (isPaused) {
      setIsPaused(false);
      pauseResolverRef.current?.();
      return;
    }
    setIsPaused(true);
  };

  const resetArray = () => {
    if (isSorting) return;
    setArray(generateRandomArray(arraySize, maxValue));
    setSortedIndices(new Set());
    setCurrent(null);
    setNext(null);
  };

  return (
    <div className="flex w-full flex-col gap-5 p-6">
      <h1 className="text-3xl font-black">{title}</h1>

      <div className="flex min-h-72 w-full items-end border p-2">
        {array.map((value, idx) => {
          let barColor = "bg-sky-500";
          if (sortedIndices.has(idx)) barColor = "bg-green-600";
          else if (idx === current || idx === next) barColor = "bg-red-600";

          return (
            <div
              key={`${idx}-${value}`}
              className={`mx-0.5 rounded-t ${barColor}`}
              style={{
                height: `${Math.max(12, Math.floor((value / Math.max(1, maxValue)) * 260))}px`,
                width: `${Math.max(4, Math.floor(900 / Math.max(array.length, 1)))}px`,
              }}
            />
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={runVisualization}
          disabled={isSorting}
          className="rounded bg-green-600 px-4 py-2 text-white disabled:opacity-60"
        >
          Start Sorting
        </button>
        <button
          onClick={pauseOrResume}
          disabled={!isSorting}
          className="rounded bg-yellow-600 px-4 py-2 text-white disabled:opacity-60"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={resetArray}
          disabled={isSorting}
          className="rounded bg-gray-700 px-4 py-2 text-white disabled:opacity-60"
        >
          Reset Array
        </button>
      </div>

      <div className="grid max-w-2xl gap-4">
        <label className="font-semibold">
          Sort Order
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            disabled={isSorting}
            className="ml-3 rounded border px-2 py-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

        <label className="font-semibold">
          Sorting Speed: {speed}x
          <input
            type="range"
            min={1}
            max={8}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="block w-full"
          />
        </label>

        <label className="font-semibold">
          Max Bar Height: {maxValue}
          <input
            type="range"
            min={20}
            max={300}
            step={10}
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            disabled={isSorting}
            className="block w-full"
          />
        </label>
      </div>
    </div>
  );
}
