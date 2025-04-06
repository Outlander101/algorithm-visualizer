interface SidebarProps {
    selected: string;
    setSelected: (algo: string) => void;
    algorithms: string[];
    arraySize: number;
    setArraySize: (size: number) => void;
  }
  
  export default function Sidebar({ selected, setSelected, algorithms, arraySize, setArraySize }: SidebarProps) {
    return (
      <div className="w-64 bg-gray-400 p-4">
        <h2 className="font-semibold mb-4">Algorithm</h2>
        <ul>
          {algorithms.map((algo) => (
            <li
              key={algo}
              className={`cursor-pointer mb-2 ${
                selected === algo ? "font-bold text-sky-600" : ""
              }`}
              onClick={() => setSelected(algo)}
            >
              {algo}
            </li>
          ))}
        </ul>
        <label className="block mt-6 mb-1 font-semibold">Array Size: {arraySize}</label>
            <input
            type="range"
            min={5}
            max={100}
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="w-full"
        />
      </div>
    );
  }
  