import React from "react";

export default function Sidebar() {
    return (
        <aside className="bg-gray-100 p-5 w-64 border-r border-gray-200">
            <p className="font-medium mb-2">Algorithm</p>
            <ul className="space-y-2 text-sm">
                <li>Bubble Sort</li>
                <li>Quick Sort</li>
                <li>Dijkstra</li>
                {/* more algorithms */}
            </ul>
        </aside>
    );
}