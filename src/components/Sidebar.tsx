export default function Sidebar() {
    return (
        <aside className="2-64 bg-gray-100 p-4 h-full">
            <ul className="space-y-2">
                <li className="hover:text-blue-600 cursor-pointer">Sorting</li>
                <li className="hover:text-blue-600 cursor-pointer">Graph</li>
                <li className="hover:text-blue-600 cursor-pointer">DP</li>
            </ul>
        </aside>
    );
}