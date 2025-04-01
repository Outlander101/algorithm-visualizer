import React from "react";

interface NavbarProps {
    onAlgorithmChange: (algorithm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAlgorithmChange}) => {
    return (
        <nav style={{ padding: "11px", background: "#282c34", color: "white"}}>
            <h2>Algorithm Visualizer</h2>
            <select onChange={(e) => onAlgorithmChange(e.target.value)}>
                <option value="bubblesort">Bubble Sort</option>
                <option value="mergesort">Merge Sort</option>
                <option value="quickSort">Quick Sort</option>
            </select>
        </nav>
    );
};

export default Navbar;