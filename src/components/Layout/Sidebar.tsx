import React from "react";
import { ALGORITHMS } from "../../constants/algorithms";

export default function Sidebar() {
    return (
        <aside className="bg-gray-100 p-5 w-64 border-r border-gray-200">
            <p className="font-medium mb-2">Algorithm</p>
            <ul className="space-y-2 text-sm">
                {ALGORITHMS.map((algo) => (
                    <li key={algo.id} className="hover:under line cursor-pointer">
                        {algo.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
}